
//Obter as configurações do mongodb , connectar a db
require('./configs/sequelize').connectDB()
    .then(() => 
    {
         console.log("Connected to the database Server!");
        
    //Inicialização de servidor    
    }).catch(err =>
        {
            console.error("Unable to connect to the database Server! Following Error:",err.message);
        });

