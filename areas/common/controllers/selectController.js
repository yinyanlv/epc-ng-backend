let gu = require('guthrie-js');
let selectController = new gu.controller.create();


selectController.actions = {
  index: {
    GET: function (req, res) {

      let selectName = req.params.id;

      res.send({
        data: {
          success: true
        }
      });
    }
  }
};

module.exports = selectController;