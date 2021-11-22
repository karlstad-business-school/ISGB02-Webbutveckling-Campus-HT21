'use strict';

document.writeln('<h1>Lottorad</h1>');

for(let i=1; i<36; i++) {
    document.write(i+' ');
    if(i%5===0) {
        document.write('<br>');
    }
}