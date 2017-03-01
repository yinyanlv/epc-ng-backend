let gu = require('guthrie-js');
let loginController = new gu.controller.create();

loginController.actions = {
  index: {
    POST: function (req, res) {

      if (req.body.username === 'admin' && req.body.password === '111111') {
        res.send({
          data: {
            success: true
          }
        });
      } else {
        res.send({
          data: {
            success: false
          }
        });
      }
    }
  }
};

module.exports = loginController;