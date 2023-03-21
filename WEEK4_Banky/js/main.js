class GetDataFromApi {
  url = "";
  data = null;

  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        this.data = data;
      });
  }
}

const jeroen = new GetDataFromApi("/data/transactions.json");
jeroen.getData();
console.log(jeroen.data);
