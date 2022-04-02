const AdminController = require('../controllers/admin.controller');

module.exports = app => {
   
    app.get("/api/admin", AdminController.verCreations)
    app.post("/api/admin/create", AdminController.registerAdmin)
   
}
