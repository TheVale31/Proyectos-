const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

const AdminSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "*First name es requerido."]
    },

    email: {
      type: String,
      required: [true, "*Email es requerido."],
      unique: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/, "*Email no tiene el formato correcto."]
    },

    password: {
      type: String,
      required: [true, "*Password es requerida."],
      minlength: [6, "*Password debe tener al menos 6 caracteres."]
    }
  }, {timestamps: true});

  AdminSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

 AdminSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', '*Password y su confirmación deben ser iguales.');
    }
    next();
  });

 AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

  const Admin = mongoose.model("Admin", AdminSchema);
  AdminSchema.plugin(uniqueValidator, { message: '*Error, se espera que {VALUE} sea único.' });

  module.exports = Admin;