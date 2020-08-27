<?php 
    require './connect.php';

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    $headerQuery = "DESCRIBE `$table`";
    $query = "SELECT * FROM `$table`";
    $listTableContent = array();
    
    $data = mysqli_fetch_all($con->query($query));

    switch ($method) {
        case 'GET':
            $delimiter=";";
            // open raw memory as file so no temp files needed, you might run out of memory though
            $f = fopen('php://memory', 'w'); 
            // loop over the input array
            foreach ($data as $line) { 
                // generate csv lines from the inner arrays
                fputcsv($f, $line, $delimiter); 
            }
            // reset the file pointer to the start of the file
            fseek($f, 0);
            header('Content-Type: application/csv');
            header('Access-Control-Allow-Origin: *');
            header('Content-Disposition: attachment; filename="'. $table .'.csv";');
            fpassthru($f);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>