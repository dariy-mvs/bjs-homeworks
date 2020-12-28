'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    const mistake = (variable, variableName) => {
        alert(`Параметр ${variableName} содержит неправильное значение ${variable}`);
        return;
    };
    const percentNumber = parseFloat(percent);
    if (Number.isNaN(percentNumber) === true) {
        mistake(percent, 'процентная ставка');
    };
    const contributionNumder = parseInt(contribution, 10);
    if (Number.isNaN(contributionNumder) === true) {
        mistake(contribution, 'первоначальный взнос');
    };
    const amountNumber = parseInt(amount, 10);
    if (Number.isNaN(amountNumber) === true) {
        mistake(amount, 'общая стоимость');
    };
    const debt = amountNumber - contributionNumder;
    const month = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    const p = percentNumber / 100 / 12;
    const pay = debt * (p + p /(((1 + p)**month)- 1));
    const totalAmount = parseFloat((pay * month).toFixed(2));
    return totalAmount;
    
}
    


function getGreeting(name) {
    console.log(`Привет, мир! Меня зовут ${name}.`);
   return `Привет, мир! Меня зовут ${name || 'Аноним'}.`;
}