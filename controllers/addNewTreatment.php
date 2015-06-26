<?php
	if (session_status() == PHP_SESSION_NONE) {
    	session_start();
  	}else{
  		echo "Session started already";
  	}
?>

<?php
	echo "Hi I'will try to modify db of user: ".$_SESSION['login'];
?>

<?php
    $tooth = $_POST['tooth'];
    $date = $_POST['date'];
      $date = str_replace(","," ",$date);
    $treatment = $_POST['treatment'];
    $patientId = $_POST['patientId'];
    //Validation data from file

  try{
    //open the database
    $DBH = new PDO('sqlite:../databases/clients/'.$_SESSION["login"].'.db');

     //create the table in database
    $DBH->exec("CREATE TABLE treatments (patientId INTEGER, treatmentDate TEXT, tooth TEXT, treatment TEXT)");    
   
   	//insert some data... using unnamed placeholder to prevent SQL injection attacks.
    $data = array($patientId, $date, $tooth, $treatment);
    //echo "Params passed to db: ".$name.", username: ".$surname; 
 
	$STH = $DBH->prepare("INSERT INTO treatments(patientId, treatmentDate, tooth, treatment) values (?, ?, ?, ?)");
	$STH->execute($data);

   
    // close the database connection
    $DHB = NULL;
  }catch(PDOException $e){
    print 'Exception : '.$e->getMessage();
  }
?>