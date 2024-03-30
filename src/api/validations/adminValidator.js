const Joi = require("joi");
const validate = require("../../utils/validate");
const onlyId = Joi.object({
    id: Joi.string().required().messages({
        'string.empty': `id cannot be an empty field`,
        'string.base': `id must a string`,
        'any.required': `id is a required field`
    }),
});
const addCategory = Joi.object({
    name: Joi.string().required().min(4).messages({
        'string.empty': `name cannot be an empty field`,
        'string.base': `name must a string`,
        'string.min': `name should have a minimum length of 8`,
        'any.required': `name is a required field`
    }),
})
const updateCategory = Joi.object({
    id: Joi.string().required().messages({
        'string.empty': `id cannot be an empty field`,
        'string.base': `id must a string`,
        'any.required': `id is a required field`
    }),
    name: Joi.string().required().min(4).messages({
        'string.empty': `name cannot be an empty field`,
        'string.base': `name must a string`,
        'string.min': `name should have a minimum length of 8`,
        'any.required': `name is a required field`
    }),
})
const adminValidate = {
    onlyId: validate(onlyId),
    addCategory: validate(addCategory),
    updateCategory: validate(updateCategory),
}
module.exports = adminValidate;