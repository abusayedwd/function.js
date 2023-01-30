// const inch = 124;
// const myFeet = inch / 12;
 
// console.log(myFeet);


// const dadaInch = 167;
// const dadaFeet = dadaInch/12;
// console.log(dadaFeet);

function inchToFeet(inch){
        const feet = inch / 12;
        return feet;
}

const dadaInch = 132;
 const dadaFeet = inchToFeet(dadaInch)
 console.log('dada feet', dadaFeet);


 const dadiInch = 108;
 const dadiFeet = inchToFeet(dadiInch)
 console.log('dadi feet holo:',dadiFeet);

 function kmToMiles(km){
        const mile = km / 1.60;
        return mile;
 }

 const far = 144;
 const mileAll = kmToMiles(far)
 console.log('all far', mileAll);

 function mileToKm(mile){
        const km = mile * 1.6;
        return km;
 }

 const allMile = 80;
 const allKm = mileToKm(allMile)
 console.log(allKm);
