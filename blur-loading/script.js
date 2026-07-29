let percent = document.querySelector('.loader');
let image = document.querySelector('.image');
let count= 0;

let int = setInterval(blur, 30);
function blur(){
count++;
  percent.innerText = `${count}%`
  if(count==100){
    clearInterval(int);
  }
  percent.style.opacity = blurController(count);
  image.style.filter = `blur(${blurerimage(count)}px)`;
}

const blurController = (count)=>{
  return (count * - 1 / 100) + 1;
}
const blurerimage = (count)=>{
  return (count * - 30 / 100) + 30;
}