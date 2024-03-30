const response = require('./responses');
const validate = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false});
    if (error) {
        const isUnknownKeyError = error.details.some(detail => detail.type === 'object.unknown');
        if (isUnknownKeyError) return response.BadRequest(res, "Request contains unexpected fields.");
        else return response.UnprocessableEntity(res, error.details.map(err => err.message).join(", "));
    }
    next();
};
module.exports = validate;