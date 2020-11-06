import { getMongoRepository, MongoRepository } from 'typeorm'
import createMongoConnection from '../index'

import Image from '../schemas/image'

export default class ImagesRepository {
  private ormRepository: MongoRepository<Image>

  public async create(path: string): Promise<Image> {
    console.log('aqui chega')
    await createMongoConnection()
    console.log('chegoo')
    this.ormRepository = getMongoRepository(Image)

    const image = this.ormRepository.create({ path })

    await this.ormRepository.save(image)

    return image
  }

  public async delete(path: string): Promise<void> {
    await this.ormRepository.findOneAndDelete({ path })
  }
}
