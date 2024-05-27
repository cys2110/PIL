const { Schema } = require('mongoose')

const CaseSchema = new Schema(
    {
        case_no: {type: String, required: false},
        title: {type: String, required: true},
        court: {type: Schema.Types.ObjectId, ref: 'Court'},
        instituted: {type: Date, required: false},
        culmination: {type: Date, required: false},
        case_type: {type: String, required: false},
        subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
        non_state_apps: [{type: String, required: false}],
        state_apps: [{type: Schema.Types.ObjectId, ref: 'State'}],
        respondents: [{type: Schema.Types.ObjectId, ref: 'State'}]
    },
    {timestamps: true}
)

module.exports = CaseSchema