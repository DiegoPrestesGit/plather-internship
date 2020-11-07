import { getMongoRepository, MongoRepository } from 'typeorm'

import Image from '../schemas/image'
import AppError from '../../../errors/app-error'

export default class ImagesRepository {
  private ormRepository: MongoRepository<Image>

  public async create(path: string): Promise<Image> {
    this.ormRepository = getMongoRepository(Image)
    const image = this.ormRepository.create({ path })
    await this.ormRepository.save(image)

    return image
  }

  public async delete(path: string): Promise<void> {
    this.ormRepository = getMongoRepository(Image)
    const finded = await this.ormRepository.findOne({ path })
    if (finded) {
      await this.ormRepository.delete({ path })
    } else {
      throw new AppError('Unable to find the file')
    }
  }
}
