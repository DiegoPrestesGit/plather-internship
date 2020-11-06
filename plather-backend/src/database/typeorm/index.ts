import { createConnection, Connection } from 'typeorm'

export default async function createConnectionMongo(): Promise<Connection> {
  const connection: Connection = await createConnection({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'mongo-plather'
  })

  return connection
}
