let decrease = document.querySelector('#decrease')
let increase = document.querySelector('#increase')
let showCounter = document.querySelector('.counter')

let i = 0


increase.addEventListener('click', increaseValue)
decrease.addEventListener('click', decreaseValue)

function increaseValue() {
    i++
    showCounter.innerText = i
}

function decreaseValue() {
    i--
    showCounter.innerText = i
}