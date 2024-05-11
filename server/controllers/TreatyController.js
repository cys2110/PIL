const db = require('../models')
const Treaty = db.Treaty
const Op = db.Sequelize.Op

exports.findTreaties = (req, res) => {
    Treaty.findAll({
        order: [['title', 'ASC']]
    })
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}

exports.findTreatyByPk = (req, res) => {
    const { id } = req.params
    Treaty.findByPk(id)
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}