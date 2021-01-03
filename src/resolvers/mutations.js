import {ObjectID} from 'mongodb'
import {ApolloError, AuthenticationError} from 'apollo-server'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, AUTH_ERROR, COLLECTIONS } from '../utils/constant';


export default class Mutations {
  static addUser (root, args, context, info) {
    console.log(args.input);
    return context.db.collection(COLLECTIONS.USERS).insert(args.input, {new: true}).then((res, err) => {
      return res
    })
  };

  static loginUser (root, args, context, info) {
    const {email, password} = args.input
    return context.db.collection(COLLECTIONS.USERS).findOne({email}).then((res, err) => {
      if(!err) {
        if(res) {
          if(res.password === password) {
            const token = jwt.sign({email: email, id: res._id}, JWT_SECRET) 
            return Object.assign(res, {token})
          } else {
           throw new AuthenticationError(AUTH_ERROR)
          }
        } else {
          throw new ApolloError(AUTH_ERROR)
        }
      }
      return res
    })
  };
}