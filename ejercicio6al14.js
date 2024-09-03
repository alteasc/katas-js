//! EJERCICIO 6

//* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log('----------------')

//* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

console.log('----------------')

//* 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 0; i < 10; i++) {
  if (i < 9) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!')
  }
}

//! EJERCICIO 7: la función se usa para que devuelve el valor más alto

function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo)
}
sum(4, 2)

console.log(sum(4, 2))
console.log('----------------')

//! EJERCICIO 8: busca el string más largo

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let longestWord = param[0]
  for (let i = 1; i < param.length; i++) {
    const element = param[i]
    if (element.length > longestWord.length) {
      longestWord = element
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers))
console.log('----------------')

//! EJERCICIO 9: suma de los elementos números

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let sumaArray = 0 // aquí se crea esta variable de apoyo para empezar a sumar en número "0" directamente y no en param[0], porque es un array de números y no de strings como ocurría en el caso anterior
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    sumaArray += element
  }
  return sumaArray
}

console.log(sumAll(numbers))
console.log('----------------')

//! EJERCICIO 10: suma los números y divide entre el número de elementos del array (media)

const numbers2 = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let sumaArray = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    sumaArray += element
  }
  return sumaArray / param.length
}

console.log(average(numbers2))
console.log('----------------')

//! EJERCICIO 11: suma números + suma longitud strings y todo lo divide entre el número de elementos

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    if (typeof element === 'string') {
      sum += element.length
    } else {
      sum += element
    }
  }
  return sum / param.length
}

console.log(averageWord(mixedElements))
console.log('----------------')

//! EJERCICIO 12: la función se usa para eliminar los elementos duplicados del array

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i]
    for (let j = i + 1; j < param.length; j++) {
      const segundoPuntero = param[j]
      if (primerPuntero === segundoPuntero) {
        param.splice(j, 1)
        j--
      }
    }
  }
  console.log(param)
}

removeDuplicates(duplicates)
console.log('----------------')

//! EJERCICIO 13: buscar un determinado elemento dentro de un array

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, element) {
  if (array.includes(element)) {
    return `${true}, posicion: ${array.indexOf(element)}`
  } else {
    return false
  }
}

console.log(finderName(nameFinder, 'Altea'))
console.log('----------------')

//! EJERCICIO 14: contador del número de veces que se repite un elemento dentro de un array

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let count = {}
  for (let i = 0; i < param.length; i++) {
    if (count[param[i]] >= 1) {
      count[param[i]]++
    } else {
      count[param[i]] = 1
    }
  }
  console.log(count)
}

repeatCounter(counterWords)
console.log('----------------')
