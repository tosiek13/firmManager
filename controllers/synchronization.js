function addPatientsToDB(){

	for(var i = 1; i<=localStorage.patientsAmount; i++){
		var key = "p" + i;

		nameKey = key + "name";
		alert("Key: " + nameKey);
    	var name = localStorage[nameKey];
    	surnameKey = key + "surname";
    	var surname = localStorage[surnameKey];
    	ageKey = key + "age";
    	var age = localStorage[ageKey];

    	if(name == ''){
	        addPatientResult.innerHTML += 'Error !!! Cannot add patients without login info.';
	    }else{
	    	var xmlhttp = new XMLHttpRequest();
	        xmlhttp.onreadystatechange = function() {
	            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	                var response = xmlhttp.responseText;
	                var index = response.indexOf("OK");
	                if( index != -1){
	                   // window.location.href = "../userPanel/main.php";
	                }else{
	                    addPatientResult.innerHTML += " Adding patients failed !!!";
	                    addPatientResult.innerHTML += response;
	                }            
	            }
	        }
	        var parameters="name="+name+"&surname="+surname+"&age="+age;
	        xmlhttp.open("POST", "../controllers/addPatient.php", true);
	        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	        xmlhttp.send(parameters);
    	}
	}

	localStorage.clear();
}