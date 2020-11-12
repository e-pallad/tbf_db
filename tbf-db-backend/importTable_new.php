<?php 
    require './connect.php';
    include './libs/SimpleXLSX.php';

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
    $statusMsg = [];
    
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $sourceFile = "./uploads/" . $fileName;

    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
    
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

            $con->query("CREATE TEMPORARY TABLE temporary_table SELECT * FROM `Gesamtdatenbank` WHERE 1=0");
            $statusMsg[] = $con->error;
            
            $con->query("LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE temporary_table FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($firstRowNames)");
            $statusMsg[] = $con->error;

            $tableKey = mysqli_fetch_assoc(mysqli_query($con, "SHOW KEYS FROM `Gesamtdatenbank` WHERE Key_name = 'PRIMARY'"));
            $statusMsg[] = $con->error;

            $con->query("INSERT INTO `$table` SELECT * FROM temporary_table");
            $statusMsg[] = $con->info;
            if (mysqli_warning_count($con)) {
                $e = mysqli_get_warnings($con);
                do {
                    $statusMsg[] = "Warning: $e->errno: $e->message";
                } while ($e->next());
            }
            $statusMsg[] = $con->affected_rows . " Zeilen importiert";
            $con->query("DROP TEMPORARY TABLE temporary_table;");
            $statusMsg[] = $con->error;

        } else {
            $statusMsg[] = $con->error;
            $statusMsg[] = "Leider konnte die Datenbank nicht gelesen werden";
        }
    } else {
        $statusMsg[] = "Leider konnte die Datei nicht hochgeladen werden";
    }

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            
            echo json_encode($result);
            $con->close();
            break;
        default:
            echo http_response_code(403);
    }
?>