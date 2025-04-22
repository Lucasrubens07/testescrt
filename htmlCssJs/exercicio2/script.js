document.getElementById("formulario").onsubmit = function(event){
    event.preventDefault();
    console.log("aqui");

    const nome = document.getElementById("txtNome").value;
    const email = document.getElementById("txtEmail").value;
    const telefone = document.getElementById("txtTelefone").value;
    console.log (nome, email, telefone);


    
    if(!validarEmail(email)){
        alert("email invalido");
    }

    else if(!validarTelefone(telefone)){
        alert("telefone invalido");
    }

    else{
    //    document.getElementById("formulario").submit();
        alert("formulário enviado");
    }
}

function validarEmail(texto) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(texto);
}

function validarTelefone(texto) {
    const regex = /^(\(?\d{2}\)?\s?)?9?\d{4}-?\d{4}$/;
    return regex.test(texto);
}
