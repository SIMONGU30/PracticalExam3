const ex1button = document.querySelector('#ex2button')
if(ex1button){
    ex1button.addEventListener('click' , function(event) {
    const tipo = document.querySelector('#tipo')
    const nomTrabajador = document.querySelector('#nomTrabajador')
    const horasTrabajadas = document.querySelector('#horasTrabajadas')
    const valorSalario = document.querySelector('#valorSalario')
    const deducciones = document.querySelector('#deducciones')
    const bonificacion = document.querySelector('#bonificacion')
    const ex2result = document.querySelector('#ex2result')

    if (tipo && nomTrabajador && horasTrabajadas && valorSalario && deducciones && bonificacion &&ex2result){

    
        let tipo = tipo.value
        let nomTrabajador = nomTrabajador.value
        let horasTrabajadas = horasTrabajadas.value
        let valorSalario = valorSalario.value
        let deducciones = deducciones.value
        let bonificacion = bonificacion.value
        var msg = ""

            if(tipo=='FIJO'){
                if(nomTrabajador == '' || horasTrabajadas == '' || valorSalario == ''|| deducciones== ''||bonificacion == ''){
                    msg = 'por favor llene los campos '
                }else{
                    var total= (horasTrabajadas * valorSalario) + bonificacion - deducciones
                } 
                msg = 'su salario neto es de ' + total
                ex2result.textContent = msg
            }else{
                total= (horasTrabajadas *6000)
                
            }
        }
    })
}
    