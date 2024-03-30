const service = require("../services/guestService");
const response = require("../../utils/responses");
const errorHandler = require("../../utils/errorHandler");
exports.getCategory = async (req, res) => {
    try {
        const category = await service.getCategoryService()
        response.Success(res, 'Read category success', category);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.getItem = async (req, res) => {
    try {
        const {category, search} = req.query;
        const item = await service.getItemService({category, search});
        response.Success(res, 'Read item success', item);
    } catch (error) {
        errorHandler(req, res, error);
    }
}