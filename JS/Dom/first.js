
    // alert('I am inside script tag') 
    // watch the result in the console
    console.log('Hi I am Talha Habib');
    console.log("My Father name is Muhammad Habib Khan");
    console.warn("Talha be brave no problem what you missed you will ace hieve the most");
    console.error('There is something error in the path so be Talha');
    // console.clear()
    let welcomeMessag = "hello friends"
    console.log(welcomeMessag)


    let object1= {
        name:"Talha",
        Passion:"Best",
    };
    let object2 = object1;

    console.log(object1);
    object1['Passion']='purpose';
    console.log(object2);

    let a = 8;
    let b = a;
    a =5;
    console.log(b);
    
    let {name,Passion}= object2;
    console.log(name);
    console.log(Passion);
    console.log(name,Passion);

    console.log(typeof object2);
    let strKhan= JSON.stringify(object2);
    console.log(typeof strKhan);
    console.log(strKhan);
  
    console.log(JSON.parse(strKhan));
    localStorage.setItem('Father Name','Muhammd Habib Khan')
    localStorage.setItem('Name','Talha Habib')
    
    console.log(localStorage.getItem("Name2"));
    // localStorage.removeItem('Name')
    // Local storage 
    let myDate = new Date();
    console.log(myDate);
    // console.log(myDate.getTime); #wrong
    console.log(myDate.getTime());
    // console.log(myDate.getFullYear);
    console.log(`Full year: ${myDate.getFullYear()}`);
    console.log(`Day Number: ${myDate.getDay()}`);
    console.log(`Hour: ${myDate.getHours()}`);
    console.log(`Minutes: ${myDate.getMinutes()}`);
    console.log(`Milliseconds: ${myDate.getMilliseconds()}`);
    console.log(document.location);
    // document.location; 
    console.log(document.domain);
    // document.title="Talha Habib";
    // console.log(document.href);

    // classlist wrong, classList correct.
//    document.querySelector('.do').classlist.add("YOur");
   document.querySelector('.do').classList.add("YOur");
   document.querySelector('.do').classList.add("Their");
   document.querySelector('.do').classList.add("nofear"); // Talha I used space betweem no and fear and that throwed error and because of that one  error all the correct code didn't worked
//    console.log(document.querySelector('.aik').classlist); 
    // undefined why
    let button = document.createElement('Button');
    // console.log(button);
    button.innerText='Button';
    document.querySelector('.divZan').appendChild(button);
   

    let para = document.createElement('p');
    document.querySelector('h1').appendChild(para);
    
let counting = localStorage.getItem('count')||0;
let machine = document.querySelector('.count');
document.querySelector('.count').onclick=function(){
 counting++;
 machine.innerText=counting;
 if (counting%2 == 0){
    machine.style.backgroundColor="blue";
    localStorage.setItem('count',counting);
 }else{
    machine.style.backgroundColor="green";
    localStorage.setItem('count',counting);
 }

}
 document.querySelector('.zero').onclick=function(){
    counting=0;
    machine.innerText = 0;
    localStorage.setItem('count',0);
}

let greeterKhan = document.querySelector('.greeter');
let date = new Date();
let hour = date.getHours();
// let hour =8;

function withName(name){
if (hour>=5 && hour<12){
    greeterKhan.innerText='Good Morning '+ name;
}else if (hour>=12 && hour<17){
    greeterKhan.innerText='Good Afternoon '+ name;
}else{
    greeterKhan.innerText='Good Evening '+ name;
}
}
withName('Talha');
console.log(hour);
console.log(typeof hour);