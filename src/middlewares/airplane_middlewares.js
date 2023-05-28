const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app_error");

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "Something went wrong while creating airplane";
        ErrorResponse.error = new AppError(["Model Number not found in the incoming request in correct form"], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    // If user sends the Model Number properly without any fail then we will call the next middleware (i.e. the controller) using the next() function
    next();
};

module.exports = {
    validateCreateRequest
}