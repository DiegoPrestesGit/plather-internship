import { Request, Response } from 'express'

import CreateImageService from '../services/create-image-service'

export default class ImageController {
  public async create(request: Request, response: Response): Promise<Response> {
    const fileName = request.file.filename
    console.log('imaggge', request.file)
    const createImage = new CreateImageService()
    createImage.execute(fileName)
    // const fileName = request.file.filename

    return response.json()
  }
}
