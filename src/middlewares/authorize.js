const jwt = require('jsonwebtoken');
const {secret} = require("../config/config");
const response = require("../utils/responses");
const model = require("../api/models/userModel");
const authorize = (allowedRoles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) return response.Unauthorized(res, "No Token Provided");
            const decoded = jwt.verify(token, secret);
            const user = await model.findRoleById(decoded.id);
            if (!user) return response.NotFound(res, "User not found");
            if (allowedRoles.length > 0 && !allowedRoles.includes(user.role.name)) return response.Forbidden(res, "Access denied");
            req.user = user;
            next();
        } catch (error) {
            if (error.name === 'JsonWebTokenError') return response.Unauthorized(res, "Invalid token");
            response.InternalServerError(res);
        }
    };
};
module.exports = authorize;