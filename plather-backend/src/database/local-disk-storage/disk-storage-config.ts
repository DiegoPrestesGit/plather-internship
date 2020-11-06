import fs from 'fs'
import path from 'path'

import uploadConfig from '../../config/upload'
import diskStorageInterface from './models/disk-storage-config-interface'

export default class diskStorageConfig implements diskStorageInterface {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tempFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file)
    )
    console.log('the file name is', file)
    return file
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      console.log('Unable to get the file')
    }

    await fs.promises.unlink(file)
  }
}
