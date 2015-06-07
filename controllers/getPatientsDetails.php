<?php
	if (session_status() == PHP_SESSION_NONE) {
    	session_start();
  	}else{
  		echo "Session started already";
  	}
?>

<?php
   //Getting datas from form
  $id = $_POST['id'];
  //Validation data from file(filename)

  try{
    //open the database
    $DBH = new PDO('sqlite:../databases/clients/'.$_SESSION["login"].'.db'); 
   
    //insert some data... using unnamed placeholder to prevent SQL injection attacks.
       //insert some data... using unnamed placeholder to prevent SQL injection attacks.
    /*$STH = $DBH->prepare("SELECT * FROM patients WHERE surname LIKE ?");
    $STH->execute(array('$surname%'));*/
    $STH = $DBH->prepare("SELECT * FROM patients WHERE Id = ?");
    $STH->execute(array($id));

    $elements =  $STH->fetchAll(PDO::FETCH_ASSOC);

    foreach($elements as $patient){
      $name = $patient['name'];
      $surname = $patient['surname'];
      $age = $patient['age'];
      $patient = $patient['Id'];
      include('../templates/patientThumbnail.tpl') ;
    }
   
    // close the database connection
    $DHB = NULL;
  }catch(PDOException $e){
    print 'Exception : '.$e->getMessage();
  }
?>