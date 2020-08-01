<?php 
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'POST':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            print_r($_POST);
            break;
        default:
            echo http_response_code(403);
    }
?>