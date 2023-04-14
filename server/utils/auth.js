const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe';
const expiration = '1h';

module.exports = {
    signToken: function ({ name, email, _id }) {
        const payload = { name, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
}
