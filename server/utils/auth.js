const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe';
const expiration = '5h';

module.exports = {

    authMiddleware: function ({ req }) {

      console.log("Lets go Middlewareee");
      console.log("body:", req.body.token);
      console.log("headers:", req.headers.authorization);
      console.log("query:", req.query.token);

        let token = req.body.token || req.query.token || req.headers.authorization;

        console.log("We're in the Middleware babyyyy 😎", token);
    
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
