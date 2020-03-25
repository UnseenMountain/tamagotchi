const db = require("../models");

module.exports = {

    create: function (req, res) {
        db.Pet
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        console.log('FIND ALL')
        db.Pet
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log('FIND BY ID', req.params.id);
        db.Pet
            .find({ _id: req.params.id })
            .then(res => res.json(res))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Pet
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};