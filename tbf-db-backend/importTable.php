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
    $statusMsg = [];
    
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $sourceFile = "./uploads/" . $fileName;

    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    $fieldquery = "SELECT * FROM `$table` LIMIT 0,2";

    function convertToUTF8($file) {
        $fileData = file_get_contents($file);
        if (!mb_detect_encoding($fileData, 'UTF-8', true)) {
            $utf8_file_data = utf8_encode($fileData);
        } else {
            $utf8_file_data = $fileData;
        }
        $fileName = "./uploads/_UTF8.csv";
        file_put_contents($fileName, $utf8_file_data);
        return $fileName;
    };

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
                $targetFilePath = convertToUTF8($sourceFile);
                $fields = $con->query($fieldquery);
                if($fields) {
                    $firstRowNames = "";
                    $firstRow = preg_replace('/\s+/', ' ', trim(fgets(fopen($targetFilePath, "r"))));
                    $firstRow = explode(",",$firstRow);
                    foreach($firstRow as $var) {
                        $firstRowNames .= "`".$var."`,";
                    }
                    $firstRowNames = substr($firstRowNames, 0, -1);

                    $con->query("CREATE TEMPORARY TABLE temporary_table SELECT * FROM `$table` WHERE 1=0");
                    $con->query("LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE temporary_table FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($firstRowNames)");
                    $tableKey = mysqli_fetch_assoc(mysqli_query($con, "SHOW KEYS FROM `$table` WHERE Key_name = 'PRIMARY'"));
                    $con->query("INSERT INTO `$table` SELECT * FROM temporary_table ON DUPLICATE KEY UPDATE `".$tableKey["Column_name"]."` = VALUES(".$tableKey["Column_name"].")");
                    $statusMsg[] = $con->info;
                    $con->query("DROP TEMPORARY TABLE temporary_table;");

                    //$query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($firstRowNames)";
                    /*
                    if($fieldCompare == $firstRow) {
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($fieldNames)";
                    } else {
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ($fieldNames)";
                    }
                    */
                    //$insert = $con->query($query);
                    //if($insert) {
                    if($con->error == "") {
                        if($con->affected_rows > 0) {
                            $statusMsg[] = "Erfolgreich $con->affected_rows Zeilen importiert";
                        } else {
                            $statusMsg[] = "Upload erfolgreich. Keine neue Zeilen importiert";
                        } 
                    } else {
                        $statusMsg[] = "Fehlgeschlagen: " . $con->error;
                    }
                } else {
                    $statusMsg[] = $con->error;
                    $statusMsg[] = "Leider konnte die Datenbank nicht gelesen werden";
                }
            } else {
                $statusMsg[] = "Leider konnte die Datei nicht hochgeladen werden";
            }
            echo json_encode($statusMsg);
            break;
        default:
            echo http_response_code(403);
    }
?>