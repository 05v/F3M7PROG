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
  filter(platform, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].platform === platform) {
        console.log(data[i].title);
      }
    }
  }
}

class App {
  api;
  filter;
  constructor() {
    this.api = new Api();
    this.filter = new Filter();

    this.api.getData().then(() => {
      this.filter.filter("PS2", this.api.data);
    });
  }
}

const app = new App();
