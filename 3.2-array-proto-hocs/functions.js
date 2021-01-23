'use strict'
// Задача 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
return  weapons.map(element => element.name);
};

function getCountReliableWeapons(durability) {
  return weapons.filter(element => element.durability > durability).length;
  
};

function hasReliableWeapons(durability) {
 return weapons.some(element => element.durability > durability);
};

function getReliableWeaponsNames(durability) {
  return weapons.filter(element => element.durability > durability).map(element => element.name);
};

function getTotalDamage() {
  return weapons.reduce((acc, weapon) => {return acc = acc + weapon.attack}, 0)
};

function getValuestCountToSumValues(arr, sum) { 
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    newArr = arr.slice(0,i);
  
    let checkSum = newArr.reduce((acc, a) => {return acc + a}, 0);

    if (checkSum >= sum) break;
  }
  console.log(newArr);
  return newArr.length;
} 

// Недавно видела статью 2017 года, со смыслом "хороший джедай в работе с массивами for не использует". Думала, как можно реализовать это проще, и не используя циклы. Пробовала останавливать reduce, но не смогла связать условие if с переменной-аккумулятором, ловила ошибку. Никаких ценных идей по этому поводу в голову не пришло. Было бы интересно посмотреть как это должно реализовываться. Спасибо!

// Задача 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  
  //sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  return arr1.every((currentValue, item) => {
    if (currentValue === arr2[item] && arr1.length === arr2.length) return true;
  })
}
let newArr = []
function memorize(fn, limit) {
  let memory = newArr; // Сама понимаю, что запись странная. Но, в задании сказано, что массив memory должен быть объявлен ВНУТРИ memorize. Если внутри неё объявить пустой массив, то результаты вызова будут обнуляться. Как обойти это? Подскажите, пожалуйста)
  
  return function(...args) {
    
    if (!(memory.some(element => compareArrays(element.args, args)))) {
      if (memory.length === limit) memory.splice(0,1, {args: args, result: fn(...args)})
      else memory.push({args: args, result: fn(...args)});
    }
    
    return memory.find((element) => compareArrays(element.args, args)).result;
  }
}

// Задача 2 имеет 2 варианта задания, но, как мне показалось, отрабатывающих одни и те же навыки, просто написанные разным языком. Есть смысл делать альтернативный вариант?

// Задача 3

function testCase(testFunction, timer) {
  const fnArgs = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timer);
  for (let i = 0; i <= 100; i++) {
    fnArgs.forEach(element => testFunction.apply(null, element));
    console.timeEnd(timer);
  }
}

// С "задержкой" в sum 504,3ms, mSum 302,7ms.
// Без "задержки" 0.086ms sum, 0.2712ms mSum. Довольно странный результат, не знаю с чем связать последнее значение.