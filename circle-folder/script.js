let container = document.querySelector('.container');
let close = document.querySelector('.close');
let circleRotate = document.querySelector('.circle');
document.querySelector('.open').addEventListener('click', ()=>{
  container.classList.add('rotate');
  circleRotate.classList.add('circle-rotate')
})
document.querySelector('.close').addEventListener('click', ()=>{
  container.classList.remove('rotate');
  circleRotate.classList.remove('circle-rotate')
})