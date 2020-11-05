import path from 'path'
import crypto from 'crypto'
import multer from 'multer'

const tempFolder = path.resolve(process.cwd(), '..', '..', 'temp')

export default {
  tempFolder,
  uploadsFolder: path.resolve(tempFolder, 'uploads'),
  directory: tempFolder,

  config: {
    multer: {
      storage: multer.diskStorage({
        destination: path.resolve(process.cwd(), '..', '..', 'temp'),
        filename(_, file, callback) {
          const fileHash = crypto.randomBytes(10).toString('hex')
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)
        }
      })
    }
  }
}
