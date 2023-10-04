function holaJSExterno(){
    alert("Hola JS Externo")
}

let a = 7
let nombre = "Mike"
let apellido = 'Sanchez'

console.log(a)
console.log(nombre)
console.log(apellido)

nombre = "Miguel"
console.log(nombre)

const TAMANYO = 200
console.log(TAMANYO)
//TAMANYO = 300 
/*
    Muchas
    líneas
    de
    comentarios
*/

console.log(apellido)


let esVacio = true
esVacio = false
console.log(esVacio)


console.log(nombre + ' ' + apellido)
let nombreApellidos = nombre + ' ' + apellido
console.log(nombreApellidos)

console.log(`Hola, mi nombre es '${nombre} ${apellido}"`)

console.log("Hola".length)
console.log(`La longitud de la cadena "Hola qué tal cómo estás?" es de ${"Hola qué tal cómo estás?".length}`)
let saludo = "Hola"
console.log(`La longitud de la cadena "Hola" es de ${saludo.length}`)


console.log("Hola".charAt(2))
console.log("Hola".concat(" Mundo"))
console.log("Hola".startsWith("ho"))
console.log("Miguel Angel".split(" "))
let nombreCompleto = "Miguel Angel Sanchez Benito"
let n = nombreCompleto.split(" ")[0]
let n2 = nombreCompleto.split(" ")[1]
let ape1 = nombreCompleto.split(" ")[2]
let ape2 = nombreCompleto.split(" ")[3]
console.log(n)
console.log(n2)
console.log(ape1)
console.log(ape2)

console.log("        Adiós, Amigo!!!    ".trim())
console.log("        Adiós, Amigo!!!    ".length)
console.log("        Adiós, Amigo!!!    ".trim().length)
console.log("        Adiós, Amigo!!!    ".trimStart())
console.log("        Adiós, Amigo!!!    ".trimEnd())
console.log("Hola".toUpperCase())
console.log("Hola".toLowerCase())

console.log("Hola a todos".replace("Hola","Adiós"))
console.log("Hola a todas".replace("a","o"))
console.log("Hola a todas".replaceAll("a","o"))

console.log(" Cómo mola Javascript   ".trimStart().toUpperCase().replace("MOLA", "NO MOLA"))

console.log("Hola a todos \n y a todas")
console.log("Hola a \'todos\'")
console.log("Hola a \"todos\"")
console.log('Hola a "todos"')
console.log(`Hola a "todos"`)

let producto = "Manzanas"
let precio = 1.80 //float / double --> punto (.) para decimales (no se usa la coma ,)
let cantidad = 7
console.log(`Has comprado ${cantidad} ${producto} y el total es ${precio*cantidad}€`)
