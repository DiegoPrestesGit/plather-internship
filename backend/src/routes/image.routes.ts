import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
import ImageController from '../controllers/image-controller'

const routes = Router()
const upload = multer(uploadConfig.config.multer)
const imageController = new ImageController()

routes.post('/', upload.single('image'), imageController.create)
routes.delete('/', imageController.delete)

export default routes
