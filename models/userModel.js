let mongoose = require('mongoose');
let db = require('../common/db');
let user = db.model('user', new mongoose.Schema(), 'user');

let userModel = {

  isExists(username, password) {

    return new Promise((resolve, reject) => {

      user.find({
        username,
        password
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        if (docs.length === 0) {
          resolve(false);
          return;
        }

        resolve(true);
      });
    });
  }
};

module.exports = userModel;

