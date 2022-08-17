import { categories, products } from "../db";

exports.Query = {
    hello: () => {
        return "world"
    },
        // numberOfAnimals: () => {
        //     return 55
        // },
        // price: () => {
        //     return 53.32
        // },
        // isAvailable: () => {
        //     return true
        // },
        products: () => {
        return products
    },
        product: (parent, args, content) => {
        const { id } = args
        return products.find(product => product.id === id)
    },
        categories: () => {
        return categories
    },
        category: (parent, args, content) => {
        const { id } = args.id
        return  categories.find(category => category.id === id)
    }
}
