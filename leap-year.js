

function isLeapYear(year){
        const remaider = year % 4;
        if( remaider == 0){
                return true;
        }
        
          return false
        
}

  const myLeap = isLeapYear(6389);
  console.log('my year is leap?', myLeap);
  const herLep = isLeapYear(84596);
  console.log('leap year?', herLep);

