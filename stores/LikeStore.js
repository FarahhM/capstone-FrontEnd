import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class LikeStore {
  constructor() {
    this.likedComments = [];
    this.comments = [];
    this.loading = true;
  }

  addComment(comment) {
    instance
      .post("/api/comment/")
      .then(res => res.data)
      .then(comment => comment)
      .catch(err => console.error(err.response));
  }
  postLike(commentID) {
    let liked = "liked";
    let unliked = "unliked";
    let found = this.likedComments.find(item => item === commentID);

    instance
      .post("/api/vote/", commentID)
      .then(res => res.data)
      .then(like => like)
      .catch(err => console.error(err.response));

    if (found) {
      return unliked;
    } else {
      this.likedComments.push(commentID);
      return liked;
    }
  }
}
decorate(LikeStore, {
  question: observable,
  loading: observable
});

export default LikeStore;
