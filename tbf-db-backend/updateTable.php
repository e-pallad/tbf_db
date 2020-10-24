<?php 
    require './connect.php';

    /* */
    
        error_reporting(-1);
        ini_set("display_errors", "1");
        ini_set("log_errors", 1);
        ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    

    $method = $_SERVER['REQUEST_METHOD'];
    if ($_POST['table'] == 'Verfahrenstechnikangaben') {
        $table = "RI-TBF_SEF_Apparateliste";
    } else {
        $table = $_POST['table'];
    }
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
                            if ($key == "AKZ Kodierung") {
                                $valueArr = explode(".", $value);
                                $query .= "`AKZ_Gr1_Standort` = '" . $valueArr[0] . "',";
                                $query .= "`AKZ_Gr2_Anlagenteil` = '" . $valueArr[1] . "',";
                                $query .= "`AKZ_Gr3_Aggregat` = '" . $valueArr[2] . "',";
                                $query .= "`AKZ_Gr4_Nummer` = '" . $valueArr[3] . "',";
                                $query .= "`AKZ_Gr5_Aggregat` = '" . $valueArr[4] . "',";
                                $query .= "`AKZ_Gr6_Nummer` = '" . $valueArr[5] . "'";
                            } else {
                                $query .= "`". $key . "`" . " = '" . $value . "'";
                            }
                            if ($i < count($dataArray) - 1) {
                                $query.= " , ";
                            }
                            $i++;
                        }

                        $query .= " WHERE `$keyField` = $dataArrayKeyField";

                        $insert = $con->query($query);
                        if ($insert) {
                            $statusMsg[] = "Erfolgreich $con->affected_rows Zeilen importiert";
                            $statusMsg[] = $query;
                        } else {
                            $statusMsg[] = "Fehlgeschlagen: " . $con->error;
                            $statusMsg[] = $query;
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