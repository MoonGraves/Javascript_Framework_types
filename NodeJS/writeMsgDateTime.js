// current timestamp in milliseconds
let date_ob = new Date();

// tän hetkisen pv.kk.vvvv ja aika
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

//Input folder new title, name and blah blah
//
const prompt = require('prompt-sync')();
const theTitle = prompt('Title is: ');
const userName = prompt('Your name: ');

// Kuin tavallinen user input , kuin käyattäjä syöttäisi jotakin sinne
const thesms = prompt('Input the message:');
console.log(`saved the messages \n`);


//päiväys asentaminen erikseen joko pv.kk tai kk.pv (maku asia) ja aika
console.log("Tänään on: " + date + "-" + month + "-" + year + " \n" + hours + ":" + minutes + ":" + seconds);

// tulostettaan tunti:minuutteina
//console.log(hours + ":" + minutes);

//Tiedoston kirjoittaminen fs.write ja let jotakin sinne lähettettään tiedoston sisään
var fs = require('fs');

//let theName = 'Otsikko';
//let otherData = 'TestOtherData';
let dateS = year + "-" + month + "-" + date;

fs.writeFile('data.txt',
   `Name: ${theTitle} \nOtherData: ${userName} \nPäivistys: ${dateS} \nMessage: ${thesms} `
,()=>{
  console.log('Successfully saved');
})

/*OUTPUT & data.txt & console/cmd::

Title is: perjantai
Your name: oppilas
Input the message:tänäää on perjantai
saved the messages 

Tänään on: 22-01-2021 
13:41:16
Hint: hit control+c anytime to enter REPL.
Successfully saved
*/

