var readlineSync = require('readline-sync');

const tareas = [
    {id : 1, name : "comprar provisiones", completado : false},
    {id : 2, name : "comprar medicina", completado : false},
    {id : 3, name : "comprar ropa", completado : false},
];

console.table(tareas);

function agregar()
{
    let tareaName = readlineSync.question('Agrega una tarea:');
    let existe = '';
    for (var i = 0; i < tareas.length; i++) {
        
        if (tareaName == tareas[i].name) {
            existe = 'si';
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'si'){
        console.log('Tarea ya existe');
    }
    else{
        let lastTarea = tareas.length-1;
        let idTarea = tareas[lastTarea].id+1;
        let tarea = {id : idTarea, name : tareaName, completado : false};
        tareas.push(tarea);
        console.log('Se agregó la tarea');
    }
    
    console.table(tareas);
}

function borrar(){
    let tareaNumber = readlineSync.question('Borrar tarea numero:');
    let existe = '';
    let index = '';
    for (var i = 0; i < tareas.length; i++) {
        
        if (tareaNumber == tareas[i].id) {
            existe = 'si';
            index = i;
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'no'){
        console.log('Tarea no existe');
    }
    else{
        tareas.splice(index,1);
        console.log('Se borró la tarea');
    }
    console.table(tareas);
}

function completar(){
    let tareaNumber = readlineSync.question('Que tarea desea completar:');
    let existe = '';
    let index = '';
    for (var i = 0; i < tareas.length; i++) {
        
        if (tareaNumber == tareas[i].id) {
            existe = 'si';
            index = i;
            break;
        }
        else {
            existe = 'no';
        }
    }
    if(existe == 'no'){
        console.log('Tarea no existe');
    }
    else{
        let value = true;
        tareas[index].completado = value;
        console.log('Tarea completada');
    }
    console.table(tareas);
}

let funcionar = true;
while(funcionar==true)
{
    let hacer = readlineSync.question('Que funcion desea ejecutar: \n1. Agregar \n2. Borrar \n3. Completar \n4. Salir');
    if(hacer == 1)
    {
        agregar();
    }
    else if (hacer == 2)
    {
        borrar();
    }
    else if (hacer == 3)
    {
        completar();
    }
    else if (hacer == 4)
    {
        funcionar = false;
    }
    else
    {
        console.log('Opcion no valida');
    }
}

console.log("Ha terminado la ejecucion")