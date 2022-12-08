const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PlayersRouter = require('./routes/PlayersRouter')
const TeamRouter = require('./routes/TeamsRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/players', PlayersRouter)
app.use('/teams', TeamRouter)

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
