const express = require('express');
const router = express.Router();
const {register_route} = require('../utils/routes');

const post_register = require('../controllers/user/register');
const post_login = require('../controllers/user/login');
const get_profile = require('../controllers/user/profile');
const get_logout = require('../controllers/user/logout');


register_route({
    router,
    route: '/register',
    auth_required: false,
    post_method: post_register
});

register_route({
    router,
    route: '/login',
    auth_required: false,
    post_method: post_login
});

register_route({
    router,
    route: '/profile',
    get_method: get_profile
});

register_route({
    router,
    route: '/logout',
    get_method: get_logout
});


module.exports = router;