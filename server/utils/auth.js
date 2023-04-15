const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe';
const expiration = '1h';

module.exports = {

    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;
    
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 15d426f4c85a8f7b78f0eb594d1c9caff2d6109f
