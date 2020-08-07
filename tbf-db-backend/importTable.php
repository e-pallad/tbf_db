<?php 
    require './connect.php';

    /* 
    
        https://askubuntu.com/a/767534 
    
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    */

    ini_set('mysql.allow_local_infile', 1);

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_POST['table'];
    $statusMsg = "";
    
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $testfile = "./uploads/" . $fileName;

    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    $fieldquery = "SELECT * FROM `$table` LIMIT 0,2";

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
                $fields = $con->query($fieldquery);
                if($fields) {
                    $fieldData = mysqli_fetch_fields($fields);
                    $fieldNames = "";
                    foreach($fieldData as $var) {
                        $fieldNames .= $var->name . ",";
                    }
                    $fieldNames = substr($fieldNames, 0, -1);
                    $query = "LOAD DATA LOCAL INFILE '$testfile' INTO TABLE `$table` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ($fieldNames)";
                    $insert = $con->query($query);
                    if($insert) {
                        $statusMsg = "Erfolgreich $con->affected_rows Zeilen importiert" . PHP_EOL;
                    } else {
                        $statusMsg = "Fehlgeschlagen: " . $con->error . PHP_EOL;
                    }
                } else {
                    $statusMsg = $con->error . PHP_EOL;
                    $statusMsg .= "Couldn't find fields";
                }
            } else {
                $statusMsg = "Sorry, there was an error uploading your file.";
            }
            echo json_encode($statusMsg);
            break;
        default:
            echo http_response_code(403);
    }
?>