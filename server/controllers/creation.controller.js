const Creation = require('../models/creation.model');

module.exports.createNewCreation = (req,res) => {
    console.log('Está funcionando!')
    Creation.create(req.body)
        .then(newCreation => res.status(201).json({creation: newCreation}))
        .catch(err => res.status(400).json(err));
}