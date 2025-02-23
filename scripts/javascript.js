
let enterDoor = document.querySelector('.js-enter');

let bunnyOne = document.querySelector('.js-bunny1');

 let textBubble = document.querySelector('.js-textbubble');

 let otherBubble = document.querySelector('.js-textbubble2')

 let bunnyTwo = document.querySelector('.js-bunny2');


 bunnyTwo.addEventListener('mouseover', () => {
    otherBubble.removeAttribute('hidden');
 })

 bunnyTwo.addEventListener('mouseout', () => {
    otherBubble.setAttribute('hidden', true)
 })


bunnyOne.addEventListener('mouseover', () => {
    textBubble.removeAttribute('hidden');
})

bunnyOne.addEventListener('mouseout', () => {
    textBubble.setAttribute('hidden', true);
})

bunnyOne.addEventListener('click', () => {
    history.back();
})


enterDoor.addEventListener('mouseover', () => {
    enterDoor.src = "/image/door2.png"
})

enterDoor.addEventListener('mouseout', () => {
    enterDoor.src = "/image/door1.png"
})

enterDoor.addEventListener('click', () => {
    location.href = 'home.html';
})