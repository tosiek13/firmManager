<?php
  if (session_status() == PHP_SESSION_NONE) {
      session_start();
    }else{
      echo "Session started already";
    }
?>

<?php
  echo "Hi I'will try to modify db of user: ".$_SESSION['login'];
  echo "Got param ".$_POST['name'];
  echo "Got param ".$_POST['surname'];
?>

<?php
  //Getting datas from form
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    //Validation data from file

    try{
    //open the database
    $DBH = new PDO('sqlite:../databases/clients/'.$_SESSION["login"].'.db'); 
   
    //insert some data... using unnamed placeholder to prevent SQL injection attacks.
    $STH = $DBH->prepare("SELECT * FROM patients WHERE surname = ?");
    $STH->execute(array($surname));

    $elements =  $STH->fetchAll(PDO::FETCH_ASSOC);

    foreach($elements as $patient){
      $name = $patient['name'];
      $surname = $patient['surname'];
      $age = $patient['age'];
      include('../templates/patientThumbnail.tpl') ;
    }
   
    // close the database connection
    $DHB = NULL;
  }catch(PDOException $e){
    print 'Exception : '.$e->getMessage();
  }
?>