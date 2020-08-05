<?php 
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_POST['table'];
    
    // File upload path
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;

    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

    $query = "
        LOAD DATA INFILE '$targetFilePath'
        INTO TABLE $table
        FIELDS TERMINATED BY ','
        OPTIONALLY ENCLOSED BY '\"' 
        LINES TERMINATED BY 'AUTO'
        IGNORE 1 LINES 
    ";

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
                $insert = $db->query($query);
                if($insert){
                    $statusMsg = "The file ".$fileName. " has been uploaded successfully.";
                } else {
                    $statusMsg = "File upload failed, please try again.";
                }
            } else {
                $statusMsg = $targetFilePath . PHP_EOL;
                $statusMsg .= "Sorry, there was an error uploading your file.";
            }
            echo $statusMsg;
            break;
        default:
            echo http_response_code(403);
    }
?>