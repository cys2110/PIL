const { Schema } = require('mongoose')

const DocTypeSchema = new Schema(
    {
        doc_type: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = DocTypeSchema