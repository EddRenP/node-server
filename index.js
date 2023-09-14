var readlineSync = require('readline-sync');

/*function obtenerPersonas(){
    return new Promise((resolve, reject) => {
      if (!personas) {
        reject("No tienes un array de personas");
      }
      const personasFilter = personas.filter((persona) => persona.id >= 10);
      setTimeout(() => {
          resolve(personasFilter);
      }, 3000);
    });
  }
async function imprimirUser(){
    try{
        const resultado = await obtenerPersonas();
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}*/

const tareas = [
    {id : 1, name : "comprar provisiones", completado : false},
    {id : 2, name : "comprar medicina", completado : false},
    {id : 3, name : "comprar ropa", completado : false},
];

console.table(tareas);

function agregar()
{
    return new Promise((resolve, reject) => {
        if(!tareas){
            reject('No tienes array');
        }
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
                console.table(tareas);
                setTimeout(() => {
                    resolve('resuelto: agregado');
                }, 1000);
            }
    });
}
async function asyncAgregar(){
    try{
        const resultado = await agregar();
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}

function borrar(){
    return new Promise((resolve, reject) => {
        if(!tareas){
            reject('No tienes array');
        }
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
            console.table(tareas);
            setTimeout(() => {
                resolve('resuelto: borrado');
            }, 1000);
        }
        });
}
async function asyncBorrar(){
    try{
        const resultado = await borrar();
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}

function completar(){
    return new Promise((resolve, reject) => {
        if(!tareas){
            reject('No tienes array');
        }
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
            console.table(tareas);
            setTimeout(() => {
                resolve('resuelto: completado');
            }, 1000);
        }
        });
}
async function asyncCompletar(){
    try{
        const resultado = await completar();
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}

let funcionar = true;
while(funcionar==true)
{
    let hacer = readlineSync.question('Que funcion desea ejecutar: \n1. Agregar \n2. Borrar \n3. Completar \n4. Salir');
    if(hacer == 1)
    {
        asyncAgregar();
        agregar()
        .then((valor) => console.log(valor))
        .catch((error) => console.log(error));
    }
    else if (hacer == 2)
    {
        asyncBorrar();
        borrar()
        .then((valor) => console.log(valor))
        .catch((error) => console.log(error));
    }
    else if (hacer == 3)
    {
        asyncCompletar();
        completar()
        .then((valor) => console.log(valor))
        .catch((error) => console.log(error));
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