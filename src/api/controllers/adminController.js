const service = require("../services/adminService");
const response = require("../../utils/responses");
const errorHandler = require("../../utils/errorHandler");
exports.getAllUser = async (req, res) => {
    try {
        const user = await service.getAllUserService();
        response.Success(res, 'Read all user success', user);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.getUserAddress = async (req, res) => {
    try {
        const {id} = req.body;
        const user = await service.getUserAddressService({id});
        response.Success(res, 'Read user address success', user);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.getAllCategory = async (req, res) => {
    try {
        const category = await service.getAllCategoryService();
        response.Success(res, 'Read all category success', category);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.addCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const category = await service.addCategoryService({name});
        response.Created(res, 'Create category success', category);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const {id, name} = req.body;
        await service.updateCategoryService({id, name});
        response.NoContent(res);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const {id} = req.body;
        await service.deleteCategoryService({id});
        response.NoContent(res);
    } catch (error) {
        errorHandler(req, res, error);
    }
}
exports.getAllItem = async (req, res) => {
    try {
        const {category, search} = req.query;
        const item = await service.getAllItemService({category, search});
        response.Success(res, 'Read all item success', item);
    } catch (error) {
        errorHandler(req, res, error);
    }
}