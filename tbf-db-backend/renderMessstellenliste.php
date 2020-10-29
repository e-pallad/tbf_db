<?php
    include('connect.php');
    require('libs/rpdf.php');

    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    $query = "SELECT CONCAT_WS(' . ', `AKZ_Gr1_Standort`, `AKZ_Gr2_Anlagenteil`, `AKZ_Gr3_Aggregat`, `AKZ_Gr4_Nummer`) AS `AKZ Kodierung`, `Funktion_Stoff`, `Funktion_Cod.`, CONCAT(`Funktion_Signal_High`, ', ', `Funktion_Signal_Low`) AS `Funktion_Signal`, `Schaltanlage`, `Messbereich`, `Ausgangssignal`, `Spannungsversorgung`, `Messverfahren`, `Anzahl der Grenzkontakte`, `Selbstüberwachung + Störmeldekontakt`, `Sicherungsautomat`, `NH-Trenner`, `Überspannungsschutz`, `FI-Schutzschalter`, `Wartungsschalter`, `Vor-Ort-Anzeige`, `Anzeige Schaltschrank`, `Anzeige Bedientafel`, `Anzeige im PLS`, `Erneuern VO`, `Erneuern EMSR`, `Schutzart`, `Ex-Schutz`, `zu Bearbeiten`, `Zusatzgeräte/Bemerkungen`, `Zustand/Bearbeitung`, `Benennung` FROM `RI-TBF_SEF_Messstellenliste` WHERE `AKZ_Gr4_Nummer` > 0";
    
    $header = mysqli_fetch_all($con->query("DESCRIBE `SEF_Armaturenliste`"));
    $data = mysqli_fetch_all($con->query($query));

    foreach ($header as $line) { 
        $headerLine[] = $line[0];
    }

    class PDF extends FPDF {
        // Page header
        function Header() {
            global $headerLine;

            $this->SetFillColor(75,135,190);
            $this->Image("./img/logo.png",245,5,50);
            $this->Ln(10);
            $this->SetFont('Arial','',10);
            $this->Cell(281,5.5,'ARA Niederrad',1,0,'L');
            $this->Ln();

            $this->SetFont('Arial','',6);
            $this->Cell(5,20,'Lfd. Nr.',1,0,'L',1);
            $this->Cell(22,20,utf8_decode('AKZ Messgröße'),1,0,'C',1);
            $this->Cell(35,20,'Funktion',1,0,'C',1);
            $this->Cell(6,20,'Schaltanlage',1,0,'L',1);
            $this->Cell(41,20,'Bezeichnung',1,0,'C',1);
            $this->Cell(20,20,'Messbereich',1,0,'C',1);
            $this->Cell(10,20,'Ausgangssignal',1,0,'C',1);
            $this->Cell(5,20,'Spannungsversorgung [V]',1,0,'L',1);
            $this->Cell(30,20,'Messverfahren',1,0,'C',1);
            $this->Cell(6,20,'Anzahl der Grenzkontakte',1,0,'L',1);
            $this->Cell(6,20,'Selbstüberwachung + Störmeldekontakt',1,0,'L',1);
            $this->Cell(3,20,'Sicherungsautomat',1,0,'L',1);
            $this->Cell(3,20,'NH-Trenner',1,0,'L',1);
            $this->Cell(3,20,'Überspannungsschutz',1,0,'L',1);
            $this->Cell(3,20,'FI-Schutzschalter',1,0,'L',1);
            $this->Cell(3,20,'Wartungsschalter',1,0,'L',1);
            $this->Cell(3,20,'Vor-Ort-Anzeige',1,0,'L',1);
            $this->Cell(3,20,'Anzeige Schaltschrank',1,0,'L',1);
            $this->Cell(3,20,'Anzeige Bedientafel',1,0,'L',1);
            $this->Cell(3,20,'Anzeige im PLS',1,0,'L',1);
            $this->Cell(3,20,'Erneuern VO',1,0,'L',1);
            $this->Cell(3,20,'Erneuern EMSR',1,0,'L',1);
            $this->Cell(6,20,'Schutzart',1,0,'L',1);
            $this->Cell(3,20,'EX-Schutz',1,0,'L',1);
            $this->Cell(3,20,'zu Bearbeiten',1,0,'L',1);
            $this->Cell(30,20,'Zusatzgeräte / Bemerkungen',1,0,'C',1);
            $this->Cell(20,20,'Zustand / Bearbeitung',1,0,'L',1);
            $this->Ln();

            $this->SetTextColor(75,135,190);
            $this->Cell(5,3,'','LR',0,'C');
            $this->Cell(22,3,'','LR',0,'C');
            $this->Cell(35,3,'1','LR',0,'C');
            $this->Cell(6,3,'2','LR',0,'C');
            $this->Cell(41,3,'3','LR',0,'C');
            $this->Cell(20,3,'4','LR',0,'C');
            $this->Cell(10,3,'5','LR',0,'C');
            $this->Cell(5,3,'6','LR',0,'C');
            $this->Cell(30,3,'7','LR',0,'C');
            $this->Cell(6,3,'8','LR',0,'C');
            $this->Cell(6,3,'9','LR',0,'C');
            $this->Cell(3,3,'10','LR',0,'C');
            $this->Cell(3,3,'11','LR',0,'C');
            $this->Cell(3,3,'12','LR',0,'C');
            $this->Cell(3,3,'13','LR',0,'C');
            $this->Cell(3,3,'14','LR',0,'C');
            $this->Cell(3,3,'15','LR',0,'C');
            $this->Cell(3,3,'16','LR',0,'C');
            $this->Cell(3,3,'17','LR',0,'C');
            $this->Cell(3,3,'18','LR',0,'C');
            $this->Cell(3,3,'19','LR',0,'C');
            $this->Cell(3,3,'20','LR',0,'C');
            $this->Cell(6,3,'21','LR',0,'C');
            $this->Cell(3,3,'22','LR',0,'C');
            $this->Cell(3,3,'23','LR',0,'C');
            $this->Cell(30,3,'24','LR',0,'C');
            $this->Cell(20,3,'25','LR',0,'C');
            $this->Ln();

            $this->Cell(5,3,'','LR',0,'C');
            $this->Cell(22,3,'','LR',0,'C');
            $this->Cell(11,3,'Stoff',0,0,'C');
            $this->Cell(11,3,'Cod.',0,0,'C');
            $this->Cell(13,3,'Signal',0,0,'C');
            $this->Cell(6,3,'','LR',0,'C');
            $this->Cell(41,3,'','LR',0,'C');
            $this->Cell(20,3,'','LR',0,'C');
            $this->Cell(10,3,'','LR',0,'C');
            $this->Cell(5,3,'','LR',0,'C');
            $this->Cell(30,3,'','LR',0,'C');
            $this->Cell(6,3,'','LR',0,'C');
            $this->Cell(6,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(6,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(3,3,'','LR',0,'C');
            $this->Cell(30,3,'','LR',0,'C');
            $this->Cell(20,3,'','LR',0,'C');
            $this->Ln();

            $this->SetTextColor(0,0,0);
        }

        function BasicTable($data) {
            $count = 1;
            foreach($data as $row) {

                $this->SetFont('Arial','',6);

                $this->Cell(5,3,$count,1,0,'C');
                $this->Cell(22,3,$row[0],1,0,'C');
                $this->Cell(11,3,utf8_decode($row[1]),1,0,'C');
                $this->Cell(11,3,$row[2],1,0,'C');
                $this->Cell(13,3,$row[3],1,0,'C');
                $this->Cell(6,3,$row[4],1,0,'C');
                $this->Cell(41,3,$row[27],1,0,'C');
                $this->Cell(20,3,$row[5],1,0,'C');
                $this->Cell(10,3,$row[6],1,0,'C');
                $this->Cell(5,3,$row[7],1,0,'C');
                $this->Cell(30,3,$row[8],1,0,'C');
                $this->Cell(6,3,$row[9],1,0,'C');
                $this->Cell(6,3,$row[10],1,0,'C');
                $this->Cell(3,3,$row[11],1,0,'C');
                $this->Cell(3,3,$row[12],1,0,'C');
                $this->Cell(3,3,$row[13],1,0,'C');
                $this->Cell(3,3,$row[14],1,0,'C');
                $this->Cell(3,3,$row[15],1,0,'C');
                $this->Cell(3,3,$row[16],1,0,'C');
                $this->Cell(3,3,$row[17],1,0,'C');
                $this->Cell(3,3,$row[18],1,0,'C');
                $this->Cell(3,3,$row[19],1,0,'C');
                $this->Cell(3,3,$row[20],1,0,'C');
                $this->Cell(3,3,$row[21],1,0,'C');
                $this->Cell(6,3,$row[22],1,0,'C');
                $this->Cell(3,3,$row[23],1,0,'C');
                $this->Cell(3,3,$row[24],1,0,'C');
                $this->Cell(30,3,$row[25],1,0,'C');
                $this->Cell(20,3,$row[26],1,0,'C');
              
                $count++;
                $this->Ln();
            }
        }
    
        function Footer() {
            $this->SetY(-20);
            $this->SetFont('Arial','',7.5);
            $this->Cell(8,10,'Datei: ',0,0,'L');
            $this->Cell(30,10,'Dateiname?',0,0,'L');
            $this->Cell(78,10,'',0,0);
            $this->SetFont('Arial','',10.7);
            $this->Cell(101,10);
            $this->Ln(3);

            $this->SetFont('Arial','',7.5);
            $this->Cell(18,10,utf8_decode('geändert:'),0,0,'L');
            $this->Cell(18,10,date("d.m.Y"),0,0,'L');
            $this->Cell(80,10,'',0,0);
            $this->SetFont('Arial','',10.7);

            $x=$this->GetX();
            $y=$this->GetY();
            $this->MultiCell(30,5,'Messstellenliste Gewerk SEVA',0,'C');
            $this->SetXY($x+30,$y);
            $this->Ln(3);

            $this->SetFont('Arial','',7.5);
            $this->Cell(18,10,'Druckdatum:',0,0,'L');
            $this->Cell(18,10,date("d.m.Y"),0,0,'L');
            $this->Cell(80,10,'',0,0);
            $this->Cell(25,15,'',0,0,'C');
            $this->Cell(101,10);
            $this->Cell(15,10,'Seite '.$this->PageNo().' von {nb}',0,0,'C');
        }
    }
    
    $pdf = new PDF('L');
    $pdf->SetFont('Arial','',8);
    $pdf->AddPage();
    $pdf->BasicTable($data);
    $pdf->AliasNbPages('{nb}');
    $pdf->Output();
?>