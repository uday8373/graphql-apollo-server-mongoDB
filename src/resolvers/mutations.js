import {ObjectID} from 'mongodb'
import {ApolloError} from 'apollo-server'

export const addUser = (root, args, context, info) => {
  console.log(args.input);
  return context.db.collection("users").insert(args.input).then((res, err) => {
    return res
  })
};