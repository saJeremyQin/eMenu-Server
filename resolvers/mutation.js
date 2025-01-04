const { model } = require("mongoose");


module.exports = {
    newDish: async (parent, args, {models}) => {
        return await models.Dish.create({
            name: args.name,
            description: args.description || '',
            type: args.type,
            price: args.price,
            image: args.image || ''
        });
    },
    deleteDish: async (parent, {id}, {models}) => {
        try {
            await models.Dish.findOneAndRemove({_id:id});   
            return true;     
        } catch (error) {
            return false;     
        }
    },
    updateDish: async (parent, {id,name,type,price,description,image},{models}) => {
        return await models.Dish.findOneAndUpdate(
            {
                _id:id,
            },
            {
                $set:{
                    name,
                    type,
                    price,
                    description,
                    image
                }
            },
            {
                new:true
            }
        );
    }
}