let mongoose = require('mongoose');
let db = require('../common/db');

let selectModel = {

  getByCollectionName(collectionName) {

    let curModel = db.model(collectionName, new mongoose.Schema(), collectionName);

    return new Promise((resolve, reject) => {

      curModel.find({}, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  }
};

module.exports = selectModel;

