// Ejercicio 1

alert('1. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido del usuario.')

var nombre = prompt('Ingrese su nombre: '); 
var apellido = prompt('Ingrese su apellido: ');

console.log('Respuesta ejercicio 1.\nBienvenido ' + nombre + ' ' + apellido + '!');
alert('Respuesta ejercicio 1.\nBienvenido ' + nombre + ' ' + apellido + '!');

// Ejercicio 2

alert('2. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa para calcular e informar el perímetro y el área del círculo. Se considerará para este ejercicio que el valor de PI será 3.1416.')

const PI = 3.1416;
var diametro = Number(prompt('Ingrese el dimetro del circulo [cm]: '));

var perimetro = PI*diametro;
var area = PI*((diametro/2)**2);

console.log('Respuesta ejercicio 2.\nDiametro = ' + diametro +' [cm]\nPerimetro del circulo = ' + perimetro + ' [cm] \nArea del circulo = ' + area + ' [cm2]');
alert('Respuesta ejercicio 2.\nDiametro = ' + diametro +' [cm]\nPerimetro del circulo = ' + perimetro + ' [cm] \nArea del circulo = ' + area + ' [cm2]');

// Ejercicio 3

alert('3. Se le solicita al usuario que ingrese 4 números. Realice un programa para calcular e informar la suma y el promedio.')

alert('A continuación, ingrese 4 números')
let num1 = Number(prompt('Número 1: '))
let num2 = Number(prompt('Número 2: '))
let num3 = Number(prompt('Número 3: '))
let num4 = Number(prompt('Número 4: '))

let suma = num1 + num2 + num3 + num4
let promedio = (num1 + num2 + num3 + num4)/4

console.log('Respuesta ejercicio 3.\nSuma = ' + suma + '\nPromedio = ' + promedio)
alert('Respuesta ejercicio 3.\nSuma = ' + suma + '\nPromedio = ' + promedio)

// Ejercicio 4
alert('4. Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora y la cantidad de horas trabajadas en el mes.')

let valorHora = Number(prompt('Ingrese el valor de la hora: '));
let cantHoras = Number(prompt('Ingrese la cantidad de horas trabajadas en el mes: '));

let sueldo = valorHora*cantHoras;

console.log('Respuesta ejercicio 4. \nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nSueldo = $' + sueldo);
alert('Respuesta ejercicio 4. \nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nSueldo = $' + sueldo);

alert('5.Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa.\nRealice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono mensual igual al 15% del sueldo por año de antigüedad.')

alert('Nota: Se utilizaran directamente el valorHora y cantHoras del ejercicio anterior');

let antiguedad = Number(prompt('Ingrese los años de antiguedad en la empresa: '));

let sueldoAntiguedad = valorHora*cantHoras*(1 + (antiguedad*0.15));

console.log('Respuesta ejercicio 5. \nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nAños de antiguedad = ' + antiguedad + ' años\nSueldo = $' + sueldoAntiguedad);
alert('Respuesta ejercicio 5. \nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nAños de antiguedad = ' + antiguedad + ' años\nSueldo = $' + sueldoAntiguedad);


alert('6. Realizar un sistema para el cálculo de sueldo de una empresa de seguros. Se le solicita que ingrese el valor de la hora, la cantidad de horas trabajadas en el mes, los años de antigüedad, la cantidad de seguros vendidos y el valor del seguro más caro vendido. \nRealice un programa para calcular e informar el sueldo mensual del empleado, teniendo en cuenta que se le asigna un bono igual al 50% del seguro más caro vendido, un bono igual al 25% del sueldo por la cantidad de seguros vendidos y otro bono igual al 15% del sueldo por año de antigüedad. Una vez obtenido el sueldo final, calcular e informar el valor promedio de la hora del empleado.')
alert('Nota: Se utilizaran directamente el valorHora, cantHoras y antiguedad de ejercicios anteriores')

let cantSegurosVendidos = Number(prompt('Ingrese la cantidad de seguros vendidos: '));
let valorMasCaroVendido = Number(prompt('Ingrese el valor del seguro más caro vendido: '));

let sueldoSeguros = valorHora*cantHoras*(1 + antiguedad*0.15 + cantSegurosVendidos*0.25) + valorMasCaroVendido*0.5;


alert('Ejercicio 6.\nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nAños de antiguedad = ' + antiguedad + ' años\nCantidad de seguros vendidos = ' + cantSegurosVendidos + '\nValor del seguro más caro vendido = $' + valorMasCaroVendido + '\nSueldo = $' + sueldoSeguros);

console.log('Ejercicio 6.\nValor de la hora = $' + valorHora + '\nCantidad de horas trabajadas en el mes =' + cantHoras + ' hrs \nAños de antiguedad = ' + antiguedad + ' años\nCantidad de seguros vendidos = ' + cantSegurosVendidos + '\nValor del seguro más caro vendido = $' + valorMasCaroVendido + '\nSueldo = $' + sueldoSeguros);

alert('Si necesita consultar algun resultado puede hacerlo por consola.\nGracias por su tiempo!')
