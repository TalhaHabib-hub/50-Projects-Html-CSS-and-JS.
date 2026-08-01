let voices = ['applause','boo','gasp','tada','victory','wrong'];

voices.forEach(voice=>{
  let btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText=voice;
  document.querySelector('.buttons').appendChild(btn);
  btn.addEventListener('click',()=>{
    stopSongs();
    document.getElementById(voice).play()

  })
})
function stopSongs(){
  voices.forEach(voice=>{
    document.getElementById(voice).pause()
    document.getElementById(voice).currentTime =0;

  })
}