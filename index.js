import express  from 'express'
import cors from 'cors'
import  'dotenv/config'

import CategoryRouter from './routes/CategoryRoutes.js'
import NoteRoutes from './routes/NoteRoutes.js'

const PORT = process.env.PORT || 8000

const App = express()

App.use(cors())
App.use(express.json())
App.use('/notes', NoteRoutes)
App.use('/categories', CategoryRouter)

App.listen( PORT, () => {console.log('Aplication is listening on port ' + PORT)})
