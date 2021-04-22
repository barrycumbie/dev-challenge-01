<!DOCTYPE html>


<html>
    <head>
        <meta charset="UTF-8">
        <title>CIS 486 Tutor Application</title>
    </head>
    <body>
         
         <?php
        if (isset($_COOKIE['user'])){
            echo "Welcome to the application!";
        }
       ?>
        <h1> CIS 486 Tutor Application</h1>
        <h2> Please enter your first and last name:</h2>
        <form action = "topics.php" method = "post">
            First Name: <input type = "text" name = 'firstname'><br>
            Last Name: <input type = "text" name = 'lastname'><br>
            Remember Me: <input type="checkbox" name="remember" value="ON" />
     
            <input type="submit" value="Submit">
           
        </form>
   
    </body>
</html>

