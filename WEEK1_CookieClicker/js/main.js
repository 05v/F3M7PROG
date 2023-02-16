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
