//criar e deletar arquivo
const fs=require('fs');

fs.appendFile('logs.log',"Loguei\n",(erro)=>{
    console.log(erro)
})

//apagar arquivo 
if(fs.existsSync('logs.log')){
    fs.rmSync('logs.log')
}
console.log("Fim da execução");
