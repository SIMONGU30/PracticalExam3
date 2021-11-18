let placa = prompt('Ingrese la placa del bus ')
let pasajeros = prompt('ingrese el numero de pasajeros transportados')
let ruta = prompt('ingrese la ruta donde presto el servicio A o B ')



if(ruta=="A" || ruta=="a")
{

    var pasaje =1200
}
else
   var pasaje = 1000

subtotal = (pasajeros) *(pasaje)


alert("el dinero que recolecto es de : " + subtotal)