function validate_post(){
 	err = false ;
 	var text = "" ;
	var isNumeric = /^([0-9]+)$/;
	with ( document.forms[0]) {
		alert("Valid");
		if ( nazwisko.value == "" ) text += "Brak nazwiska \n" ;
		if ( imie.value == "" ) text += "Brak imienia \n" ;
		if ( indeks.value.length != 6 ) text += "Niewlasciwa ilosc znakow w numerze indeksu \n" ;
		if ( isNumeric.test(indeks.value) != true ) text += "Niedozwolone znaki w numerze indeksu \n" ;
		if ( email.value == "" ) text += "Brak adresu e-mail \n" ;
		if ( text != "" ) {
			document.getElementById('response').innerHTML = text ;
			return; 
		}else {
			document.getElementById('response').innerHTML = "valid";
 			if (window.XMLHttpRequest) {
 				http_request = new XMLHttpRequest(); 
			} else if (window.ActiveXObject) {
 				http_request = new ActiveXObject("Microsoft.XMLHTTP"); 
			}
			http_request.onreadystatechange = function() {
				if (http_request.readyState == 4) {
 					var response=http_request.responseText;
 					document.getElementById('response').innerHTML = response ;
				}
			};
 			var url ="../../cgi-bin/zad2/zapisz_post.py"
 			var data = "par1=" + document.form.par1.selectedIndex ;
 			data += "&par2=" + document.form.par2.selectedIndex ;
 			data += "&imie=" + imie.value ;
 			data += "&nazwisko=" + nazwisko.value ;
 			data += "&indeks=" + indeks.value ;
 			data += "&email=" + email.value ;
 			//var msg = encodeURIComponent(data) ;
 			var msg = data ;
 			http_request.open('POST', url, true);
 			http_request.setRequestHeader("Content-Type","application/x-www-formurlencoded;");
			http_request.setRequestHeader("Content-Length", msg.length);
 			http_request.send(msg);
 		}
 	}
}
/*
 Funkcja: validate_json()
 Funkcja sprawdza poprawność wprowadzonych danych
 Dane wysylane na serwer jako listaw formacie JSON w ciele protokolu HTTP POST
*/

function validate_json(){
 	err = false ;
	var text = "" ;
 	var isNumeric = /^([0-9]+)$/;
 	with ( document.forms[0]) {
 		if ( nazwisko.value == "" ) text += "Brak nazwiska \n" ;
 		if ( imie.value == "" ) text += "Brak imienia \n" ;
 		if ( indeks.value.length != 6 ) text += "Niewlasciwa ilosc znakow w numerze indeksu \n" ;
 		if ( isNumeric.test(indeks.value) != true ) text += "Niedozwolone znaki w numerze indeksu \n" ;
 		if ( email.value == "" ) text += "Brak adresu e-mail \n" ; 
		if ( text != "" ) {
 			document.getElementById('response').innerHTML = text ;
 			return; 
		} else {
			document.getElementById('response').innerHTML = "JS validation: OK";
			if (window.XMLHttpRequest) {
 				http_request = new XMLHttpRequest(); }
 			else if (window.ActiveXObject) {
 				http_request = new ActiveXObject("Microsoft.XMLHTTP"); }
				http_request.onreadystatechange = function() {
 					if (http_request.readyState == 4) {
 						var response=http_request.responseText;
 						var obj = JSON.parse(response) ;
 						document.getElementById('response').innerHTML = obj['msg'] ;
 					}
 				};
 			var url ="../../cgi-bin/zad2/zapisz_json.py"
 			var json_data = "{\"par1\":\"" + document.form.par1.selectedIndex ;
 			json_data += "\",\"par2\":\"" + document.form.par2.selectedIndex ;
 			json_data += "\",\"imie\":\"" + imie.value ;
 			json_data += "\",\"nazwisko\":\"" + nazwisko.value ;
 			json_data += "\",\"indeks\":\"" + indeks.value ;
 			json_data += "\",\"email\":\"" + email.value ;
			json_data += "\" }" ;
 			//var msg = encodeURIComponent(json_data) ;
 			var msg = json_data ;
 			http_request.open('POST', url, true);
 			http_request.setRequestHeader("Content-Type","application/json");
 			http_request.setRequestHeader("Content-Length", msg.length);
 			http_request.send(msg);
 		}
 	}
}
