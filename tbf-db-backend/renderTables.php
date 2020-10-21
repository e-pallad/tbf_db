<?php 
    require './connect.php';

    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    $headerQuery = "DESCRIBE `$table`";
    
    $query = "SELECT * FROM `$table`";
    $queryMessstellenliste = "
    SELECT 
    CONCAT(
        `AKZ_Gr1_Standort`,'.',
        `AKZ_Gr2_Anlagenteil`,'.',
        `AKZ_Gr3_Aggregat`,'.',
        `AKZ_Gr4_Nummer`,'.',
        `AKZ_Gr5_Nummer`,'.',
        `AKZ_Gr6_Nummer`) 
    AS `AKZ Kodierung`, 
        `Funktion_Stoff`,
        `Funktion_Cod.`,
        `Schaltanlage`,
        `Messbereich`,
        `Ausgangssignal`,
        `Spannungsversorgung`,
        `Messverfahren`,
        `Anzahl der Grenzkontakte`,
        `Selbstüberwachung + Störmeldekontakt`,
        `Sicherungsautomat`,
        `NH-Trenner`,
        `Überspannungsschutz`,
        `FI-Schutzschalter`,
        `Wartungsschalter`,
        `Vor-Ort-Anzeige`,
        `Anzeige Schaltschrank`,
        `Anzeige Bedientafel`,
        `Anzeige im PLS`,
        `Erneuern VO`,
        `Erneuern EMSR`,
        `Schutzart`,
        `Ex-Schutz`,
        `zu Bearbeiten`,
        `Zusatzgeräte/Bemerkungen`,
        `Zustand/Bearbeitung_2` 
    FROM 
        `RI-TBF_SEF_Messstellenliste`
    ";
    $queryVerbraucherliste = "
    SELECT 
        CONCAT(
            `AKZ_Gr1_Standort`,'.',
            `AKZ_Gr2_Anlagenteil`,'.',
            `AKZ_Gr3_Aggregat`,'.',
            `AKZ_Gr4_Nummer`,'.',
            `AKZ_Gr5_Nummer`,'.',
            `AKZ_Gr6_Nummer`) 
        AS `AKZ Kodierung` 
    FROM 
        `RI-TBF_SEF_Apparateliste` 
    LEFT JOIN 
        `RI-TBF_SEF_Elektroangaben` 
    ON 
    ";
    $queryArmaturenliste =  "
    SELECT 
        CONCAT(
            `AKZ_Gr1_Standort`,'.',
            `AKZ_Gr2_Anlagenteil`,'.',
            `AKZ_Gr3_Aggregat`,'.',
            `AKZ_Gr4_Nummer`,'.',
            `AKZ_Gr5_Nummer`,'.',
            `AKZ_Gr6_Nummer`) 
        AS `AKZ Kodierung`, 
        `Benennung`,
        `Benennung Zusatz`,
        `NW`,
        `PN`,
        `TBV/ITD Nr.`,
        `Einbauort bzw. Rohrleitungs Nr.`,
        `R&I EB68-Nr.`,
        `Feld-Nr.`,
        `Bemerkung`,
        `Zustand/Bearbeitung` 
    FROM 
        `RI-TBF_SEF_Armaturenliste`
    ";

    $listTableContent = array();

    $header = array_column(mysqli_fetch_all($con->query($headerQuery)),0);

    function headerConfig($array) {
        foreach ($array as $key => $value) {
            if ($key == 'PnPID') {
                $returnArray[] = array('headerName' => $value, 'field' => $value, 'editable' => false);
            } else {
                $returnArray[] = array('headerName' => $value, 'field' => $value, 'editable' => true);
            } 
        }
        return $returnArray;
    }

    array_push($listTableContent, headerConfig($header));
    
    if ($table == 'SEF_Messstellenliste' ) {
        $data = mysqli_fetch_all($con->query($queryMessstellenliste));
    } else {
        $data = mysqli_fetch_all($con->query($query));
    }
    
    
    foreach ($data as $rowKey => $rowArray) {
        foreach ($rowArray as $cellKey => $cellContent) {
            $newKey = $header[$cellKey];
            $newRow[$newKey] = htmlentities($cellContent);
        }
        array_push($listTableContent, $newRow);
        unset($newRow);
    }

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            echo json_encode($listTableContent);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>