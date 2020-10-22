<?php 
    require './connect.php';

    /*
        https://stackoverflow.com/questions/16251625/how-to-create-and-download-a-csv-file-from-php-script
    */

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    $query = "SELECT * FROM `$table`";
    
    $data = mysqli_fetch_all($con->query($query));
    $header = mysqli_fetch_all($con->query("DESCRIBE `$table`"));

    switch ($method) {
        case 'GET':
            $delimiter=";";
            $f = fopen('php://memory', 'w'); 

            foreach ($header as $line) { 
                mb_convert_encoding($line, 'UTF-16LE', 'UTF-8');
                $headerLine[] = $line[0];
            }

            fputcsv($f, $headerLine, $delimiter);

            foreach ($data as $line) { 
                mb_convert_encoding($line, 'UTF-16LE', 'UTF-8');
                fputcsv($f, $line, $delimiter); 
            }
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