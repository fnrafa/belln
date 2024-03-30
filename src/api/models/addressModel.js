const {prisma} = require("../../config/prisma");
const CustomError = require("../../utils/customError");
exports.readUserAddress = async ({id}) => {
    try {
        await prisma.user.findFirstOrThrow({where: {deletedAt: null, id}});
        return await prisma.address.findMany({where: {deletedAt: null, id}});
    } catch (error) {
        if (error.code === 'P2016' || error.code === 'P2016') throw new CustomError("User not found", 404);
        throw new CustomError(error.message)
    }
}