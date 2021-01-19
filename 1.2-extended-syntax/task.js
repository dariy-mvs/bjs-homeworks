'use strict';
function getResult(a,b,c){
        let discriminant = b ** 2 - 4 * a * c;
        let results = [];
    if (discriminant >= 0) {
        let x1 = (- b + Math.sqrt(discriminant)) / (2 * a); 
        let x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        results.push(x1, x2);
    }
    alert('уравнение не имеет корней');
    
    return results;
}

function getAverageMark(marks){
    if (marks.length === 0) {
        return 0;
    }
    if (marks.length > 5) {
        console.log('Отметок больше 5. Для подсчёта возьмутся первые 5 отметок.');
         marks.splice(5);
        };
    let sum = marks.reduce((accumulator, a) => {
        return accumulator + a;
        });
        
    return sum / marks.length; 
}

function askDrink(name,dateOfBirthday){
    let years = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (years >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
    else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`}
}