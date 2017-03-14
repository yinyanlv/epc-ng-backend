let gu = require('guthrie-js');
let brandSeriesModelModel= require('../../../models/brandSeriesModelModel');
let seriesController = new gu.controller.create();

seriesController.actions = {
  getList: {
    GET: function* (req, res) {

      let data = yield brandSeriesModelModel.getBrandSeriesList();

      res.send({
        data
      });
    }
  }
};

module.exports = seriesController;