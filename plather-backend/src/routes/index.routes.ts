import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (_: Request, response: Response) => {
  console.log('xama no bresque')

  const xqdl = {
    bresque: 'deregue',
    deregue: 'bresque'
  }

  return response.json(xqdl)
})

export default routes
