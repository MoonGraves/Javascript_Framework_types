// current timestamp in milliseconds
let date_ob = new Date();

// tän hetkisen pv.kk.vvvv ja aika
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

//päiväys asentaminen erikseen joko pv.kk tai kk.pv (maku asia) ja aika
console.log("Tänään on: " + date + "-" + month + "-" + year + " \n" + hours + ":" + minutes + ":" + seconds);

// tulostettaan tunti:minuutteina
//console.log(hours + ":" + minutes);

//Tiedoston kirjoittaminen fs.write ja let jotakin sinne lähettettään tiedoston sisään
var fs = require('fs');

let name = 'TestName';
let otherData = 'TestOtherData';
let dateS = year + "-" + month + "-" + date;

fs.writeFile('data.txt',
   `Name: ${name}\nOtherData: ${otherData} \nPäivistys: ${dateS}`
,()=>{
  console.log('Successfully saved');
})

/*OUTPUT & data.txt & console/cmd::

Tänään on: 21-01-2021 
15:36:19
Successfully saved

data.txt file:::::::::::
Name: TestName
OtherData: TestOtherData 
Päiväis: 2021-01-21
*/
