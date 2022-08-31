
function reverseStr(str){
    const reverseString=str.split('').reverse().join('');
    console.log(reverseString)
    return reverseString;
}
 function palindrome(str){
    var isPlindrome=reverseStr(str);
 return str===isPlindrome
} 
    // if(str===isPlindrome)
    // {
    //     console.log("is palindrome");
    // }else{
    //     console.log("not palindrome")
    // }
//    palindrome('madam');

//    convert number into string
  function convertDateToString(date){
   const strDate ={days :'', month:'' , years:''}
    if(date.days<10){
       strDate.days ='0' + date.days;
    }else{
        strDate.days=date.days.toString();
    }
    
    if(date.month<10){
        strDate.month='0' + date.month;
    }else{
        strDate.month=date.month.toString();
    
    }
    strDate.years=date.years.toString();
    return strDate;
}
    
    
 function dateAllFormat(date){
        //  console.log(allFormatDate);    
     const ddmmyyyy=date.days + date.month + date.years;
     
     const mmddyyyy=date.month + date.days + date.years;
     
     const yyyymmdd=date.years + date.days + date.month;
     
     const ddmmyy=date.days + date.month + date.years.slice(-2);
     
     const mmddyy=date.month + date.days + date.years.slice(-2);
     
     const yyddmm=date.years.slice(-2) + date.days + date.month;
     
     return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yyddmm]
     
    }   
    
    function checkPalindromeAllFormat(date){
        var listAllFormat=dateAllFormat(date);
        var palindromlist=[];
        for (let i = 0; i < listAllFormat.length; i++) {
            var result=palindrome(listAllFormat[i])
            palindromlist.push(result);
            // console.log('true'); 
     }
     return palindromlist;
    }

    function leapyear(year) {
        if(year % 400===0){
            return true
        } if(year % 100===0)
            return false
        if(year % 4===0){

            return true
        }
        else
        {
            return false;
        }
    }
    function nextPalindrome(date){
      var days=date.days + 1;
       var month=date.month;
        var years=date.years;
 const daysOfMonth =[31,28,31,30,31,30,31,31,30,31,30,31]

   if(month===2){
    if(leapyear(years)){
        if(days >29){
            days = 1
            month=3
        }
    }else{
        if(days>28){
            days=1
            month=3;
        }
    }
}
     else{
         if(days > daysOfMonth[month-1] ){
             days=1;
             month++
            }
        }
            
            if(month >12){
                month=1;
                years++
            }
            return {
                days:days,
                month:month,
                years:years
            }
        }

    

     const date={
        days:31,
         month:12,
         years:2020
        }
        var nextd=nextPalindrome(date);
        var newdate= convertDateToString(nextd);
        console.log(newdate);

    // console.log( checkPalindromeAllFormat(allFormatDate));