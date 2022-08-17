import { products } from "../db";

exports.Category = {
    products: (parent, args, content) => {
        const categoryId = parent.id
        return products.filter((product) => product.categoryId === categoryId)
    }
}
