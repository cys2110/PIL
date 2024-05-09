const db = require('../models')
const TreatyFullText = db.TreatyFullText
const Op = db.Sequelize.Op

exports.findTreatyText = (req, res) => {
    TreatyFullText.findByPk(1)
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}