# Variables

Es importante tener claro que actualmente para el desarrollo no se debe usar var ya que tiene problemas de compatibilidad y no es recomendable en los nuevos exploradores de hoy en dia.

Definicion de variables recomendado:

#### CONST

Este tipo de variable implica que sera una variable inmutable

```javascript
const name = 'Jhon Doe';
```

#### LET

Este tipo de variable implica que sera una variable mutable

```javascript
const age = 25;
```

# TEMPLATE STRING

Con template string nos referimos a la manera en la que podemos manejar los datos en otras variables o strings, de manera que se facilita el uso de las variables en otros lados usando los back ticks

```javascript
const nombre = 'Juan';
const apellido = 'Perez';
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
```

# OBJECT LITERAL

const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
    ciudad: 'Bogota',
    zip: 123456,
    lat: 14.3232,
    lng: 34.923332
  }
};

console.log(persona);

// create object
console.log({persona});
console.table({persona});

const persona2 = {...persona};
persona2.nombre = 'Carlos';

console.log(persona2);

// arreglos

const arreglo = [1,2,3,4];
console.log(arreglo);

const arreglo2 = [...arreglo, 5];
console.log(arreglo2);

// Map

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
console.log(arreglo3);

Esta función map nos permite tomar los datos y transformarlos en un nuevo "arreglo"
En este caso map toma los datos y los multiplica por 2 y estos datos multiplicados son pasados a el nuevo map

// funciones

const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre2 ) => `Hola, ${nombre2}`;

console.log(saludar('Juan'));
console.log(saludar2('Nicole'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
console.log(getUser());

// return object directly
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Tu mama en tanga'
});
console.log(getUser2());

# Desestructuración

Esto es una expresion de Javascript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

para más info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*Example:*

```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

```

# Array find

El metodo find devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada

MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

# Promesas

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise


# Fetch API

https://developer.mozilla.org/es/docs/Web/API/Fetch_API


https://developers.giphy.com/dashboard/
