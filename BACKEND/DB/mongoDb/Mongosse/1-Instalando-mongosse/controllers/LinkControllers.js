//-----------------O controller ou Controlador--------------------
//       Ele irá controlar de acordo com que o usuario esta pedindo,
// o que deve ser feito. = "A Lógica de Negocio" ,
// ou seja, aqui estará o que acontece quando essa rota é chamada.


const Link = require("../models/Link");
const redirect = async ( req,resp ) => {

    let titulo = req.params.titulo;

    try {
        let documento = await Link.findOne({ titulo }) // ou find 
        resp.redirect(documento.url);
    } catch (error) {
        console.log(error);
        resp.send(" ❌ ERRO ao busca documento : " + error);
    }
}


const addLink = async ( req, resp ) => {
    
    let link = new Link(req.body); // Cria um novo schrema de Link -- Ex:vá em na pasta models
    try {
        let doc = await link.save(); // Variavel receber o linkScrema e salva na variavel doc.
        resp.send("Link adiciondo com Sucesso 💾✔️ !");
        console.log(doc)
    } catch (error) {
        resp.render('index',{ error , body: req.body});
    }

}


// Está sendo exportado como um OBJETO por TERAO outras funcoes aqui.

module.exports = { redirect  , addLink }




//************************** Alguns Midleware******************************* */

let quandoUsuarioFazReqPromise = (req, resp) => {

    let titulo = req.params.titulo;

    Link.find({ titulo }).then(docs => {
        console.log(docs);
        resp.send(docs);

    }).catch(erro => {
        console.log(" O seu erro :", erro);
    })
}
