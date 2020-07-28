<?php
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            $listdbtables = array( "tables" => array_column(mysqli_fetch_all($con->query('SHOW TABLES')),0) );
            echo json_encode($listdbtables);
            break;
        case 'POST':
            $name = $_POST["name"];
            $email = $_POST["email"];
            $country = $_POST["country"];
            $city = $_POST["city"];
            $job = $_POST["job"];
        
            $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
            break;
    }

?>