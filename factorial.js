
//  function factorial(number){
//         let result = 1;
//         for(let i = 1; i <=number; i++){
//                 multi = result * i;
//         }
//         return result;
//  }

//  const result = factorial(7);
//  console.log(result);

// function factorial(number){
//         let result = 1;
//         for(let i= 1; i<=number; i++){
//                result = result *i;
//                 // console.log(i);
//         }
//         return result;
// }
// const number = 6;
// const fact = factorial(number);
// console.log('factorial of:',number, fact);

// function print(a, b, c){
//         return a+2;
//         return a*b;
//         return b*c+a;
//       }
//       console.log(print(1,2,3));

// function fatotorial(number){
//         let result = 1;
//         for(let i = number; i >= 1; i--){
//                 result = result * i;
//                 console.log(i);
//         }return result;

// }
// const fact = 5;
// const multi = fatotorial(fact);
// console.log('multipli of:', multi);


function factotial(number){
        let num = number;
        let result = 1;
        while(num >= 1){
                num--;
                result = result *num;
                 
        
        }
        return result;
}
const fact = 7;
const multi = factotial(fact);
console.log('factorial is :', multi);