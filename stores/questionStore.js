import { decorate, observable } from "mobx";
import axios from "axios";
class questionStore {
  constructor() {
    this.question = [];
    this.loading = true;
  }
  fetchQuestions() {
    axios
      .get("")
      .then(res => res.data)
      .then(question => {
        this.question = question;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
  }
}
decorate(questionStore, {
  question: observable,
  loading: observable
});

export default questionStore;
