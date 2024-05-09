const db = require('../models')
const TreatyText = db.TreatyText
const Op = db.Sequelize.Op

exports.findTreatyText = (req, res) => {
    TreatyText.findAll({
        where: {
            TreatyId: 1
        },
        order: [['id', 'ASC']]
    })
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}