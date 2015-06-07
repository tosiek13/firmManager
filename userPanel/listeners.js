/*Creates form for patients searching in db.*/
function showPatientsSpider(){
	var f = document.createElement("form");

	var surname = document.createElement("input"); //input element, text
	surname.setAttribute('type',"text");
	surname.setAttribute('name',"surname");
	surname.setAttribute('id',"surname");
	surname.setAttribute('onkeyup',"searchDynamically()");

	var nextLine = document.createElement("p"); //input element, text

	var name = document.createElement("input"); //input element, text
	name.setAttribute('type',"text");
	name.setAttribute('name',"name");
	name.setAttribute('id',"name");

	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"button");
	s.setAttribute('onclick', "getPatient();")
	s.setAttribute('value',"SEARCH");

	f.appendChild(surname);
	f.appendChild(nextLine);
	f.appendChild(name);
	f.appendChild(s);

	document.getElementsByTagName('article')[0].innerHTML = "";
	document.getElementsByTagName('article')[0].appendChild(f);

	//Adding element to print the addPatient result
	var result = document.createElement("p"); //input element, Submit button
	result.setAttribute('id',"dynamicResult");
	document.getElementsByTagName('article')[0].appendChild(result);
}

function searchDynamically(){
	var dynamicResult = document.getElementById("dynamicResult");
	var surname = document.getElementById("surname").value;

	dynamicResult.innerHTML = "";
	if(surname == ''){
        dynamicResult.innerHTML += "Error !!! . At least one (surname or name must be specified)";
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("thumbnail");
                if( index != -1){
                    dynamicResult.innerHTML += response;
                }else{
                    dynamicResult.innerHTML += "No patients found.";
                }            
            }
        }
        var parameters="name="+name+"&surname="+surname;
        xmlhttp.open("POST", "../controllers/getPatientsDynamically.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }	
}

function getPatient(){
	var dynamicResult = document.getElementById("dynamicResult");
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;

	dynamicResult.innerHTML = "";
	if(surname == '' && name=='' ){
        dynamicResult.innerHTML += "Error !!! . At least one (surname or name must be specified)";
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("OK");
                if( index != -1){
                    window.location.href = "../userPanel/main.php";
                }else{
                    dynamicResult.innerHTML += " Accessing patients failed !!!";
                    dynamicResult.innerHTML += response;
                }            
            }
        }
        var parameters="name="+name+"&surname="+surname;
        xmlhttp.open("POST", "../controllers/getPatients.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
}

/*Creates and display Form which anables user to add new patient to db.*/
function showAddPatientForm(){
	var f = document.createElement("form");

	var name = document.createElement("input"); //input element, text
	name.setAttribute('type',"text");
	name.setAttribute('name',"name");
	name.setAttribute('id',"name");

	var nextLine = document.createElement("p"); //input element, text

	var surname = document.createElement("input"); //input element, text
	surname.setAttribute('type',"text");
	surname.setAttribute('name',"surname");
	surname.setAttribute('id',"surname");

	var nextLine = document.createElement("p"); //input element, text

	var age = document.createElement("input"); //input element, text
	age.setAttribute('type',"text");
	age.setAttribute('name',"age");
	age.setAttribute('id',"age");

	var nextLine2 = document.createElement("p");

	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"button");
	s.setAttribute('onclick', "addPatient();")
	s.setAttribute('value',"Submit");

	f.appendChild(name);
	f.appendChild(nextLine);
	f.appendChild(surname);
	f.appendChild(nextLine2);
	f.appendChild(age);
	f.appendChild(s);

	document.getElementsByTagName('article')[0].innerHTML = "";
	document.getElementsByTagName('article')[0].appendChild(f);

	//Adding element to print the addPatient result
	var result = document.createElement("p"); //input element, Submit button
	result.setAttribute('id',"addPatientResult");
	document.getElementsByTagName('article')[0].appendChild(result);
}

/*Reads the data from form and Do the Async Request sending data in post method.*/
function addPatient(){
	var addPatientResult = document.getElementById("addPatientResult");
	addPatientResult.innerHTML = "";
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var age = document.getElementById("age").value;
       
    if(name == ''){
        addPatientResult.innerHTML += 'Error !!! Cannot add patients without login info.';
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("OK");
                if( index != -1){
                    //window.location.href = "../userPanel/main.php";
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