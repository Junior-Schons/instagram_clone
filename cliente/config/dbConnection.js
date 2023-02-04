//importar  o mongoDB
let mongo = require('mongodb')

let connMongoDB = function(){
    console.log('conexao estabelicida');
    let db = new mongo.Db(
        'usuario_instagram',
        new mongo.Server(
            //string contendo o endereço da conexao do servidor
            'localhost',
            27017,
            {}
        ),
        {}
    );
    return db;
}

module.exports = function(){
    return connMongoDB;
}