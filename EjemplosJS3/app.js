/******************** 
    FUNCIONES JS 
*********************/
//1 - Función DECLARACIÓN - Se puede llamar antes y después de su declaración
sumar(2,3)
sumar(4,6)
sumar(1,1)
sumar(2,2)
sumar(0,7)
function sumar(a,b){
    //let a = 2
    //let b = 3
    let suma = a + b
    console.log(suma)
    //return undefined implícito
}
sumar(15,2)
console.log(sumar(3,4))

console.log(saludar("Míguel","Sánchez"))
function saludar(nombre,apellidos){
    return `Hola ${nombre} ${apellidos}`
}
console.log(saludar("Johnny","Walker"))

//Ámbitos (Scope)
let nombre = "Mike" //Ámbito GLOBAL
function saludarMike(){
    let nombre = "Paco" //Ámbito LOCAL a la función
    console.log(nombre)
    if(nombre === "Paco"){
        let nombre = "Juan" //Ámbito LOCAL a la condición IF
        console.log(nombre)
    }    
}
saludarMike()
console.log(nombre)

//2 - FUNCIONES EXPRESIÓN -- Sólo se pueden utilizar una vez inicializadas
/*function cuadradoNum(num){
    return num ** 2
}*/
//console.log(cuadradoNum(7))
const cuadradoNum = function(num){
    return num**2
}
console.log(cuadradoNum(7))

//Operaciones entre funciones
//Funciones son, como los arrays, objetos...
//Podemos pasar una FUNCIÓN como PARÁMETRO de otra FUNCIÓN
const decirHola = function(num){
    console.log("Hola! " + num)
}
function holaVariasVeces(f){ //Parámetro función SIN paréntisis
    for(let i=0;i<10;i++){
        f(i) //Llamada con paréntesis
    }
}
holaVariasVeces(decirHola) //Invocación sin paréntesis

//Devolver una función dentro de otra (return function)
function multiplicar(x,y){
    //return x*y
    return function(res){
        return res = x*y
    }
}
let resultado = multiplicar(3,4)
console.log(resultado())

function makeBetweenFunc(min,max){
    return function(val){
        return val >= min && val <= max
    }
}
const enRango = makeBetweenFunc(18,100)
console.log(enRango(17))
console.log(enRango(21))

//Objetos y funciones
const equipo = {
    nombre:"Madrid",
    anyoFundacion:1895,
    vida(){
        return new Date().getFullYear() - this.anyoFundacion
    },
    anyosVida:function(){
        return new Date().getFullYear() - this.anyoFundacion
    }
}
console.log(equipo.nombre)
console.log(equipo.vida())
console.log(equipo.anyosVida())

//Operaciones FUNCTION con ARRAYs
const numeros = [1,2,3,4,5]
/* Método clásico
for(let i=0;i<numeros.length;i++){
    numeros[i]++
}*/
console.log(numeros)
const numerosNegativos = numeros.forEach(function(item){
    console.log(item * -1)    
    //return ++item
})
//console.log(numerosNegativos)

const nombres = ["Juan","Paco","Antonio"]
console.log(nombres)
const aMayusculas = nombres.map(function(item){
    //console.log(item.toUpperCase())
    return item.toUpperCase()
})
console.log(aMayusculas)

//3 - FUNCIONES ARROW (FLECHA) --> Expresiones LAMBDA
const cuadrado = (x) => { return x*x}
const cuadradoAbreviado = x => x*x //return implícito cuando lleva una línea
const suma = (x,y) => {
    return x+y
}
const suma2 = (x,y) => x+y

console.log(suma(2,8))
console.log(suma2(2,8))

function cuadrado2(x){
    return x*x
}
console.log(cuadrado(3))
console.log(cuadradoAbreviado(3))
console.log(cuadrado2(3))

//RESUMEN
//1 - Declaración
function esPar(num){
    return num%2 == 0
}
console.log(esPar(4))
console.log(esPar(5))

//2 - Expresión
const esPar2 = function(num){
    return num%2 == 0
}
console.log(esPar2(4))
console.log(esPar2(5))

//3 - Arrow LAMBDA
const esPar3 = num => num%2 == 0
console.log(esPar3(4))
console.log(esPar3(5))

const esPar4 = (num) => { return num%2 == 0 }
console.log(esPar4(4))
console.log(esPar4(5))

//FUNCIONES ANÓNIMAS --> Sin nombre (Expresión y Lambda... Las declarativas NO pueden ser anónimas)
const digoHola = function(){
    return "Hola"
}
const digoHolaLambda = () => "Hola"
const digoHolaLambda2 = () => {return "Hola"}

//Más funciones con ARRAYS
const nombres2 = ["Juan","Pepa","Manolo","Maria"]
const buscar = nombres2.find(item => item.indexOf("M") === 0)
console.log(buscar)
const buscar2 = nombres2.find(function(item){ return item.indexOf("M") === 0})
console.log(buscar2)
const funcBuscar = item => item.indexOf("M") === 0
const buscar3 = nombres2.find(funcBuscar)
console.log(buscar3)

/*const aMayusculas2 = nombres.map(function(item){
    return item.toUpperCase()
})*/

//const aMayusculas2 = nombres2.map(item => item.toUpperCase())
const aMayusculas2 = nombres2.map((item) => { return item.toUpperCase()})
console.log(aMayusculas2)

const nombresM = nombres2.filter(item => item.indexOf("M") === 0)
console.log(nombresM)

const nombresM2 = nombres2.filter(item => item.includes("M"))
console.log(nombresM2)

const everyName = nombres2.every(item => item.includes("a"))
console.log(everyName)

const someName = nombres2.some(item => item.includes("j"))
console.log(someName)

//Operador ternario
let edad = 21
if(edad >= 18){
    console.log("Mayor Edad")
}else{
    console.log("Menor Edad")
}

edad >= 18 ? console.log("Mayor Edad") : console.log("Menor edad")

//Parámetros por Defecto
function multiplicarDefecto(a=1,b=1){
    console.log(a*b)
}

multiplicarDefecto(2,4)
multiplicarDefecto()

const numeros1 = [1,2,3]
const numeros2 = [4,5,6]
const resultadoNum = ["Paco", "Juan", ...numeros1, ...numeros2, 7,8,9]
console.log(resultadoNum)

//Parámetros REST ...
function sumaTotal(...numeros){
    let total = 0
    for(let n of numeros){
        total += n
    }
    console.log(total)
}

sumaTotal(1,2,3)
sumaTotal(1,2,3,4,5,6,7,8,9,10,11)