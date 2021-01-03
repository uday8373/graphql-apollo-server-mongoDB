import { ObjectID } from "mongodb";
import { ApolloError, AuthenticationError } from "apollo-server";
import { checkAuth } from "../utils/verifyToken";
import { MISSING_TOKEN_STRING, DB_ERROR, COLLECTIONS } from "../utils/constant";


export default class Queries {
  static fetchUsers(root, args, context, info) {
    const isVerified = checkAuth(context.token || "");
    if (isVerified !== false) {
      return context.db.collection(COLLECTIONS.USERS).find().toArray();
    } else {
      throw new AuthenticationError(MISSING_TOKEN_STRING);
    }
  }

  static fetchUserById(root, args, context, info) {
    if(checkAuth(context.token)){
    return context.db
      .collection(COLLECTIONS.USERS)
      .findOne({ _id: ObjectID(args._id) })
      .then((res, err) => {
        if (!err) {
          return res;
        } else {
          throw new ApolloError(DB_ERROR);
        }
      });
    } else {
      throw new AuthenticationError(MISSING_TOKEN_STRING)
    }
  }
}
