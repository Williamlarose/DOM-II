// Your code goes here

let Title = document.querySelector('title')
let Nav = document.querySelector('nav')
let header = document.querySelector('header')
let Text = document.querySelector('.text-content:nth-of-type(1)')
let Text2 = document.querySelector('.text-content:nth-of-type(2)')
let button = document.querySelector('.btn:nth-of-type(1)')
let button2 = document.querySelector('.btn:nth-of-type(2)')
let destination = document.querySelector('.destination:nth-of-type(1)')
let destination1 = document.querySelector('.destination:nth-of-type(2)')


Nav.addEventListener('click', function (event) {
    Nav.style.textDecoration = 'underline';
})
Nav.addEventListener('dblclick', function (event) {
    Nav.style.textDecoration = 'none';
})

button.addEventListener(`mouseover`, function (event) {
    button.style.color = ('red')
})
button.addEventListener(`mouseout`, function (event) {
    button.style.color = ('white')
})
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        Text.style.border = 'solid'
    };
})
window.addEventListener('load', function (event) {
    alert('Welcome')
})
document.addEventListener('scroll', function (event) {
    this.body.style.border = 'solid'
})
document.addEventListener('drag', function (event) {
    Text.style.color = ('blue')
})
document.addEventListener('dragend', function (event) {
    const color = Math.random() * 5 - 1
    console.log("Look" + color)
    if (color > 1) {
        Text.style.color = ('teal')
    }
    else if (color < 5) {
        Text.style.color = ('darkgoldenrod')
    }

    else {
        Text.style.color = ('maroon')
    }
})
document.addEventListener('mousedown', function (event) {
    const color = Math.random() * 5 - 1

    if (color > 1) {
        this.body.style.backgroundColor = ('yellow')
    }
    else if (color < 5) {
        this.body.style.backgroundColor = ('red')
    }

    else {
        this.body.style.backgroundColor = ('green')
    }
    this.body.style.transition = '11s'

})
