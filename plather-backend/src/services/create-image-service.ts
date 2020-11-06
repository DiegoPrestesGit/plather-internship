import ImagesRepository from '../database/local-disk-storage/disk-storage-config'
import ImagesDataBase from '../database/typeorm/repositories/images-repository'

export default class CreateImageService {
  private imageRepository: ImagesRepository
  private imagesDataBase: ImagesDataBase

  public async execute(path: string): Promise<string> {
    const imagePath = await this.imageRepository.saveFile(path)
    this.imagesDataBase.create(imagePath)
    console.log('imagePath', imagePath)
    return imagePath
  }
}
