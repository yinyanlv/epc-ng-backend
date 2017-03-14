let mongoose = require('mongoose');
let db = require('../common/db');
let brandSeriesModel = db.model('brandSeriesModel', new mongoose.Schema(), 'brandSeriesModel');

let brandSeriesModelModel = {

  getBrandSeriesList() {

    return new Promise((resolve, reject) => {

      brandSeriesModel.find({

      }, {
        _id: 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  },

  getCrumbs(params) {

    if (!params.brandCode) return Promise.resolve({});
    if (!params.seriesCode) return Promise.resolve({});

    let queryObj = {
      'code': params.brandCode,
      'series.code': params.seriesCode
    };

    if (params.modelGroupCode) queryObj['series.code.modelGroups.code'] = params.modelGroupCode;
    if (params.modelCode) queryObj['series.code.modelGroups.code.models.code'] = params.modelCode;

    return new Promise((resolve, reject) => {

      brandSeriesModel.find(queryObj, {
        _id: 0
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  },

  getModelList(params) {

    if (!params.brandCode) return Promise.resolve({});
    if (!params.seriesCode) return Promise.resolve({});

    let queryObj = {
      'code': params.brandCode,
      'series.code': params.seriesCode
    };

    return new Promise((resolve, reject) => {

      brandSeriesModel.find(queryObj, {
        'series.modelGroups': 1
      }, (err, docs) => {

        if (err) {
          reject(err);
          return;
        }

        resolve(docs);
      });
    });
  }
};

module.exports = brandSeriesModelModel;

