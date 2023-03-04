class ColorCard {
  id;
  color;
  addToList;
  htmlElement;
  circle;

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
  };

  render() {
    // Adds the <figure> and <p> elements into the <li>
    this.htmlElement.appendChild(this.circle);
    this.htmlElement.appendChild(this.text);
    this.addToList.appendChild(this.htmlElement);
  }
}

const test = new ColorCard(
  101,
  "rgba(255,0,0,1)",
  document.getElementById("js--colors")
);
