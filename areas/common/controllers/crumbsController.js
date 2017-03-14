let gu = require('guthrie-js');
let brandSeriesModelModel= require('../../../models/brandSeriesModelModel');
let crumbsController = new gu.controller.create();

crumbsController.actions = {
  load: {
    GET: function* (req, res) {

      let data = yield brandSeriesModelModel.getCrumbs(req.query);

      res.send({
        data
      });
    }
  }
};

module.exports = crumbsController;