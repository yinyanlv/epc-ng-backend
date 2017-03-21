let gu = require('guthrie-js');
let masterController = new gu.controller.create();

masterController.actions = {
  index: {
    GET: function (req, res) {

      this.viewBag().title = 'epc-ng-server';

      res.redirect('index.html');
    }
  }
};

module.exports = masterController;
