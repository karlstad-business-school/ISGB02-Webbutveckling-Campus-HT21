'use strict';
/*
//Lösningsförlsag uppgift 1
document.writeln('<h1>Lottorad</h1>');

for(let i = 1; i <= 35 ; i++) {
    document.write(i + ' ');
    if(i%5==0) {
        document.write('<br>');
    }
}
*/

//Lösning uppg 2
/*
document.writeln('<h1>Lottorad</h1>');
document.writeln('<table>');
document.writeln('<tr>');
for (let i = 1; i <= 35; i++) {
    document.write('<td>' + i + '</td>');
    if (i % 5 == 0) {
        document.write('</tr><tr>');
    }
}
document.writeln('</tr></table>');
*/
var slump1 = Math.floor(Math.random() * (+35 - +1)) + +1;
var slump2 = Math.floor(Math.random() * (+35 - +1)) + +1;
var slump3 = Math.floor(Math.random() * (+35 - +1)) + +1;

//console.log(slump1 + ',' + slump2 + ',' + slump3);

document.writeln('<h1>Lottorad</h1>');
document.writeln('<table>');
document.writeln('<tr>');
for (let i = 1; i <= 35; i++) {
    if(i===slump1 || i===slump2 || i===slump3) {
        document.write('<td style="background-color: green;">' + i + '</td>');
    }
    else {
        document.write('<td>' + i + '</td>');
    }
    
    if (i % 5 == 0) {
        document.write('</tr><tr>');
    }
}
document.writeln('</tr></table>');