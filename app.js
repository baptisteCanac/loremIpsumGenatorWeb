// https://github.com/baptisteCanac/loremIpsumGenatorWeb

function getNumber(){
	let numberOfParagraph = document.getElementById('paragraphNumber').value;
	let numberOfWords = document.getElementById('wordsNumber').value;
	console.log('button clicked !');
	if (numberOfParagraph == "" && numberOfWords == ""){
		window.alert('Veuillez saisir un nombre/chiffre valable')
	}else{
		function write(){ 
			const settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs="+ numberOfParagraph +"&words="+ numberOfWords +"&format=html",
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "{{ your api key }}",
				"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
				}
			};
			$.ajax(settings).done(function (response) {
			document.getElementById('text').innerHTML = response;
			});
		}
		write();
	}
}
