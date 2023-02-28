const colors = document.getElementsByClassName("colors__color");

for (let i = 0; i < colors.length; i++) {
  // Set color
  colors[i].children[0].style.background = "#635985";

  // On click
  colors[i].onclick = function () {
    colors[i].children[0].classList.add("colors__circle--selected");
    navigator.clipboard.writeText(colors[i].children[0].style.background);
    document.title = colors[i].children[0].style.background;
  };
}
