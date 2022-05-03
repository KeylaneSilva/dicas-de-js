function atualizarSelect(){
  let select = document.querySelector('#keys')
  let valorOption = select.options[select.selectedIndex]

  let texto = valorOption.text

  if (texto === 'CPF'){
    let cpf = document.querySelector('#input-key')
    cpf.setAttribute('placeholder', '000.000.000-00')
    cpf.setAttribute('maxlength', '14')

    if(cpf.value.length == 3 || cpf.value.length == 7){
      cpf.value += "."
    }else if(cpf.value.length == 11){
      cpf.value += "-"
    }

  }else if (texto === 'CNPJ'){
    let cnpj = document.querySelector('#input-key')
    cnpj.setAttribute('placeholder', '00.000.000/0000-00')
    cnpj.setAttribute('maxlength', '18')

    if(cnpj.value.length == 2 || cnpj.value.length == 6){
      cnpj.value +="."
    }else if(cnpj.value.length == 10){
      cnpj.value +="/"
    }else if(cnpj.value.length == 15){
      cnpj.value +="-"
    }

  }else if (texto === 'Telefone'){
    let telefone = document.querySelector('#input-key')
    telefone.setAttribute('placeholder', '(99) 99999-9999')
    telefone.setAttribute('maxlength', '14')

    // if(telefone.value.length == 0){
    //   telefone.value +="("
    // }else
    if(telefone.value.length == 3){
      telefone.value +=")"
    }else if(telefone.value.length == 9){
      telefone.value +="-"
    }

  }

}
