let gu = require('guthrie-js');
let brandSeriesModelModel= require('../../../models/brandSeriesModelModel');
let modelController = new gu.controller.create();

modelController.actions = {
  getList: {
    GET: function* (req, res) {

      let data = yield brandSeriesModelModel.getModelList(req.query);

      res.send({
        data
      });
    }
  }
};

module.exports = modelController;