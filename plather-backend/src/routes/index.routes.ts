import { Router } from 'express'

import imageRoutes from './image.routes'

const routes = Router()

routes.use('/', imageRoutes)

export default routes
