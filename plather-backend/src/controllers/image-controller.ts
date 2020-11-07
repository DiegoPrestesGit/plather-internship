import { Request, Response } from 'express'

import CreateImageService from '../services/create-image-service'
import DeleteImageService from '../services/delete-image-service'

export default class ImageController {
  public async create(request: Request, response: Response): Promise<Response> {
    const fileName = request.file.filename
    const createImage = new CreateImageService()
    createImage.execute(fileName)

    return response.json()
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const path: string = request.body.path

    const deleteImage = new DeleteImageService()
    await deleteImage.execute(path)

    response.status(200).json()
  }
}
