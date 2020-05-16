module.exports = (connection, Sequelize) => {
    class Users extends Sequelize.Model { }

    Users.init(
        {
            _idUser: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            },
            name:{
                type: Sequelize.STRING,
            },
            email:{
                type: Sequelize.STRING,
            },
            password:{
                type: Sequelize.STRING,
            },
            // favoritos : Receita[]
            favorites:{
                type: Sequelize.STRING,
            },            
            // receita : Receita[]
            recipes: {
                type: Sequelize.STRING,
            },
            //TODO ADD ROLES
            role :
            {
            
            }


        },

        { Sequelize: connection }
    );
    //TODO-> Fazer associação das Roles , Favoritos e Receitas
    User.associate = (models) => {
        User.belongsToMany(models.Book, { through: "UserBooks" });
      };
      
    return Users;
};