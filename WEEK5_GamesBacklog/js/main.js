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
  filter(platform) {
    console.log(platform);
  }
}

class App {
  api;
  filter;
  constructor() {
    this.api = new Api();
    this.filter = new Filter();

    this.api.getData().then(() => {
      console.log(this.api.data);
    });
    this.filter.filter("PS4");
  }
}

const app = new App();
