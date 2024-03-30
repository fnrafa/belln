const CustomError = require("../../utils/customError");
const categoryModel = require("../models/categoryModel");
const itemModel = require("../models/itemModel");
const userModel = require("../models/userModel");
const addressModel = require("../models/addressModel");
exports.getAllUserService = async () => {
    const category = await userModel.readUser();
    if (category.length === 0) throw new CustomError("No users found in the database", 404);
    return category;
}
exports.getUserAddressService = async ({id}) => {
    const address = await addressModel.readUserAddress({id});
    if (address.length === 0) throw new CustomError("No address saved to related user", 404);
    return address;
}
exports.getAllCategoryService = async () => {
    const category = await categoryModel.readCategory();
    if (category.length === 0) throw new CustomError("No category found on database", 404);
    return category;
}
exports.addCategoryService = async ({name}) => {
    return await categoryModel.addCategory({name});
}
exports.updateCategoryService = async ({id, name}) => {
    const {deleteAt} = await categoryModel.checkDeleteAt({id});
    if (deleteAt != null) throw new CustomError("This Category already deleted", 409)
    return await categoryModel.updateCategory({id, name});
}
exports.deleteCategoryService = async ({id}) => {
    const {deleteAt} = await categoryModel.checkDeleteAt({id});
    if (deleteAt != null) throw new CustomError("This Category already deleted", 409)
    return await categoryModel.deleteCategory({id});
}
exports.getAllItemService = async ({category, search}) => {
    const item = await itemModel.readItem({category, search});
    if (item.length === 0) throw new CustomError("No item found on database", 404);
    return item;
}