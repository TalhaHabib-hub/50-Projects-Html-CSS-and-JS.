let multiply = (num1, num2)=> num1*num2;
let total = multiply(5,8);

let funcu=()=>console.log('hello Jani');

let runTwice = (func)=>{
  func();func();
}
runTwice(funcu);

let body = document.querySelector('body');
body.innerHTML=`<button id='butt'>Click Me</button>`;

let button = document.querySelector('#butt');
button.addEventListener('click',()=>{ setTimeout(()=>button.style.transform='scale(2)',2000)});


let numbers=[3,5,2,4,2,3];
let sum=0;
numbers.forEach((each)=>{
    sum+=each;
})


let square = numbers.map((num)=>{
  return num*num
})