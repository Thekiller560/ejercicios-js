
function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que desea ejecutar: \r\n 1.suma \r\n 2.Promedio de Examenes \r\n 3.Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.Calcular el area del circulo \r\n 6.Calcular salario semanal \r\n 7.convertir pulgadas \r\n 8.Cambiar a dolares")
    )

    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    }
    else{
        MenuEjercicio(nro_ejercicio)
    }



}


function MenuEjercicio(nro_ejercicio){
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("Ingrese el valor 2 a sumar:"));
            alert(ej1_sumarValores(valor1,valor2));
            break;
        case 2:
            let ex1 = parseFloat(prompt("Ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("Ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("Ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("Ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
            break;
        case 3:
            let base_rect = parseFloat(prompt("Ingrese la base del rectangulo:"));
            let altura_rect = parseFloat(prompt("Ingrese la altura del rectangulo:"));
            alert(ej3_calcularareaRectangulo(base_rect,altura_rect))
            break;
        case 4:
            let base_triangulo = parseFloat(prompt("Ingrese la base del triangulo:"));
            let altura_triangulo = parseFloat(prompt("Ingrese la altura del triangulo:"));
            alert(ej4_areaTriangulo(base_triangulo,altura_triangulo))
            break;
        case 5:
            let radioCircuferencia = parseFloat(prompt("Ingrese el radio de la circunferencia:"));
            alert(ej5_areaCircunferencia(radioCircuferencia))
            break;
        case 6:
            let horasTrabajo = parseFloat(prompt("Ingrese las horas de trabajo"));
            let salariohoraHombre = parseFloat(prompt("Ingrese el salario hora hombre"));
            alert(ej6_calcularSalario(horasTrabajo,salariohoraHombre))
            break;
        case 7:
            let metroMedida = parseFloat(prompt("Ingrese la cantidad de tela a necesitar en mtrs"));
            alert(ej7_convertirPulgadas(metroMedida))
            break;
        case 8:
            let monedaPeruana = parseFloat(prompt("Ingrese la cantidad de dinero a cambiar"));
            alert(ej8_convertirMoneda(monedaPeruana))
            break;    
        default:
            break;
    }

}

function ej1_sumarValores(a,b){
    if (isNaN(a) || isNaN(b)){
        return "Por favor ingrese valores"
    }else{
        return a + b;
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    
    if(isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
    return "Porfavor ingrese valores"
    } else {
        return (ex1 + ex2 + ex3 + ex4)/4
    }
}

function ej3_calcularareaRectangulo(base_rect,altura_rect){
    if (isNaN(base_rect) || isNaN(altura_rect)) {
            return "porfavor ingrese valores"
    }
    else{
        return "el area del rectangulo: " + (base_rect*altura_rect)
    }
}

function ej4_areaTriangulo(base_triangulo,altura_triangulo){
    if (isNaN(base_triangulo) || isNaN(altura_triangulo)) {
        return "Porfavor ingrese valores"        
    } else {
        return "el area del triangulo: " + (base_triangulo* altura_triangulo)/2
    }
}

function ej5_areaCircunferencia(radioCircuferencia){
    if (isNaN(radioCircuferencia)){
        return "Ingrese un valor"
    } else {
        return (Math.PI * radioCircuferencia *radioCircuferencia)
    }
}

function ej6_calcularSalario(horasTrabajo,salariohoraHombre){
    if (isNaN(horasTrabajo) || isNaN(salariohoraHombre)){
        return "Porfavor, ingrese valores"
    } else {
        return " el salario es: " + (horasTrabajo*salariohoraHombre)
    }

}

function ej7_convertirPulgadas(metroMedida){
    if (isNaN(metroMedida)) {
        return "Porfavor Ingrese valores"        
    } else {
        return "la cantidad en pulgadas es: " + (metroMedida/0.0254)
    }
}

function ej8_convertirMoneda(monedaPeruana){
    if (isNaN(monedaPeruana)) {
        return "porfavor Ingrese valores"
    } else {
        return "el cambio es: " + (monedaPeruana/3.90)
    }
}