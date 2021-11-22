'use strict';

window.addEventListener('load', documentLoaded);

function documentLoaded(){
    document.querySelector('form').addEventListener('submit', validate);
}

function validate(evt) {
    let myForm = evt.currentTarget;

    try {
        if(myForm.fornamn.value.length < 5) {
            throw('För kort förnamn...');
        }

        if (document.querySelector('#txtenamn').value!=='Andersson') {
            throw('Fel efternamn...');
        }

        if(document.querySelector('#skostorlek').value != 45) {
            throw("Du har valt fel storlek!");
        }

        if(isNaN(myForm.tal.value) || myForm.tal.value.length===0) {
            throw('Du har inte angett ett giltigt tal...');
        }

        if(myForm.tal.value>103 || myForm.tal.value<100) {
            throw('Felatkigt tal...')
        }

        //Data skickas till server....
    }
    catch(ex) {
        alert(ex);
        evt.preventDefault();
    }
    
    
}
