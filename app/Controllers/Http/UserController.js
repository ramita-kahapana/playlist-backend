'use strict'

const UserModel = use('App/Models/User')

class UserController {
  async index () {
    const userData = await UserModel.all()
    return { status: 200, data: userData}
  }
  async show ({ request }) {
    const { id } = request.params;
    const userData = await UserModel.find
    return { status: 200, data: userData}
  }
  async store ({ request }) {
    const { email, username, password } = request.body
    const userData = await UserModel.create({email,username,password})
    return { status: 200, data: userData}
  }
  async login({request, auth}) {
    const { email, password } = request.body
      try {
        if (await auth.attempt(email, password)) {
          let userEmail = await UserModel.find({email})
          let accessToken = await auth.generate(userEmail)
          return ({status:200, data: userEmail, token: accessToken})
        }
      }
      catch (err) {
        return ({message: 'Failed'})
    }
  }
}

module.exports = UserController
