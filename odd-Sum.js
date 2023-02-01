
// function getSumArray(numbers){
//         sum = 0;
//         for( let i = 0; i<numbers.length; i++){
//                 const index = i;
//                 const element = numbers[index];
//                  sum = sum + element;
//                 console.log(index, element, sum);

//         }
// }

// const myNumbers = [ 22, 42, 54, 65, 46, 53, 88];
// getSumArray(myNumbers);

function sumArray(numbers){
        let sum = 0;
        for(let i = 0; i < numbers.length; i++){
                const index = i;
                const element = numbers[index];
                sum = sum + element;
                 console.log(index, element, sum);
        }
       return sum;
}


// function getOddNumbers(numbers){
//         const oddnumber = [];
//         for(let i = 0 ; i < numbers.length; i++){
//                 const index = i;
//                 const element = numbers[index];
//                 if(element % 2 == 1){

//                 console.log( index, element,);
//                 oddnumber.push(element);
//                 }
//         }
//         return oddnumber;
// }


// const myNumbers = [12, 44, 55, 655, 67, 74, 86, 78, 85];
//   const oddnumber = getOddNumbers(myNumbers);
//   console.log(oddnumber);

// function nameArray(name){
//         // const new = [];
//         for(let i = 0; i < name.length; i++){
//                 const index = i;
//                 const element = name[i];
        
//                 console.log(index, element);
//         }
        
// }


// const names = ['adil', 'mafiya khan','abu sayed','arif jha', 'nasir uddin'];
//  nameArray(names);

function oddNumber(number){
        const oddNumbers = [];
        for(let i = 0; i < number.length; i++){
                const index = i;
                const element = number[index];
                if(element % 2 ==1){
                    console.log(index, element);
                oddNumbers.push(element);


                }

        }
        return oddNumbers;

}


const numbers = [22, 44, 53, 56, 67, 99,55 ,33, 32];
 const oddNumbers = oddNumber(numbers);
  console.log(oddNumbers);

  const oddNumberSum = sumArray(oddNumbers);
  console.log( 'sum odd number:', oddNumberSum);