import fs from 'fs'
import path from 'path'

import uploadConfig from '../../config/upload'
import diskStorageInterface from './models/disk-storage-config-interface'

export default class diskStorageConfig implements diskStorageInterface {
  public async saveFile(file: string): Promise<string> {
    console.log('proces', process.cwd())
    await fs.promises.rename(
      path.resolve(uploadConfig.tempFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file)
    )
    console.log('passou aqui também')
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
