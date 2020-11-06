import { getMongoRepository, MongoRepository } from 'typeorm'

import Image from '../schemas/image'

export default class ImagesRepository {
  private ormRepository: MongoRepository<Image>

  constructor() {
    this.ormRepository = getMongoRepository(Image, 'mongoRepo')
  }

  public async create(path: string): Promise<Image> {
    const image = this.ormRepository.create({ path })

    await this.ormRepository.save(image)

    return image
  }

  public async delete(path: string): Promise<void> {
    await this.ormRepository.findOneAndDelete({ path })
  }
}
