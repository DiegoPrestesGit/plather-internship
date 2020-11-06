import {
  ObjectID,
  ObjectIdColumn,
  Entity,
  Column,
  CreateDateColumn
} from 'typeorm'

@Entity('image')
export default class Image {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  path: string

  @CreateDateColumn()
  created_at: Date
}
