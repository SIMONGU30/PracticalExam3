if(ex1button){
    ex1button.addEventListener('click' , function(event) {
        const PASAJEROS = document.querySelector('#PASAJEROS')
        const RUTA = document.querySelector('#RUTA')
        const PLACA = document.querySelector('#PLACA')
        const ex1result = document.querySelector('#ex1result')

        if(PASAJEROS && RUTA && PLACA && ex1result){
            let pasajerosValue = PASAJEROS.value
            let rutaValue = RUTA.value
            let placaValue = PLACA.value
            var msg

            if(pasajerosValue == '' || rutaValue == '' || placaValue == ''){
                msg = 'Por favor complete los campos'
            }else {
                if(rutaValue=='A' || rutaValue=='a'){
                    var pasaje =1200
                }
                else   {
                     pasaje = 1000

                }
            } 
             let subtotal = (pasajerosValue )*(pasaje)


            msg ="el dinero que recolecto es de : " + subtotal

            ex1result.textContent = msg

        }else{
            alert('Error')
        }
    })
}

