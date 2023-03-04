class ColorCard {
  id;
  color;
  addToList;
  htmlElement;
  circle;
  text;

  constructor(newId, newColor, addToList) {
    // Setting properties
    this.id = newId;
    this.color = newColor;
    this.addToList = addToList;

    // Creates <li> with class 'colors__color'
    this.htmlElement = document.createElement("li");
    this.htmlElement.classList = "colors__color";

    // Creates <figure> with class 'colors__circle'
    this.circle = document.createElement("figure");
    this.circle.classList = "colors__circle";
    this.circle.style.background = this.color;

    // Creates <p> with class 'colors__text' with the text 'Copied' in it
    this.text = document.createElement("p");
    this.text.classList = "colors__text";
    this.text.innerText = "Copied";

    // If you click a <li> it will run the function onHTMLElementClicked
    this.htmlElement.onclick = this.onHTMLElementClicked;

    // It will add the <li> to the <ul>
    this.render();
  }

  onHTMLElementClicked = () => {
    // Adds the selected class to the circle once the item is clicked (this makes the color big)
    this.circle.classList.add("colors__circle--selected");
    // Changes
    document.title = this.color;
    window.navigator.clipboard.writeText(this.color);
  };

  render() {
    // Adds the <figure> and <p> elements into the <li>
    this.htmlElement.appendChild(this.circle);
    this.htmlElement.appendChild(this.text);
    this.addToList.appendChild(this.htmlElement);
  }
}

class ColorList {
  id;
  newHTMLElement;

  constructor(newId) {
    this.id = newId;
    this.htmlElement = document.createElement("ul");
    this.htmlElement.id = this.id;
    this.htmlElement.classList.add("colors");
    this.render();
  }

  render() {
    document.querySelector("body").appendChild(this.htmlElement);
  }
}

class HSLGenerator {
  randomHue;
  randomSaturation;
  randomLightness;
  hsl;
  constructor() {
    this.generateHSL();
  }

  generateHue = function () {
    // Number 1-360, the Hue
    this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
  };
  generateSaturation = function () {
    // Percentage 11-79, the Saturation
    this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
  };
  generateLightness = function () {
    // Percentage 11-100, the Brightness
    this.randomBrightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
  };
  generateHSL = function () {
    this.generateHue();
    this.generateSaturation();
    this.generateLightness();

    this.hsl = `hsl(${this.randomHue} ${this.randomSaturation} ${this.randomBrightness})`;
  };
}

let generator = new HSLGenerator();
let list = new ColorList("js--list");

// const colorList = new ColorList("js--colors");
// for (let i = 1; i < 101; i++) {}
// new ColorCard(i, hsl, document.getElementById("js--colors"));
