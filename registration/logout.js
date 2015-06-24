function startOffLine(){
	//Clearing the sesstion.
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                window.location.href = "../userPanel/offLine/mainOffLine.html";          
            }
        }
    xmlhttp.open("POST", "endSession.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}