const db = require('../models')
const Court = db.Court
const Op = db.Sequelize.Op

exports.findAllCourts = (req, res) => {
    Court.findAll({})
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}