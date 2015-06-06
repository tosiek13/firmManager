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

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="listeners.js"></script>
    </head>
    <body>
        <head>
                HEAD
        </head>
        <nav>
                  <name class="companyName"><?php echo $_SESSION['login']; ?></name>
                  <items>
                      <item onclick = "doSth()"><more>PATIENTS</more></item>
                      <item onclick = "showAddPatientForm()"><more>ADD PATIENT</more></item>
                 </items>
         </nav>
         <aside>
         	Calendar planned.
         </aside>	
         <section>
         	<article>
         		There is some info.
         	</article>
         </section>	
    </body>
</html>