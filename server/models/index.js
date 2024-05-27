const mongoose = require('mongoose')
const CaseSchema = require('./case')
const CourtSchema = require('./court')
const DocTypeSchema = require('./docType')
const DocumentSchema = require('./document')
const JudgeSchema = require('./judge')
const KeywordSchema = require('./keyword')
const StateSchema = require('./state')
const SubjectSchema = require('./subject')
const TreatySchema = require('./treaty')

const Case = mongoose.model('Case', CaseSchema)
const Court = mongoose.model('Court', CourtSchema)
const DocType = mongoose.model('DocType', DocTypeSchema)
const Document = mongoose.model('Document', DocumentSchema)
const Judge = mongoose.model('Judge', JudgeSchema)
const Keyword = mongoose.model('Keyword', KeywordSchema)
const State = mongoose.model('State', StateSchema)
const Subject = mongoose.model('Subject', SubjectSchema)
const Treaty = mongoose.model('Treaty', TreatySchema)

module.exports = {
    Case,
    Court,
    DocType,
    Document,
    Judge,
    Keyword,
    State,
    Subject,
    Treaty
}