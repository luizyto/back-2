//criar e remover pastas
const fs=require('fs');

//com método síncrono
//fs.mkdirSync('logs');

//com método assíncrono
fs.mkdir('logs3',(erro)=>{
    if(erro){
        console.log(erro);
    }
})

//para remover pastas
//testar a existência
if(fs.existsSync('logs2')){
    fs.rmdirSync('logs2');
}
console.log("Fim da execução");
