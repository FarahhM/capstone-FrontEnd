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
    this.profile = [];
    this.loadingUser = true;
    this.loadingProfile = true;
    this.userProfile = [];
    this.checkForToken();
  }

  userInformations() {
    this.loadingProfile = true;
    instance
      .get("/api/userprofile/")
      .then(res => res.data)
      .then(profile => {
        this.profile = profile;
        console.log(profile);
        setTimeout(() => (this.loadingProfile = false), 200);

        console.log("whats going on here?", this.profile.length);
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
        // console.log(jwt_decode(token));
        commentStore.getLike();
        this.userInformations();
        this.loadingUser = false;
      });
    } else {
      console.log("Im logged out");
      return AsyncStorage.removeItem("myToken").then(() => {
        delete axios.defaults.headers.common.Authorization;
        this.user = null;
        this.loadingUser = true;
        this.loadingProfile = true;
      });
    }
  }

  loginUser(userData, navigation) {
    this.loadingUser = true;
    instance
      .post("/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        this.setAuthToken(user.token);
      })
      .then(() => {
        navigation.navigate("LoginCheck");
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
    this.profile = [];
    this.user = null;
    this.userProfile = [];
    this.loadingProfile = true;
    this.loadingUser = true;
    navigation.navigate("Login");
  }
}

decorate(AuthStore, {
  user: observable,
  profile: observable,
  userProfile: observable,
  loadingUser: observable,
  loadingProfile: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
