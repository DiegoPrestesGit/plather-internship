import path from 'path'
import crypto from 'crypto'
import multer from 'multer'

export default {
  tempFolder: path.resolve(process.cwd(), 'uploads'),

  config: {
    multer: {
      storage: multer.diskStorage({
        destination: path.resolve(process.cwd(), 'uploads'),
        filename(_, file, callback) {
          const fileHash = crypto.randomBytes(10).toString('hex')
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)
        }
      })
    }
  }
}
