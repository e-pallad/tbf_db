<?php 
    require './connect.php';

    /* 
    
        https://askubuntu.com/a/767534 
    */
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    

    ini_set('mysql.allow_local_infile', 1);

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_POST['table'];
    $statusMsg = "";
    
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $sourceFile = "./uploads/" . $fileName;

    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    $fieldquery = "SELECT * FROM `$table` LIMIT 0,2";

    function convertToUTF8($file) {
        $fileData = file_get_contents($file);
        $utf8_file_data = utf8_encode($fileData);
        $fileName = $file + "_UTF8.csv";
        file_put_contents($fileName, $utf8_file_data);
        return $fileName;
    };

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
                $con->query("SET NAMES 'utf8'");
                convertToUTF8($sourceFile);
                $fields = $con->query($fieldquery);
                if($fields) {
                    $fieldData = mysqli_fetch_fields($fields);
                    $fieldNames = "";
                    foreach($fieldData as $var) {
                        $fieldNames .= "`".$var->name."`,";
                        $fieldCompare[] = $var->name;
                    }
                    $fieldNames = substr($fieldNames, 0, -1);
                    $firstRow = fgetcsv(fopen($targetFilePath, "r"), 1);
                    if($fieldCompare == $firstRow) {
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($fieldNames)";
                    } else {
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ($fieldNames)";
                    }
                    $insert = $con->query($query);
                    if($insert) {
                        if($con->affected_rows > 0) {
                            $statusMsg = "Erfolgreich $con->affected_rows Zeilen importiert" . PHP_EOL;
                        } else {
                            $statusMsg = "Upload erfolgreich. Keine neue Zeilen importiert" . PHP_EOL;
                        } 
                    } else {
                        $statusMsg = "Fehlgeschlagen: " . $con->error . PHP_EOL;
                        $statusMsg .= $query . PHP_EOL;
                    }
                } else {
                    $statusMsg = $con->error . PHP_EOL;
                    $statusMsg .= "Leider konnte die Datenbank nicht gelesen werden";
                }
            } else {
                $statusMsg = "Leider konnte die Datei nicht hochgeladen werden";
            }
            echo json_encode($statusMsg);
            break;
        default:
            echo http_response_code(403);
    }
?>