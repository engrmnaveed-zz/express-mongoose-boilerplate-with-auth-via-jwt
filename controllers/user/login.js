const _ = require('lodash');
const {User} = require('../../models/user');

const login = async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = await User.findByCredentials(body.email, body.password);
        const token = await user.generateAuthToken();
        res.header('x-sh-auth', token).json(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports = login;