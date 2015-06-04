<?php
session_start();
function lacz_bd()
{  
  $db = new mysqli('localhost', 'uzytkownik', 'haslo', 'nazwa_bazy');    
    if (! $db)
      return false;
   $db->autocommit(TRUE);
   return $db;
}



if(!empty($_GET['activ'])){
$login = addslashes($_GET['activ']);
$db = lacz_bd();
$zapytanie = "update uzytkownicy set act='1' where login='$login'"; 
$wynik = $db->query($zapytanie);
echo 'OK';
}




if($_SESSION['captcha']!=$_POST['token']){
echo '1';
exit();
}



$login = addslashes($_POST['login']);
$haslo = addslashes($_POST['haslo']);
$mail = addslashes($_POST['mail']);
$token = addslashes($_POST['token']);


if(!empty($login)&&!empty($haslo)&&!empty($mail)&&!empty($token)){
$db = lacz_bd();

$zapytanie = "select login from uzytkownicy WHERE login='$login'";
$wynik = $db->query($zapytanie);
$ile_znalezionych = $wynik->num_rows;
        if($ile_znalezionych>0){ echo '2';
        exit();
        }
$zapytanie = "insert uzytkownicy (id, login, haslo,mail,act) values ('', '$login', sha1('$haslo'), '$mail', '0')"; 
$wynik = $db->query($zapytanie);
if($wynik){
                $stopka = '<br /><br />-----------------------------------------------<br /><br />';
                $from = 'twoja@domena.net';
                $admin_mail = 'twoja@domena.net';
                $tomail = $mail;
                $topic = 'Aktywacja konta';
                $tresc = 'Dane do logowania w serwisie : <br /><br /> Login: '.$login.'<br /> Haslo: '.$haslo.'<br /><br /> Aby aktywowac konto kliknij: <a href="http://www.twojaDomena.pl/register.php?activ='.$login.'">Aktywacja kliknij</a>';
                
                mail($tomail,$topic,$tresc."\n\n\n".$stopka, "From: $admin_mail\r\n"
        ."Reply-To: $from\r\nMIME-Version: 1.0\r\n"."Content-type: text/html; charset=iso-8859-2\r\n ");        

}else{ echo 'error';}
}       

?>
