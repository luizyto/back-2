//lendo arquivo usando fs
const fs=require('fs');

// fs.readFile('./dados.csv',(erro,data)=>{
//     if(erro){
//         console.log(erro);
//     }else{
//         console.log(data.toString());
//     }
// })
//testar o método assíncrono

let dados='';
if(fs.existsSync('dados.csv')){
    dados=fs.readFileSync('dados.csv');
    console.log(dados.toString());
}else{
    console.log("Arquivo não encontrado");
}
console.log("Segunda operação");