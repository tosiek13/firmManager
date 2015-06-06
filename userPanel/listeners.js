function doSth(){
	alert("Fucnction is working !!");
}

function showAddPatientForm(){
	var f = document.createElement("form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"../controllers/addPatient.php");

	var name = document.createElement("input"); //input element, text
	name.setAttribute('type',"text");
	name.setAttribute('name',"name");
	name.setAttribute('id',"name");

	var nextLine = document.createElement("p"); //input element, text

	var surname = document.createElement("input"); //input element, text
	surname.setAttribute('type',"text");
	surname.setAttribute('name',"surname");
	surname.setAttribute('id',"surname");

	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"button");
	s.setAttribute('onclick', "addPatient();")
	s.setAttribute('value',"Submit");

	f.appendChild(name);
	f.appendChild(nextLine);
	f.appendChild(surname);
	f.appendChild(s);


	document.getElementsByTagName('article')[0].appendChild(f);

	//Adding element to print the addPatient result
	var result = document.createElement("p"); //input element, Submit button
	result.setAttribute('id',"addPatientResult");
	document.getElementsByTagName('article')[0].appendChild(result);
}

function addPatient(){
	var addPatientResult = document.getElementById("addPatientResult");
	addPatientResult.innerHTML = "";
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
       
    if(name == ''){
        addPatientResult.innerHTML += 'Error !!! Cannot add patients without login info.';
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("OK");
                if( index != -1){
                    window.location.href = "../userPanel/main.php";
                }else{
                    addPatientResult.innerHTML += " Adding patients failed !!!";
                    addPatientResult.innerHTML += response;
                }            
            }
        }
        var parameters="name="+name+"&surname="+surname;
        xmlhttp.open("POST", "../controllers/addPatient.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
}