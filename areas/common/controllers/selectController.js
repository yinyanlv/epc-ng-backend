let gu = require('guthrie-js');
let selectController = new gu.controller.create();

selectController.actions = {
  index: {
    GET: function (req, res) {

      res.send({
        data: {
          success: true
        }
      });
    }
  }
};

module.exports = selectController;