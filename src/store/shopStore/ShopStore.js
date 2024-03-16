import { makeAutoObservable } from "mobx";

class ShopStore {
  shop = {};

  constructor() {
    makeAutoObservable(this);
  }

  setShop(shop) {
    this.shop = shop;
  }

  clearShop() {
    this.shop = {};
  }
}

const shopStore = new ShopStore();
export default shopStore;