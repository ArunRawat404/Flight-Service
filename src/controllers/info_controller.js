const info = (req, res) => {
    return res.json({
        Success: true,
        message: 'API is live',
        error: {},
        data: {}
    });
};

module.exports = {
    info
};