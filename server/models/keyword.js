const { Schema } = require('mongoose')

const KeywordSchema = new Schema(
    {
        keyword: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = KeywordSchema