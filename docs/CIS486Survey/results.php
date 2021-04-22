<?php session_start(); ?>


<html>
    <head>
        <meta charset="UTF-8">
        <title>CIS 486 Tutor Application</title>
    </head>
    <body>
        <h2>Application Results:</h2>
        <?php
       
        $desired = 5;

         //student must have checked atleast 5 of the skills options to receive an interview
        
        echo "<br>";
        $possessed = count($_SESSION['lang']);

        function checkResults($desired, $possessed) {
            $result = false;

            if ($possessed < $desired) { //checks for number of skills selected
                $result = false;
            } else {
                $result = true;
            }
            return $result;
        }

        if (checkResults($desired, $possessed)) {
            echo "You are accepted for an interview!";
        } else {
            echo "Sorry, your application was rejected. More skills are required for this position.";
        }
        ?>
    </body>
</html>
