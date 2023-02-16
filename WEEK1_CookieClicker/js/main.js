class Cookie {
  cookieType = "";
  htmlElement = undefined;
  score = undefined;
  factor = 1;
  constructor(newCookieType, newHTMLElement, newScore) {
    this.cookieType = newCookieType;
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onCookieClicked;
    this.score = newScore;
  }

  onCookieClicked = () => {
    this.score.onCookieClicked(this.factor);
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

  onCookieClicked(factorFromCookie) {
    console.log("Cookie has been clicked");
    this.score = this.score + factorFromCookie;
    this.htmlElement.innerText = this.score;
  }

  subtractScore() {
    this.score = this.score - 100;
    this.htmlElement.innerText = this.score;
  }
}

class Multiplier {
  factor = 2;
  htmlElement = undefined;
  cookie = undefined;
  bought = false;
  constructor(newHTMLElement, cookie) {
    this.htmlElement = newHTMLElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onMultiplierClicked;
  }

  onMultiplierClicked = () => {
    if (this.bought === false) {
      this.bought = true;
      this.cookie.score.subtractScore();
      this.cookie.factor = this.factor;
    }
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
