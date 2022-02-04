const Client = require('pg').Client;

const cliente = new Client({
    user:'postegres',
    password:'postegres',
    host:'127.0.0.1',
    port:5432,
    database:'db1'
});

cliente.connect();// abrir uma conexao com banco
cliente.query('select * from cliente') //execultar um query SQL
.then(results => { // Jogar o resultado da query no results
    const resultado = results.rows

    console.table(resultado);
})
.catch((erro) => {
    console.log(erro);
})
.finally(() => cliente.end());


