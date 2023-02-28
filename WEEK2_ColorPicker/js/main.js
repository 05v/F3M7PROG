const colors = document.getElementsByClassName("colors__color");

for (let i = 0; i < colors.length; i++) {
  // Number 1-360, the Hue
  let randomHue = Math.random * (360 - 1) + 1;

  // Percentage 11-79, the Saturation
  let randomSaturation = Math.random * (79 - 11) + 11;

  // Percentage 11-100, the Brightness
  let randomBrightness = Math.random * (100 - 11) + 11;

  // Set color
  colors[i].children[0].style.background = `hsl(${
    (randomHue, randomSaturation, randomBrightness)
  })`;

  // On click
  colors[i].onclick = function () {
    colors[i].children[0].classList.add("colors__circle--selected");
    navigator.clipboard.writeText(colors[i].children[0].style.background);
    document.title = colors[i].children[0].style.background;
  };
}
