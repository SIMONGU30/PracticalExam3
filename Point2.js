
let tipo = prompt('igresre tipo de trabajador que es (FIJO O TEMPORAL) ')

if(tipo=="FIJO" || tipo== "fijo" ){
    let nom =prompt ('ingreser su nombre') 
    let horasTrabajdas =prompt ('ingrese sus horas trabajdas ') 
    let SalarioBasicoHora =prompt ('ingreser su salario basico por hora ') 
    let deducciones =prompt ('ingreser sus deducciones ') 
    let boni =prompt ('ingrese sus bonificaciones ') 

    

    total= horasTrabajdas*SalarioBasicoHora - Number(deducciones)+ Number(boni)  

    alert(nom  +  " su salario  neto es de  : " + total)

}

else {
    var nom =prompt ('ingreser su nombre') 
    var horas =prompt ('ingreser las horas que trabajo ') 
    var salario = 6000

    total= horas * salario

    alert(nom + "su salario  neto es de  : " + total)

}