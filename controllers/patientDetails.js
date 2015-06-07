function openClientsChart(patientId){
	var f = document.createElement("section");

	//holds the result
	var result = document.createElement("p");
	result.setAttribute('id',"dynamicResult");

	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = xmlhttp.responseText;
            var index = response.indexOf("");
            if( index != -1){
                result.innerHTML += response;
            }else{
            	result.innerHTML += response;
                result.innerHTML += "No patients found.";
            }            
        }
    }

    var parameters="id="+patientId;
    xmlhttp.open("POST", "../controllers/getPatientsDetails.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);


	document.getElementsByTagName('article')[0].innerHTML = "";
	document.getElementsByTagName('article')[0].appendChild(f);
	document.getElementsByTagName('article')[0].appendChild(result);
}