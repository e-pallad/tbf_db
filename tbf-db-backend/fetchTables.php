<?php
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            $listdbtables = array( "tables" => array_column(mysqli_fetch_all($con->query('SHOW TABLES LIKE "RI-TBF_SEF_"')),0) );
            echo json_encode($listdbtables);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>