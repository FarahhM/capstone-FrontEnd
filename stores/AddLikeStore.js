import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class AddLikeStore {
  constructor() {
    this.likedComments = [];
    this.comments = [];
    this.loading = true;
  }

  addComment(comment) {
    instance
      .post("/api/comment/", comment)
      .then(res => res.data)
      .then(comment => {
        this.comments.push(comment);
      })
      .catch(err => console.error(err.response));
    // console.log(comment);
  }

  postLike(commentID) {
    // console.log("comment ID", commentID);
    let liked = "liked";
    let unliked = "unliked";
    let found = this.likedComments.find(item => item === commentID);

    instance
      .post("/api/vote/", commentID)
      .then(res => res.data)
      .then(like => {
        this.likedComments.push(like);
      })
      .catch(err => console.error(err.response));

    if (found) {
      return unliked;
    } else {
      this.likedComments.push(commentID);
      return liked;
    }
  }
}
decorate(AddLikeStore, {
  likedComments: observable,
  comments: observable,
  loading: observable
});

export default AddLikeStore;
