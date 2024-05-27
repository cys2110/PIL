const { Schema } = require('mongoose')

const SubjectSchema = new Schema(
    {
        subject: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = SubjectSchema