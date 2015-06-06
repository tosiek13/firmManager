<?php
	if (session_status() == PHP_SESSION_NONE) {
    	session_start();
  	}else{
  		echo "Session started already";
  	}
?>

<?php
	echo "This will be your main page and your session is ok.".$_SESSION['login'];
?>