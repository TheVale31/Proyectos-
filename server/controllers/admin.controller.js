const Admin= require('../models/admin.model');
const Creation= require ('../models/creation.model')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');

module.exports.verCreations = (req, res) => {
    console.log('Está funcionando!')
    Creation.find({})
        .then(allCreations => res.status(200).json({creations: allCreations}))
        .catch(err => res.status(400).json({message: 'Algo salió mal', error: err}));  
}
module.exports.test = (req,res) => {
    res.status(401).json({ msg: 'Usuario no autorizado'})
    }
  
  module.exports.registerAdmin = (req, res) => {
    Admin.find({})
      .then(allAdmins=>{
        console.log(allAdmins)
        if(allAdmins.length==0){
          console.log("está vacía")
          const admin = new Admin(req.body);
          admin.save()
          .then(() => {
          res.status(201).json({ msg: "Admin Registrado", admin: admin });
          })
          .catch(err => res.status(400).json(err));
        } else{
          res.status(500).json({ msg: "Error en la creacion" });
        
        }
       
      })
      // res.status(201).json({ msg: "Admin Registrado" });
    // const admin = new Admin(req.body);
    // admin.save()
    //   .then(() => {
    //       res.status(201).json({ msg: "Admin Registrado", admin: admin });
    //   })
    //   .catch(err => res.status(400).json(err));
  };

  module.exports.loginAdmin = (req, res) => {
    Admin.findOne({ email: req.body.email })
      .then(admin => {
        if (admin=== null) {
          res.status(400).json({ msg: "Acceso inválido" });
        } else {
          bcrypt
            .compare(req.body.password, admin.password)
            .then(passwordIsValid => {
              if (passwordIsValid) {
                  const payload = {
                      _id: admin._id
                  };
                  const myJWT = jwt.sign(payload, secret);
                res
                .cookie("usertoken", myJWT, secret, {
                    httpOnly: true
                  })
                  res.status(200).json({ msg: "Acceso Exitoso" });
              } else {
                res.status(400).json({ msg: "Intento de acceso inválido" });
              }
            })
            .catch(err => res.status(400).json({ msg: "Intento de acceso inválido" }));
        }
      })
      .catch(err => res.status(400).json(err));
  };  