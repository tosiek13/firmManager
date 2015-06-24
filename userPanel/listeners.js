/*Creates form for patients searching in db.*/
function showPatientsSpider(){
	var f = document.createElement("form");

	var table = document.createElement("table");

    /**Surname row**/
	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var text1 = document.createTextNode("Surname: ");
		data1.appendChild(text1);

	var surname = document.createElement("input"); //input element, text
	surname.setAttribute('type',"text");
	surname.setAttribute('name',"surname");
	surname.setAttribute('id',"surname");
	surname.setAttribute('onkeyup',"searchDynamically()");
	var data2 = document.createElement("td");
	data2.appendChild(surname);
	//creating row structure
		row.appendChild(data1);
		row.appendChild(data2);
	table.appendChild(row);



	/**Name row**/
	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var text1 = document.createTextNode("Name: ");
		data1.appendChild(text1);

	var name = document.createElement("input"); //input element, text
	name.setAttribute('type',"text");
	name.setAttribute('name',"name");
	name.setAttribute('id',"name");
	var data2 = document.createElement("td");
	data2.appendChild(name);
	//creating row structure
		row.appendChild(data1);
		row.appendChild(data2);
	table.appendChild(row);


	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"button");
	s.setAttribute('onclick', "getPatient()")
	s.setAttribute('value',"getPatient");
	table.appendChild(s);

	var all = document.createElement("input"); //input element, Submit button
	all.setAttribute('type',"button");
	all.setAttribute('onclick', "getAllPatients()")
	all.setAttribute('value',"getAllPatients");
	table.appendChild(all);

	f.appendChild(table);

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

function getAllPatients(){
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
        xmlhttp.open("POST", "../controllers/getAllPatients.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }	
}

/*Creates and display Form which anables user to add new patient to db.*/
function showAddPatientForm(){
	var f = document.createElement("form");

	var table = document.createElement("table");


	/**Surname row**/
	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var text1 = document.createTextNode("Surname: ");
		data1.appendChild(text1);

	var surname = document.createElement("input"); //input element, text
	surname.setAttribute('type',"text");
	surname.setAttribute('name',"surname");
	surname.setAttribute('id',"surname");
	var data2 = document.createElement("td");
	data2.appendChild(surname);
	//creating row structure
		row.appendChild(data1);
		row.appendChild(data2);
	table.appendChild(row);

	/**Name row**/
	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var text1 = document.createTextNode("Name: ");
		data1.appendChild(text1);

	var name = document.createElement("input"); //input element, text
	name.setAttribute('type',"text");
	name.setAttribute('name',"name");
	name.setAttribute('id',"name");
	var data2 = document.createElement("td");
	data2.appendChild(name);
	//creating row structure
		row.appendChild(data1);
		row.appendChild(data2);
	table.appendChild(row);

	/**Age row**/
	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var text1 = document.createTextNode("Age: ");
		data1.appendChild(text1);

	var age = document.createElement("input"); //input element, text
	age.setAttribute('type',"text");
	age.setAttribute('name',"age");
	age.setAttribute('id',"age");
	var data2 = document.createElement("td");
	data2.appendChild(age);
	//creating row structure
		row.appendChild(data1);
		row.appendChild(data2);
	table.appendChild(row);

	//BUTTONS

	var row = document.createElement("tr");
	var data1 = document.createElement("td");
	var s = document.createElement("input"); //input element, Submit button
	s.setAttribute('type',"button");
	s.setAttribute('onclick', "addPatient();")
	s.setAttribute('value',"Submit");
	data1.appendChild(s);
	table.appendChild(data1);	


	f.appendChild(s);
	f.appendChild(table);

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
       
    if(surname == ''){
        addPatientResult.innerHTML += 'Error !!! Cannot add patients without surname info.';
    }else{
    	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("OK");
                if( index != -1){
                    //window.location.href = "../userPanel/main.php";
                    addPatientResult.innerHTML += "Added sucessfully";
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