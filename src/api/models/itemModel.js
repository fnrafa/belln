const {prisma} = require("../../config/prisma");
const CustomError = require("../../utils/customError");
exports.readItem = async ({category = null, search = null, data = 0}) => {
    try {
        let whereClause = {
            deletedAt: null
        };
        if (category) {
            whereClause.category = {
                name: category, deleteAt: null
            }
        }
        if (search) {
            whereClause.name = {
                contains: search,
            }
        }
        let queryOptions = {
            where: whereClause, select: {
                id: true, name: true, itemTypes: {
                    select: {
                        price: true,
                    }, orderBy: {
                        price: 'asc'
                    }, take: 1
                },
            }
        };
        if (data !== 0) queryOptions.take = data;
        let items = await prisma.item.findMany(queryOptions);
        items = await Promise.all(items.map(async (item) => {
            const rates = await prisma.rate.findMany({
                where: {itemId: item.id}, select: {
                    Rate: true
                }
            });
            const averageRate = rates.reduce((acc, curr) => acc + curr.Rate, 0) / rates.length || 0;
            return {
                ...item, averageRate,
            };
        }));
        return items;
    } catch (error) {
        throw new CustomError(error.message)
    }
};