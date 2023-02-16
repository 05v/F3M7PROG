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

const cookie = new Cookie("Default", document.getElementById("js--cookie"));
console.log(cookie);
