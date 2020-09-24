<?php 
    require './connect.php';

    /* 
    
        https://askubuntu.com/a/767534 */
    
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    
    $table = $_POST['table'];
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;

    $result = array();

    $fieldquery = "SELECT * FROM `$table` LIMIT 0,2";
    $tempTableName = $_POST['table'] . "_temp";
    $tableName = $_POST['table'];
    $tempTableQuery = "CREATE TABLE `".$tempTableName."` SELECT * FROM `" . $_POST['table'] . "` LIMIT 0";
    $rowKeysQuery = "SHOW KEYS FROM `$table` WHERE Key_name = 'PRIMARY'";
    //$joinQuery = "SELECT * FROM `".$tempTableName."` TT LEFT JOIN `".$tableName."` OG ON TT.".$key." = OG.".$key."";
    

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
                $con->query($tempTableQuery);

                $result["create temp table"] = $con->error . PHP_EOL;

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
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `" . $tempTableName . "` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES ($fieldNames)";
                    } else {
                        $query = "LOAD DATA LOCAL INFILE '$targetFilePath' INTO TABLE `" . $tempTableName . "` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ($fieldNames)";
                    }
                    $insert = $con->query($query);
                    
                    $result["LOAD DATA LOCAL INFILE"] = $con->error  . PHP_EOL;

                    $returnQueryKey = $con->query($rowKeysQuery);
                    $returnArrayKey = $returnQueryKey->fetch_array();
                    $key = $returnArrayKey['Column_name'];
                    //$returnQueryJoin = $con->query();
                    //$returnArrayJoin = $returnQueryJoin->fetch_array();
                    //$result = print_r($returnArrayJoin);
                    
                    $joinQuery = "SELECT * FROM `".$tempTableName."` TT LEFT JOIN `".$tableName."` OG ON TT.".$key." = OG.".$key."";
                    $con->query($joinQuery);

                    $result["JOIN Query"] = $joinQuery;
                    $result["JOIN"] = $con->error  . PHP_EOL;
                }
            }
            echo json_encode($result);
            $con->close();
            break;
        default:
            echo http_response_code(403);
    }
?>