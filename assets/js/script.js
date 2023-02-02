function consultar() {
    let data = new Date()
    let ano = data.getFullYear() // Para pegar os 4 dígitos
    inputAno = document.getElementById('ano')
    resultado = document.getElementById('resultado')

    if (inputAno.value.lengt == 0 || Number(inputAno.value) > ano) { // Não é possível digitar ano maior que o atual.
        alert('Verifique os dados e tente novamente')
    } else {
       let inputSexo = document.getElementsByName('sexo') // Para pegar os dois inputs
       let idade = ano - Number(inputAno.value) 
       
       if(inputSexo[0].checked) {
        genero = 'Homem'

        if(idade >= 0 && idade <= 5) {
            resultado.innerHTML = ` Detectamos ${genero} com ${idade} anos`            
        }
    
        }

    }    
    
}