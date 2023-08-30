import express  from 'express'
import cors from 'cors'
import  'dotenv/config'

import NoteRouter from './routes/NoteRoutes.js'
import CategoryRouter from './routes/CategoryRoutes.js'

const PORT = process.env.PORT || 8000

const App = express()

App.use(cors())
App.use(express.json())
App.use('/notes', NoteRouter)
App.use('/categories', CategoryRouter)

App.listen( PORT, () => {console.log('Aplication is listening on port ' + PORT)})
