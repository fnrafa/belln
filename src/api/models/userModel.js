const {prisma} = require("../../config/prisma");
const CustomError = require("../../utils/customError");
exports.readUser = async () => {
    try {
        return await prisma.user.findMany({where: {deletedAt: null, roleId: "1"}});
    } catch (error) {
        throw new CustomError(error.message)
    }
}
exports.createUser = async (email, username, password, fullname) => {
    try {
        return await prisma.user.create({
            data: {
                email, username, password, fullname
            },
        });
    } catch (error) {
        if (error.code === 'P2002') throw new CustomError("Username already exists", 409);
        else throw new CustomError(error.message);
    }
};
exports.findUser = async (username) => {
    try {
        return await prisma.user.findFirstOrThrow({
            where: {
                username
            },
        });
    } catch (error) {
        throw new CustomError(error.message, 404);
    }
}
exports.findRoleById = async (id) => {
    try {
        return await prisma.user.findFirst({
            where: {id}, include: {role: true}
        });
    } catch (error) {
        throw new CustomError(error.message)
    }
}
exports.findVerify = async (email, otp) => {
    try {
        return prisma.user.findFirst({
            where: {email, verified: otp}
        })
    } catch (error) {
        throw new CustomError(error.message)
    }
}