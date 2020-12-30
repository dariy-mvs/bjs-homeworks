'use strict'

// Задача 1
// String.prototype.isPalindrome = this.isPalindrome(); 

// function isPalindrome(str) {
//    
//     let str = this.toLowerCase();
//     let strReverse = strinG.split('').reverse().join('');
//     if (str === strReverse) { return true } else { return false };
// }

String.prototype.isPalindrome = function (str) {
    str = this.toLowerCase();
    console.log(str);
    let newString = str.split('');
    newString.forEach((word) => {
        if (word === ' ') {
          newString.splice(newString.indexOf(' '),1);
        }
      });
    newString = newString.join();
    let strReverse = newString.split('').reverse().join('');
      
    if (newString === strReverse) { return true } else { return false };
}

// Задача 2

function getAverageMark(marks) {
    if (marks.length === 0) {return 0}
    else { 
        let sum = marks.reduce((accumulator, a) => {
        return accumulator + a;
        });
        let average = sum / marks.length;
        let averageMark = Math.round(average); 
        return averageMark
    };
}

// Задача 3

function checkBirthday(birthday) {
  let age = 0;
    let now = new Date().getTime();
   let calcBirthday = new Date(birthday);
   birthday = calcBirthday.getTime()
   let diff = now - birthday;
   for (let i = 0; diff > 0; i++) {
       age += 1;
    if (i / 4 === 0) {
           diff = diff - 31622400000;
       }
       else {
           diff = diff - 31556952000;
       }
   }
   if (age >18) {return true } 
   else {return false};

    // return verdict
}