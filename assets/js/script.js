function consultar() {
    let data = new Date()
    let ano = data.getFullYear() // Para pegar os 4 dígitos
    inputAno = document.getElementById('ano')
    resultado = document.getElementById('resultado')

    if (inputAno.value.length == 0 || Number(inputAno.value) > ano) { // Não é possível digitar ano maior que o atual.
        alert('Verifique os dados e tente novamente')
    } else {
       let inputSexo = document.getElementsByName('sexo') // Para pegar os dois inputs
       let idade = ano - Number(inputAno.value)
       let genero = "" 
       let img = document.createElement('img') // Para criar imagens através de js
       img.setAttribute('id', 'foto')
       
       if(inputSexo[0].checked) {
            genero = 'Homem'
        
            if(idade >= 0 && idade <= 2) {
            img.setAttribute('src', 'assets/img/bebe-m.png')            
            }

            else if(idade >= 3 && idade <= 12) {
                img.setAttribute('src', 'assets/img/crianca-m.png')            
            }

             else if(idade >= 13 && idade <= 18) {
                img.setAttribute('src', 'assets/img/adolescente-m.png')            
            }

            else if(idade >= 19 && idade <= 50) {
                img.setAttribute('src', 'assets/img/adulto.png')            
            }

            else {
                img.setAttribute('src', 'assets/img/idoso.png')            
            } 

        } else if(inputSexo[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'assets/img/bebe-f.png')
            }

            else if(idade >= 3 && idade <= 12) {
                img.setAttribute('src', 'assets/img/crianca-f.png')            
            }
    
            else if(idade >= 13 && idade <= 18) {
                img.setAttribute('src', 'assets/img/adolescente-f.png')            
            }
    
            else if(idade >= 19 && idade <= 50) {
                img.setAttribute('src', 'assets/img/adulta.png')            
            }
    
            else {
                img.setAttribute('src', 'assets/img/idosa.png')            
            }   
        } 
        
        resultado.innerHTML = ` 🧐 Detectamos ${genero} com ${idade} anos!`
        resultado.appendChild(img) // adicionar ao filho

    }    
    
}