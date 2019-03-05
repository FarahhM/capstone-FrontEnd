import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class AuthStore {
  constructor() {
    this.user = null;
  }

  setAuthToken(token) {
    if (token) {
      return AsyncStorage.setItem("myToken", token).then(() => {
        axios.defaults.headers.common.Authorization = `jwt ${token}`;

        this.user = jwt_decode(token);
        console.log(jwt_decode(token));
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

        navigation.replace("QoD");
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
      .catch(err => {
        console.log("Invalid Login Information", err),
          alert("Invalid Register ");
      });
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
  userInformations() {
    instance
      .get("/api/profile/", userData)
      .then(res => res.data)

      .then(console.log(userData))
      // .then(user => {
      //   this.loginUser(userData, navigation);
      // })
      .catch(err => {
        console.log("Invalid Login Information", err),
          alert("Invalid Register ");
      });
  }

  logoutUser(navigation) {
    this.setAuthToken();
    navigation.replace("Login");
  }
}

decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
