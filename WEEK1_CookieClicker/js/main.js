class Cookie {
  cookieType = "";
  htmlElement = undefined;
  constructor(newCookieType, newHTMLElement) {
    this.cookieType = newCookieType;
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onCookieClick;
  }

  onCookieClick() {
    console.log("Clicked");
  }
}

class Score {
  defaultScore = 0;
  name = "";
  htmlElement = undefined;
  constructor(newDefaultScore, newName, newHTMLElement) {
    this.defaultScore = newDefaultScore;
    this.name = newName;
    this.htmlElement = newHTMLElement;
    this.htmlElement.innerText = newDefaultScore;
  }
}

const cookie = new Cookie(
  "Default Cookie",
  document.getElementById("js--cookie")
);
const score = new Score(
  0,
  "Default Score",
  document.getElementById("js--score")
);
console.log(cookie, score);
