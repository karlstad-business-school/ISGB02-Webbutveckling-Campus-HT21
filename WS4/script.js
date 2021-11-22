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