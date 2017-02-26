var fs = require('fs');

var sec = fs.readFileSync('in/sections.json');
var swu = fs.readFileSync('in/sectionsWithUnis.json');

sec = JSON.parse(sec);
swu = JSON.parse(swu);
console.log('before ' + sec.length);



function runMerge(sec, swu) {
    for (var i = 0; i < sec.length; i++) {
        var withoutU = sec[i];
        for (var j = 0; j < swu.length; j++) {
            var withU = swu[j];
            //console.log(withoutU.code + '  ' + withU._id);
            if (withoutU.code == withU._id) {
                sec[i] = mergeIntoSection(withU, withoutU);
            }
        }
    }
    //done with all of them, lets write them out
    console.log('after ' + sec.length);
    fs.writeFileSync('out/sections.json', JSON.stringify(sec))

}
runMerge(sec, swu);



function mergeIntoSection(withU, withoutU) {

    withoutU.university = withU['University name'];
    if (!withoutU.university) {
        console.log("ERROR\n");
        console.log(JSON.stringify(withU, null, 2));
        delete withoutU.university;
    }
    return withoutU;
    

}