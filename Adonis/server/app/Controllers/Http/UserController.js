'use strict'

const User = use('App/Models/User')

class UserController {

    async login ({request , auth}){

        const {  username, password } = await request.only(['username','password'])

        let token = await auth.withRefreshToken().attempt(username,password)
       
        return token;
    }

    async register ({request, response}){

        const {username, password} = request.only(['username', 'password'])

       let user = await User.create({username, password})

        return user


    }

    async index({}){
        let users = User.all()
        return users;
    }
}

module.exports = UserController
