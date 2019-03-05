import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class QoDStore {
  constructor() {
    this.questionofDay = null;
    this.loading = true;
  }
  fetchQoD() {
    axios
      .get("http://127.0.0.1:8000/api/last/")
      .then(res => res.data)
      .then(question => {
<<<<<<< HEAD
=======
        // console.log("Within store", question);
>>>>>>> master
        this.questionofDay = question;
        this.loading = false;
      })
      .catch(err => console.error(err));
<<<<<<< HEAD
=======
    // console.log("Within store", this.questionofDay);
>>>>>>> master
  }
}

decorate(QoDStore, {
  questionofDay: observable,
  loading: observable
});

const qod = new QoDStore();
qod.fetchQoD();
export default qod;
