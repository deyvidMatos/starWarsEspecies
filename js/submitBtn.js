import {toDisplay} from './renderDisplay.js'

export function submitBtn(){
    var specieInput = document.querySelector('#specieInput').value

    toDisplay(specieInput)
}