
function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que desea ejecutar: \r\n 1.suma \r\n 2.Promedio de Examenes \r\n 3.Calcular el area del rectangulo \r\n 4.Calcular el area del triangulo \r\n 5.Calcular el area del circulo \r\n 6.Calcular salario semanal \r\n 7.convertir pulgadas \r\n 8.Cambiar a dolares \r\n 9.Calcular Edad \r\n 10.Calcular persona de menor edad \r\n 11.Calcular Bono \r\n 12.Calcular Incremento de Salario Anual \r\n 13.Calcular Aprobados y Desaprobados \r\n 14.Calcular cant de focos segun color \r\n 15.Calcular si vota o no vota")
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
        case 9:
            let a??oNacimiento = parseInt(prompt("Ingrese el A??o en que nacio"));
            alert(ej9_calcularEdad(a??oNacimiento))
            break;
        case 10:
            let nombre1 = prompt("Ingrese nombre 1");
            let edadNombre1 = parseInt(prompt("Ingrese edad 1"));
            let nombre2 = prompt("Ingrese nombre 2");
            let edadNombre2 = parseInt(prompt("Ingrese edad 2"));
            let nombre3 = prompt("Ingrese nombre 3");
            let edadNombre3 = parseInt(prompt("Ingrese edad 3"));
            alert(ej10_personaMenor(nombre1,nombre2,nombre3,edadNombre1,edadNombre2,edadNombre3))
            break;
        case 11:
            let a??oTrabajo = parseInt(prompt("Ingrese los A??os de Trabajo"));
            alert(ej11_calcularBono(a??oTrabajo))
            break;
        case 12:
            let salarioMensual = parseFloat(prompt("Ingrese su Salario Inicial"));
            let a??odeTrabajo = parseInt(prompt("Ingrese los A??os de Trabajo"));
            alert(ej12_calcularIncrementosalarial(salarioMensual,a??odeTrabajo))
            break;
        case 13:
            let cantAlumnos = parseInt(prompt("Ingrese la cantidad de Alumnos a ingresar sus notas"));
            let nota = 0;
            let aprobados = 0;
            let desaprobados = 0;
            alert(ej13_Determinaraprobados(cantAlumnos,nota,aprobados,desaprobados))
            break;
        case 14:

            let focosColores = [];
            let cantFocos = parseInt(prompt("Ingrese la cantidad a producir"));
            for (let produccionFocos = 0; produccionFocos < cantFocos; produccionFocos++) {
                focosColores[focosColores.length] = prompt("Ingrese el color a producir: puede ser rojo,verde o blanco");             
            }
            let focosRojos = focosColores.filter(color => color == "rojo").length;
            let focosVerde = focosColores.filter(color => color == "verde").length;
            let focosBlanco = focosColores.filter(color => color == "blanco").length;
            alert(ej14_contarFocos(focosRojos,focosVerde,focosBlanco))
            break;

        case 15:
            let edadd=parseInt(prompt("\r\nIngrese su edad: "));
            alert(ej15_votar(edadd));
            break;
       
        default:
            alert("Porfavor Ingrese valores menores o igual que 15")
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

function ej9_calcularEdad(a??oNacimiento){
    if (isNaN(a??oNacimiento)) {
        return "por favor ingrese el a??o de Nacimiento"
    } else {
        return "Su edad es : " + (2022-a??oNacimiento)
    }
}

function ej10_personaMenor(nombre1,nombre2,nombre3,edadNombre1,edadNombre2,edadNombre3){

        if (edadNombre1<edadNombre2) {
            if (edadNombre1<edadNombre3) {
                return `la persona menor es : ${nombre1} con la menor edad ${edadNombre1}`;                
            } else {
                return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
            }
            
        } else {
            if (edadNombre2<edadNombre3) {
                return `la persona menor es : ${nombre2} con la menor edad ${edadNombre2}`;                
            } else {
                return `la persona menor es : ${nombre3} con la menor edad ${edadNombre3}`;
            }
            
        }
    }

function ej11_calcularBono(a??oTrabajo){
    if (isNaN(a??oTrabajo)) {
        return "por favor ingrese los a??os de trabajo"
    } else {
        switch (a??oTrabajo) {
            case 1:
                return "Su Bono es de $100"
                break;
            case 2:
                return "Su Bono es de $200"
                break;
            case 3:
                return "Su Bono es de $300"
                break;
            case 4:
                return "Su Bono es de $400"
                break;
            case 5:
                return "Su Bono es de $500"
                break;
            case 0:
                return "No merece Bono :( pal otro a??o sera pipipipipi"
                break;
            
            default:
                return "Su Bono es de $1000"
                break;
        }
    }
}

function ej12_calcularIncrementosalarial(salarioMensual,a??odeTrabajo){
    if (isNaN(salarioMensual) || isNaN(a??odeTrabajo)){
        return "Porfavor, ingrese datos"
    } else {
        return " el salario es: " + (salarioMensual*Math.pow(1.10,a??odeTrabajo)).toFixed(2)
    }

}

function ej13_Determinaraprobados(cantAlumnos,aprobados,desaprobados,nota){

    for (let notaIngreso = 1; notaIngreso <= cantAlumnos; notaIngreso++) {
        nota = parseFloat(prompt("Ingrese la nota"));
            if (nota>=10.5) {
                aprobados=aprobados+1
                
            } else {
                desaprobados=desaprobados+1
                
            }
        
    }
return `Hay ${aprobados} aprobados y un total de ${desaprobados} desaprobados`; 

}

function ej14_contarFocos(focosRojos,focosVerde,focosBlanco){
    return `Hay ${focosRojos} Rojo, un total de ${focosVerde} Verde y un total de ${focosBlanco} Blanco`;

}





function ej15_votar(edad){
    if(edad>=18){
        return "Ud puede votar en las elecciones";
    }
    else{
        return "Ud. no puede votar en las elecciones";
    }
}