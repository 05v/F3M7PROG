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
    headerElement;
    emptyWrapper;
    logo;
    piggyBankIcon;
    bankyTitle;
    wrapper;
    avatar;
    head;
    body;

  constructor() {
    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    var emptyWrapper = document.createElement("div");
    emptyWrapper.classList = "header__emptyWrapper";
    this.headerElement.appendChild(emptyWrapper);

    var logo = document.createElement("figure");
    logo.classList = "header__logo";

    var piggyBankIcon = document.createElement("i");
    piggyBankIcon.classList = "fa-solid fa-piggy-bank";
    logo.appendChild(piggyBankIcon);

    var bankyTitle = document.createElement("h2");
    bankyTitle.classList = "header__banky";
    bankyTitle.textContent = "Banky";
    logo.appendChild(bankyTitle);

    this.headerElement.appendChild(logo);

    var wrapper = document.createElement("div");
    wrapper.classList = "header__wrapper";

    var avatar = document.createElement("figure");
    avatar.classList = "header__avatar";

    var head = document.createElement("div");
    head.classList = "header__avatar__head";
    avatar.appendChild(head);

    var body = document.createElement("div");
    body.classList = "header__avatar__body";
    avatar.appendChild(body);

    wrapper.appendChild(avatar);

    this.headerElement.appendChild(wrapper);
  }

  render{

  }
}
