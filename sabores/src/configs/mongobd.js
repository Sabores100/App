//Configuração da BD MongoDB + Connecção

const MongoCliente = require('mongodb').MongoClient;

const mongodb = new MongoCliente('mongodb://localhost:27017');

//Conecção a Base de Dados
const connectDB = () =>
{
    return new Promise((resolve,reject) =>
    {
        mongodb.connect(err =>
            {
                if(err) reject(err);
                else resolve();
            });
    });
}

//TODO : Alterar const getDB = () => mongodb.db('base de Dados que queremos trabalhar');
const getDB = () => mongodb.db('receitas');

const disconnectDB = () => _db.close();

module.exports = {connectDB,getDB,disconnectDB};


