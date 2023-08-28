import express  from 'express'
import noteRouter from './routes/NoteRoutes.js'
import categoryRouter from './routes/CategoryRoutes.js'
import dataBaseConnection from './database/connection.js'
import cors from 'cors'

const App = express()

App.use(cors())
App.use(express.json())
App.use('/notes', noteRouter)
App.use('/categories', categoryRouter)

try {
    dataBaseConnection.authenticate()
    console.log('successfully connected')
} catch (error) {
    console.log('cannot connecet at tihs moment')
}

App.get('/', (req, res) => {
    res.send('hello world')
})

App.listen(8000, () => {console.log('Aplication is listening at http://localhost:8000')})
