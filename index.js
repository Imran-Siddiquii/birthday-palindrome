
function reverseString(str){
 var reverseChar=str.split('').reverse().join('');
 return reverseChar;
}

function palindrome(str){
    var reverse=reverseString(str)
    return str===reverse
}
   
    // if(str===isPalindrom){
    //     console.log("palindrome");
    // }else{
    //     console.log("not palindrom");
    // }
// palindrome('madam');
//convert Date to string
function convertDateToString(date){
    const dateToString={days:'',months:'',years:''}
    if(date.days < 10){
        dateToString.days='0'+ date.days;
    }else{
        dateToString.days=date.days.toString();
    }
    if(date.months<10){
        dateToString.months= '0' + date.months;
    }else{
        dateToString.months= date.months.toString();
    }
    dateToString.years=date.years.toString()
    return dateToString;
}
//date in all format
function dateInAllFormat(date) {
    var dateStr=convertDateToString(date);
    var ddmmyyyy=dateStr.days + dateStr.months + dateStr.years;
    var mmddyyyy=dateStr.months + dateStr.days + dateStr.years;
    var yyyymmdd=dateStr.years + dateStr.months + dateStr.days;

    var ddmmyy =dateStr.days + dateStr.months + dateStr.years.slice(-2)
    var mmddyy=dateStr.months + dateStr.days + dateStr.years.slice(-2)
    var yymmdd=dateStr.years.slice(-2) + dateStr.months + dateStr.days;

    return [ddmmyyyy, mmddyyyy , yyyymmdd , ddmmyy ,mmddyy , yymmdd]
}
//check date in all format
 function checkPalindromForAllFormat(date) {
    const AllFormatPalindrom=dateInAllFormat(date);
    // var listPalindrom=[];
     var flag = false;
    for(var i=0; i<AllFormatPalindrom.length;i++){
        if(palindrome(AllFormatPalindrom[i])){
            flag=true
            }
        
        // var result = palindrome(AllFormatPalindrom[i])
        // listPalindrom.push(result);
    }
    return flag;
}
//check for leap year
     function isLeapYear(years){
     if(years % 400 ===  0){
         return true
        }
      if(years % 100===0){
           return false
        } 
      if(years % 4 === 0){
         return true
     }
    return false
    }
              
//get next date for next leap year
    function getNextDate(date) {
        days = date.days + 1;
        months=date.months;
        years = date.years;
        const daysInAllMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
        // debugger;
        if(months===2){
           if(isLeapYear(years)){
                if(days > 29){
                    days=1;
                    months=3;
                }
            }
            else{
                    if(days > 28){
                        days=1;
                        months=3;
                    }
                }
            }
          else{
            if(days > daysInAllMonth[months-1]){
                days=1;
                months++;
        }
        }
      if(months >12 ){
            months=1
            years++;
        }
        return {days:days,months:months,years:years}
    }
  //get previous date for previous leap year
    function getPreviousDate(date){
   days=date.days - 1;
   months=date.months;
   years=date.years;
   const previousDateInAllFormat=[31,28,31,30,31,30,31,31,30,31,30,31]
   if(days===0){
    months--
   
     if(months===0){
         months=12;
        days=31;
        years--;
     }
     else if(months==2) {
         if(isLeapYear(years)){
             days=29
            }else{
                days=28
            }
        }
        else{
            
            days=previousDateInAllFormat[months-1]
        }
    }
    
   return {days:days,months:months, years:years};
    }

    
// function nextpD(date) {
//     var counter=0;
//     var isPalindrome=getNextDate(date)
//     while(1){
//         counter++
//         const result=checkPalindromForAllFormat(isPalindrome)
//         if(result){
//             break
//         }
//         isPalindrome=getNextDate(isPalindrome)
//     }
//     return [counter, isPalindrome]
// }
// console.log(nextpD({
//     days:11,
//     months:12,
//     years:2021
// }))

//     function getPreviousPalindromeDate(date) {
//         var ctr1=0;
//         var getPrevious=getPreviousDate(date);
//         while(1){
//             ctr1++;
//             var checkallprevious=checkPalindromForAllFormat(getPrevious);
//       if(checkallprevious){
//         break;
//       }
//       getPrevious=getPreviousDate(getPrevious);
//         }
//       return [ctr1,getPrevious]
//     }
//     var date1={
//         days:2,
//         months:10,
//         years:2001
//     }
//   console.log(getPreviousPalindromeDate(date1));

 //next palindrome date processing
    function getNextPalindrome(date) {
        var ctr=0;
        var nextDate=getNextDate(date);
        while(1){
            ctr++;
            var nextPalindrome=checkPalindromForAllFormat(nextDate);
            if(nextPalindrome){
                break;
            }
            nextDate=getNextDate(nextDate);
        }
        return [ctr,nextDate]; 
    } 
            
// var date={
//     days:22,
//     months:2,
//     years:2022
// }
// console.log(getNextPalindrome(date));

 var inputDate=document.querySelector('.date-input')
 var result=document.querySelector('.result');
 var output=document.querySelector('.output')
 output.style.display="none";

 function clickHandler() {  //processing
     output.style.display="inline-block";
     if(inputDate.value==''){
        output.innerText="Please Select A Date"
     }
     if(inputDate.value!==''){
        const inputDateSplit=inputDate.value.split('-');
        var date ={
         days:Number(inputDateSplit[2]),
         months:Number(inputDateSplit[1]),
         years:Number(inputDateSplit[0])
     }
     const checkpalindrome=checkPalindromForAllFormat(date);
   if(checkpalindrome==false){
    const nextPalindromeDate=getNextPalindrome(date)
    console.log(nextPalindromeDate);
    output.innerText="Your birthday is not palindrome" + " "+ "next palindrom date is far " +nextPalindromeDate[0] + " Days. " + " The next palindrome date is " + nextPalindromeDate[1].days + "-" +nextPalindromeDate[1].months +"-" + nextPalindromeDate[1].years 
   }else{
    output.innerText="Yayy!!!! Your birthday is palindrome"
}
     }
} 

  result.addEventListener('click',clickHandler)