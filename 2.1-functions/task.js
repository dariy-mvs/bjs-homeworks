'use strict'

//Задача 1

let getSolutions = ( a = 1, b, c ) => {
  const D = b**2 - 4*a*c;
  if (D < 0) {
    return { 
      D, 
      roots: [] };
  }
  else if (D === 0) {
    let x1 = -b / 2*a;
    alert('Дискриминант равен нулю. В таком случае уравнение имеет два одинаковых корня. Но, так как корни равны, мы запишем в решение только один.')
    return {D,
    roots: [ x1 ] };
  }
  else {
    let x1 = (- b + Math.sqrt(D)) / (2 * a); 
    let x2 = (- b - Math.sqrt(D)) / (2 * a);

    return {
      D,
      roots: [x1 , x2]
    };
  }
}

let showSolutionsMessage = ( a = 1, b, c ) => {
  const result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots === []) {
    console.log('Уравнение не имеет вещественных корней');
  }
  else if (result.roots.length === 1) {
    console.log(`Уравнение имеет два одинаковых корня. Но, так как эти корни равны, мы запишем в решение только один. х1 = ${result.roots[0]}`);
  }
  else {
    console.log(`Уравнение имеет два х1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
  }
}

// Задача 2
let getAverageScore = (data) => {
  for (let i in data) {
    let value = data[i];
    value = getAverageMark(value);
    data[i] = value
  }
  let allMiddleMarks = Object.values(data);
  data.average = getAverageMark(allMiddleMarks);
  
  return data;
};

function getAverageMark(marks) {
  
  if (marks.length === 0) {
    return 0;
  }
  else {let sum = marks.reduce((accumulator, a) => {
        return accumulator + a;
        });
  const middleMark = sum / marks.length;
  return middleMark;};
};

// Задача 3

let notSecretData = {};
let getPersonData = (secretData) => {
  for (let x in secretData) {
    let value = secretData[x];
    value = getDecodedValue(value);
    x === 'aaa' ? x = 'firstName' : x = 'lastName';
    notSecretData[x] = value;
  }
  return notSecretData;
};

function getDecodedValue(secret) {
  secret === 0 ? secret = 'Родриго' : secret = 'Эмильо';
  return secret;
};