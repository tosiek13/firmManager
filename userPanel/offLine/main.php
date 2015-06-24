<?php
	if (session_status() == PHP_SESSION_NONE) {
    	session_start();
  	}else{
  		echo "Session started already";
  	}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="listeners.js"></script>
        <script type="text/javascript" src="../controllers/patientDetails.js"></script>
    </head>
    <body>
        <head>
                HEAD
        </head>
        <nav>
                  <name class="companyName"><?php echo $_SESSION['login']; ?></name>
                  <items>
                      <item onclick = "showPatientsSpider()"><more>PATIENTS</more></item>
                      <item onclick = "showAddPatientForm()"><more>ADD PATIENT</more></item>
                 </items>
         </nav>
         <aside>
         	Calendar planned.
         </aside>	
         <section>
         	<article>
         	</article>
         </section>	
    </body>
</html>