class ColorCard {
  id;
  color;
  constructor(newId, newColor, addToList) {
    // Setting properties
    this.id = newId;
    this.color = newColor;
    this.addToList = addToList;

    // Creates <li> with class 'colors__color'
    this.htmlElement = document.createElement("li");
    this.htmlElement.classList = "colors__color";

    // Creates <figure> with class 'colors__circle' and adds it to the <li>
    const figureToBeRendered = document.createElement("figure");
    figureToBeRendered.classList = "colors__circle";
    figureToBeRendered.style.background = this.color;
    this.htmlElement.appendChild(figureToBeRendered);

    // Creates <p> with class 'colors__text' with the text Copied in it and adds it to the <li>
    const pToBeRendered = document.createElement("p");
    pToBeRendered.classList = "colors__text";
    pToBeRendered.innerText = "Copied";
    this.htmlElement.appendChild(pToBeRendered);

    //
    this.htmlElement.onclick = this.onHTMLElementClicked();

    this.render();
  }

  onHTMLElementClicked = function () {
    console.log("I clicked" + this.color);
  };

  render() {
    // Adds the <li> with all it's children elements into the <ul>
    this.addToList.appendChild(this.htmlElement);
  }
}

const test = new ColorCard(
  101,
  "rgba(255,0,0,1)",
  document.getElementById("js--colors")
);
