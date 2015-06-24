<?php
  if (session_status() == PHP_SESSION_NONE) {
      session_start();
    }else{
      echo "Session started already";
    }
?>

<?php
  try{
    //open the database
    $DBH = new PDO('sqlite:../databases/clients/'.$_SESSION["login"].'.db'); 
   
    $STH = $DBH->prepare("SELECT * FROM patients");
    $STH->execute();

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