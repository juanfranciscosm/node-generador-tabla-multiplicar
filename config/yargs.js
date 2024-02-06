
const argv = require('yargs')
            .option('b',{ 
               alias: 'base',
               type: 'number',
               demandOption: true,
               describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{
               alias: 'listar',
               type: 'boolean',
               demandOption: true,
               default: false,
               describe: 'Enlista la tabla en consola'
               //agregamos una descripcion para mostrar en el --help de nuesta app e indicar a nuestros usuarios para que sirve nuestro comando
            })
            .option('h',{ 
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Es el tamaño de la tabla'
             })
            .check((argv, options)=>{
               if(isNaN(argv.b) ){ 
                throw 'la base tiene que ser un número'
               } else if(isNaN(argv.h)){
                throw 'El tamaño de la tabla tiene que ser un número'
               }
               return true 
            })  
            .argv;

//exportamos el argv tal cual que de por si es un objeto
module.exports= argv;