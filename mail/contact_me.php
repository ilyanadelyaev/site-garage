<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['phone']))
{
    echo "No arguments Provided!";
	return false;
}
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'info@honda-ligovsky.ru';
$email_subject = "Заявка для СТО Лиговская от $name";
$email_body = "Получена новая заявка для СТО Лиговская.\n\n"."Имя: $name\nТелефон: $phone\n\nСообщение:$message";
$headers = "From: info@honda-ligovsky.ru\n";
mail($to,$email_subject,$email_body,$headers);
return true;			
?>