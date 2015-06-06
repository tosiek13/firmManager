<?php
  try
  {
    //open the database
    $DBH = new PDO('sqlite:../databases/main/clients.db');

    //create the table in database
    $DBH->exec("CREATE TABLE clients (Id INTEGER PRIMARY KEY, login TEXT, password TEXT, companyName TEXT, email TEXT)");    

    //Getting datas from form
    $login = $_POST["login"];
    $password = $_POST["password"];
    $companyName = $_POST["companyName"];
    $email = $_POST["email"];

    //Validation data from file
   



    //insert some data... using unnamed placeholder to prevent SQL injection attacks.
    $data = array($login, $password, $companyName, $email);
 
	$STH = $DBH->prepare("INSERT INTO clients(login, password, companyName, email) values (?, ?, ?, ?)");
	$STH->execute($data);
    /*$db->exec("INSERT INTO clients (name, surname, password, companyName) VALUES ('tochur', 'tosiek', 'pass', 'tochurCompany');");
    $db->exec("INSERT INTO clients (name, surname, password, companyName) VALUES ('tochur3', 'tosiek', 'pass', 'tochurCompany');");
    */
    //now output the data to a simple html table...
    print "<table border=1>";
    print "<tr><td>Id</td><td>Login</td><td>Company Name</td><td>email</td></tr>";
    $result = $DBH->query('SELECT * FROM clients');
    foreach($result as $row)
    {
    	print "<tr><td>".$row['Id']."</td>";
		print "<td>".$row['login']."</td>";
		print "<td>".$row['companyName']."</td>";
		print "<td>".$row['email']."</td></tr>";
    }
    print "</table>";

    // close the database connection
    $DHB = NULL;
  }
  catch(PDOException $e)
  {
    print 'Exception : '.$e->getMessage();
  }
?>