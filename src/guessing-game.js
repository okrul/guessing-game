class GuessingGame {
    constructor() {}

    minValue = 0;
    maxValue = 0;
    num = 0;

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.num = this.minValue + Math.round((this.maxValue - this.minValue)/2);
        return this.num; 
    }

    lower() {
        this.maxValue =  this.num;  
    }

    greater() {
        this.minValue = this.num;
    }
}

module.exports = GuessingGame;
