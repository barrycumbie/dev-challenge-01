<?php session_start(); ?>


<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>CIS 486 Tutor Application</title>
    </head>
    <body>
        <h1>Confirmation Details:</h1>

        <?php
        if ($_POST) {
            $_SESSION['message'] = $_POST['message'];
            echo "Name: " . $_SESSION['firstname'] . ' ' . $_SESSION['lastname'] . '<br>';
            echo "<br>";
            echo "Skillset: ";
            echo implode(' , ',$_SESSION['lang']);
            echo"<br>";
            echo"<br>";
            echo "Job History: " . $_SESSION['message'];
      
            ?>

         <br>
         <br>
        <form action = "results.php" method = "post">
         <input type="submit" value="Confirm">


<?php } ?>
    </body>
</html>