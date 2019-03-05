import { decorate, observable } from "mobx";
import axios from "axios";
import authStore from "./authStore";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class QoDStore {
  constructor() {
    this.questionofDay = null;
    this.loading = true;
  }
  fetchQoD() {
    // AsyncStorage.getItem("myToken").then(token => {
    //   console.log("MY TOKEN", token);
    // });

    instance
      .get("/api/last/")
      .then(res => res.data)
      .then(question => {
        // console.log("Within store", question);
        this.questionofDay = question;
        this.loading = false;
      })
      .catch(err => console.error(err));
    // console.log("Within store", this.questionofDay);
  }
}

decorate(QoDStore, {
  questionofDay: observable,
  loading: observable
});

const qod = new QoDStore();
qod.fetchQoD();
export default qod;
