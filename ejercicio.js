// ejercicio 1 
let dias= ["domingo","lunes","martes","miercoles","jueves"];
let meses= ["enero","febrero","marzo","abril","mayo","junnio","julio"];
let newDate= new Date ();
let dia= dias[newDate.getDay()];
let fecha= newDate.getDate();
let mes= meses[newDate.getMonth()];
let anio= newDate.getFullYear();


console.log("hoy es"+ dias[dia] + " "+fecha + "de" + meses[mes] + "del anio" + anio);
