<?php 
    require './connect.php';
/*
    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");
*/
    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    
    $con->query("SET NAMES 'utf-8'");

    $listTableContent = array();

    if ($table == 'RI-TBF_SEF_Apparateliste') {
        $query = "SELECT `PnPID`,`TBF_ID`,`R&I EB68-Nr.`,`Feld-Nr.`,`Zchn. Rev. Nr.`,`Bemerkung`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Nummer`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Medium`,`Nennleistung [kW]`,`Nennspannung [V]`,`Nennstrom [A]`,`Fördervolumen [m3/h]`,`Drehzahl [U/min]`,`max. zul. Druck [barü]`,`max. zul. Temperatur [°C]`,`Volumen [m3]`,`Fläche [m2]`,`Gewicht [kg]`,`Werkstoff`,`Bauart`,`Zugehörige Sicherheitseinrichtung` FROM `Gesamtdatenbank`"
    }

    $header = array_column(mysqli_fetch_fields($con->query($query)));

    function headerConfig($array) {
        foreach ($array as $key => $value) {
            if ($value == 'PnPID' || $value == 'TBF_ID') {
                $returnArray[] = array('headerName' => $value, 'field' => $value, 'editable' => false);
            } else {
                $returnArray[] = array('headerName' => $value, 'field' => $value, 'editable' => true);
            }
        }
        return $returnArray;
    }

    array_push($listTableContent, headerConfig($header));
    
    if ($table == 'Verfahrenstechnikangaben') {
        $data = mysqli_fetch_all($con->query($queryVerfahrenstechnik));
    } else {
        $data = mysqli_fetch_all($con->query($query));
    }
    
    
    foreach ($data as $rowKey => $rowArray) {
        foreach ($rowArray as $cellKey => $cellContent) {
            $newKey = $header[$cellKey];
            $newRow[$newKey] = $cellContent;
        }
        array_push($listTableContent, $newRow);
        unset($newRow);
    }

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json; charset=utf-8');
            header('Access-Control-Allow-Origin: *');
            echo json_encode($listTableContent);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>