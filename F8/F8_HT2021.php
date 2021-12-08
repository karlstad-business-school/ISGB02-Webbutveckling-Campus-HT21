<?php

class bil {

    private $fabrikat;
    private $modell;
    private $regnr;
    private $farg;

    public function __construct($infabrikat,$inmodell,$inregnr,$infarg) {

        $this->$fabrikat=$infabrikat;
        $this->$modell=$inmodell;
        $this->$regnr=$inregnr;
        $this->$farg=$infarg;
    }

}


?>

<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8</title>
    </head>
    <body>
        <main>
            <?php 
                    $dns="mysql:host=localhost;dbname=bil;charset=utf8";
    $userName="root";
    $password="";

    $dbhOptions=array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION );

    $dbh = new PDO($dns,$userName, $password, $dbhOptions);

    $sql = "SELECT * FROM cars";

    $stmt = $dbh->prepare($sql);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($data as $row) {

        foreach($row as $col) {
            echo($col . "<br>"); 
        }
        echo("<hr>");
    }

    $stmt = null;
    $dbh=null;
           
            ?>
			<!--
            <form action="F8_HT2021.php" method="post">
                <input type="text" name="fabrikat" />
                <input type="text" name="modell" />
                <input type="text" name="regnr" />
                <input type="color" name="farg" />
                <input type="submit" name="btnSend" value="Skicka" />
            </form>
			-->
        </main>
    </body>
</html>