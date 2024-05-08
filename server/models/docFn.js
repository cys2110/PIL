const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocFn extends Model {
        static associate () {
            const { DocText } = models
            DocFn.belongsTo(DocText)
        }
    }

    DocFn.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        md_text: DataTypes.TEXT,
        plain_text: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'DocFn'
    })

    return DocFn
}