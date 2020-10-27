require("./connect.php");
include_once('libs/fpdf.php');
 
class PDF extends FPDF {
    // Page header
    function Header() {
        // Logo
        $this->Image('logo.png',10,-1,70);
        $this->SetFont('Arial','B',13);
        // Move to the right
        $this->Cell(80);
        // Title
        $this->Cell(80,10,'Employee List',1,0,'C');
        // Line break
        $this->Ln(20);
    }
    
    // Page footer
    function Footer() {
        // Position at 1.5 cm from bottom
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial','I',8);
        // Page number
        $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
    }
}
 
$display_heading = array('AKZ Kodierung'=>'AKZ Kodierung', 'employee_name'=> 'Name', 'employee_age'=> 'Age','employee_salary'=> 'Salary',);
 
$result = mysqli_query($con, "SELECT 
            CONCAT_WS(
                '.',
                `AKZ_Gr1_Standort`,
                `AKZ_Gr2_Anlagenteil`,
                `AKZ_Gr3_Aggregat`,
                `AKZ_Gr4_Nummer`,
                `AKZ_Gr5_Aggregat`,
                `AKZ_Gr6_Nummer`) 
            AS `AKZ Kodierung`, 
            `Benennung`,
            `Benennung Zusatz`,
            `NW`,
            `PN`,
            `TBV/ITD Nr.`,
            `Einbauort bzw. Rohrleitungs Nr.`,
            `R&I EB68-Nr.`,
            `Feld-Nr.`,
            `Bemerkung`,
            `Zustand/Bearbeitung` 
        FROM 
            `RI-TBF_SEF_Armaturenliste`
        ") or die("database error:". mysqli_error($connString));
$header = mysqli_query($con, "SHOW COLUMNS FROM `RI-TBF_SEF_Messstellenliste`");
 
$pdf = new PDF();
//header
$pdf->AddPage();
//foter page
$pdf->AliasNbPages();
$pdf->SetFont('Arial','B',12);
foreach($header as $heading) {
$pdf->Cell(40,12,$display_heading[$heading['Field']],1);
}
foreach($result as $row) {
$pdf->Ln();
foreach($row as $column)
$pdf->Cell(40,12,$column,1);
}
$pdf->Output();
?>