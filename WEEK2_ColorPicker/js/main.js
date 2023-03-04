class ColorCard {
  id;
  color;
  constructor(newId, newColor) {
    this.id = newId;
    this.color = newColor;
  }
}

const test = new ColorCard(101, "rgba(0,0,0,0)");
console.log(test);

const test2 = new ColorCard(3002, "red");
console.log(test2);
