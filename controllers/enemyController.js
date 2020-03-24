const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.Enemy
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Enemy 
        .find(req.params.id)
        .then(res => res.json(res))
        .catch(err => res.status(422).json(err));
    },


    update: function (req, res) {
        db.Enemy
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Enemy
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }


};