function getResult(a,b,c){
    'use strict';
        let discriminant = b ** 2 - 4 * a * c;
        let results = [];
    if (discriminant >= 0) {
        let x1 = (- b + Math.sqrt(discriminant)) / (2 * a); 
        let x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        results.push(x1, x2);
    }
    else { alert('уравнение не имеет корней');
    }
    return results;
}

function getAverageMark(marks){
    'use strict';
    if (marks.length === 0) {
        return 0;
    }
    else {
         if (marks.length > 5) {
            console.log('Отметок больше 5. Для подсчёта возьмутся первые 5 отметок.');
         marks.splice(5);
        }
        let sum = marks.reduce(add,0);
        function add(accumulator, a) {
        return accumulator + a;
        }
        let averageMark = sum / marks.length;
    return averageMark; }
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let years = today.getFullYear() - dateOfBirthday.getFullYear();
    if (years >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
    else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`}
}