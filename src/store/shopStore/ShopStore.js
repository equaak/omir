// import { makeAutoObservable } from "mobx";

// class ShopStore {
//   shop = {};

//   constructor() {
//     makeAutoObservable(this);
//   }

//   setShop(shop) {
//     this.shop = shop;
//   }

//   clearShop() {
//     this.shop = {};
//   }
// }

// const shopStore = new ShopStore();
// export default shopStore;

import { makeAutoObservable } from "mobx";

class OrderStore {
  order = [];

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(o) {
    this.order = o;
  }

  clearOrder() {
    this.order = [];
  }

  addNewOrder(newOrder){
    this.order.push(newOrder);
  }
}

const orderStore = new OrderStore();
export default orderStore;