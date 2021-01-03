import { JWT_SECRET } from "../utils/constant";
import jwt from 'jsonwebtoken'

export const checkAuth = (token) => {
  return jwt.verify(token, JWT_SECRET, (err, decode) => {
    if (!err) {
      return decode.email;
    } else {
      return false;
    }
  });
};
