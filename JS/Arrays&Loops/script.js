let array = [5,6];
console.log(array);
array.unshift(4);
console.log(array);
array.push(7);
console.log(array);

function finder(arr,num){
  for(let position=0 ; position<arr.length;position++){
    if (position==num){
      console.log(`at index ${num} I have ${arr[num]}`)
      break;
    }
  }
}

let arrayKhan=[3,2,5,2,5,8,3,9];
finder(arrayKhan,5);
let arrayKaBhai = arrayKhan.slice(0,arrayKhan.length);
console.log(arrayKhan);
console.log(arrayKaBhai);

let primeCount = 0;
let i = 2;
let isprime;
while(primeCount<15){
   isPrime='Haan';
 
  for( let j=2; j<i; j++){
    if (i%j==0 && i>2){
       isPrime='Nahi';
       break;
    }
   }

    if(isPrime=='Haan'){
    primeCount++;
    console.log(`${i} is a prime number`)
    }
  

  i++;
}

for (let i = 10; i>0; i--){
  console.log(i);
}

let arrayUstaz = [2,1,-32,86,-32,-3,12,34,67,-3];
for (let i=0;i<arrayUstaz.length;i++){
  if(arrayUstaz[i]>-1){
    console.log(arrayUstaz[i]);
  }
}

let sirAdvice = ['Talha','will','be','a','best','worshiper','and','slave','of',"Allah"];
let sentence='';
for(let i=0; i<sirAdvice.length;i++){
   sentence+=sirAdvice[i]+' ';
}
console.log(sentence);