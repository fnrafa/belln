const Joi = require('joi');
const validate = require("../../utils/validate");
const loginSchema = Joi.object({
    username: Joi.string().required().messages({
        'string.base': `username must a string`,
        'string.empty': `username cannot be an empty field`,
        'any.required': `username is a required field`
    }), password: Joi.string().min(8).max(15).required().messages({
        'string.base': `password must a string`,
        'string.empty': `password cannot be an empty field`,
        'string.min': `password should have a minimum length of 8`,
        'string.max': `password should have a maximum length of 15`,
        'any.required': `password is a required field`
    }),
});
const registerSchema = Joi.object({
    fullname: Joi.string().min(4).max(56).required().messages({
        'string.base': `fullname must a string`,
        'string.empty': `fullname cannot be an empty field`,
        'any.required': `fullname is a required field`,
        'string.min': `fullname should have a minimum length of 4`,
        'string.max': `fullname should have a maximum length of 56`,
    }), username: Joi.string().min(4).max(12).required().messages({
        'string.base': `username must a string`,
        'string.empty': `username cannot be an empty field`,
        'any.required': `username is a required field`,
        'string.min': `username should have a minimum length of 4`,
        'string.max': `username should have a maximum length of 12`,
    }), email: Joi.string().email().required().messages({
        'string.empty': `email cannot be an empty field`,
        'string.email': `email must be a valid email`,
        'any.required': `email is a required field`
    }), password: Joi.string().min(8).max(15).required().messages({
        'string.base': `password must a string`,
        'string.empty': `password cannot be an empty field`,
        'string.min': `password should have a minimum length of 8`,
        'string.max': `password should have a maximum length of 15`,
        'any.required': `password is a required field`
    }), repeat_password: Joi.string().equal(Joi.ref('password')).required().messages({
        'any.only': `repeat_password does not match password`,
        'any.required': `repeat_password is a required field`
    })
});
const authValidate = {
    Login: validate(loginSchema),
    Register: validate(registerSchema)
}
module.exports = authValidate;