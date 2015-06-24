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

    $STH = $DBH->prepare("SELECT * FROM patients WHERE Id = ?");
    $STH->execute(array($id));

    $elements =  $STH->fetchAll(PDO::FETCH_ASSOC);

    foreach($elements as $patient){
      $name = $patient['name'];
      $surname = $patient['surname'];
      $age = $patient['age'];
      $patientId = $patient['Id'];
      include('../templates/patientChart.tpl') ;
    }
   
    // close the database connection
    $DHB = NULL;
  }catch(PDOException $e){
    print 'Exception : '.$e->getMessage();
  }
?>