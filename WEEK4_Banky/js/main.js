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
    this.logo.appendChild(this.piggyBankIcon);
    this.logo.appendChild(this.bankyTitle);
    this.header.appendChild(this.emptyWrapper);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.wrapper);
    this.wrapper.appendChild(this.avatar);
    this.avatar.appendChild(this.head);
    this.avatar.appendChild(this.body);

    this.placeToRenderHeader.appendChild(this.header);
  }
}

class BankyMain {
  constructor(placeToRenderMain) {
    this.placeToRenderMain = document.querySelector(placeToRenderMain);
    this.main = document.createElement("main");
    this.leftSection = new LeftSection();
    this.rightSection = new RightSection(this);
    this.main.appendChild(this.leftSection.render());
    this.main.appendChild(this.rightSection.render());
    this.main.className = "banky";
  }

  makeButtonsFromData(data) {
    this.rightSection.makeButtonsFromData(data);
  }

  makeTransactionsFromData(data) {
    this.leftSection.makeTransactionsFromData(Object.entries(data)[0][0], data);
  }

  callFromRightSection(entry, data) {
    this.leftSection.makeTransactionsFromData(entry[0], data);
  }

  render() {
    this.placeToRenderMain.appendChild(this.main);
  }
}

class LeftSection {
  constructor() {
    this.sectionLeft = document.createElement("section");
    this.sectionLeft.className = "banky__section banky__section--left";
    this.sectionHeader = document.createElement("header");
    this.sectionHeader.className = "banky__header";
    this.sectionHeaderDiv = document.createElement("div");
    this.sectionLogo = document.createElement("figure");
    this.sectionLogo.className = "banky__logo";

    this.houseIcon = document.createElement("i");
    this.houseIcon.className = "fa-solid fa-house";

    this.money = document.createElement("h1");
    this.money.className = "banky__money";

    this.eyeButton = document.createElement("button");
    this.eyeButton.className = "banky__eyeButton";
    this.eyeButton.onclick = this.eyeButtonClicked;
    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.className = "banky__eye";
    this.eyeIcon = document.createElement("i");
    this.eyeIcon.className = "fa-solid fa-eye";

    this.transactionsList = document.createElement("ul");
    this.transactionsList.className = "banky__transactions";
    this.transferButton = document.createElement("button");
    this.transferButton.className = "banky__transferButton";
    this.transferButton.textContent = "Overboeken";
  }

  eyeButtonClicked = () => {
    this.transactionsList.classList.toggle("banky__transactions--blur");
    this.money.classList.toggle("banky__money--blur");
  };

  makeTransactionsFromData(accountToShow, data) {
    let transactions = data[accountToShow].transactions;
    let totalMoney = 0;
    for (let i = 0; i < transactions.length; i++) {
      totalMoney += transactions[i]["amount"];
    }
    this.money.textContent = "Saldo" + " €" + totalMoney;

    // Empty ul before we make li
    this.transactionsList.innerHTML = "";

    for (let i = 0; i < transactions.length; i++) {
      this.transactionItem = document.createElement("li");
      this.transactionItem.className = "banky__transaction";
      this.name = document.createElement("h4");
      this.name.className = "banky__name";
      this.name.textContent = transactions[i]["from_to"];
      this.amount = document.createElement("h3");
      this.amount.className = "banky__amount";
      this.amount.textContent = "€" + transactions[i]["amount"];

      this.transactionsList.appendChild(this.transactionItem);
      this.transactionItem.appendChild(this.name);
      this.transactionItem.appendChild(this.amount);
      this.sectionLeft.appendChild(this.transferButton);
    }
  }

  render() {
    this.sectionLogo.appendChild(this.houseIcon);
    this.sectionHeaderDiv.appendChild(this.sectionLogo);
    this.sectionHeaderDiv.appendChild(this.money);
    this.sectionHeader.appendChild(this.sectionHeaderDiv);
    this.eyeFigure.appendChild(this.eyeIcon);
    this.eyeButton.appendChild(this.eyeFigure);
    this.sectionHeader.appendChild(this.eyeButton);
    this.sectionLeft.appendChild(this.sectionHeader);
    this.sectionLeft.appendChild(this.transactionsList);
    return this.sectionLeft;
  }
}

class RightSection {
  bankyMain;
  constructor(bankyMain) {
    this.bankyMain = bankyMain;
    this.sectionRight = document.createElement("section");
    this.sectionRight.className = "banky__section banky__section--right";

    this.accountsList = document.createElement("ul");
    this.accountsList.className = "banky__accounts";
  }

  makeButtonsFromData(data) {
    Object.entries(data).forEach((entry) => {
      const accountItem = document.createElement("li");
      accountItem.className = "banky__account";
      accountItem.onclick = () => {
        this.bankyMain.callFromRightSection(entry, data);
      };

      const accountSwitcher = document.createElement("button");
      accountSwitcher.className = "banky__accountSwitcher";
      const logoFigure = document.createElement("figure");
      logoFigure.className = "banky__logo";

      // Set icon classnames from the JSON data
      const icon = document.createElement("i");
      icon.className = entry[1].icon;

      const accountName = document.createElement("h4");
      accountName.className = "banky__accountName";
      accountName.textContent = entry[0];

      logoFigure.appendChild(icon);
      accountSwitcher.appendChild(logoFigure);
      accountItem.appendChild(accountSwitcher);
      accountItem.appendChild(accountName);

      this.accountsList.appendChild(accountItem);
    });
  }

  render() {
    this.sectionRight.appendChild(this.accountsList);
    return this.sectionRight;
  }
}

class App {
  bankyHeader;
  bankyMain;
  GetDataFromApi;

  constructor() {
    this.header = new Header("body");
    this.header.render();

    this.bankyMain = new BankyMain("body");
    this.bankyMain.render();

    this.GetDataFromApi = new GetDataFromApi("./data/transactions.json");
    this.GetDataFromApi.getData().then((data) => {
      this.bankyMain.makeTransactionsFromData(data);
      this.bankyMain.makeButtonsFromData(data);
    });
  }
}

const app = new App();
