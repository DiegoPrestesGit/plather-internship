export default interface DiskStorageInterface {
  saveFile(file: string): Promise<string>
  deleteFile(file: string): Promise<void>
}
