import {ObjectID} from 'mongodb'
import {ApolloError} from 'apollo-server'

export const fetchUsers = (root, args, context, info) => {
  return context.db.collection("users").find().toArray()
};

export const fetchUserById = (root, args, context, info) => {
 return context.db.collection("users").findOne({_id: ObjectID(args._id)}).then((res, err) => {
    console.log("user", err, res, ObjectID(args._id));
    if(!err){
      return res
    } else {
      throw new ApolloError("Something went wrong fetching data !")
    }
  })
};