import { makeAutoObservable } from "mobx";

class UserStore {
  user = {
    name: "",
    email: "",
    product: []
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  clearUser() {
    this.user = {
      name: "",
      email: ""
    };
  }
}

const userStore = new UserStore();
export default userStore;