function validar(){

  var1 = document.getElementById('palavra1').value;
  var2 = document.getElementById('palavra2').value;
  varray1 = var1.split('');
  varray2 = var2.split('');
  nome1 = varray1 + varray2;

  for(i = 0; i < nome1.value.length; i++){
  nome1.push(varray1.shift());
  nome1.push(varray2.shift());
  
  document.getElementById("local").innerHTML = "" + nome1;
  }
}