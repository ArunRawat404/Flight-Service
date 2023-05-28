const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        return res.status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: "Something went wrong while creating airplane",
                data: {},
                error: { explanation: "Model Number not found in the incoming request in correct form" }
            });
    }
    // If user sends the Model Number properly without any fail then we will call the next middleware (i.e. the controller) using the next() function
    next();
};

module.exports = {
    validateCreateRequest
}