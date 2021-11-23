'use strict';

//Lyssnare för att vänta in att hela sidan laddas ned innan några script körs
window.addEventListener('load', function() {
    //Lägg till lyssnare på knappen med id addStamp
    document.querySelector('#addStamp').addEventListener('click', addNewStamp);
});

function addNewStamp() {
    //Validera...
    try {
        if (document.querySelector('#name').value.length < 5) { throw 'Frimärket måste ha ett namn!'; }     
        if (document.querySelector('#age').value === '' || isNaN(document.querySelector('#age').value)) {
            throw 'Frimärket måste ha en ålder!';
        }
        if (document.querySelector('#age').value > 200 || document.querySelector('#age').value < 0) {
            throw 'Felaktig ålder!';
        }
        if (document.querySelector('#value').value === '' || isNaN(document.querySelector('#value').value)) {
            throw 'Frimärket måste ha ett värde!';
        }
        if (document.querySelector('#value').value < 0) {
            throw 'Frimärket har ett felaktigt värde!';
        }
        if (document.querySelector('#historia').value.length<20) { throw 'Du måste skriva en utförligare historia'; }
        //Om vi kommer hit är valideringen ok.

        //Lägg till nytt frimärke i elementer med id "samling".
        var html; //Sträng för att innehålla html som skall läggas till i samling
        
        //Skapa upp html för frimärke
        html = '<section><h3>' + document.querySelector('#name').value + '</h3>';
        html += '<b>Frimärkets ålder:</b> ' + document.querySelector('#age').value + '<br>';
        html += '<b>Frimärkets värde:</b> ' + document.querySelector('#value').value + ' kronor<br>';
        html += '<b>Frimärkets färg:</b> ' + document.querySelector('#color').value + '<br>';
        html += '<b>Frimärkets historia:</b>';
        html += '<p>' + document.querySelector('#historia').value + '</p>';
        html += '<button type="button">Ta bort frimärke</button>';
        html += '</section>';

        //Lägg till html-sträng först i element med id samling (Glöm ej lägga till den html som redan finns i elementet)
        document.querySelector('#samling').innerHTML = html + document.querySelector('#samling').innerHTML;

        //VG ********************************************************
        //Hämta alla section i div med id=samling
        var sects = document.querySelectorAll('div#samling>section');

        //Ta bort alla gamla lyssnare på sections (om det finns några)
        // (För att inte samma section ska få flera lyssnare på sig)
        for (let i = 0; i < sects.length; i++) {
            sects[i].removeEventListener('click', removeElement);
        }

        //lägg lyssnare på alla sections
        for(let i=0; i<sects.length;i++) {
            sects[i].addEventListener('click', removeElement);
        }
        //  ********************************************************



        //Töm alla fält i formuläret
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#value').value = '';
        document.querySelector('#historia').value = '';
        
        //Ta bort eventuellt felmeddelande
        document.querySelector('#error').innerHTML = '';
    }
    catch(ex) {
        document.querySelector('#error').innerHTML = ex;
    }

}

//VG-funktion
/************************************************************************ */
function removeElement(event) {   
    console.log(event.target.tagName);
    //Kolla om det var knappen i section som klickades
    if(event.target.tagName === 'BUTTON') {
        //Ta bort elementet med lyssnare (currentTarget)
        event.currentTarget.remove();
    }   
}
/************************************************************************ */
