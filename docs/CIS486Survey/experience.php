<?php session_start();?>

<?php
//save skills data
if($_POST) {
    $_SESSION['lang'] = $_POST['lang'];
   
  ?>

<html>
    <head>
        <meta charset="UTF-8">
        <title>CIS 486 Tutor Application</title>
    </head>
    <body>
        <h1> Experience Section </h1>
        
        <br>
        
        
        
        <form method="post" action="confirmation.php">
           <h2>Tell us about your former experiences: via class, projects, jobs, etc.</h2><br/>
           <p>Answer Below:</p><textarea name="message" rows="12" cols="70"></textarea><br />
          
           
           <input type="submit" value="Submit" name="submit">
        </form>

      
        <?php } ?>
    </body>
</html>

