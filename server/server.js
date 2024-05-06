const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const PORT = process.env.PORT || 8080

const dotenv = require('dotenv')
dotenv.config()
const db = require('./models')
db.sequelize.sync({})
    .then(() => {
        console.log('Synced db')
    })
    .catch((err) => {
        console.log("Failed to sync db:" + err.message)
    })

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false
}))

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' })
      }
      req.user = decoded
      next()
    })
  }
  
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await db.User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log('Invalid username or password')
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    console.log('Token generated successfully:', token)

    res.json({ token, user })
  } catch (error) {
    console.error('Error during login:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Protected route that requires JWT authentication
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route', user: req.user })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))