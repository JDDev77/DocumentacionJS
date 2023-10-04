let div = 0/0
console.log(div)

//NaN
if(isNaN(div)){ //div == NaN --> No se puede utilizar
    console.log("Error al dividir por 0")
}else{
    console.log("OK!")
}

//null vs undefined
let user
console.log(user)

if (user == undefined){
    console.log("Variable no definida")
} else {
    console.log("OK!")
}

let userLogueado = null

if(userLogueado == null){
    console.log("Abrir pantalla de LOGIN")
    userLogueado = "Manolito"        
}else{
    console.log(`Bienvenido ${userLogueado}`)
}

if(!userLogueado){
    console.log("Abrir pantalla de LOGIN")
    userLogueado = "Manolito"        
}else{
    console.log(`Bienvenido ${userLogueado}`)
}


//Math
console.log(Math.PI)
console.log(Math.E)
console.log(Math.random()) //0-0.9999999
console.log(Math.floor(Math.random()*20)+1) //1-20

let num = parseInt("67.4567")
console.log(num)
let num2 = parseFloat("67.4567")
console.log(num2)

/*let num3 = prompt("Introduzca un número, por favor")
console.log(num3)
console.log(parseInt(num3))*/

/*let condition = false

do{
    let num3 = prompt("Introduzca un número, por favor")    
    if(isNaN(parseInt(num3))){
        condition = false
    }else{
        console.log(`Tu número es el: ${parseInt(num3)}`)
        condition = true
    }
} while (condition == false)

console.log("bye")*/

let aa = 2
let bb = '2'

if (aa == bb){
    console.log("Iguales")
} else {
    console.log("Distintos")
}

if (aa === bb){
    console.log("Iguales")
} else {
    console.log("Distintos")
}


let puntuacion = 7
if(puntuacion < 5){
    console.log("INSUFICIENTE")
}else if (puntuacion >= 5 && puntuacion <= 8){
    console.log("NOTABLE")
}else{
    console.log("SOBRESALIENTE")
}

switch(puntuacion){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("INSUFICIENTE")
        break
    case 5:
    case 6:    
        console.log("SUFICIENTE")
        break
    case 7:
    case 8:    
        console.log("NOTABLE")
        break
    default:
        console.log("SOBRESALIENTE")
}


let array1 = []
console.log(array1)
let colores = ["rojo","azul",'verde']
console.log(colores)
console.log(colores[1])
let numeros = [19,1,77,22,39]
console.log(numeros)
console.log(numeros[2])
let varios = ["rojo",19,true,false,77.44,'verde']
console.log(varios)
varios.push("Manolito")
console.log(varios)
varios.unshift("Rachel")
console.log(varios)
varios.pop()
console.log(varios)
varios.shift()
console.log(varios)
console.log(numeros.sort())
console.log(varios.sort())

const tablero = [[1,2,3],[4,5,6],[7,8,9]]
console.log(tablero[1][2])
console.log(tablero)
tablero[1][2] = 36
console.log(tablero)
tablero[1][2] = "Manolito"
console.log(tablero)

let arr = [1,2,3]
console.log(arr)
arr = [333,222,111]
console.log(arr)

const arrConst = [1,2,3]
console.log(arrConst)
//arrConst = [33,22,11]
arrConst[2] = "verde"
console.log(arrConst)


const equipos = ["Barcelona","Madrid","Betis"]
console.log(equipos.length)
console.log(equipos[2])

const equipos2 = new Array(3)
console.log(equipos2)
equipos2[1] = "Caudetano"
console.log(equipos2)


//OBJETOS - JSON (JavaScript Object Notation)
const equipoFutbol = {
    nombre:"Sevilla CF",
    ciudad:"Sevilla (España)",
    anyoFundacion:1900,
    esPrimera:true,
    jugadores: ["Navas","Rakitic","Ramos"],
    palmares: {
        ligas:7,
        copas:10,
        uefas:12,
        champions:null
    }
}

console.log(equipoFutbol)
console.log(equipoFutbol.ciudad)
console.log(equipoFutbol.jugadores[2])
console.log(equipoFutbol.palmares.uefas)
equipoFutbol.palmares.uefas = 8
console.log(equipoFutbol.palmares.uefas)

const equiposPrimera = [
    {
        nombre:"Real Madrid CF",
        champions: 14,
        jugadores: ["Vinicius","Rodrygo","Camavinga"]        
    },
    {
        nombre:"FC Barcelona",
        champions: 5,
        estadio: "Camp Nou"
    },
    {
        nombre:"Atlético de Madrid",
        champions: 0        
    }
]

console.log(equiposPrimera)

for(let i=0;i<equiposPrimera.length;i++){
    console.log(equiposPrimera[i])
}

for(let equipo of equiposPrimera){ //OF accede a VALORES
    console.log(equipo)
    equipo.ligas = null
    if(equipo.jugadores != undefined){
        console.log(equipo.jugadores)
    }
    if(equipo.estadio){ //if(equipo.estadio != undefined)
        console.log(equipo.estadio)
    }
}

console.log(equiposPrimera)

const matriz = [[1,2,3],[5,6,7],[21,22,'a']]
for(let fila of matriz){
    for(let col of fila){
        console.log(col)
    }
}

for(let equipo in equiposPrimera){ //IN accede a posiciones (índices)
    console.log(equipo)
}