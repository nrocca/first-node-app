const readline = require("readline");
const fs = require ('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
getFiles = () => {
rl.question("Inserte el directorio a leer: \nEjemplo para Windows: 'C:/Users/username/myfolder'\nEjemplo para GNU/Linux: '/home/username/myfolder'\n", function(input) {
    fs.readdir(input,(err,files) => {
        (err)?console.log('ERROR! -> El directorio especificado no es válido. Terminando ejecución..\n'): console.log('Lista de archivos:', files);
    })
    rl.close();
});
}

printFiles= () => {
    rl.question("Ingrese el directorio a imprimir:\nEjemplo para Windows: 'C:/Users/username/myfolder'\nEjemplo para GNU/Linux: '/home/username/myfolder'\n", function(input) {
        fs.readdir(input,(err,files) => {
            if (err) {
                console.log('ERROR! -> El directorio especificado no es válido. Terminando ejecución..\n');
            } else {
                console.log("Los archivos en el directorio son:\n")
                files.forEach(element=> console.log(`${element}`));
            }
        })
        rl.close();
    });
}



reverseFiles= () => {
    rl.question("Ingrese el directorio a revertir:\nEjemplo para Windows: 'C:/Users/username/myfolder'\nEjemplo para GNU/Linux: '/home/username/myfolder'\n", function(input) {
        fs.readdir(input,(err,files) => {
            (err)?console.log('ERROR! -> El directorio especificado no es válido. Terminando ejecución..\n'): console.log(`La carpeta invertida es \n[${files.reverse()}] \n`);;
        })
        rl.close();
    });
}
counter = (array,char) => {
    let count=0;
    array.forEach(element=> (element[0]==char)? count++:'');
    return count;
}
filesByName= () => {
        rl.question("Ingrese el directorio a revisar:\nEjemplo para Windows: 'C:/Users/username/myfolder'\nEjemplo para GNU/Linux: '/home/username/myfolder'\n", function(input) {
            rl.question("Ingrese el caracter que desea revisar:", function(letter) {
            fs.readdir(input,(err,files) => {
                (err)?console.log('ERROR! -> El directorio especificado no es válido. Terminando ejecución..\n'): console.log(`Hay ${counter(files,letter)} archivos que comienzan con "${letter}"`);
            })
            rl.close();
            });
        });
}
module.exports.rl=rl;
module.exports.getFiles=getFiles;
module.exports.printFiles=printFiles;
module.exports.reverseFiles=reverseFiles;
module.exports.filesByName=filesByName;