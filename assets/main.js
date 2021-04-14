const alumnos = [
  { nombre: 'Sofia Bonavena', edad: 23 },
  { nombre: 'Micaela Fernandez', edad: 22 },
  { nombre: 'Giuliano Giovanola', edad: 20 },
  { nombre: 'Lautaro Hudson', edad: 19 },
  { nombre: 'Alejandro Nieco', edad: 22 },
  { nombre: 'Micaela Orfali', edad: 24 },
  { nombre: 'Pedro Balza', edad: 26 },
  { nombre: 'Leandro Amaro', edad: 35 },
  { nombre: 'Alva Ramírez', edad: 27 },
  { nombre: 'Diego Salischiker', edad: 29 },
]

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

var alumnosNombres;
alumnosNombres = alumnos.map(un_alumno => un_alumno.nombre);
console.log("El array de nombres de los alumnos es: ", alumnosNombres);

// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

var arrayDeMayoresDe25;
arrayDeMayoresDe25 = alumnos.filter(un_alumno => un_alumno.edad > 25);
console.log("Los alumnos mayores de 25 años son: ", arrayDeMayoresDe25);

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce()

const totalDeEdades = alumnos.map(un_alumno => un_alumno.edad).reduce((acumulador, valorActual) => acumulador + valorActual);
console.log("La suma de todas las edades del array de alumnos es: ", totalDeEdades);

// 4. Obtener en una constante la edad de "Micaela Orfali" usando .find() 

const edadMica = (alumnos.find(un_alumno => un_alumno.nombre == "Micaela Orfali")).edad;
console.log("La edad de Mica Orfali es: ", edadMica);

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también

const [primero] = alumnos;
console.log("El primer alumno es: " + Object.values(primero));
const nombreDeprimero = primero.nombre;
console.log("El primer alumno es: ", nombreDeprimero);

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter()

var alumnosConL = alumnos.filter(un_alumno => un_alumno.nombre[0] == "L");
console.log("Los alumnos cuyo nombre empieza con L son: ", alumnosConL);

// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()

var alumnosConID = alumnos.map((un_alumno, i) => Object.defineProperty(un_alumno, 'id', { value: i * 123 }));
console.log("Los alumnos con nuevo id son: ", alumnosConID);

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

const promEdad = totalDeEdades / alumnos.length;
console.log("El promedio de edad de los alumnos es: ", promEdad);