
alert('7. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es cero, par o impar.')

let num7 = parseInt(prompt('Ingrese un número entero: '))
if (num7 == 0) {
    alert('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl cero no es par ni impar');
    console.log('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl cero no es par ni impar');
} else if (num7%2 == 0){
    alert('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl numero ingresado es par')
    console.log('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl numero ingresado es par')
} else {
    alert('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl numero ingresado es impar')
    console.log('Respuesta ejercicio 7: \nNúmero = ' + num7 + '\nEl numero ingresado es impar')
};

alert('8. Se le solicita al usuario que ingrese un número. Realice un programa para informar si el número es múltiplo de 3.')

let num8 = parseInt(prompt('Ingrese un número entero: '))

if (num8 % 3 == 0) {
    alert('Respuesta ejercicio 8:\nEl número ' + num8 + ' es multiplo de 3')
    console.log('Respuesta ejercicio 8:\nEl número ' + num8 + ' es multiplo de 3')
}else{
    alert('Respuesta ejercicio 8:\nEl número ' + num8 + ' NO es múltiplo de 3')
    console.log('Respuesta ejercicio 8:\nEl número ' + num8 + ' NO es múltiplo de 3')
}

alert('9. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal.');

let letra9 = prompt('Ingrese una letra: ');

switch(letra9){
    case 'a':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'A':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'e':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'E':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'i':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'I':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'o':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'O':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'u':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    case 'U':
        alert('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ' + letra9 + ' es una vocal');
    break
    default:
        alert('Respuesta ejercicio 9:\nLa letra ingresada, NO es una vocal');
        console.log('Respuesta ejercicio 9:\nLa letra ingresada, NO es una vocal');
    break
}

alert('10. Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. Realice un programa para informar si el número está dentro del rango.\nSi está en rango, informar si el número es par.\nSi no está dentro del rango, informar si es número es impar.\nTenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.');
let nMinimo
let nMaximo

do{
    nMinimo = parseInt(prompt('Ingrese el número inferior del rango: '));
    nMaximo = parseInt(prompt('Ingrese el número superior del rango: '));
    
}while((nMinimo>nMaximo) || ((nMaximo-nMinimo)<5))

let num10 = parseInt(prompt('Ingrese un número: '));

if (num10>=nMinimo && num10<=nMaximo){
    if(num10 % 2 == 0 && num10!=0){
        alert('Respuesta ejercicio 10:\nEl número ' + num10 + ', está dentro del rango (' + nMinimo + ',' + nMaximo + ') y es par.')
        console.log('Respuesta ejercicio 10:\nEl número ' + num10 + ', está dentro del rango (' + nMinimo + ',' + nMaximo + ') y es par.')

    }else{
        alert('Respuesta ejercicio 10:\nEl número ' + num10 + ', está dentro del rango (' + nMinimo + ',' + nMaximo + ').')
        console.log('Respuesta ejercicio 10:\nEl número ' + num10 + ', está dentro del rango (' + nMinimo + ',' + nMaximo + ').')

    }
    
}else{
    if(num10 % 2 == 1){
        alert('Respuesta ejercicio 10:\nEl número ' + num10 + ', está fuera del rango (' + nMinimo + ',' + nMaximo + ')y es impar')
        console.log('Respuesta ejercicio 10:\nEl número ' + num10 + ', está fuera del rango (' + nMinimo + ',' + nMaximo + ')y es impar')

    }else{
        alert('Respuesta ejercicio 10:\nEl número ' + num10 + ', está fuera del rango (' + nMinimo + ',' + nMaximo + ')')
        console.log('Respuesta ejercicio 10:\nEl número ' + num10 + ', está fuera del rango (' + nMinimo + ',' + nMaximo + ')')

    }
}

alert('11. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar la operación solicitada entre ambos números.')

let num11a = Number(prompt('Ingrese el primer número: '));
let num11b = Number(prompt('Ingrese el segundo número: '));
let operador = prompt('Que operación desea realizar: "+", "-" , "*" , "/" ?')
let resultado


