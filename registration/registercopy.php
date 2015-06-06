<?php
	//Opening the DB (or creating)
	class MainDB extends SQLite3{
		function __construct(){
		 	$this->open('../databases/companies.db');
		}
	}
   
	$db = new MainDB();
	if(!$db){
		echo $db->lastErrorMsg();
	} else {
		echo "Opened database successfully\n";
	}
   
	$sql ="CREATE TABLE companies(
	login           	TEXT    	NOT NULL,
	password        	TEXT     NOT NULL,
	companyName     	CHAR(50),
	email					TEXT 		NOT NULL);";

	$ret = $db->exec($sql);
	if(!$ret){
		echo $db->lastErrorMsg();
	} else {
		echo "Table created successfully\n";
	}

	//Adding record
	$sql = 'INSERT INTO companies (login, password, companyName, email) VALUES ("tochur", "pass", "tochurCompany", "tochur@gmail.com");';
	
	$ret = $db->exec($sql);
	if(!$ret){
		echo $db->lastErrorMsg();
	} else {
		echo "Records created successfully\n";
	}
	$db->close();
?>
