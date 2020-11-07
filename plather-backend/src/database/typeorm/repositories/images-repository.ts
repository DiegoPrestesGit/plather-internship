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
    try {
      await this.ormRepository.findOneAndDelete({ path })
    } catch {
      throw new AppError('The delete catch', 500)
    }
  }
}
