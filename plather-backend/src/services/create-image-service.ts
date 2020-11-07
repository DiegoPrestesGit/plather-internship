import ImagesRepository from '../database/local-disk-storage/disk-storage-config'
import ImagesDataBase from '../database/typeorm/repositories/images-repository'
import AppError from '../errors/app-error'

export default class CreateImageService {
  public async execute(file: string): Promise<string> {
    const imagesDiskRepository = new ImagesRepository()
    const imagesDataBase = new ImagesDataBase()

    const imagePath = await imagesDiskRepository.saveFile(file)
    imagesDataBase.create(imagePath)

    return imagePath
  }
}
