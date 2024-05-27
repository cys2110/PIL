const { Schema } = require('mongoose')

const DocumentSchema = new Schema(
    {
        title: {type: String, required: false},
        case: [{type: Schema.Types.ObjectId, ref: 'Case'}],
        date: {type: Date, required: false},
        doc_type: [{type: Schema.Types.ObjectId, ref: 'DocType'}],
        cite: {type: String, required: false},
        judges: [{
            judge: {type: Schema.Types.ObjectId, ref: 'Judge'},
            role: {type: String, required: false}
        }],
        link: {type: String, required: false},
        conclusions: [{type: String, required: false}],
        text: {type: String, required: false},
        treaty_cites: [{type: Schema.Types.ObjectId, ref: 'Treaty'}],
        doc_cites: [{type: Schema.Types.ObjectId, ref: 'Document'}],
        keywords: [{type: Schema.Types.ObjectId, ref: 'Keyword'}]
    },
    {timestamps: true}
)

module.exports = DocumentSchema