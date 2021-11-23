'use strict';

window.addEventListener('load', prepareColorPicker);

function prepareColorPicker() {

    //Sök ut alla "field"
    let fields = document.querySelectorAll('.field');

    //Loopa igen alla "field"
    for(let i=0; i<fields.length;i++) {
        let input = fields[i].querySelector('input');
        let span = fields[i].querySelector('span');

        input.value = Math.floor(Math.random()*256); // 0 till 255
        span.textContent = input.value;

        fields[i].addEventListener('input', handleValueChange);

    }

    updateBackground();
}

function handleValueChange(evt) {
    console.log('input har inträffat,,,,');
    let currentField = evt.currentTarget;

    let input = currentField.querySelector('input');
    let span = currentField.querySelector('span');

    span.textContent = input.value;

    updateBackground();

}

function updateBackground() {
    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;

    let newValue = 'rgb(' + red + ',' + green + ',' + blue + ');';

    console.log(newValue);
    document.querySelector('body').setAttribute('style','background-color:' + newValue);


}
