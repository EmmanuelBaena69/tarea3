let arreglo = [];

let casa = {
    nombre: 'Casa',
    propiedades:{
        habitaciones:'cuatro',
        baños:'dos',
        valor:'550000000'
    }
};

let apartamento = {
    nombre:'apartamento',
    propiedades:{
        tamaño:'79 m^2',
        habitaciones:'dos',
        bañor:'dos',
        valor:'400000000'
    }
};

// Agregar los objetos al arreglo
arreglo.push(casa);
arreglo.push(apartamento);

// método map() para obtener los nombres de los objetos
let nombres = arreglo.map(Object => Object.nombre);
console.log('nombres: ',nombres);

// método forEach() para mostrar las propiedades de cada objeto
arreglo.forEach(objeto =>{
    console.log('nombre: ', objeto.nombre);
    console.log('propiedades internas: ', objeto.propiedades);
});