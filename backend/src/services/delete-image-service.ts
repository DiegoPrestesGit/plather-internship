import fs from 'fs'
import path from 'path'

import uploadConfig from '../config/upload'
import AppError from '../errors/app-error'

import ImagesRepository from '../database/local-disk-storage/disk-storage-config'
import ImagesDataBase from '../database/typeorm/repositories/images-repository'

export default class DeleteImageService {
  public async execute(file: string): Promise<void> {
    const imagesDiskRepository = new ImagesRepository()
    const imagesDataBase = new ImagesDataBase()

    if (fs.existsSync(path.resolve(uploadConfig.tempFolder, file))) {
      await imagesDiskRepository.deleteFile(file)
    } else {
      throw new AppError('Sorry, unable to find the file')
    }
    await imagesDataBase.delete(file)
  }
}
