// DEPENDENCIES
const express = require('express')
const app = express()

const { sequelize } = require('./models/index')
// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, async () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
    try {
       await sequelize.authenticate() 
        console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
    } catch(err) {
        console.log(`Unable to connect to PG: ${err}`) 
    }
})