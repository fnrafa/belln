const CustomError = require("../../utils/customError");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const getToken = require("../../utils/jwtToken");
exports.loginService = async (user, pass) => {
    const {id, email, username, password, phone, verified, fullname} = await userModel.findUser(user);
    if (!(await bcrypt.compare(pass, password))) throw new CustomError('Wrong Password', 401);
    const token = await getToken(id);
    return {id, fullname, email, username, phone, verified, token};
}
exports.registerService = async (mail, user, pass, name) => {
    const hashedPassword = await bcrypt.hash(pass, 10);
    const {
        id, email, username, phone, verified, fullname
    } = await userModel.createUser(mail, user, hashedPassword, name);
    const token = await getToken(id);
    return {id, fullname, email, username, phone, verified, token};
}