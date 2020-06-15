const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 8080

const MONGODB_URI = 'mongodb://asifahmed:01640803058@mernapp-shard-00-00-did5n.mongodb.net:27017,mernapp-shard-00-01-did5n.mongodb.net:27017,mernapp-shard-00-02-did5n.mongodb.net:27017/test?ssl=true&replicaSet=mernApp-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
})

mongoose.connection.on('connected', () => {
    console.log("CONNECTED !!!!!!")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(morgan('tiny'))
app.use('/api', routes)
app.listen(PORT, console.log(`Server is staring at ${PORT}`))