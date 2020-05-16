module.exports = (connection, Sequelize) => {
    class Category extends Sequelize.Model { }

    Category.init(
        {
            _idCategory: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            },
            text: {
                type: Sequelize.STRING,
            }
        },

        {Sequelize : connection }
    );
    return Category;
};