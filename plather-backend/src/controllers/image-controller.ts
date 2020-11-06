import { Request, Response } from 'express'

import CreateImageService from '../services/create-image-service'

export default class ImageController {
  private createImage: CreateImageService

  public async create(request: Request, response: Response): Promise<Response> {
    const { path } = request.body

    this.createImage.execute(path)

    return response.json()
  }
}
