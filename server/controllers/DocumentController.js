const db = require('../models')
const Document = db.Document
const Op = db.Sequelize.Op

exports.findDocumentByPk = (req, res) => {
    const { id } = req.params
    Document.findByPk(id)
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error.message))
}