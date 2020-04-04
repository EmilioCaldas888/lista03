
function rad1(){
   if(document.getElementById('radio1').checked == true){
        document.getElementById('cnpj').disabled = false;
     } 
   } 
function rad2(){
  if(document.getElementById('radio2').checked == true){
        document.getElementById('cpf').disabled = false;
        document.getElementById('dat').disabled = false;
  }
}
  function validar(){
   nome=document.getElementById('nome').value;
   endereco=document.getElementById('nome').value;
   telefone=document.getElementById('nome').value;
   email=document.getElementById('nome').value;

    if(nome.length == 0){
      alert('Campo Nome precisa ser preenchido');
    }
    else 
       if(endereco.length == 0){
      alert('Campo Endereço precisa ser preenchido');
       }
    else 
    if(telefone.length == 0){
      alert('Campo Telefone precisa ser preenchido');
       }
    else 
    if(email.length == 0){
      alert('Campo Email precisa ser preenchido');
         }
    else 
    alert('cadastrado');
  }
