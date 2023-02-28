const colors = document.getElementsByClassName("colors__color");

for (let i = 0; i < colors.length; i++) {
  colors[i].onclick = function () {
    colors[i].children[0].classList.add("colors__circle--selected");
  };
}
