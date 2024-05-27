const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db