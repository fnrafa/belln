const CustomError = require("../../utils/customError");
const categoryModel = require("../models/categoryModel");
const itemModel = require("../models/itemModel");
exports.getCategoryService = async () => {
    const category = await categoryModel.readCategoryHaveItem();
    if (category.length === 0) throw new CustomError("No category found on database", 404);
    return category;
}
exports.getItemService = async ({category, search}) => {
    const data = 10;
    const item = await itemModel.readItem({category, search, data});
    if (item.length === 0) throw new CustomError("No item found on database", 404);
    return item;
}