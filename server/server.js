const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 8080

const db = require('./models')
// db.sequelize.sync()
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

// Controllers
const treatyController = require('./controllers/TreatyController')
const documentController = require('./controllers/DocumentController')
const courtController = require('./controllers/CourtController')

// Endpoints
app.get('/', (req, res) => res.send('This is the root!'))

app.get('/treaties', treatyController.findTreaties)
app.get('/treaties/id/:id', treatyController.findTreatyByPk)

app.get('/courts', courtController.findAllCourts)

app.get('/documents/id/:id', documentController.findDocumentByPk)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))