const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocJudge extends Model {
        static associate () {
            const { Document, Judge } = models
            DocJudge.belongsTo(Document)
            DocJudge.belongsTo(Judge)
        }
    }

    DocJudge.init({
        role: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'DocJudge',
        timestamps: false
    })

    return DocJudge
}