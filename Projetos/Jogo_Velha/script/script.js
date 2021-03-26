var placeTable = new Array();
var turnPlayer = 1;
for (var i = 0 ; i < 9; i++) {
	placeTable[i] = '0';
}

function markupPlace(position, player){
	if(placeTable[position] == 0){
		placeTable[position] = player;
	}
}

function switchTurn(turn){
	turnPlayer *= (-1);
}

console.log(turnPlayer);
switchTurn(turnPlayer);
console.log(turnPlayer);
switchTurn(turnPlayer);
console.log(turnPlayer);
switchTurn(turnPlayer);
console.log(turnPlayer);

console.log(placeTable[0] +" "+placeTable[1]+" "+placeTable[2]);
console.log(placeTable[3] +" "+placeTable[4]+" "+placeTable[5]);
console.log(placeTable[6] +" "+placeTable[7]+" "+placeTable[8]);


//setInterval(randomRotation, 500);
//setInterval(moveMosquito, 2000);

/* Condição de vitória*/
if ((placeTable[0] === placeTable[1]) && (placeTable[1] === placeTable[2]) && (placeTable[0] === placeTable[2]) && (placeTable[2] != 0)){
	console.log("Vitória 1");
}
else{
	if((placeTable[3] === placeTable[4]) && (placeTable[4] === placeTable[5]) && (placeTable[3] === placeTable[5]) && (placeTable[5] != 0)){
		console.log("Vitória 2");
	}
	else{
		if((placeTable[6] === placeTable[7]) && (placeTable[7] === placeTable[8]) && (placeTable[6] === placeTable[8]) && (placeTable[8] != 0)){
			console.log("Vitória 3");
		}
		else{
			if((placeTable[6] === placeTable[7]) && (placeTable[7] === placeTable[8]) && (placeTable[6] === placeTable[8]) && (placeTable[8] != 0)){
				console.log("Vitória 4");
			}
			else{
				if((placeTable[0] === placeTable[3]) && (placeTable[3] === placeTable[6]) && (placeTable[0] === placeTable[6]) && (placeTable[6] != 0)){
					console.log("Vitória 5");
				}
				else{
					if((placeTable[1] === placeTable[4]) && (placeTable[4] === placeTable[7]) && (placeTable[1] === placeTable[7]) && (placeTable[7] != 0)){
						console.log("Vitória 6");
					}
					else{
						if((placeTable[2] === placeTable[5]) && (placeTable[5] === placeTable[8]) && (placeTable[2] === placeTable[8]) && (placeTable[8] != 0)){
							console.log("Vitória 7");
						}else{
							if((placeTable[0] === placeTable[4]) && (placeTable[4] === placeTable[8]) && (placeTable[0] === placeTable[8]) && (placeTable[8] != 0)){
								console.log("Vitória 8");	
							}
							else{
								if((placeTable[2] === placeTable[4]) && (placeTable[4] === placeTable[6]) && (placeTable[2] === placeTable[6]) && (placeTable[6] != 0)){
									console.log("Vitória 9");
								}
								else{
									console.log("Empate");
								}
							}
						}					
					}
				}
			}
		}
	}
}









