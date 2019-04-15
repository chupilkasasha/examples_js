
var i = 0;
while(i < 100){
  i++;
  if(i%3 === 0 && i%5 === 0){
    console.log(i +' Fizz+Buzz');
     }else if(i%3 === 0){
       console.log(i + ' Fizz-3')
     }else if(i%5 === 0){
       console.log(i + ' Buzz-5');
     }
  };

for(var i = 0; i < 100; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log(i +' Fizz+Buzz');
     }else if(i%3 === 0){
       console.log(i + ' Fizz')
     }else if(i%5 === 0){
       console.log(i + ' Buzz');
     }
}
