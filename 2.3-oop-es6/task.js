'use strict'

//Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name,
    this.releaseDate = releaseDate,
    this.pagesCount = pagesCount,
    this.state = 100,
    this.type = null 
  }
  fix() {
    this.state = this.state * 1.5;
  }
    
    set state(state) {
      if (state < 0) {
        this._state = 0;
      }
      else if (state > 100) {
        this._state = 100;
      }
      else this._state = state;
    }
    get state() {
      return this._state;
    }
};

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount),
      this.type = 'magazine'
    }
  };

  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount),
      this.type = 'book',
      this.author = author
    }
  };

  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount),
      this.type = 'novel'
    }
  };

  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount),
      this.type = 'fantastic'
    }
  };

  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount),
      this.type = 'detective'
    }
  } 

  // Задача 2

  class Library {
    constructor(name, books) {
      this.name = name,
      this.books = []
    };
    addBook(book) {
      if (book.state > 30) {
      this.books.push(book);
      }
    };

    findBookBy(type, value) {
      if (this.books.find(typeOfBook => typeOfBook[type] === value) === undefined) return null
      else return this.books.find(typeOfBook => typeOfBook[type] === value)
      }

    giveBookByName(bookName) {
      const findBook = this.books.find(typeOfBook => typeOfBook.name === bookName);
      if (findBook === undefined) return null
      else return this.books.splice(this.books.indexOf(findBook),1)[0];
      } 
  
}

  // Задача 3

  class StudentLog {
    constructor(name) {
      this.name = name
    }
    
    getName(){
      return this.name
    };

    addGrade(grade, subject) {
      
      if (this[subject] === undefined) {
        this[subject] = []
      };

      if (grade >= 1 && grade <=5) {
      this[subject].push(grade)
      return this[subject].length
      }
      else { 
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      return this[subject].length
      }
    }

    getAverageBySubject(subject) {
      if (this[subject] === undefined) return 0
      else {
        let sum = this[subject].reduce((accumulator, a) => {
          return accumulator + a;
          });
        return sum / this[subject].length
      }
    }

    getTotalAverage() { // ощущение, что эту конструкцию можно было сделать проще. Пыталась реализовать через filter & reduce, но получилась редкостная гадость. Буду благодарна за подсказку, как сделать этот код лучше! Да и вообще буду благодарна за любые комментарии к этой работе.
  
      let middleMark = [];
    for (let key in this) {
      if (this[key] !== this.name) {
        console.log(this[key]);
      let sum = this[key].reduce((accumulator, a) => {
        return accumulator + a;
        });
      middleMark.push(sum / this[key].length) 
        }
      else continue;
    
    }
    return middleMark.reduce((accumulator, a) => {
      return accumulator + a;
      })/middleMark.length;
      }
    }

    
    

  
  