let each = document.querySelectorAll('.each');
let main = document.querySelector('.main');
let focus = document.querySelector('.focused');

let body = document.querySelector('body');



each.forEach(eachone => {
  eachone.addEventListener('click', ()=>{
    removeFocusedFromAll();
    eachone.classList.add('focused');
    body.style.backgroundImage=eachone.style.backgroundImage;
  })
});



function removeFocusedFromAll(){
  each.forEach(eachone=>{
    eachone.classList.remove('focused');
  })
}