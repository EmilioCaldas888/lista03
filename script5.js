function cad(){
    var	senha1 = cadUsu.sen.value;
    var senha2 = cadUsu.ConSen.value;
    var log = cadUsu.log.value;
    
    if (log.length == 0){
      alert("o campo login deve estar preenchido");
    }
    else
    if (senha1.length < 6 || senha1.length >10 || senha1.length == 0){
     alert("o campo senha deve entre 6 e 10 caracteres");
    }
    else
    if (senha2.length < 6 || senha2.length >10 || senha2.length == 0 ){
     alert("o campo confirme senha deve entre 6 e 10 caracteres");
    }
     else
       if (senha1 != senha2){
            alert("SENHAS DIFERENTE");
        }
        else{
            alert("Usuario cadastrado!");
      }
    }
    