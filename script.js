let mouse = document.querySelector('.mouse')

window.onmousemove = (event) => {

    let x = event.clientX
    let y = event.clientY
    mouse.style.top = `${y}px`
    mouse.style.left = `${x}px`
}


let one = document.querySelector('.item_one')
let two = document.querySelector('.item_two')
let three = document.querySelector('.item_three')
let mouse_move = document.querySelector('.mouse')
let one_active = document.querySelector('one_active')
let two_active = document.querySelector('two_active')
let three_active = document.querySelector('three_active')

console.log(mouse);
one.onmousemove = () => {
    mouse_move.classList.remove('mouse')
    mouse_move.classList.remove('two_active')
    mouse_move.classList.remove('three_active')
    mouse_move.classList.add('one_active')
}

two.onmousemove = () => {
    mouse_move.classList.remove('mouse')
    mouse_move.classList.remove('one_active')
    mouse_move.classList.remove('three_active')

    mouse_move.classList.add('two_active')
}


three.onmousemove = () => {
    mouse_move.classList.remove('mouse')
    mouse_move.classList.remove('one_active')
    mouse_move.classList.remove('two_active')
    mouse_move.classList.add('three_active')
}