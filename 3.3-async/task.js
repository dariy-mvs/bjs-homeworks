'use strict'

//Задача 1

class AlarmClock {
  constructor(){
    this.alarmCollection = [],
    this.timerId = null
  }

  addClock(time, func, id) {
    if(id === undefined) {
      throw new Error('where my id?');
    };
    if(this.alarmCollection.filter(element => element.id === id).length === 1) {
      console.error('such id already exists');
    } else {
      this.alarmCollection.push({time, func, id})
    }
  }

  removeClock(id) {
    const findId = this.alarmCollection.findIndex(element => element.id === id);
    console.log(findId);
    if(findId.length !== -1) {
       this.alarmCollection.splice([findId],1);
      return true;} else return false;
    
  }

  getCurrentFormattedTime() {
    return (new Date().getHours() < 10) ? `0${new Date().getHours()}:${new Date().getMinutes()}` : `${new Date().getHours()}:${new Date().getMinutes()}`;
  }

  start() {
    function checkClock(arr) {
      if(getCurrentFormattedTime() === arr.time) {
        return arr.func();
      }
    }
  if (this.timerId === undefined) { //изначально в этой строке стояло сравнение с null. И, естественно, выходила ошибка. Замена на undefined произошла случайно, и, неожиданно для меня, всё заработало как надо. Возможно вопрос глупый, но лучше его задать, чем не задать: почему? Изначально в свойстве указан null, и было бы логично сравнение с ним. Но тогда не определяется функция getCurrentFormattedTime. Не понимаю взаимосвязи. Благодарю за пояснения!)
    this.timerId = setInterval(this.alarmCollection.forEach(element => checkClock(element)), 1000);
    }
  }

  stop() {
    if(this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(element => console.log(`time: ${element.time}, id: ${element.id}`))
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}
// let phoneAlarm = new AlarmClock;
// phoneAlarm.addClock('9:01', () => console.log('sdsdf'), 1);
// phoneAlarm.removeClock(1);
