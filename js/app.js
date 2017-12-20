(function main(){
	$('#idbtn').on('click', function(e){
		testWhile();
	});
	function testWhile() {
		var chaine;
		do {
			chaine=prompt("Entrez une chaine de caractères contenant le caractère\"");
		}
		while (chaine.indexOf("\"")==-1)
		alert("la chaine entrée est \""+chaine+"\"");
	}
})();
