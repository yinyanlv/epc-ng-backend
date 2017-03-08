let gu = require('guthrie-js');
let selectModel = require('../../../models/selectModel');
let selectController = new gu.controller.create();
let selectMapping = require('../../../mapping/selectMapping');

selectController.actions = {
  load: {
    GET: function* (req, res) {

      let collectionName = req.params.id;
      let data = yield selectModel.getByCollectionName(collectionName);

      let temp = JSON.parse(data);
      data = selectMapping(temp);

      res.send({
        data
      });
    }
  }
};

module.exports = selectController;