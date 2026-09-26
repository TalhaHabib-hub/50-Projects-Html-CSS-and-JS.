 let screen = document.querySelector('#text').value="Calculate";
 let screenText ="";
document.querySelector('.C').onclick=function(){
 screenText="";
 document.querySelector('#text').value = screenText;
}
document.querySelector('.one').onclick=function(){
 screenText+='1';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.two').onclick=function(){
 screenText+='2';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.three').onclick=function(){
 screenText+='3';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.four').onclick=function(){
 screenText+='4';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.five').onclick=function(){
 screenText+='5';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.six').onclick=function(){
 screenText+='6';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.seven').onclick=function(){
 screenText+='7';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.eight').onclick=function(){
 screenText+='8';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.nine').onclick=function(){
 screenText+='9';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.zero').onclick=function(){
 screenText+='0';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.plus').onclick=function(){
 screenText+='+';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.minus').onclick=function(){
 screenText+='-';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.divide').onclick=function(){
 screenText+='/';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.multiply').onclick=function(){
 screenText+='*';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.dot').onclick=function(){
 screenText+='.';
 document.querySelector('#text').value=screenText;
}

document.querySelector('.equal').onclick=function(){
screenText = eval(screenText);
 document.querySelector('#text').value=screenText;
}

