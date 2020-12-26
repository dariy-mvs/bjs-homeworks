'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let mistake = (variable, variableName) => {
        alert(`Параметр ${variableName} содержит неправильное значение ${variable}`);
    };
    let percentNumber = parseFloat(percent);
    if (Number.isNaN(percentNumber) === true) {
        mistake(percent, 'процентная ставка');
    };
    let contributionNumder = parseInt(contribution, 10);
    if (Number.isNaN(contributionNumder) === true) {
        mistake(contribution, 'первоначальный взнос');
    };
    let amountNumber = parseInt(amount, 10);
    if (Number.isNaN(amountNumber) === true) {
        mistake(amount, 'общая стоимость');
    };
    let debt = amountNumber - contributionNumder;
    let month = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    let p = percent / 100 / 12;
    let pay = debt * (p + p /(((1 + p)**month)- 1));
    let totalAmount = pay * month;
    return totalAmount.toFixed(2);
    
}
    


function getGreeting(name = 'Аноним') {
    if (name === '') {
        name = 'Аноним';
    }
    console.log(`Привет, мир! Меня зовут ${name}.`);
   return `Привет, мир! Меня зовут ${name}.`;
}