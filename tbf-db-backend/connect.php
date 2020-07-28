<?php 
    $host = "localhost"; 
    $user = "tbf_db_admin"; 
    $password = "1p@9wl4R"; 
    $dbname = "tbf_db";

    $con = mysqli_connect($host, $user, $password, $dbname);

    // $method = $_SERVER['REQUEST_METHOD'];


    if (!$con) {
        die("Connection failed: " . mysqli_connect_error() . PHP_EOL);
    }

    /* switch ($method) {
        case 'GET':
            $table = $_GET['table'];
            $sql = "select * from " . $table; 
            break;
        case 'POST':
            $name = $_POST["name"];
            $email = $_POST["email"];
            $country = $_POST["country"];
            $city = $_POST["city"];
            $job = $_POST["job"];
        
            $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
            break;
        } */
?>