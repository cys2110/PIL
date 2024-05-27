const { Schema } = require('mongoose')

const JudgeSchema = new Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        courts: [{
            court: {type: Schema.Types.ObjectId, ref: 'Court'},
            roles: [{
                role: {type: String, required: false},
                start_year: {type: Number, required: false},
                end_year: {type: Number, required: false}
            }]
        }]
    },
    {timestamps: true}
)

module.exports = JudgeSchema