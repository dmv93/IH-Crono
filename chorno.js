class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
  
    start(callback) {
      // ... your code goes here
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000)
    //   if (callback) {
    //     this.intervalId = setInterval(() => {

    //     }, 1000)
    //   } else {
    //     setInterval(() => {
    //         this.currentTime += 1;
    //       }, 1000) 
    //   }
    }
  
    getMinutes() {
      // ... your code goes here
    }
  
    getSeconds() {
      // ... your code goes here
    }
  
    computeTwoDigitNumber(value) {
      // ... your code goes here
    }
  
    stop() {
      // ... your code goes here
    }
  
    reset() {
      // ... your code goes here
    }
  
    split() {
      // ... your code goes here
    }
  }
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = Chronometer;
  }
  