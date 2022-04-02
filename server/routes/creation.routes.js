const CreationController = require('../controllers/creation.controller');


module.exports = app => {
   
    app.post("/api/creation", CreationController.createNewCreation)
   
}
