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

  onCookieClick = () => {
    this.score.onCookieClick();
  };
}

class Score {
  score = 0;
  name = "";
  htmlElement = undefined;
  constructor(newScore, newName, newHTMLElement) {
    this.score = newScore;
    this.name = newName;
    this.htmlElement = newHTMLElement;
    this.htmlElement.innerText = newScore;
  }

  onCookieClick() {
    console.log("Cookie has been clicked");
    this.score = this.score + 1;
    this.htmlElement.innerText = this.score;
  }

  subtractScore() {
    this.score = this.score - 100;
    this.htmlElement.innerText = this.score;
  }
}

class Multiplier {
  factor = 1;
  htmlElement = undefined;
  cookie = undefined;
  constructor(newHTMLElement, cookie) {
    this.htmlElement = newHTMLElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onMultiplierClick;
  }

  onMultiplierClick = () => {
    console.log("Multiplier button clicked");
    this.cookie.score.subtractScore();
  };
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

const multiplier = new Multiplier(
  document.getElementById("js--multiplier"),
  cookie
);
console.log(multiplier);
