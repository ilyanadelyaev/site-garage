<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'ilya.nadelyaev@honda-ligovsky.ru';
$email_subject = "Заявка для СТО Лиговская от $name";
$email_body = "Получена новая заявка для СТО Лиговская.\n\n"."Имя: $name\n\nТелефон: $phone\n\nСообщение:\n$message";
$headers = "From: info@honda-ligovsky.ru\n";
mail($to,$email_subject,$email_body,$headers);
return true;			
?>