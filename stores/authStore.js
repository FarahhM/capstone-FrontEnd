import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import commentStore from "./commentStore";

const instance = axios.create({

  baseURL: "http://192.168.100.75:80"

});

class AuthStore {
  constructor() {
    this.user = null;
    this.profile = null;
    this.loading = true;
    this.userProfile = null;
    this.checkForToken();
  }

  userInformations() {
    this.loading = true;
    instance
      .get("/api/userprofile/")
      .then(res => res.data)
      .then(profile => {
        this.profile = profile;
        this.loading = false;

        console.log(this.profile);
      })
      .catch(err => {
        console.log("Invalid Login Information", err),
          alert("Invalid Register ");
      });
  }

  setAuthToken(token) {
    if (token) {
      return AsyncStorage.setItem("myToken", token).then(() => {
        axios.defaults.headers.common.Authorization = `jwt ${token}`;

        this.user = jwt_decode(token);
        console.log(jwt_decode(token));
        commentStore.getLike();
      });
    } else {
      return AsyncStorage.removeItem("myToken").then(() => {
        delete axios.defaults.headers.common.Authorization;
        this.user = null;
      });
    }
  }

  loginUser(userData, navigation) {
    instance
      .post("/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        this.setAuthToken(user.token);

        navigation.navigate("BottomTab");
      })
      .catch(err => {
        console.log("Invalid Login Information", err),
          alert("Invalid Login Information");
      });
  }

  signupUser(userData, navigation) {
    instance
      .post("/api/register/", userData)
      .then(res => res.data)
      .then(user => {
        this.loginUser(userData, navigation);
      })
      .catch(err => console.error(err));
  }

  checkForToken() {
    return AsyncStorage.getItem("myToken").then(token => {
      if (token) {
        const user = jwt_decode(token);
        if (user.exp > Date.now() / 1000) {
          this.setAuthToken(token);
        } else {
          this.setAuthToken();
        }
      }
    });
  }

  logoutUser(navigation) {
    this.setAuthToken();
    navigation.navigate("BottomTab");
  }
}

decorate(AuthStore, {
  user: observable,
  loading: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
