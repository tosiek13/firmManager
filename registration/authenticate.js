/* Client side validation of logging form */
function authenticate(){
    
    var login = document.getElementById("Autlogin").value;
    var password = document.getElementById("Autpassword").value;
    
    if(login==''){
       registerResult.innerHTML = '<b>Login</b> is mandatory.';
    }else if(password==''){
        registerResult.innerHTML = '<b>Password</b> not specified.';
    }else if(password.length < 4){
    registerResult.innerHTML = '<b>Password</b> too short.';
    }else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var index = response.indexOf("OK");
                if( index != -1){
                    window.location.href = "../userPanel/main.php";
                }else{
                    alert(response);
                }            
            }
        }
        var parameters="login="+login+"&password="+password;
        xmlhttp.open("POST", "authentication.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    }
}