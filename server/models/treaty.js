const { Schema } = require('mongoose')

const TreatySchema = new Schema(
    {
        title: {type: String, required: true},
        sig_date: {type: Date, required: false},
        effective_date: {type: Date, required: false},
        location_signed: {type: String, required: false},
        link: {type: String, required: false},
        cite: {type: String, required: false},
        text: {type: String, required: false},
        keywords: [{type: Schema.Types.ObjectId, ref: 'Keyword'}],
        parties: [{
            state: {type: Schema.Types.ObjectId, ref: 'State'},
            signed: {type: Date, required: false},
            ratified: {type: Date, required: false},
            reservation: {type: String, required: false},
            declaration: {type: String, required: false}
        }]
    },
    {timestamps: false}
)

module.exports = TreatySchema