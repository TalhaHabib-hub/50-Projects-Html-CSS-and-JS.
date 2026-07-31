let left = document.querySelector('.left');
let right = document.querySelector('.right')
let whole = document.querySelector('.whole');
left.addEventListener('mouseenter',()=>{
  whole.classList.add('leftMouse');
})
left.addEventListener('mouseleave',()=>{
  whole.classList.remove('leftMouse');
})
right.addEventListener('mouseenter',()=>{
 whole.classList.add('rightMouse');
})
right.addEventListener('mouseleave',()=>{
 whole.classList.remove('rightMouse');
})
