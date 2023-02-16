class Cookie {
  cookieType = "";
  htmlElement = undefined;
  score = undefined;
  constructor(newCookieType, newHTMLElement, newScore) {
    this.cookieType = newCookieType;
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onCookieClick;
    this.score = newScore;
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

const score = new Score(
  0,
  "Default Score",
  document.getElementById("js--score")
);

const cookie = new Cookie(
  "Default Cookie",
  document.getElementById("js--cookie"),
  score
);

cookie.score.htmlElement.style.background = "red";
