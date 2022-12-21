const express = require('express')
const session = require('express-session')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const PlayersRouter = require('./routes/PlayersRouter')
const TeamRouter = require('./routes/TeamsRouter')
const UserRouter = require('./routes/UsersRouter')
const UserPlayersRouter = require('./routes/UserPlayersRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitalized: false,
    secret: 'session',
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: 'none',
      secure: true
    }
  })
)

// app.post('/new', async (req, res) => {
//   try {
//     const cook = req.body.name
//     req.session.name = cook
//     res.send({ message: 'saves' }).status(201)
//   } catch (error) {
//     console.log(error)
//   }
// })

//routes
app.use('/auth', AuthRouter)
app.use('/players', PlayersRouter)
app.use('/teams', TeamRouter)
app.use('/users', UserRouter)
app.use('/userplayers', UserPlayersRouter)

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
