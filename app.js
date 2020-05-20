const readline = require("readline");
const filemng = require ('./filemng');

filemng.rl.question("Inserte el método a ejecutar, deberá reiniciar la app por cada ejecución:\nLas opciones son: \n1 - Mostrar el contenido de un directorio en formato lista.\n2 - Mostrar los archivos de un directorio uno por uno.\n3 - Mostrar un directorio con sus archivos invertidos.\n4 - Mostrar cuántos archivos empiezan con un caracter especificado.\n", function(input) { 
        switch (input) {
            case '1': filemng.getFiles();
                        break;
            case '2': filemng.printFiles();
                        break;
            case '3': filemng.reverseFiles();
                        break;
            case '4': filemng.filesByName();
                        break;
            default: console.log('Opción inválida, terminando ejecución..\n');
                        break;
        }
    })