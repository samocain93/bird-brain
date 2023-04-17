const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe';
const expiration = '5h';

module.exports = {

    authMiddleware: function ({ req }) {
      console.log("HHHHHHHHHHHHHHHHHHHHHH")
      //console.log("body:-->",req.body.token)
      //console.log("headersssss",req.headers.authorization)
      //consoel.log("query",req.query.token)
        let token = req.body.token || req.query.token || req.headers.authorization;
      console.log("in the authmiddleware", token)
        if (req.headers.authorization) {
          token = token.split(' ').pop().trim();
        }
    
        if (!token) {
          return req;
        }
    
        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
          console.log('req.user: ', req.user);
        } catch {
          console.log('Invalid token');
        }
    
        return req;
      },

    signToken: function ({ name, email, _id }) {
        const payload = { name, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
}
