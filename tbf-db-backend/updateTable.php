<?php 
    require './connect.php';

    /* */
    
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");
    
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');

            $table = $_POST['table'];
            $dataArray = json_decode($_POST['data'], 1);
            $query = "UPDATE `Gesamtdatenbank` SET ";

            $i = 0;
            foreach ($dataArray as $key => $value) {
                if ($key == "PnPID") {
                    $where = " WHERE `PnPID`=$value";
                    continue;
                }
                
                $query .= "`". $key . "`" . " = '" . $value . "'";
                
                if ($i < count($dataArray) - 2) {
                    $query.= ",";
                }
                $i++;
            }

            if ($where) {
                $query .= $where;
            } else {
                $query .= " WHERE 1";
            }

            

            $insert = $con->query($query);
            if ($insert) {
                $statusMsg[] = "Erfolgreich $con->affected_rows Zeilen importiert";
            } else {
                $statusMsg[] = "Fehlgeschlagen: " . $con->error;
                $statusMsg[] = $query;
            };

            echo json_encode($statusMsg);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>