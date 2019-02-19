import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class QuestionStore {
  constructor() {
    this.items = [];
    this.fetchedItem = null;
    this.loading = true;
    this.search = "";
  }

  fetchAllItems() {
    instance
      .get("/api/list/")
      .then(res => res.data)
      .then(items => {
        this.items = items;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }

  fetchItemByID(categoryID) {
    let item = this.items.filter(item => item.category_id === categoryID);
    if (item) {
      this.loading = false;
      this.fetchedItem = item;
    }
    return item;
  }

  get filteredItems() {
    return this.items.filter(item =>
      `${item.name}`.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

decorate(QuestionStore, {
  items: observable,
  loading: observable,
  search: observable,
  fetchedItem: observable,
  filteredItems: computed
});

const questionStore = new QuestionStore();
questionStore.fetchAllItems();
export default questionStore;
