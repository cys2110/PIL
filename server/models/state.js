const { Schema } = require('mongoose')

const StateSchema = new Schema (
    {
        short_name: {type: String, required: false},
        off_name: {type: String, required: true},
        formerly: [{type: String, required: false}]
    },
    {timestamps: true}
)

module.exports = StateSchema