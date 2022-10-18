import {toDisplay} from './renderDisplay.js'

toDisplay(1)

import {submitBtn} from './submitBtn.js'

document.querySelector('form').addEventListener('submit', (ev) =>{
    ev.preventDefault()
    submitBtn(ev)
})

document.getElementById('random').addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * (37 - 1) - 1)

    toDisplay(randomNumber)
})


