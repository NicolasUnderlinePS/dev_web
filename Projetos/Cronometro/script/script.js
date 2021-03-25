function relogio (){
	var data = new Date();
  var day = data.getDate();
  var month = data.getMonth();
	var hour = data.getHours();
	var minute = data.getMinutes();
	var second = data.getSeconds();
  
	if(hour < 10){
		hour = '0' + hour;

	}	

	if(minute < 10){
		minute = '0' + minute;
	}	

	if(second < 10){
		second = '0' + second;

	}	
  var clock = hour + ":" + minute + ":" + second;

	var elemento = document.getElementById('time');
	elemento.innerHTML = clock;

  // Verão
  if((month >= 11 || month <= 1)){
    document.getElementById('corpo').className = 'verao';
    //document.body.style.background = "url('../img/verao.jpg')";
  }  

  // Outono
  else if((month >= 2 && month <= 4)){
    document.getElementById('corpo').className = 'outono';
    //document.body.style.background = "url('../img/outono.jpg')";
  }  

  // Inverno
   else if((month >= 5 && month <= 7)){
    document.getElementById('corpo').className = 'inverno';
    //document.body.style.background = "url('../img/inverno.jpg')";
  }  

  // Primavera
  else if((month >= 8 && month <= 10)){
    document.getElementById('corpo').className = 'primavera';
    //document.body.style.background = "url('../img/primavera.jpg')";
  }       
  
}	

setInterval(relogio, 50);