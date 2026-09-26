let num = 0;
const h4 = document.querySelector('h4')
h4.innerText='your bag has 0 items';

document.querySelector('.one').onclick= function(){
  num++;
  h4.innerText=`your bag has ${num} items`
}

document.querySelector('.two').onclick=
function(){
  num--;
  h4.innerText=`your bag has ${num} items`
}
document.querySelector('.three').onclick=
function(){
  num+=2;
  h4.innerText=`your bag has ${num} items`
}
