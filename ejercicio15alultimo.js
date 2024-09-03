//! EJERCICIO 15: mostrar todos los valores del array que incluyan la palabra "camiseta"

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

for (const product of products) {
  if (product.includes('Camiseta')) {
    console.log(product)
  }
}

console.log('-------------------------')

//! EJERCICIO 16: recorrer todos los elementos del array con un forof

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

for (const placeToTravel of placesToTravel) {
  console.log(placeToTravel)
}

console.log('-------------------------')

//! EJERCICIO 17: imprimir por consola los datos del alienígena

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const key in alien) {
  console.log(alien[key])
}

console.log('-------------------------')

//! EJERCICIO 18: recorrer todo el array con un bucle for y eliminar elementos con id 11 y 40

const placesToTravel2 = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

for (let i = 0; i < placesToTravel2.length; i++) {
  if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
    placesToTravel2.splice(i, 1)
    i--
  }
}

console.log(placesToTravel2)

console.log('-------------------------')

//! EJERCICIO 19: recorrer todo el array con un bucle for y eliminar los elementos que incluyan la palabra "gato"

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1)
    i--
  }
}

console.log(toys)

console.log('-------------------------')

//! EJERCICIO 20: añadir los que tienen más 15 en ventas a este array "popularToys"

const popularToys2 = []
const toys2 = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]

for (const toy of toys2) {
  if (toy.sellCount > 15) {
    popularToys2.push(toy)
  }
}

console.log(popularToys2)

console.log('-------------------------')

//! EJERCICIO 21: imprimir por consola usuarios menores de edad con el mensaje "Usuarios menores de edad:" y "Usuarios mayores de edad:" con los usuarios mayores de edad

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const mayores = []
const menores = []

for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    menores.push(users[i])
  } else {
    mayores.push(users[i])
  }
}
console.log('Usuarios menores de edad:', menores)
console.log('Usuarios mayores de edad:', mayores)

console.log('-------------------------')

//PRUEBAS MIAS
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    console.log(`Usuarios menores de edad: ${users[i].name}`)
  } else {
    console.log(`Usuarios mayores de edad: ${users[i].name}`)
  }
}

console.log('-------------------------')

// SOLUCIÓN DIAPOSITIVAS
// for (const user of users) {
//   if (user.years < 18) {
//     menores.push(user)
//   }
//   if (user.years >= 18) {
//     mayores.push(user)
//   }
// }

// console.log('Usuarios menores de edad:', menores)
// console.log('Usuarios mayores de edad:', mayores)

//! EJERCICIO 22: reemplazar todas las comidas que no sean veganas por una de las frutas del array de frutas

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits.splice(0, 1)[0]
    foodSchedule[i].isVegan = true
  }
}

console.log(foodSchedule)

console.log('-------------------------')

//! EJERCICIO 23: crear 3 arrays con las películas clasificadas según su duración en minutos

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const smallMovies = []
const mediumMovies = []
const largeMovies = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  }
  if (movie.durationInMinutes > 200) {
    largeMovies.push(movie)
  } else {
    mediumMovies.push(movie)
  }
}

console.log(smallMovies)
console.log(mediumMovies)
console.log(largeMovies)

console.log('-------------------------')

//! EJERCICIO 24: sumar el total de ventas

let suma = 0

const products1 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (const product of products1) {
  suma += product.sellCount
}

console.log(suma)

console.log('-------------------------')

//! EJERCICIO 25: sumar el total de ventas y mostrar por consola la media de esas ventas

let sum = 0

const products2 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (let i = 0; i < products2.length; i++) {
  sum += products2[i].sellCount
}

console.log(sum / products2.length)

console.log('-------------------------')

//! EJERCICIO 26: recorrer el array de productos y añadir al array de goodproducts los que tienen más de 20 ventas y al array de badproducts los que tienen menos de 20

const goodProducts = []
const badProducts = []
const products3 = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (let i = 0; i < products3.length; i++) {
  if (products3[i].sellCount > 20) {
    goodProducts.push(products3[i])
  } else {
    badProducts.push(products3[i])
  }
}

console.log(goodProducts)
console.log(badProducts)
