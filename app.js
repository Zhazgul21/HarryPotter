import {data as persons} from './data.js';

const main = document.querySelector('.main_cards')
const wrap = document.createElement('div')
wrap.className = 'wrapper'
main.append(wrap)

function createCard(obj){
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const img = document.createElement('img')
    img.src = obj.image
    img.className = 'image'

    const textWrap = document.createElement('div')
    textWrap.className = 'card_text_wrap'

    const name = document.createElement('h2')
    name.innerText = obj.name

    const actor = document.createElement('p')
    actor.innerText = `Actor: ${obj.actor}`

    const gender = document.createElement('p')
    gender.innerText = `Gender: ${obj.gender}`

    const house = document.createElement('p')
    house.innerText = `House: ${obj.house}`

    const wand = document.createElement('p')
    wand.innerText = `Wand core: ${obj.wand.core}`

    const alive = document.createElement('p')
    obj.alive ? alive.innerText = `Alive: yes`: alive.innerText = `Alive: no`
    
   
    wrap.append(cardDiv)
    textWrap.append (name, actor, gender, house, wand, alive)
    cardDiv.append(img, textWrap)
}

persons.forEach((person) => {
    createCard(person)
})

const input = document.querySelector('#name')
const element = document.querySelectorAll('.card')
const filtered = Object.values(element)
console.dir(element)

 input.addEventListener('input', (event) => {
    filtered.filter (card => {
         if(card.children[1].children[0].innerHTML.toLowerCase().includes(event.target.value.toLowerCase())){
    console.log(card)
    card.style.display = 'flex'
} else {
    card.style.display = 'none'
}
     })

 })

 const select = document.querySelector('#school')
 select.addEventListener('change', (event) => {
    filtered.filter (card => {
         if(card.children[1].children[3].innerHTML.toLowerCase().includes(event.target.value.toLowerCase())){
    console.log(card)
    card.style.display = 'flex'
} else {
    card.style.display = 'none'
}
     })

 })