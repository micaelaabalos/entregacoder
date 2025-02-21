const usuariosBasedeDatos = [
    {
        nombreSociedad : "La anonima SA",
        cuit : 300000001,
        clave : "abcdef"
    },
    {
        nombreSociedad : "La Perla SA",
        cuit : 300000002,
        clave : "abcedf"
    },
    {
        nombreSociedad : "La Estrella SRL",
        cuit : 300000003,
        clave : "abcfed"
    },
];
localStorage.setItem('usuariosBasedeDatos', JSON.stringify(usuariosBasedeDatos));

const cuit = parseInt(localStorage.getItem('usuariosBasedeDatos'));
console.log(usuariosBasedeDatos.cuit);
const claveRecuperada = JSON.parse(localStorage.getItem('usuariosBasedeDatos'));
console.log(usuariosBasedeDatos.clave);

const recaudacion  = [
    {
        nombreSociedad : "La anonima SA",
        recaudacionMensual: 12000000
    },
    {
        nombreSociedad : "La Perla SA",
        recaudacionMensual: 6000000
    },
    { 
        nombreSociedad : "La Estrella SRL",
        recaudacionMensual: 80000000
    }
]

const recaudacionAltas = recaudacion.filter(function(monto){
    return monto.recaudacionMensual > 10000000;
});
console.log(recaudacionAltas);

