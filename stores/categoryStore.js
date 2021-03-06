import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({

  baseURL: "http://192.168.100.75:80"


});
class CategoryStore {
  constructor() {
    this.category = [];
  }

  fetchCategory() {
    instance
      .get("/api/category/")
      .then(res => res.data)
      .then(items => {
        this.category = items;
      })
      .catch(err => console.error(err));
  }
}

decorate(CategoryStore, { category: observable });

const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
