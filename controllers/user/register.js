const _ = require('lodash');
const {User} = require('../../models/user');

const register = async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = new User(body);
        await user.save();
        const token = await user.generateAuthToken();
        res.header('x-sh-auth', token).json(user);
    } catch (e) {
        //duplicate key
        if ( e.code == 11000 ) {
            res.status(400).json({
                message: 'user with same email already exist'
            });
        } else {
            res.status(400).send(e);
        }
    }
};

module.exports = register;