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

     //create the table in database
    $DBH->exec("CREATE TABLE patients (Id INTEGER PRIMARY KEY, name TEXT, surname TEXT)");    
   
   	//insert some data... using unnamed placeholder to prevent SQL injection attacks.
    $data = array($name, $surname);
    echo "Params passed to db: ".$name.", username: ".$surname; 
 
	$STH = $DBH->prepare("INSERT INTO patients(name, surname) values (?, ?)");
	$STH->execute($data);

   
    // close the database connection
    $DHB = NULL;
  }catch(PDOException $e){
    print 'Exception : '.$e->getMessage();
  }
?>