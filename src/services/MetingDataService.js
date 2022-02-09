import firebase from "../firebase";

const db = firebase.ref("/metingen");

class MetingDataService {
  getAll() {
    return db;
  }

  create(meting) {
    return db.push(meting);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new MetingDataService();
