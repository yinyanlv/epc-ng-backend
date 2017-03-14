let mongoose = require('mongoose');
let db = require('../common/db');
let modelDbModel = db.model('model', new mongoose.Schema(), 'model');

let modelModel = {

  getCrumbs(params) {

    let resultConfig = {
      '_id': 0,
      'brandCode': !!params.brandCode,
      'brandName': !!params.brandCode,
      'seriesCode': !!params.seriesCode,
      'seriesName': !!params.seriesCode,
      'modelGroupCode': !!params.modelGroupCode,
      'modelGroupName': !!params.modelGroupCode,
      'modelCode': !!params.modelCode,
      'modelName': !!params.modelCode
    };

    return new Promise((resolve, reject) => {

      modelDbModel.find(params, resultConfig, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  }
};

module.exports = modelModel;

