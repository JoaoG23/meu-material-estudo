
//writeFile
//appendFile
//unlink
//readFile
// rename

//Importando um Modulo
let fs = require('fs');

// ATENCAO:EX:(./fs) devido este modulo esta dentro do node na precisa passa os pontos.




// fs.writeFile('teste.txt','Hello World', function(error) {

//     if(error) { throw error };

//     console.log("Arquivo Criado com sucesso");

// })





// Concatenar Com o que esta escrito

// fs.appendFile('teste.txt','Tudo Outra vez', function(error) {

//     if(error) { throw error };

//     console.log("Arquivo Modificado com sucesso");

// });





// Remover tudo o que há dentro escrito
//Porém ele só recebe o (nome_arquivo, Callback)

// fs.unlink('teste.txt', function(error) {

//     if(error) { throw error };

//     console.log("Arquivo apagado com sucesso");

// });




//Renomear um arquivo Ex:('Nome_atual_arquivo','Novo_nome',callback()=>{})

// fs.rename('teste.txt','NovoNome', function(error) {

//         if(error) { throw error };
    
//         console.log("Arquivo Criado com sucesso");
    
//     });






//Para ler Um arquivo
//----------------
//Porém o callback error + data
// readFile('teste.txt',formato ,callback(error,data));

// fs.readFile('NovoNome.txt','UTF8', function(error , data) {

//     if(error) { throw error };

//     console.log(data);

// });




// Para criar muito um arquivo em letras maiusculas

let argv = process.argv.slice(2);

let fileName = argv[0];

fs.readFile(fileName,"UTF8",(error , data)=>{

    if (error) throw error;


    fs.writeFile(fileName + "Uppercase" , data.toUpperCase(), (error) => {

        if (error) throw error;
        
        console.log("Arquivo Geradoo com sucesso");
    })


});
