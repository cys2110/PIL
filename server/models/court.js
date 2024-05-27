const { Schema } = require('mongoose')

const CourtSchema = new Schema(
    {
        name: {type: String, required: true},
        abbr: {type: String, required: true},
        established: {type: Number, required: true},
        abolished: {type: Number, required: false},
        jx: {type: String, required: false},
        seat: {type: String, required: false},
        treaty_est: {type: Schema.Types.ObjectId, ref: 'Treaty'},
        statute: {type: Schema.Types.ObjectId, ref: 'Treaty'},
        rules: {type: Schema.Types.ObjectId, ref: 'Treaty'}
    },
    {timestamps: true}
)

module.exports = CourtSchema