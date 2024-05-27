const db = require('../db')
const { State } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const states = [
        {
            short_name: 'Afghanistan',
            off_name: 'Islamic Emirate of Aghanistan'
        }
    ]
    await State.insertMany(states)
    console.log('inserted')
}

const run = async() => {
    await main()
    db.close()
}

run()