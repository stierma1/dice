
class Die {
  constructor(numberOfSides){
    this.numberOfSides = numberOfSides;
    this.currentNumber = numberOfSides;
  }

  roll(){
    this.currentNumber = Math.ceil(Math.random() * this.numberOfSides);
    return this.read();
  }

  read(){
    return this.currentNumber;
  }
}

module.exports = Die;
