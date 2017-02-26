let fs = require('fs');
let request = require('request');


function main() {
    let inDir = fs.readdirSync('in/');
    for (let file of inDir) {
        convertAndSafeFile(file)
    }

    //convertAndSafeFile(inDir[0]);
}


///help functions
function saveFile(file, code) {
    fs.createReadStream('in/'+file).pipe(fs.createWriteStream('out/'+code+'.svg'));
}
function getCode(countryName, cb) {
    request('https://restcountries.eu/rest/v2/name/' + countryName, function(err, res, body){
        try{
            body = JSON.parse(body);
            if(!err && body && body[0]){
                cb(null, body[0].alpha2Code);
            }
            else(cb({err: err, body: body, country: countryName}))
        }
        catch(err){
            cb({err: err})
        }

    })
}
function convertAndSafeFile(file) {
    let country = file.split('.')[0];
    country = country.replace(/-/g, '%20');
    getCode(country, function (err, code) {
        if(!err){
            saveFile(file, code)
        }else{
            console.log(JSON.stringify(err));
        }

    })
}

// trigger main
main();