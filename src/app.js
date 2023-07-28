import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import userRoutes from './routes/rutas'

const app = express()

app.set('port', 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(
  express.urlencoded({ extended: false })
)

app.use(userRoutes)

export default app
