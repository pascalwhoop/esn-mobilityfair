var Crawler = require('crawler');
var url = require('url');
var fs = require('fs');
var http = require('http');
var request = require('request');


var successCounter  = 0;
var errorCounter = 0;
var errorSections = [];
var totalCounter = 0;

function saveImg(imgUrl, fileName) {
    var extension = imgUrl.match(/.*(\.[a-zA-Z]+)$/)[1];

    try{
        http.get(imgUrl, function (res) {
            var file = fs.createWriteStream('./logos/' + (fileName || res.client._host) + extension);
            res.on('data', function (data) {
                file.write(data);
            }).on('end', function () {
                file.end();
                console.log(fileName + ' downloaded ');
                console.log(++successCounter + '/' + totalCounter);
            });
        });
    }catch(err){
        console.log(++errorCounter + ' Errors');
        errorSections.push(imgUrl);
        //console.log(err);
    }
}


var c = new Crawler({
    maxConnections: 50,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            if (!$) {
                console.log('ERROR: could not find ' + findByUrl(res.request.host));
                done();
                return;
            }

            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log('------------------------');
            var section = findByUrl(res.request.headers.referer ? res.request.headers.referer : res.request.host);
            if(!section) {
                done();
                errorSections.push(res.request.host);
                return;
            };
            console.log('fetching Section : ' + section.code);
            console.log('URL : ' + res.request.href);

            //extract logo

            var search = $("#logo").find('img');
            if (search.length != 0) {
                var imgUrl = search[0].attribs.src;
                console.log(imgUrl);
                saveImg(imgUrl, section.code)
            }else{
                errorSections.push(res.request.host)
            }


        }
        done();
    }
});

var sectionsAPI = 'http://api.esn.org/sections';

var sections;
request.get(sectionsAPI, (err,res, body) =>{
    sections = JSON.parse(body);

    var urls = getUrls(sections);
    totalCounter = urls.length;

    c.queue(urls);
});

c.on('drain',function(){
    // For example, release a connection to database.
    console.log('FAILED ON: ');
    console.log(errorSections);

});

function getUrls(sections){
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    var urls = sections.map(item =>{
        var url = item.url;
        var regex = new RegExp(expression);
        var match = url.match(regex);
        if(match) {
            url = match[0];
            //remove www
            var wwwI = url.indexOf('www.');
            if(wwwI != -1){
                url = url.slice(wwwI+4)
            }
            //remove https
            var httpsI = url.indexOf('https://');
            if(httpsI != -1){
                url = url.slice(httpsI+8)
            }
            //remove https
            var httpI = url.indexOf('http://');
            if(httpI != -1){
                url = url.slice(httpI+7)
            }

            return 'http://' + url;
        }
    });
    return urls.filter(url => url!=null)
}

var findByUrl = function (host) {
    return sections.filter(section => section.url.indexOf(host) != -1)[0];
};