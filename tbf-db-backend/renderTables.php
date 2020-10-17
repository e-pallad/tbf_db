<?php 
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    $headerQuery = "DESCRIBE `$table`";
    $query = "SELECT * FROM `$table`";
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
    
    $data = mysqli_fetch_all($con->query($query));
    
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