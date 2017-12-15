const wrong_http_method = require('../controllers/default/wrong_http_method');
const {authenticate} = require('../middleware/authenticate');

const register_route = (
    {
        router = undefined,
        route = undefined,
        auth_required = true,
        get_method = undefined,
        post_method = undefined
    } = {}) => {

    if (router != undefined || route != undefined) {
        let args = [route];
        if (auth_required) {
            args.push(authenticate);
        }
        if (get_method) {
            router.get(...args, get_method);
        } else {
            router.get(...args, wrong_http_method);
        }

        if (post_method) {
            router.post(...args, post_method);
        } else {
            router.post(...args, wrong_http_method);
        }
    }
};



module.exports = {
    register_route
};