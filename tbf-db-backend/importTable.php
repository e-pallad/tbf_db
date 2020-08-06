<?php 
    require './connect.php';

    /* 
        sudo chown -R www-data:www-data /var/www/html
        sudo usermod -a -G www-data username
        relogin
    */

    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $con->real_escape_string($_POST['table']);
    $statusMsg = "";
    
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;

    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

    $query = "LOAD DATA INFILE '$targetFilePath' INTO TABLE $table";

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
                $insert = $con->query($query);
                if($insert){
                    $statusMsg = "The file " .$filename. " has been uploaded successfully.";
                } else {
                    $statusMsg = "Fehlgeschlagen: " . $con->error . PHP_EOL;
                }
            } else {
                $statusMsg = $targetFilePath . PHP_EOL;
                $statusMsg .= "Sorry, there was an error uploading your file.";
            }
            $statusMsg .= $query . PHP_EOL;
            echo $statusMsg;
            break;
        default:
            echo http_response_code(403);
    }
?>