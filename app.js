const fs = require('fs');

process.stdin.setEncoding('utf-8');

process.stdout.write('Ingrese su nombre: ');

const pedirEdad = () =>{
    process.stdout.write('Ingrese su edad: ');
}
const pedirEmail = () =>{
    process.stdout.write('Ingrese su email: ');
}
let nombre = "";
let edad = "";
let email = "";
process.stdin.on('data', (input)=>{
    input = input.trim();
    
    if (nombre === ""){
        nombre = input;
        pedirEdad();
    }
    else if(edad === ""){
        edad = input;
        pedirEmail();
    }
    else{
        email = input;
        let data = {
            nombre: nombre,
            edad: edad,
            email: email
        }
        fs.mkdirSync("informacion")
        fs.writeFileSync("informacion/data.json", JSON.stringify(data))
        console.log(`El archivo data.json se ha creado correctamente y contiene estos datos: \n
        ${fs.readFileSync("informacion/data.json")}`); 
        process.exit()
    }
});
