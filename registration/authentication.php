<?php
  try
  {
    //open the database
    $DBH = new PDO('sqlite:../databases/main/clients.db');
    

    //Getting datas from form
    $login = $_POST["Autlogin"];
    $password = $_POST["Autpassword"];
   
    //Get data to authenticate
    $STH = $DBH->prepare("SELECT * FROM clients WHERE login=? AND password=?");
    $STH->execute(array($login, $password));
    $result = $STH->fetchAll(PDO::FETCH_ASSOC);

    foreach($STH as $result){
      print $row['Id'];
  		print $row['login'];
  		print $row['companyName'];
  		print $row['email'];
    }
    echo count($result);
    if( count($result) == 1 ){
        echo "Authentication sucesfull !";
    }else {
        echo "Failed to authenticate try again.";
    }

    // close the database connection
    $DHB = NULL;
  }
  catch(PDOException $e)
  {
    print 'Exception : '.$e->getMessage();
  }
?>