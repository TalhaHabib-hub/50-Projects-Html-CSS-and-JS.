const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let image = document.querySelector('body');
let allCircles = document.querySelectorAll('.circle');
let progress = document.querySelector('.progress');
console.log(allCircles);

let count=1;
next.addEventListener('click',()=>{
   count++;

   if (count>allCircles.length){
    count=allCircles.length;
   }
   callMe();
 
})
prev.addEventListener('click',()=>{
   count--;

   if (count<1){
    count=1;
   }
  callMe();
})


function callMe(){
    changeImage();
    allCircles.forEach((circle, idx)=>{
      if(idx < count){
        circle.classList.add('active') 
      }
      else{
        circle.classList.remove('active')
      }
    })

   const actives = document.querySelectorAll('.active');
   
   progress.style.width = (actives.length -1)/(allCircles.length - 1)* 100 +'%' ;

    if (count==1){
      prev.disabled = true;
    }else if(count==allCircles.length){
      next.disabled = true;
    }else{
      prev.disabled = false;
      next.disabled = false;
    }
   }

function changeImage(){
if (count==1){
    image.style.backgroundImage = "url('pictures/image1.jpg')";
}else if(count==2){
    image.style.backgroundImage = "url('pictures/image2.jpg')"; 
}else if(count==3){
    image.style.backgroundImage = "url('pictures/image3.jpg')"; 
}else {
    image.style.backgroundImage = "url('pictures/image4.jpg')"; 
}
}