module.exports.cadastro = (application, req, res)=>{
    res.render('cadastro', {validacao : {} , dadosForm : {}});
}

//validacao dos dados
module.exports.cadastrar = (application, req, res)=>{
    let dadosForm = req.body;

    req.assert('nome', 'Insira o nome do usuario').notEmpty();
    req.assert('email', 'Insira um email valido').notEmpty();
    req.assert('senha', 'Senha Invalida').notEmpty();

    //tratativa de erros no formaulario
    let erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao : erros, dadosForm : dadosForm})
        return;
    }

    let connection = application.config.dbConnection;
    let usuarioDAO = new application.app.models.usuarioDAO(connection);

    usuarioDAO.inserirUsuario(dadosForm);
    res.send('cadastro concluido')
}