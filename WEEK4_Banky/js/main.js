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
    this.main.className = "banky";
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
    this.money.textContent = "Saldo €90,00";
    this.eyeButton = document.createElement("button");
    this.eyeButton.className = "banky__eyeButton";
    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.className = "banky__eye";
    this.eyeIcon = document.createElement("i");
    this.eyeIcon.className = "fa-solid fa-eye";
    this.transactionsList = document.createElement("ul");
    this.transactionsList.className = "banky__transactions";
    this.transactionItem = document.createElement("li");
    this.transactionItem.className = "banky__transaction";
    this.name = document.createElement("h4");
    this.name.className = "banky__name";
    this.name.textContent = "Jeroen";
    this.amount = document.createElement("h3");
    this.amount.className = "banky__amount";
    this.amount.textContent = "+€10,00";
    this.transferButton = document.createElement("button");
    this.transferButton.className = "banky__transferButton";
    this.transferButton.textContent = "Overboeken";
  }

  render() {
    this.sectionLogo.appendChild(this.houseIcon);
    this.sectionHeaderDiv.appendChild(this.sectionLogo);
    this.sectionHeaderDiv.appendChild(this.money);
    this.sectionHeader.appendChild(this.sectionHeaderDiv);
    this.eyeFigure.appendChild(this.eyeIcon);
    this.eyeButton.appendChild(this.eyeFigure);
    this.sectionHeader.appendChild(this.eyeButton);
    this.transactionItem.appendChild(this.name);
    this.transactionItem.appendChild(this.amount);
    this.transactionsList.appendChild(this.transactionItem);
    this.sectionLeft.appendChild(this.sectionHeader);
    this.sectionLeft.appendChild(this.transactionsList);
    this.sectionLeft.appendChild(this.transferButton);
    return this.sectionLeft;
  }
}

class RightSection {
  constructor() {
    this.sectionRight = document.createElement("section");
    this.sectionRight.className = "banky__section banky__section--right";
    this.accountsList = document.createElement("ul");
    this.accountsList.className = "banky__accounts";
    this.accountItem1 = document.createElement("li");
    this.accountItem1.className = "banky__account";
    this.accountSwitcher1 = document.createElement("button");
    this.accountSwitcher1.className = "banky__accountSwitcher";
    this.logoFigure1 = document.createElement("figure");
    this.logoFigure1.className = "banky__logo";
    this.houseIcon1 = document.createElement("i");
    this.houseIcon1.className = "fa-solid fa-house";
    this.accountName1 = document.createElement("h4");
    this.accountName1.className = "banky__accountName";
    this.accountName1.textContent = "Bankrekening";
    this.accountItem2 = document.createElement("li");
    this.accountItem2.className = "banky__account";
    this.accountSwitcher2 = document.createElement("button");
    this.accountSwitcher2.className = "banky__accountSwitcher";
    this.logoFigure2 = document.createElement("figure");
    this.logoFigure2.className = "banky__logo";
    this.mugHotIcon = document.createElement("i");
    this.mugHotIcon.className = "fa-solid fa-mug-hot";
    this.accountName2 = document.createElement("h4");
    this.accountName2.className = "banky__accountName";
    this.accountName2.textContent = "ZZP-Rekening";
  }

  render() {
    this.logoFigure1.appendChild(this.houseIcon1);
    this.accountSwitcher1.appendChild(this.logoFigure1);
    this.accountItem1.appendChild(this.accountSwitcher1);
    this.accountItem1.appendChild(this.accountName1);
    this.accountsList.appendChild(this.accountItem1);
    this.logoFigure2.appendChild(this.mugHotIcon);
    this.accountSwitcher2.appendChild(this.logoFigure2);
    this.accountItem2.appendChild(this.accountSwitcher2);
    this.accountItem2.appendChild(this.accountName2);
    this.accountsList.appendChild(this.accountItem2);
    this.sectionRight.appendChild(this.accountsList);
    return this.sectionRight;
  }
}

const header = new Header("body");
header.render();

const bankyMain = new BankyMain("body");
bankyMain.render();

const leftSection = new LeftSection();
bankyMain.main.appendChild(leftSection.render());

const rightSection = new RightSection();
bankyMain.main.appendChild(rightSection.render());
