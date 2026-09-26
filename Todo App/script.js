let list =[

];

function addToList(){
 let textTaker = document.querySelector('#text');
 let dateTaker = document.querySelector('#tarikh');
 list.unshift({title: textTaker.value,date: dateTaker.value});
 textTaker.value='';
 display();
}

function display(){
  let displayer=document.querySelector('.displaying');
  let link=''; 
  for (let i=0; i<list.length; i++){
    let {title,date}=list[i];
    link+=`
    
    <span>${title}</span>
    <span>${date}</span>
    <button onclick="list.splice(${i},1); display()";>Delete</button>
    `;
  }
  displayer.innerHTML=link;
}

   