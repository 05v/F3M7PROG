class GetDataFromApi {
  url = "";
  data = null;

  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    if (this.data === null) {
      await fetch(this.url)
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          this.data = data;
        });
    }
    return this.data;
  }
}

// const jeroen = new GetDataFromApi("/data/transactions.json");
// jeroen.getData().then(function (data) {
//   console.log(data);
// });

class Header {
  placeToRenderHeader;

  constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.querySelector(placeToRenderHeader);

    this.header = document.createElement("header");
    this.header.className = "header";

    this.emptyWrapper = document.createElement("div");
    this.emptyWrapper.className = "header__emptyWrapper";

    this.logo = document.createElement("figure");
    this.logo.className = "header__logo";

    this.piggyBankIcon = document.createElement("i");
    this.piggyBankIcon.className = "fa-solid fa-piggy-bank";

    this.bankyTitle = document.createElement("h2");
    this.bankyTitle.className = "header__banky";
    this.bankyTitle.textContent = "Banky";

    this.wrapper = document.createElement("div");
    this.wrapper.className = "header__wrapper";

    this.avatar = document.createElement("figure");
    this.avatar.className = "header__avatar";

    this.head = document.createElement("div");
    this.head.className = "header__avatar__head";

    this.body = document.createElement("div");
    this.body.className = "header__avatar__body";
  }

  render() {
    this.logo.appendChild(this.bankyTitle);
    this.logo.appendChild(this.piggyBankIcon);
    this.header.appendChild(this.emptyWrapper);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.wrapper);
    this.wrapper.appendChild(this.avatar);
    this.avatar.appendChild(this.head);
    this.avatar.appendChild(this.body);

    this.placeToRenderHeader.appendChild(this.header);
  }
}

const header = new Header("body");
header.render();
