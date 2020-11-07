import { Request, Response } from 'express'

import CreateImageService from '../services/create-image-service'
import AppError from '../errors/app-error'

export default class ImageController {
  public async create(request: Request, response: Response): Promise<Response> {
    const fileName = request.file.filename
    const createImage = new CreateImageService()
    createImage.execute(fileName)

    return response.json()
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.status(200)
  }
}
