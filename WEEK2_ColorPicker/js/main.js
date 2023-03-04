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

    // Create the <ul> element and give it the appropriate id and class
    this.htmlElement = document.createElement("ul");
    this.htmlElement.id = this.id;
    this.htmlElement.classList.add("colors");

    // Render the list (add the new <ul> to the body)
    this.render();
  }

  render() {
    // Add the new <ul> to the body
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

    // Sets the values of hsl(value, value, value)
    this.hsl = `hsl(${this.randomHue} ${this.randomSaturation} ${this.randomBrightness})`;
  };
}

class App {
  colorList;
  hslGenerator;

  constructor(newId) {
    this.id = newId;
    this.colorList = new ColorList(this.id);
    this.hslGenerator = new HSLGenerator();
    // Call generateColorCards function to create 100 instances of ColorCard
    this.generateColorCards();
  }

  generateColorCards = function () {
    // loop from 1 to 100 to create 100 instances
    for (let i = 1; i < 101; i++) {
      // Call the generateHSL function to set the values of hsl(value, value, value) every time the for loop runs
      this.hslGenerator.generateHSL();
      // create a new instance of `ColorCard`
      new ColorCard(
        i,
        this.hslGenerator.hsl,
        document.getElementById(this.colorList.id)
      );
    }
  };
}

// Runs the full code
const app = new App("js--app");
