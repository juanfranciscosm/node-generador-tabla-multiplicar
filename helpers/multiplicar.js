const fs = require('fs') ; 
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta=10)=>{
    //encapsulamos el codigo en una estructura try-catch para manejar cualquier posible error
    try {
    let intro = ''
    let salida= ''
    let consola= '' //se crea una segunda variable que almacene el mismo valor, uno para imprimir en consola con los colores y otro para guardar en el archivo de texto ya que este tambien guarda elementos para poner color en la consola
        if (listar){
            intro = "======================\n" +`     TABLA DEL ${base}      \n` + "======================\n"
            console.log(intro.bgGreen)
            for (let i = 1; i <= hasta ; i++) {
                salida += `${base} * ${i} = ${i*base}\n`;
                consola += `${base} ${colors.red("*")} ${i} = ${i*base}\n`;
            }
            console.log(consola)
        }
    //utilizamos una variante de fs.writeFileSync que hace lo mismo pero de forma sincrona
    fs.writeFileSync(`./salida/tabla-${base}.txt`, intro+salida)
 
    return `tabla-${base}.txt` //recordemos que una funcion async retorna lo que sucede si solo esta bien
        
    } catch (err) {
        throw err; //regresa err si hay un error
    }
    
}
    

/* hasta ahora todo en este archivo es privado, este codigo solo podra ser utilizado 
dentro de este archivo. Tenemos que exportar por partes lo que tenemos aqui
*/

//se exporta un objeto con el nombre de la funcion que queremos hacer publico para utilizar en otros archivos
module.exports = {
    //crearArchivo: crearArchivo aqui hay redundancia, la propiedad del objeto tiene el mismo nombre de su valor por lo cual se puede escribir una sola vez y el programa lo entiende
    crearArchivo
}