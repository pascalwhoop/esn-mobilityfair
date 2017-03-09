var fs = require('fs');

var main = fs.readFileSync('in/master.json');
var side = fs.readFileSync('in/updated.json');

main = JSON.parse(main);
side = JSON.parse(side);
console.log("total: " + main.length);
console.log("before " + main.filter(i => i.university).length);




function runMerge(main, side) {
    for (var i = 0; i < main.length; i++) {
        var withoutU = main[i];
        for (var j = 0; j < side.length; j++) {
            var withU = side[j];
            //console.log(withoutU.code + '  ' + withU._id);
            if (withoutU.code == withU.code) {

                main[i] = withU;
            }
        }
    }
    //done with all of them, lets write them out
    console.log("after " + main.filter(i => i.university).length);
    fs.writeFileSync('out/sections.json', JSON.stringify(main))

}
runMerge(main, side);