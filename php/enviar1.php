<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$mail = $_POST['mail'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $tel . " \r\n";
$message .= "Asunto: " . $_POST['asunto'] . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'elalmendro1992@gmail.com';
$asunto = 'Mensaje desde la WEB - elalmendro.org.ar ';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
-->