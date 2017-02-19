var fs = require('fs');

var vals = JSON.parse(fs.readFileSync('DE.json', 'utf8'));

var csv = 'English,German\n';
for(var elem in vals){
    csv += '"' + elem + '","' + vals[elem]+ '"\n';
}
console.log(csv)
fs.writeFileSync('de.csv', csv);
