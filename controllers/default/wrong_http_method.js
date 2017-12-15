const wrong_http_method = (req, res) => {
    res.json(status=405, {
        message: 'Http Method not allowed'
    });
};

module.exports = wrong_http_method;