const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Treaty extends Model {
        static associate () {
            const { TreatyParties, State, Court, Document, Keyword } = models
            Treaty.belongsToMany(State, {through: TreatyParties})
            Treaty.hasMany(TreatyParties)
            Treaty.hasMany(Court)
            Treaty.belongsToMany(Document, {through: 'TreatyCites'})
            Treaty.belongsToMany(Keyword, {through: 'TreatyKeyword'})
        }
    }

    Treaty.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sig_date: DataTypes.DATEONLY,
        effective_date: DataTypes.DATEONLY,
        location_signed: DataTypes.STRING,
        link: DataTypes.STRING,
        cite: DataTypes.STRING,
        text: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'Treaty',
        timestamps: false
    })

    return Treaty
}