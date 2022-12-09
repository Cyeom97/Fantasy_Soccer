const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PlayersRouter = require('./routes/PlayersRouter')
const TeamRouter = require('./routes/TeamsRouter')
const UserRouter = require('./routes/UsersRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/auth', AuthRouter)
app.use('/players', PlayersRouter)
app.use('/teams', TeamRouter)
app.use('/users', UserRouter)

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
