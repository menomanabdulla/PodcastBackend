const express = require('express')
const app = express()
const port = process.env.PORT||3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//DB-Connection
const dbURL = 'mongodb://menomanabdulla:noman123321BAPPY@ds121861.mlab.com:21861/rest-mvc'
mongoose.connect(
  dbURL,
  {
    'useNewUrlParser': true,
    'useUnifiedTopology': true 
  }
)
  .then(res => console.log(`DB Connected`))
  .catch(err=>console.log(err))


const podcastRouter = require('./api/route')


//middlewire
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/podcast',podcastRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})