switch(operador){
    case '+':
        resultado = num11a + num11b
        alert('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
        console.log('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)

    break
    case '-':
        resultado = num11a - num11b
        alert('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
        console.log('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
    break
    case '*':
        resultado = num11a * num11b
        alert('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
        console.log('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
    break
    case '/':
        resultado = num11a / num11b
        alert('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
        console.log('Respuesta ejercicio 11:\n' + num11a + operador + num11b + ' = ' + resultado)
    break
    default:
        alert('Respuesta ejercicio 11:\nOperador o caracter incorrecto')
        console.log('Respuesta ejercicio 11:\nOperador o caracter incorrecto')
}

alert('12. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.')

let ladoA = Number(prompt('Ingrese la medida del lado "A": '))
let ladoB = Number(prompt('Ingrese la medida del lado "B": '))
let ladoC = Number(prompt('Ingrese la medida del lado "C": '))

if (ladoA == ladoB && ladoA == ladoC){
    alert('Respuesta ejercicio 12:\nTiene sus tres lados iguales, por lo tanto es un triángulo equilátero')
    console.log('Respuesta ejercicio 12:\nTiene sus tres lados iguales, por lo tanto es un triángulo equilátero')

}else{
    if(ladoA==ladoB || ladoA == ladoC || ladoB == ladoC){
    alert('Respuesta ejercicio 12:\nTiene solo dos lados iguales, por lo tanto es un triángulo isósceles')
    console.log('Respuesta ejercicio 12:\nTiene solo dos lados iguales, por lo tanto es un triángulo isósceles')

    }else{
        alert('Respuesta ejercicio 12:\nTiene sus tres lados distintos, por lo tanto es un triángulo escaleno')
        console.log('Respuesta ejercicio 12:\nTiene sus tres lados distintos, por lo tanto es un triángulo escaleno')

    }
}

alert('13. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al usuario que ingrese la categoría a la que pertenece que define el sueldo básico mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las horas extras. Se sabe que:\na. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 más.\nb. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 más.\nRealice un programa para calcular e informar el sueldo mensual del empleado, indicando si su sueldo supera o no los u$s 4000.')

alert('Nota: para resolver este problema se hicieron ciertas suposiciones:\n 1. Cantidad de horas básico: 180 hs;\n 2. Valor de la hora extra = 1.5*sueldo básico/horas basicas.')

let categoría13 = Number(prompt('Hola! Cual es tu categoría?:\nIngresa "1" si eres Categoria 1;\nIngresa "2" si eres Categoria 2;\nIngresa "3" si eres Categoria 3.'))
let horasExtras = Number(prompt('Ingrese la cantidad de horas extras: '))
let sueldo
switch (categoría13){
    case 1:
        if (horasExtras>20){
            sueldo = 2000 + (horasExtras*1.5*2000/180) + 500 
        }else{
            sueldo = 2000 + (horasExtras*1.5*2000/180)
        }
    break

    case 2:
        
        sueldo = 3000 + (horasExtras*1.5*3000/180)
        
    break

    case 3:
        if (horasExtras>30){
            sueldo = 4000 + (horasExtras*1.5*4000/180) + 1000 
        }else{
            sueldo = 4000 + (horasExtras*1.5*4000/180)
        }
    break

}

if (sueldo>4000){
    alert('Respuesta ejercicio 13:\nCategoria ' + categoría13 + '\nCantidad de Horas extras = ' + horasExtras + '\nSueldo = ' + sueldo + ' USD (Sueldo superior a 4000 usd)')
    console.log('Respuesta ejercicio 13:\nCategoria ' + categoría13 + '\nCantidad de Horas extras = ' + horasExtras + '\nSueldo = ' + sueldo + ' USD (Sueldo superior a 4000 usd)')


}else{
    alert('Respuesta ejercicio 13:\nCategoria ' + categoría13 + '\nCantidad de Horas extras = ' + horasExtras + '\nSueldo = ' + sueldo)
    console.log('Respuesta ejercicio 13:\nCategoria ' + categoría13 + '\nCantidad de Horas extras = ' + horasExtras + '\nSueldo = ' + sueldo)
}

alert('Si necesita consultar algun resultado puede hacerlo por consola.\nGracias por su tiempo!')


