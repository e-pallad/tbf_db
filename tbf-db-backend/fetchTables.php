<?php
    require './connect.php';

    $listdbtables = array_column(mysqli_fetch_all($con->query('SHOW TABLES')),0);
    return json_encode($listdbtables);
?>