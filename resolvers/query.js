

module.exports = {
    hello: () => 'Hello world!',
    dishes: async (parent, args, {models}) => {
        try {
            return await models.Dish.find();  
        } catch (error) {
            console.error("Error fetching dishes", error);
            return [];
        }
    },
    // getDish by ID
    getDish: async (parent, args, {models}) => {
        return await models.Dish.findById(args.id);
    } 
}