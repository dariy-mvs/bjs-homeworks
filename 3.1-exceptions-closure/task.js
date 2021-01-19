'use strict'

// Задача 1

function parseCount(parseValue) {
  const resultParseValue = parseInt(parseValue, 10);
  if(Number.isNaN(resultParseValue) === true) {
    throw new Error("Невалидное значение");
  }
  return resultParseValue;
}

function validateCount(parseCountValue) {
  try {
    return parseCount(parseCountValue);
  } catch(err) {
    return err
  }
}

// Задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a,
    this.b = b,
    this.c = c;
    if(a > b + c || b > c + a || c > b + a) {
      const err = new Error('Треугольник с такими сторонами не существует');
      throw err;
    }
  }
  
  getPerimeter() {
    return this.a + this.b + this.c;
  }


  getArea() {
    const halfTrianglePerimeter = (this.a + this.b + this.c) / 2;
    
    const triangleArea = Math.sqrt(halfTrianglePerimeter*(halfTrianglePerimeter - this.a)*(halfTrianglePerimeter - this.b)*(halfTrianglePerimeter - this.c));
    return +(triangleArea.toFixed(3));
  }
  
}

function getTriangle(a, b, c) {
  const error = 'Ошибка! Треугольник не существует';
  try {
    return new Triangle(a, b, c)
  } catch(err) {
    const a = {
      getArea() {
        return error
      },
      getPerimeter() {
        return error
      }
    
    }
    
    return a
    }
}


