let gu = require('guthrie-js');
let masterController = new gu.controller.create();

masterController.actions = {
  index: {
    GET: function (req, res) {

      this.viewBag().title = 'epc-ng-backend';

      res.render('master/index');
    }
  }
};

module.exports = masterController;
