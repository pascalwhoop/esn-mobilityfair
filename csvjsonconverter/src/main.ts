import * as fs from 'fs';
import * as csv from 'csvtojson';


run();

function run(){

    let csvContent = fs.readFileSync('mapping.csv', 'utf8');
    let json = {};
    csv({noheader:true})
        .fromString(csvContent)
        .on('csv',(csvRow)=>{ // this func will be called 3 times
            json[csvRow[0]] = csvRow[1];
        })
        .on('done',()=>{
            fs.writeFileSync('DE.json', JSON.stringify(json), {encoding: 'utf8'});
            console.log('written file DE.json');
        })

}



