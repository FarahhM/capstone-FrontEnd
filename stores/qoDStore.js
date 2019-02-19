import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class QoDStore {
  constructor() {
    this.question = [];
    this.loading = true;
  }
  fetchQoD() {
    axios
      .get("/")
      .then(res => res.data)
      .then(question => {
        this.question = question;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
  }
}
decorate(QoDStore, {
  question: observable,
  loading: observable
});

export default QoDStore;
