<?php 
    require './connect.php';

    error_reporting(-1);
    ini_set("display_errors", "1");
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT'] . "/php-error.log");

    $method = $_SERVER['REQUEST_METHOD'];
    $table = $_GET['table'];
    
    $con->query("SET NAMES 'utf-8'");

    $listTableContent = array();

    if ($table == 'RI-TBF_SEF_Apparateliste') {
        $query = "SELECT `PnPID`,`TBF_ID`,`R&I EB68-Nr.`,`Feld-Nr.`,`Zchn. Rev. Nr.`,`Zustand/Bearbeitung`,`Bemerkung`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Medium`,`Nennleistung`,`Nennspannung`,`Nennstrom`,`Fördervolumen`,`Drehzahl`,`max. zul. Druck`,`max. zul. Temperatur`,`Volumen`,`Fläche`,`Gewicht`,`Werkstoff`,`Bauart`,`Zugehörige Sicherheitseinrichtung` FROM `Gesamtdatenbank` WHERE `TableID` = 1";
    } elseif ($table == 'RI-TBF_SEF_Armaturenliste') {
        $query = "SELECT `PnPID`,`TBF_ID`,`R&I EB68-Nr.`,`Feld-Nr.`,`Zchn. Rev. Nr.`,`Zustand/Bearbeitung`,`Bemerkung`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Medium`,`Nennleistung`,`Nennspannung`,`Nennstrom`,`Fördervolumen`,`Drehzahl`,`max. zul. Druck`,`max. zul. Temperatur`,`Volumen`,`Fläche`,`Gewicht`,`Werkstoff`,`Bauart`,`Zugehörige Sicherheitseinrichtung`,`DN`,`PN`,`NW`,`TBV/ITD Nr.`,`Einbauort bzw. Rohrleitungs Nr.` FROM `Gesamtdatenbank` WHERE `TableID` = 2";
    } elseif ($table == 'RI-TBF_SEF_Messstellenliste') {
        $query = "SELECT `PnPID`,`TBF_ID`,`R&I EB68-Nr.`,`Feld-Nr.`,`Zchn. Rev. Nr.`,`Zustand/Bearbeitung`,`Bemerkung`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Medium`,`Funktion_Stoff`,`Funktion_Cod.`,`Funktion_Signal_High`,`Funktion_Signal_Low`,`Schaltanlage`,`Messbereich`,`Ausgangssignal`,`Spannungsversorgung`,`Messverfahren`,`Anzahl der Grenzkontakte`,`Selbstüberwachung + Störmeldekontakt`,`Sicherungsautomat`,`NH-Trenner`,`Überspannungsschutz`,`FI-Schutzschalter`,`Wartungsschalter`,`Anzeige Schaltschrank`,`Vor-Ort-Anzeige`,`Anzeige Bedientafel`,`Erneuern VO`,`Anzeige im PLS`,`Erneuern EMSR`,`Schutzart`,`EX-Schutz`,`zu Bearbeiten`,`Zusatzgeräte/Bemerkungen` FROM `Gesamtdatenbank` WHERE `TableID` = 3";
    } elseif ($table == 'RI-TBF_SEF_Elektrokomponentenliste') {
        $query = "SELECT `TBF_ID`,`Komponente`,`Reserve_1`,`Reserve_2`,`Reserve_3`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Zustand/Bearbeitung` FROM `Gesamtdatenbank` WHERE `TableID` = 4";
    } elseif ($table == 'RI-TBF_SEF_Elektroangaben') {
        $query = "SELECT `PnPID`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`, `Anzahl AI`,`Anzahl AO`,`Anlaufart`,`Gleichzeitigkeitsfaktor`,`Betriebsstunden (Bh) pro Jahr`,`Abwärme (W)`,`Notstromberechtigungsstufe`,`USV-Berechtigung`,`Nennstrom`,`Nennleistung`,`Nennspannung`,`NSV`,`Kabel 1 Typ`,`Kabel 1 Länge`,`Kabel 2 Typ`,`Kabel 2 Länge`,`Kabel 3 Typ`,`Kabel 3 Länge`,`Kabel 4 Typ`,`Kabel 4 Länge`,`Kabel 5 Typ`,`Kabel 5 Länge`, `Reparaturschalter`,`Autonome Steuerung`,`Ex-Zone`,`IP-Schutzart`,`Motorschutz`,`Strommessung`,`Leistungsmessung`,`Effizienzklasse`,`Schalfeld`,`Einschub Nr.`,`Res.-Spalte`,`Wirkungsgrad`,`cos phi`,`Direktanlauf`,`Stern-Dreieck-Anlauf`,`Sanftanlauf`,`Drehzahlverstellung (FU)`,`Bypass für FU`,`Polumschaltbar`,`Wendeschaltung`,`NH-Trenner`,`SI.-Überwachung`,`FI-Schutzschalter`,`Thermokontakt`,`Dichte-Schutz`,`Strömungswächter`,`Druckwächter`,`Not-Aus`,`Stromwandler`,`Stromanzeige Schaltschrank`,`Stromanzeige Bedientafel`,`Vor-Ort-Anzeige`,`Schieberheizung`,`Stellungsgeber`,`Bedienung am Schaltschrank`,`Bedienung an Bedientafel`,`Bedienung Prozeßleitsystem`,`Bedientafeln_Betrieb/Störung`,`Bedientafeln_Schaltzustände`,`Bedientafeln_Automatik`,`PLS_Betrieb/Störung`,`PLS_Schaltzustände`,`PLS_Automatik`,`EX-Schutz`,`Erneuern EMSR`,`Schutzart`,`Abschaltung im Ex-Fall`,`Blitzschutz`,`Ausführung Vor-Ort-Steuerstelle`,`Schaltschrank für Einschub`,`TypicalNr. Einschub/Stromlaufplan`,`Typical Nr. MSK`,`Motorsteuerkarte Nr.`,`Zusatzgeräte/Bemerkungen`,`Vor-Ort-Bedienung`,`Funktion_Stoff`,`Funktion_Cod.`,`Schaltanlage`,`Messbereich`,`Ausgangssignal`,`Spannungsversorgung`,`Messverfahren`,`Anzahl der Grenzkontakte`,`Selbstüberwachung + Störmeldekontakt`,`Sicherungsautomat`,`Überspannungsschutz`,`Wartungsschalter` FROM `Gesamtdatenbank`";
    } elseif ($table == 'RI-TBF_SEF_Stoffstromliste') {
        $query = "SELECT `PnPID`,`R&I EB68-Nr.`,`Feld-Nr.`,`Zchn. Rev. Nr.`,`Zustand/Bearbeitung`,`Bemerkung`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`, `Hersteller`,`Typ`,`Volumenstrom min`,`Volumenstrom nom`,`Volumenstrom max`,`Dichte min`,`Dichte nom`,`Dichte max`,`Massenstrom min`,`Massenstrom nom`,`Massenstrom max`,`Druck min hPa_a`,`Druck nom hPa_a`,`Druck max hPa_a`,`Druck min Mpa_a`,`Druck nom Mpa_a`,`Druck max Mpa_a`,`Temperatur min`,`Temperatur nom`,`Temperatur max`,`Feststoffgehalt min`,`Feststoffgehalt nom`,`Feststoffgehalt max` FROM `Gesamtdatenbank` WHERE `TableID` = 6";
    } elseif ($table == 'Verfahrenstechnikangaben') {
        $query = "SELECT `PnPID`,`AKZ_Gr1_Standort`,`AKZ_Gr2_Anlagenteil`,`AKZ_Gr3_Aggregat`,`AKZ_Gr4_Nummer`,`AKZ_Gr5_Aggregat`,`AKZ_Gr6_Nummer`,`Benennung`,`Benennung Zusatz`,`Hersteller`,`Typ`,`Medium`,`Nennleistung`,`Nennspannung`,`Nennstrom`,`Fördervolumen`,`Drehzahl`,`max. zul. Druck`,`max. zul. Temperatur`,`Volumen`,`Fläche`,`Gewicht`,`Werkstoff`,`Bauart`,`Zugehörige Sicherheitseinrichtung`,`Zustand/Bearbeitung` FROM `Gesamtdatenbank`";
    }

    $header = mysqli_fetch_fields($con->query($query));

    function headerConfig($array) {
        foreach ($array as $key => $value) {
            if ($value->name == 'PnPID' || $value->name == 'TBF_ID') {
                $returnArray[] = array('headerName' => $value->name, 'field' => $value->name, 'editable' => false);
            } else {
                $returnArray[] = array('headerName' => $value->name, 'field' => $value->name, 'editable' => true);
            }
        }
        return $returnArray;
    }

    array_push($listTableContent, headerConfig($header));
    
    $data = mysqli_fetch_all($con->query($query));

    foreach ($data as $rowKey => $rowArray) {
        foreach ($rowArray as $cellKey => $cellContent) {
            $newKey = $header[$cellKey]->name;
            $newRow[$newKey] = $cellContent;
        }
        array_push($listTableContent, $newRow);
        unset($newRow);
    }

    switch ($method) {
        case 'GET':
            header('Content-Type: application/json;');
            header('Access-Control-Allow-Origin: *');

            echo json_encode($listTableContent);
            break;
        default:
            echo http_response_code(403);
            break;
    }

?>