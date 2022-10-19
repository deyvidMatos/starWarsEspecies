import {fetchSpecies} from './swapi.js'

export const toDisplay = async(Species) => {

    var name = document.querySelector('#name');
    var lang = document.querySelector('#language');
    var lifeTime = document.querySelector('#life');
    var height = document.querySelector('#height');
    var eyeColor = document.querySelector('#eyeColor');
    var hairColor = document.querySelector('#hairColor');
    var skin = document.querySelector('#skin');
    var classe = document.querySelector('#classification');

    name.innerHTML = ' carregando...';
    lang.innerHTML = ' carregando...';
    lifeTime.innerHTML = ' carregando...';
    height.innerHTML = ' carregando...';
    eyeColor.innerHTML = ' carregando...';
    hairColor.innerHTML = ' carregando...';
    skin.innerHTML = ' carregando...';
    classe.innerHTML = ' carregando...';

    const data = await fetchSpecies(Species);
    

    name.innerHTML = data.name;
    lang.innerHTML = data.language;
    lifeTime.innerHTML = data.average_lifespan + ' Anos';
    height.innerHTML = data.average_height + ' cm';
    eyeColor.innerHTML = data.eye_colors;
    hairColor.innerHTML = data.hair_colors;
    skin.innerHTML = data.skin_colors;
    classe.innerHTML = data.classification;
}