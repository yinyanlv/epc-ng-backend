let gu = require('guthrie-js');
let selectModel = require('../../../models/selectModel');
let selectController = new gu.controller.create();

selectController.actions = {
  load: {
    GET: function* (req, res) {

      let collectionName = req.params.id;
      let data = yield selectModel.getByCollectionName(collectionName);

      res.send({
        data
      });
    }
  }
};

module.exports = selectController;