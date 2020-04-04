function ver(){
  var cont = document.getElementById("palavra").value;
  var metade = Math.floor(cont.length/2);
  for (var i=0; i<metade; i++){
    if(cont[i]!== cont[cont.length-i-1]){
      var palindroma = false;
      break;
    }   var palindroma = true;
  }
    if (palindroma){
      alert('esta palavra e palindrome');
    }
    else {
      alert('esta palavra nao e palindrome');
    }
  }

