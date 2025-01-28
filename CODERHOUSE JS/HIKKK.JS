/*

*/

const usuariosBasedeDatos = [
    {
    cuit : "300000001",
    clave : "abc123"
    },
    {
    cuit : "300000002",
    clave : "abc124"
    },
    {
    cuit : "300000003",
    clave : "abc125"
    },
];

const tuCuit = prompt("Ingrese su cuit");
const tuClave = prompt("Ingrese su clave");

function cuitExistente(cuit, clave) {
    for(let i = 0; i<usuariosBasedeDatos.length; i++){
        if(
            usuariosBasedeDatos[i].cuit === cuit &&
            usuariosBasedeDatos[i].clave === clave
        ) {
            console.log("Bienvenido!");
            break;
        } else {
            console.log("Ingrese sus datos correctos");
        }
    }
}
cuitExistente(cuit, clave);