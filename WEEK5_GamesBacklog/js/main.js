class Api {
  data = null;
  async getData() {
    await fetch("../data/games.json")
      .then((response) => {
        return response.json();
      })
      .then((newData) => {
        this.data = newData.games; //newData["games"]
      });
  }
}

class Filter {
  filteredResult = [];

  filter(platform, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].platform === platform) {
        this.filteredResult.push(data[i]);
      }
    }
  }

  randomFromResult() {
    let randomNumber = Math.floor(Math.random() * this.filteredResult.length);
    return this.filteredResult[randomNumber];
  }
}

class URLScraper {
  currentURL;
  platform;
  pretty;
  constructor() {
    this.currentURL = window.location.href;
  }

  getDataFromURL() {
    this.platform = this.currentURL.split("platform=")[1];
    this.pretty = new PrettyPlatform(this.platform);
    console.log(this.pretty.platform);
  }
}

class PrettyPlatform {
  platform;

  constructor(platform) {
    this.platform = platform;
    this.platformToUpperCase();
    this.removeSpaces();
  }

  platformToUpperCase() {
    this.platform = this.platform.toUpperCase();
  }

  removeSpaces() {
    this.platform = this.platform.replace(" ", "");
    this.platform = this.platform.replace("%20", "");
  }
}

class App {
  api;
  filter;
  constructor() {
    this.api = new Api();
    this.filter = new Filter();
    this.urlScraper = new URLScraper();

    this.urlScraper.getDataFromURL();

    this.api.getData().then(() => {
      this.filter.filter(this.urlScraper.platform, this.api.data);
      let randomResult = this.filter.randomFromResult();
      console.log(randomResult);
    });
  }
}

const app = new App();
