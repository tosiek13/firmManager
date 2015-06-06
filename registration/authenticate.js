/* Client side validation of logging form */
function authenticate(){
	
    var login = document.getElementById("Autlogin").value;
	var haslo = document.getElementById("Autpassword").value;
	
    if(login==''){
       registerResult.innerHTML = '<b>Login</b> is mandatory.';
    }else if(haslo==''){
       	registerResult.innerHTML = '<b>Password</b> not specified.';
    }else if(haslo.length < 4){
	registerResult.innerHTML = '<b>Password</b> too short.';
    }else{
	document.logging.submit();
        	/*var myAjax = new Ajax.Request('register.php',
                        {
                method: 'post',
                        parameters: "login="+login+
                                                "&haslo="+haslo+
                                                "&mail="+mail+
                                                "&token="+token,
                        onComplete: showResponse,
                onFailure: showAlert
                        });*/
    }
}