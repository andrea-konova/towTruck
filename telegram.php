<?php

/* https://api.telegram.org/bot1302656965:AAF2ln4tnk2m7mmH4Cu0FvVBjvBSUKNtDrk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$email = $_POST['userEmail'];
$subject = $_POST['userSubject'];
$message = $_POST['userMessage'];
$token = "1302656965:AAF2ln4tnk2m7mmH4Cu0FvVBjvBSUKNtDrk";
$chat_id = "-378091721";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Тема' => $subject,
  'Сообщение' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>