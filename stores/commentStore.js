import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({

  baseURL: "http://192.168.100.75:80"

});

class CommentStore {
  constructor() {
    this.likedComments = [];

    this.items = null;
    this.count = 0;
    this.loading = true;
    this.trans = "transparent";
  }

  addComment(comment) {
    instance
      .post("/api/comment/", comment)
      .then(res => res.data)
      .then(comment => comment)
      .then(() => this.getComment())
      .catch(err => console.error(err));
  }
  postLike(commentID) {
    instance
      .post("/api/vote/", commentID)
      .then(res => res.data)
      .then(like => like)
      .then(() => this.getLike())
      .catch(err => console.error(err.response));
  }
  deleteComment(commentID) {
    instance
      .delete(`/api/comment/${commentID}/delete/`)
      .then(res => res.data)
      .then(commnent => commnent)
      .then(this.getLike())

      .catch(err => console.error(err.response));
  }

  getLikesCount(commentID) {
    instance
      .post("/api/vote/number", commentID)
      .then(res => res.data)
      .then(count => {
        console.log("count", count);

        this.count = count;
      })
      .catch(err => console.error(err.response));
    return this.count;
  }

  getComment() {
    instance
      .get("/api/last/")
      .then(res => res.data)
      .then(data => {
        this.items = data;
        this.loading = false;
      })
      .catch(err => console.error(err.response));
  }

  getLike() {
    instance
      .get("/api/vote/user")
      .then(res => res.data)
      .then(data => {
        this.likedComments = data;
        this.loading = false;
      })
      .catch(err => console.log(err));
  }
}

decorate(CommentStore, {
  likedComments: observable,
  items: observable,
  loading: observable
});

const comment = new CommentStore();
comment.getComment();
export default comment;
