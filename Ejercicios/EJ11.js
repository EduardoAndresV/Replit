//Factorial

const factorial = (n) =>{
   if (n===0) return 1;

   let factorial=1;
   for (let i = 1; i<=n;i++){
     factorial = factorial * i;

   }
   return factorial
 }


for(let i=0; i<=20; i++){
  console.log(factorial(i))
}
