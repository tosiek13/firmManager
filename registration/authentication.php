<?php
  // Start the session
  function startSession($companyName){
    if (session_status() == PHP_SESSION_NONE) {
      session_start();
    }
    $_SESSION['login'] = (string)$companyName;
  }
?>

<?php
  try
  {
    //open the database
    $DBH = new PDO('sqlite:../databases/main/clients.db');
    

    //Getting datas from form
    $login = $_POST["login"];
    $password = $_POST["password"];
   
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

    if( count($result) >= 1 ){
      startSession($login);
      echo "OK";
    }else {
      echo "Failed to authenticate, incorrect login or password";
    }

    // close the database connection
    $DHB = NULL;
  }
  catch(PDOException $e)
  {
    print 'Exception : '.$e->getMessage();
  }
?>