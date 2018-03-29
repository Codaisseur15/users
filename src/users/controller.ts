<<<<<<< HEAD
import { JsonController, Post, Param, Get, Put, Patch, NotFoundError, Body, Authorized, Delete } from 'routing-controllers'
import User from './entity';
import * as request from 'superagent'

const eventUrl = process.env.EVENT_URL || 'http://localhost:5008/events'

// this makes sure a class is marked as controller that always returns JSON
=======
import { JsonController, Post, Param, Get, Put, Patch, NotFoundError, Body, Delete, Authorized } from 'routing-controllers'
import User from './entity';

>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
@JsonController()
export default class UserController {

  @Post('/users')
  async signup(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
<<<<<<< HEAD
    await request.post(eventUrl)
    .send({event: 'newuser',
      data: {
        id: entity.id,
        email: entity.email,
        role: entity.role
      }
    })

    return entity.save()
  }

  // this markes a method as endpoint
  // in this case it responds to any GET /pages/:id
  // request with :id being a variable parameter
  // @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    // this decorator retrieves the ID parameter from the url
=======
    return entity.save()
  }

  // @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
    @Param('id') id: number
  ) {
    return User.findOneById(id)
  }

  // @Authorized()
  @Get('/users')
  allUsers() {
    return User.find()
  }

<<<<<<< HEAD
  // Add update: @patch
  //Change @body for our purposes
=======
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
  // @Authorized()
  @Put('/users/:id([0-9]+)')
  @Patch('/users/:id([0-9]+)')
  async updateUser(
    @Param('id') id: number,
    @Body() update: Partial<User>
  ) {
    const user = await User.findOneById(id)
<<<<<<< HEAD
    if (!user) throw new NotFoundError('Cannot find page')
=======
    if (!user) throw new NotFoundError('Cannot find user')
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0

    return User.merge(user, update).save()
  }

  // @Authorized()
<<<<<<< HEAD
 @Delete('/users/:id([0-9]+)')
 async removeUser(
   @Param('id') id: number
 )  {
     const user = await User.findOneById(id)
     if (!user) throw new NotFoundError('Cannot find user')
     user.remove()
     return "user succesfully deleted"
   }
=======
  @Delete('/users/:id([0-9]+)')
  async removeUser(
    @Param('id') id: number
  )  {
      const user = await User.findOneById(id)
      if (!user) throw new NotFoundError('Cannot find user')
      user.remove()
      return "user succesfully deleted"
    }
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0

}
