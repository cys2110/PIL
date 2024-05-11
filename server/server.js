const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 8080

const db = require('./models')
// db.Document.sync({alter: true})
//     .then(() => {
//         console.log('Synced db')
//     })
//     .catch((err) => {
//         console.log("Failed to sync db:" + err.message)
//     })

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

const treatyTextController = require('./controllers/treatyTextController')

app.get('/', (req, res) => res.send('This is the root!'))
app.get('/test', treatyTextController.findTreatyText)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))