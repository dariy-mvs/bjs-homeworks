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
    if(this.alarmCollection.some(element => element.id === id)) {
      console.error('such id already exists');
    } else {
      this.alarmCollection.push({time, func, id})
    }
  }

  removeClock(id) {
    const initLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
    return this.alarmCollection.length === initLength;
    
  }

  getCurrentFormattedTime() {
    const addLeadingZero = time => time < 10 ? `0${time}` : `${time}`;
    const hours = addLeadingZero(new Date().getHours());
    const minutes = addLeadingZero(new Date().getMinutes());
  
    return `${hours}:${minutes}`;
  }

  start() {
     let checkClock = (arr) => {
      if(this.getCurrentFormattedTime() === arr.time) {
        return arr.func();
      }
    }
    if (this.timerId === null) { 
    this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
    }
  }

  stop() {
    if(this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(element => console.log(`time: ${element.time}, id: ${element.id}`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
// let phoneAlarm = new AlarmClock;
// phoneAlarm.addClock('9:01', () => console.log('sdsdf'), 1);
// phoneAlarm.removeClock(1);
