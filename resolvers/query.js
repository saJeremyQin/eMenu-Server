

module.exports = {
    hello: () => 'Hello world!',
    dishes: async (parent, args, {models}) => {
        return await models.Dish.find();
    },
    // getDish by ID
    getDish: async (parent, args, {models}) => {
        return await models.Dish.findById(args.id);
    } 
}