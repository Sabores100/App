module.exports = (connection, Sequelize) => {
    class Comentary extends Sequelize.Model { }

    Comentary.init(
        {
            _idComentary: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            },
            //TODO ADD FK`S- idReceita(int), idUser(int)

            text: {
                type: Sequelize.STRING,
            }


        },

        {Sequelize : connection}
    );

    return Comentary;

};
