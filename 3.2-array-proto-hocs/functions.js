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
  return weapons.reduce((acc, weapon) => acc = acc + weapon.attack, 0)
};

function getValuestCountToSumValues(arr, sum) { 
 
  return arr.reduce((acc, value) => {
    if(acc.summ < sum) {
      return {
        summ: acc.summ + value,
        count: acc.count + 1
      };
    } 
    return acc
  }, {summ: 0, count: 0}).count;
}
  

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
  if (arr1.length === arr2.length) {
    
    return arr1.every((currentValue, item) => currentValue === arr2[item]);
  
  } else return false;
  
}



function memorize(fn, limit) {
  let memory = []; 
  
  return function(...args) {
    
    if (!(memory.some(element => compareArrays(element.args, args)))) {
      if (memory.length === limit) memory.splice(0,1, {args: args, result: fn(...args)})
      else memory.push({args: args, result: fn(...args)});
    }
    console.log(memory);
    return memory.find((element) => compareArrays(element.args, args)).result;
  }
}


// Задача 3

function testCase(testFunction, timer) {
  const fnArgs = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(timer);
  for (let i = 0; i <= 100; i++) {
    fnArgs.forEach(element => testFunction.apply(null, element));
  }
  console.timeEnd(timer);
}
