const btnDecrease = document.querySelector('#btn-decrease')
const btnIncrease = document.querySelector('#btn-increase')
const showCounter = document.querySelector('.counter')


let counter = 0
let increaseInterval
let decreaseInterval

btnDecrease.onclick = () => {
    clearInterval(increaseInterval)
    btnDecrease.classList.add('active-red')
    btnIncrease.classList.remove('active-green')

    decreaseInterval = setInterval(()=>{
        counter --
        showCounter.innerText = counter
    }, 100)
}

btnIncrease.onclick = ()=>{
    clearInterval(decreaseInterval)
    btnDecrease.classList.remove('active-red')
    btnIncrease.classList.add('active-green')

    increaseInterval = setInterval(()=>{

        counter ++
        showCounter.innerText = counter
    }, 100)
}