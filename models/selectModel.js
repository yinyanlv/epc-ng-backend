let mongoose = require('mongoose');
let db = require('../common/db');

let selectModel = {

  getByCollectionName(collectionName) {

    let curModel = db.model(collectionName, new mongoose.Schema(), collectionName);

    return new Promise((resolve, reject) => {

      curModel.find({}, {
        _id: 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(JSON.stringify(docs));
      });
    });
  }
};

module.exports = selectModel;

