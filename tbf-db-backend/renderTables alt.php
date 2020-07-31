<?php 
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    $headerQuery = "DESCRIBE `$table`";
    $query = "SELECT * FROM `$table`";
    $listTableContent = array('content' => array());

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json');
            header('Access-Control-Allow-Origin: *');
            array_push($listTableContent['content'], array_column(mysqli_fetch_all($con->query($headerQuery)),0));
            array_push($listTableContent['content'], mysqli_fetch_all($con->query($query)),0);
            //$listTableContent = array('content' => mysqli_fetch_all($con->query($query)),0);
            echo json_encode($listTableContent);
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