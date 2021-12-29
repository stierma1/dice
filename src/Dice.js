
let Die = require("./Die");

class Dice{
  constructor(numberOfDice, numberOfSides){
    this.dice = [];
    for(let i = 0; i < numberOfDice; i++){
      this.dice.push(new Die(numberOfSides));
    }
  }

  roll(){
    this.dice.map((d) => {
      d.roll();
    });

    return this.read();
  }

  read(){
    return this.dice.map((d) => {
      return d.read();
    });
  }

  total(){
    return this.dice.reduce((r, d) => {
      return r + d.read();
    }, 0)
  }

}

module.exports = Dice;
