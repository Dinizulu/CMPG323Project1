<?php
include_once("CVindex.html");

  $name = $_POST['Names'];
  $email = $_POST['EmailAdd'];
  $message = $_POST['Message'];

  $email_from = "26186810@student.g.nwu.ac.za";

  $email_subject = "From Viewer";
  $email_body = "User name:$name.\n".
                "Email:$email.\n".
                "Message :$message.\n";

  $to = "j.dinizulu@gmail.com";
  $head = "From :$email_from \r\n";
  $head .= "Reply :$email\r\n";

  mail($to,  $email_subject,$email_body,$header);
  header("Location: CVindex.html");
 ?>
