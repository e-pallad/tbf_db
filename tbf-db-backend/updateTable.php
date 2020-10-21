<?php 
    require './connect.php';

    /* 
    
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    */

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_POST['table'];
    $dataArray = json_decode($_POST['data'], 1);

    $rowKeysQuery = "SHOW KEYS FROM `$table` WHERE Key_name = 'PRIMARY'";

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            if ($con->query($rowKeysQuery)) {
                $result = $con->query($rowKeysQuery);
                $responseArray = $result->fetch_array();
                if (!empty($responseArray['Column_name'])) {
                    $keyField = $responseArray['Column_name'];
                    $dataArrayKeyField = $dataArray[$keyField];
                    if (!empty($dataArrayKeyField)) {
                        $query = "UPDATE `$table` SET ";
                        $i = 0;
                        foreach ($dataArray as $key => $value) {
                            $query .= "`". $key . "`" . " = '" . $value . "'";
                            if ($i < count($dataArray) - 1) {
                                $query.= " , ";
                            }
                            $i++;
                        }
                        $query .= " WHERE '$keyField' = '$dataArrayKeyField'";
                        $insert = $con->query($query);
                        if ($insert) {
                            $statusMsg = "Erfolgreich $con->affected_rows Zeilen importiert" . PHP_EOL;
                        } else {
                            $statusMsg = "Fehlgeschlagen: " . $con->error . PHP_EOL;
                            $statusMsg .= $query . PHP_EOL;
                        }
                    }
                } else {
                    $statusMsg = "Kein PRIMARY-Keys in Tabelle " . $table;
                }
            } else {
                $statusMsg = "Konnte keine Verbindung zur Datenbank herstellen, um PRIMARY-Keys zu lesen.";
            }
            echo json_encode($statusMsg);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>