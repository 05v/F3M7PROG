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

  onGoldStyleChange() {
    this.htmlElement.classList.add("cookie--gold");
    this.htmlElement.classList.remove("cookie--velvet");
    setInterval(() => {
      this.htmlElement.classList.remove("cookie--gold");
    }, 5000);
  }

  onVelvetStyleChange() {
    this.htmlElement.classList.remove("cookie--gold");
    this.htmlElement.classList.add("cookie--velvet");
    setInterval(() => {
      this.htmlElement.classList.remove("cookie--velvet");
    }, 5000);
  }
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
    this.score = this.score + factorFromCookie;
    this.htmlElement.innerText = this.score;
  }

  subtractScore() {
    this.score = this.score - 100;
    this.htmlElement.innerText = this.score;
  }

  addScore() {
    this.score = this.score + 10000;
    this.htmlElement.innerText = this.score;
  }

  onAutoScoreClicked() {
    setInterval(() => {
      this.score = this.score + 500;
      this.htmlElement.innerText = this.score;
    }, 10000);
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

class autoScore {
  htmlElement = undefined;
  score = undefined;
  bought = false;

  constructor(htmlElement, score) {
    this.htmlElement = htmlElement;
    this.score = score;
    this.htmlElement.onclick = this.onAutoScoreClicked;
  }

  onAutoScoreClicked = () => {
    if (this.bought === false) {
      this.bought = true;
      this.score.subtractScore();
      score.onAutoScoreClicked();
    }
  };
}

class GoldenCookie {
  htmlElement = undefined;
  bought = false;
  cookie = undefined;

  constructor(htmlElement, cookie) {
    this.htmlElement = htmlElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onGoldenCookieClicked;
  }

  onGoldenCookieClicked = () => {
    if (this.bought === false) {
      this.bought = true;
      this.cookie.onGoldStyleChange();
      this.cookie.score.addScore();
    }
  };
}

class VelvetCookie {
  htmlElement = undefined;
  bought = false;
  cookie = undefined;

  constructor(htmlElement, cookie) {
    this.htmlElement = htmlElement;
    this.cookie = cookie;
    this.htmlElement.onclick = this.onVelvetCookieClicked;
  }

  onVelvetCookieClicked = () => {
    if (this.bought === false) {
      this.bought = true;
      this.cookie.onVelvetStyleChange();
      this.cookie.score.addScore();
    }
  };
}

class Save {
  htmlElement;

  constructor(newHTMLElement) {
    this.htmlElement = newHTMLElement;
    this.htmlElement.onclick = this.onSaveButtonClicked;
  }

  onSaveButtonClicked = () => {
    window.localStorage.setItem("score", score.score);
    console.log(window.localStorage);
  };
}

// Setup for score and cookie

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

// Setup for desktop upgrades

const multiplier = new Multiplier(
  document.getElementById("js--multiplier"),
  cookie
);

const auto = new autoScore(document.getElementById("js--autoScore"), score);

const gold = new GoldenCookie(
  document.getElementById("js--goldenCookie"),
  cookie
);

const velvet = new VelvetCookie(
  document.getElementById("js--velvetCookie"),
  cookie
);

const save = new Save(document.getElementById("js--save"));
console.log(save);
// Setup for mobile upgrades

const multiplierMobile = new Multiplier(
  document.getElementById("js--multiplier--mobile"),
  cookie
);

const autoMobile = new autoScore(
  document.getElementById("js--autoScore--mobile"),
  score
);

const goldMobile = new GoldenCookie(
  document.getElementById("js--goldenCookie--mobile"),
  cookie
);

const velvetMobile = new VelvetCookie(
  document.getElementById("js--velvetCookie--mobile"),
  cookie
);

window.localStorage.setItem("naam", "item");
console.log(window.localStorage);
