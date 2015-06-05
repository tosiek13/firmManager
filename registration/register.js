function register(){
	
        var companyName = document.getElementById("companyName").value;
        var login = document.getElementById("login").value;
	var haslo = document.getElementById("password").value;
	var repeadHaslo = document.getElementById("repeatpass").value;
        var email = document.getElementById("email").value;
	var registerResult = document.getElementById("registerResult");

	//Email validity contition.
        var mailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        var odp = mailRegex.test(email);

        if(login==''){
           registerResult.innerHTML = '<b>Login</b> is mandatory.';
        }else if (!odp){
                registerResult.innerHTML = 'Invalid <b>email adres</b>';
        }else if (haslo!= repeadHaslo){
                registerResult.innerHTML = '<b>Repeated pasword</b> differs from password.';
        }else if(haslo==''){
           	registerResult.innerHTML = '<b>Password</b> not specified.';
        }else if(haslo.length < 4){
		registerResult.innerHTML = '<b>Password</b> too short.';
	}else if(email==''){
           	registerResult.innerHTML = '<b>email</b> not specified';
        }else{
		document.registration.submit();
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
function showResponse(text){
        var registerResult = document.getElementById("registerResult");
        if(text.responseText=='1'){
        registerResult.innerHTML  = 'Błąd: <b>Token zawiera złe dane</b>';
                }else  if(text.responseText=='2'){
        registerResult.innerHTML  = 'Błąd: <b>Podany login jest już zajęty</b>';
        }else{         
        registerResult.innerHTML  = 'Rejestracja zakończona. Na twój adres e-mail został wysłany link aktywacyjny. Dziękujemy';
                }
}
function showAlert(MyRequest) {
        var registerResult = document.getElementById("registerResult");
        registerResult.innerHTML  = 'Błąd: <b>Nieudana rejestracja.</b>';
        var registerButton = document.getElementById('registerButton');
        registerButton.style.display = "none";
}

