let options =['Ball','Bat','Wicket']
let compScore=document.querySelector('.comp');
let youScore= document.querySelector('.you');
let final=document.querySelector('.finalResult');
let rand=0;
let playedGame=document.querySelector('.played');
let lossedGame=document.querySelector('.lossed');
let wonGame=document.querySelector('.won');
let tiedGame=document.querySelector('.tied');


let played=0;
let won=0;
let loss=0;
let tied=0;
let regot=JSON.parse(localStorage.getItem('Score'));
console.log(regot);


played=regot['Played'];
won=regot['won'];
loss=regot['loss'];
tied=regot['Tied'];

playedGame.value=played;
wonGame.value=won;
lossedGame.value=loss;
tiedGame.value=tied;

let reset=document.querySelector('.reset').onclick=function(){
played=0;
won=0;
loss=0;
tied=0;

playedGame.value=played;
lossedGame.value=loss;
wonGame.value=won;
tiedGame.value=tied;
}


function result(c, y){
  if(c==y){
      final.innerText='Match Tied!';
      final.style.color='#0d436d';

      tied++;
  }else if(c=='Bat' && y =='Ball'){
    final.innerText='Computer Won!';
    final.style.color='red';
    loss++;
  }else if(c=='Wicket' && y=='Ball'){
    final.innerText='You won!';
    final.style.color='#06370b';
    won++;
  }else if(c=='Bat' && y =='Wicket'){
    final.innerText='You Won!';
    final.style.color='#06370b';
    won++;
  }else if(c=='Ball' && y =='Wicket'){
    final.innerText='Computer Won!';
    final.style.color='red';
    loss++;
  }else if(c=='Wicket' && y=='Bat'){
    final.innerText='Computer Won!';
    final.style.color='red';
    loss++;
  }else if(c=='Ball' && y=='Bat'){
    final.innerText='You Won!';
    final.style.color='#06370b';
    won++;
  }
}

document.querySelector('.ball').onclick=function(){
  youScore.innerText='You : Ball';
  rand=Math.floor(Math.random()*3)
  compScore.innerText = `Computer : ${options[rand]}`;
  result(options[rand],'Ball');
  played++;
  playedGame.value=played;
  lossedGame.value=loss;
  wonGame.value=won;
  tiedGame.value=tied;
  localStorage.setItem('Score',JSON.stringify({'Played': played, 'won': won, 'loss':loss, 'Tied': tied}));

}

document.querySelector('.bat').onclick=function(){
  youScore.innerText='You : Bat';
  rand=Math.floor(Math.random()*3)
  compScore.innerText = `Computer : ${options[rand]}`;
  result(options[rand],'Bat');
  played++;
  playedGame.value=played;
  lossedGame.value=loss;
  wonGame.value=won;
  tiedGame.value=tied;
   localStorage.setItem('Score',JSON.stringify({'Played': played, 'won': won, 'loss':loss, 'Tied': tied}));
}

document.querySelector('.wicket').onclick=function(){
  youScore.innerText='You : Wicket';
  rand=Math.floor(Math.random()*3)
  compScore.innerText = `Computer : ${options[rand]}`;
  result(options[rand],'Wicket');
  played++;
  playedGame.value=played;
  lossedGame.value=loss;
  wonGame.value=won;
  tiedGame.value=tied;
 localStorage.setItem('Score',JSON.stringify({'Played': played, 'won': won, 'loss':loss, 'Tied': tied}));
}



