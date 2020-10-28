<?php
    include('connect.php');
    require('libs/fpdf.php');

    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    $query = "SELECT CONCAT_WS(' . ',`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`) AS `AKZ Kodierung`, `Benennung`, `Benennung Zusatz`, `NW`, `PN`, `TBV/ITD Nr.`, `Einbauort bzw. Rohrleitungs Nr.`, `R&I EB68-Nr.`, `Feld-Nr.`, `Zchn. Rev. Nr.`, `Bemerkung`, `Zustand/Bearbeitung` FROM `RI-TBF_SEF_Armaturenliste` WHERE `AKZ_Gr4_Nummer` > 0";
    
    $header = mysqli_fetch_all($con->query("DESCRIBE `SEF_Armaturenliste`"));
    $data = mysqli_fetch_all($con->query($query));

    foreach ($header as $line) { 
        $headerLine[] = $line[0];
    }

    class PDF extends FPDF {
        // Page header
        function Header() {
            global $headerLine;

            $this->Image("./img/logo.png",245,5,50);
            $this->Ln(10);
            $this->SetFont('Arial','B',14);
            $this->Cell(105,16,'',1);
            $this->Cell(105,16,'Armaturenliste',1,0,'C');
            $this->Cell(51,16,'',1);
            $this->Cell(14,16,'',1);
            $this->Ln();

            foreach($headerLine as $col) {
                $this->SetFont('Arial','B',8);
                if ($col == "AKZ Kodierung" || $col == "Benennung" || $col == "Benennung Zusatz") {
                    $this->Cell(35,10,$col,1,0,'C');
                } elseif ($col == "NW" || $col == "PN" || $col == "Feld-Nr.") {
                    $this->Cell(12,10,$col,1,0,'C');
                } elseif ($col == "TBV/ITD Nr.") {
                    $this->Cell(18,10,$col,1,0,'C');
                } elseif ($col == "Einbauort bzw. Rohrleitungs Nr.") {
                    $x=$this->GetX();
                    $y=$this->GetY();
                    $this->Rect($x, $y, 25.5, 10);
                    $this->MultiCell(25.5,5,$col,0,'C');
                    $this->SetXY($x+25.5,$y);
                } elseif ($col == "R&I EB68-Nr.") {
                    $this->Cell(25.5,10,$col,1,0,'C');
                } elseif ($col == "Zchn. Rev. Nr." || $col == "Bemerkung") {
                    $this->Cell(25.5,10,$col,1,0,'C');
                } elseif ($col == "Zustand/Bearbeitung") {
                    $this->MultiCell(14,3.3,$col,1,'C');
                } else {
                    $this->Cell(40,10,$col,1,0,'C');
                }
            }
        }

        function BasicTable($data) {

            foreach($data as $row) {
                $this->SetFont('Arial','',8);
                $this->Cell(35,5,utf8_decode($row[0]),1);
                if (strlen($row[1]) > 30) {
                    $x=$this->GetX();
                    $y=$this->GetY();
                    $this->Rect($x, $y, 35, 5);
                    $this->MultiCell(35,2.5,utf8_decode($row[1]),0,'L');
                    $this->SetXY($x+35,$y);
                } else {
                    $this->Cell(35,5,utf8_decode($row[1]),1);
                }
                if (strlen($row[2]) > 25) {
                    $x=$this->GetX();
                    $y=$this->GetY();
                    $this->Rect($x, $y, 35, 5);
                    $this->MultiCell(35,2.5,utf8_decode($row[2]),0,'L');
                    $this->SetXY($x+35,$y);
                } else {
                    $this->Cell(35,5,utf8_decode($row[2]),1);
                }
                $this->Cell(12,5,utf8_decode($row[3]),1);
                $this->Cell(12,5,utf8_decode($row[4]),1);
                $this->Cell(18,5,utf8_decode($row[5]),1);
                $this->Cell(25.5,5,utf8_decode($row[6]),1);
                $this->Cell(25.5,5,utf8_decode($row[7]),1);
                $this->Cell(12,5,utf8_decode($row[8]),1);
                $this->Cell(25.5,5,utf8_decode($row[9]),1);
                $this->Cell(25.5,5,utf8_decode($row[10]),1);
                $this->Cell(14,5,utf8_decode($row[10]),1);
                
                $this->Ln();
            }
        }
    
        function Footer() {
            $this->SetY(-15);
            $this->SetFont('Arial','I',8);
            $this->Cell(0,10,'Seite '.$this->PageNo().' von {nb}',0,0,'C');
        }
    }
    
    $pdf = new PDF('L');
    $pdf->SetFont('Arial','',8);
    $pdf->AddPage();
    $pdf->BasicTable($data);
    $pdf->AliasNbPages('{nb}');
    $pdf->Output();
?>