if(ex1button){
    ex1button.addEventListener('click' , function(event) {
        const PASAJEROS = document.querySelector('#PASAJEROS')
        const RUTA = document.querySelector('#RUTA')
        const PLACA = document.querySelector('#PLACA')
        const RESLTADO = document.querySelector('#RESULTADO')

        if(PASAJEROS && RUTA && PLACA && RESLTADO){
            let pasajerosValue = PASAJEROS.value
            let rutaValue = (RUTA.value)
            let placaValue = (PLACA.value)
            var msg = ""

            if(pasajerosValue == '' || rutaValue == '' || placaValue == ''){
                msg = 'Por favor complete los campos'
            }else {
                if(RUTA=="A" || RUTA=="a"){
                    var pasaje = 1200
                }
                else {
                    var pasaje = 1000

                }
            } subtotal = (pasajeros) *(pasaje)


            msg ="el dinero que recolecto es de : " + subtotal

            ex1result.textContent = msg

        }else{
            alert('Error')
        }
    })
}

