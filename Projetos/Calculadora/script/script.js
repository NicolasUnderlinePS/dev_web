function calcular(tipo, conteudo){
	if(tipo === 'acao'){
		if (conteudo === 'c') {
			document.getElementById('resultado').value = '';
			document.getElementById('botao-+').disabled = false;
			document.getElementById('botao--').disabled = false;
			document.getElementById('botao-*').disabled = false;
			document.getElementById('botao-.').disabled = false;
			document.getElementById('botao-/').disabled = false;
			document.getElementById('botao-=').disabled = false;			
			document.getElementById('botao-0').disabled = false;			
		}

		if (conteudo === '+' || conteudo === '-'  || conteudo === '*' || conteudo === '.') {
			document.getElementById('botao-+').disabled = true;
			document.getElementById('botao--').disabled = true;
			document.getElementById('botao-*').disabled = true;
			document.getElementById('botao-.').disabled = true;
			document.getElementById('botao-/').disabled = true;
			document.getElementById('botao-=').disabled = true;			
			document.getElementById('resultado').value += conteudo;

		}

		if (  conteudo === '/' ) {
			document.getElementById('botao-+').disabled = true;
			document.getElementById('botao-*').disabled = true;
			document.getElementById('botao-.').disabled = true;		
			document.getElementById('botao-/').disabled = true;
			document.getElementById('botao-=').disabled = true;
			document.getElementById('resultado').value += conteudo;
			
		}		


		if (conteudo === '=') {
			var resultado = eval(document.getElementById('resultado').value);
			  //Funcao para expressoes matematicas eval(resultado);
			document.getElementById('resultado').value = resultado;			
		}		

	}else if(tipo === 'valor'){
		// Por ser um conteudo string o js concatena
		document.getElementById('botao-+').disabled = false;
		document.getElementById('botao--').disabled = false;
		document.getElementById('botao-*').disabled = false;
		document.getElementById('botao-.').disabled = false;
		document.getElementById('botao-/').disabled = false;			
		document.getElementById('botao-0').disabled = false;		
		document.getElementById('botao-0').disabled = false;
		document.getElementById('botao-=').disabled = false;		
		document.getElementById('resultado').value += conteudo;
	}

}