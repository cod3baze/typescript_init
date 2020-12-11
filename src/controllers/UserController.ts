import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const user = await User.findById(1)

    return response.json(user)
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const user = await User.create(request.body)

    console.log(user.firstName)
    console.log(user.fullName())

    return response.json(user)
  }
}

export default new UserController()
