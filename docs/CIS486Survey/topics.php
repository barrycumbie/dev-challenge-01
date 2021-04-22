<?php session_start();?>


<?php
// display name at top of page
if($_POST) {
    $_SESSION['firstname'] = $_POST['firstname'];
    $_SESSION['lastname'] = $_POST['lastname'];
    echo "Name: ".$_SESSION['firstname'].' ' .$_SESSION['lastname'].'';
    
  ?>  

<?php

$firstname = $_REQUEST['firstname'];
$lastname = $_REQUEST['lastname'];

?>

     <html>
    <head>
        <meta charset="UTF-8">
        <title>CIS 486 Tutor Application</title>
    </head>
    <body>
        <h1> Skill's Section </h1>
        
      
        <form method="post" action="experience.php">
            <h2>Please Select Your Skills:</h2><br/>
            <input type="checkbox" name='lang[]' value="PHP"> PHP <br/>
            <input type="checkbox" name='lang[]' value="MariaDB"> MariaDB <br/>
            <input type="checkbox" name='lang[]' value="Python"> Python <br/>
            <input type="checkbox" name='lang[]' value="Java"> Java <br/>
            <input type="checkbox" name='lang[]' value="HTML"> HTML <br/>
            <input type="checkbox" name='lang[]' value="CSS"> CSS <br/>
            <input type="checkbox" name='lang[]' value="C#"> C# <br/>
            <input type="checkbox" name='lang[]' value="Git"> Git <br/>
            
            <input type="hidden" name="firstname" value="<?= $_POST['firstname'] ?>" /> 
            <input type="hidden" name="lastname" value="<?= $_POST['lastname'] ?>" />

            <input type="submit" value="Submit" name="submit">
        </form>

        <?php
        
        //practice with passing hidden fields above using first and last name
        
        if (isset($_POST['submit'])) {

            if (!empty($_POST['lang'])) {

                foreach ($_POST['lang'] as $value) {
                    echo "value : " . $value . '<br/>';
                }
            }
        }
        ?>
      
        <?php } ?>
    </body>
</html> 