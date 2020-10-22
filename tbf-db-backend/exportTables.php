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
            fputs($f, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));

            foreach ($header as $line) { 
                $headerLine[] = $line[0];
            }

            fputcsv($f, $headerLine, $delimiter);

            foreach ($data as $line) { 
                /*
                $line = array_map(function($cell){
                    mb_convert_encoding($cell, 'UTF-16LE', 'UTF-8');
                }, $line);
                */
                fputcsv($f, $line, $delimiter); 
            }
            fseek($f, 0);

            header('Content-Type: application/csv;charset=UTF-8');
            header('Access-Control-Allow-Origin: *');
            header('Content-Disposition: attachment; filename="'. $table .'.csv";');

            fpassthru($f);
            
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>