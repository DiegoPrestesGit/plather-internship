import express, { Request, Response } from 'express'
import cors from 'cors'

import AppError from './errors/app-error'
import routes from './routes/index.routes'

import './database/typeorm/index'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.log(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

app.listen(3000, () => {
  console.log('all right')
})
