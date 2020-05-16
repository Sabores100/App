module.exports = (connection, Sequelize) => {
    class Recipe extends Sequelize.Model { }


    Recipe.init(
        {
            _id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            },
            title: {
                type: Sequelize.UUID,
            },
            description: {
                type: Sequelize.UUID,
            },
            steps: {
                type: Sequelize.UUID,
            },
            ingredients: {
                type: Sequelize.UUID,
            },
            fotoSteps: {
                type: Sequelize.UUID,
            },
            complexity: {
                type: Sequelize.UUID,
            }
        },


        {Sequelize : connection }
    );
    return Recipe;

};