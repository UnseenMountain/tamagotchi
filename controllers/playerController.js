const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log("CREATE");
        db.Player
            .create({ playerId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        console.log('FIND ALL')
        db.Player
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        console.log('FIND BY ID', req.params.id);
        db.Player
            .find({ playerId: req.params.id })
            .then(dbPlayer => res.json(dbPlayer))
            .catch(err => {
                console.log("err::", err);
                res.status(422).json(err)
            });
    },
    update: function (req, res) {
        db.Player
            .findOneAndUpdate({ playerId: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};