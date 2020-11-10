import fs from 'fs'
import path from 'path'

import uploadConfig from '../../config/upload'
import AppError from '../../errors/app-error'
import diskStorageInterface from './models/disk-storage-config-interface'

export default class diskStorageConfig implements diskStorageInterface {
  public async saveFile(file: string): Promise<string> {
    return file
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.tempFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      throw new AppError('Unable to get file')
    }
    await fs.promises.unlink(filePath)
  }
}
