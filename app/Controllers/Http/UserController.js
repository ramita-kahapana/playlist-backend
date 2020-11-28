'use strict'

const UserModel = use('App/Models/User')
const hash = use('Hash')

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
  async login({ request }) {
    const { email, password } = request.body
    const userData = await UserModel.find({email})
    const hashPassword = await hash.verify(password, userData.password)
    return {status:200, data: userData }
  }
}

module.exports = UserController
