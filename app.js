import {data as person} from './data.js';

const main = document.querySelector('.main_cards')
const wrap = document.createElement('div')
wrap.className = 'wrapper'
main.append(wrap)

function createCard(obj){
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const img = document.createElement('img')
    img.src = obj.image;

    const name = document.createElement('h2')
    name.textContent = obj.name;
    console.log(name)

    const actor = document.createElement('p')
    actor.innerText = `Actor: ${obj.actor}`;

    wrap.append(cardDiv)
    cardDiv.append(img, name, actor)
}
createCard(person)