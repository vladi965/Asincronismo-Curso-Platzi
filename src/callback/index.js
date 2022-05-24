function sum (num1, num2){
    return num1 + num2;
}


function calc(num1, num2, callback){
    return callback(num1, num2);
}

//Crear el llamado
console.log(calc(8,2, sum));

//Ejemplo 2 -> trabajar con tiempos
function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);