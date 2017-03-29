$(document).ready(function(){
	
	var clickCounter = 0;
	var sentence = ["Bravo!", "Super!", "T'est énorme!", "Trop fort!", "Continue!"];
	
	// une fonction pour afficher le nombre de click

	var showCounter = function(){
		var buttonValue = $("#buttonCounter").text(clickCounter);		
	};


	// une fonction pour féliciter

	var congratulateSentence = function(){
		if(clickCounter % 10 === 0){
			var i = Math.floor((Math.random() * 5));
			$("#buttonSentence").text(sentence[i]);
			//console.log($("#buttonSentence").val());
		}

	};
	
	//une fonction pour jouer


	var clickAndPlay = function(){
		$('#cookie').each(function(){
			$(this).click(function(){
				clickCounter++;				
				showCounter();
				//console.log($("#buttonCounter").val());
				congratulateSentence();

			});
			clickCounter;
		});
		
	};
	clickAndPlay();

	
	//console.log(clickCounter);

});

