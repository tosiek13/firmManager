function openClientsChart(patientId){
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
	document.getElementsByTagName('article')[0].appendChild(result);
}


function addNewTreatment(){

	var tooth = document.getElementById("tooth").value;
    var date = document.getElementById("date").value;
	var treatment = document.getElementById("treatment").value;
	var patientId = document.getElementsByTagName("patientId")[0].getAttribute("id");

	alert("Adding new Treatment" + patientId);

	//Validate data;
	
	if(tooth == ''){
        alert('Error !!! Cannot add treatment without tooth specification.');
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                alert("answer from server: " + response);          
            }
        }
        var parameters="tooth="+tooth+"&date="+date+"&treatment="+treatment+"&patientId="+patientId;
        xmlhttp.open("POST", "../controllers/addNewTreatment.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
}