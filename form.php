<?
   $to = "info@navestrias.com";
   $subject = "Consulta enviada desde Pagina Web";   
   $msg  = "$nom, le envia el siguiente mensaje:\n\n";
   $msg .= "Teléfono: $telefono\n";
   $msg .= "E-mail: $mailfrom\n";
   $msg .= "Comments: $body\n";
   mail($to, $subject, $msg, "From: $mailfrom");

?>


