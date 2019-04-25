var L04_AssocArraysAndExport;
(function (L04_AssocArraysAndExport) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", kaufen);
    function init(_event) {
        console.log(L04_AssocArraysAndExport.data);
        displayHeteroPredef(L04_AssocArraysAndExport.data["Eissorten"][1]);
        displayHomoVar(L04_AssocArraysAndExport.data);
        let fieldsetElement = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsetElement.length; i++) {
            let fieldset = fieldsetElement[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function displayHomoVar(_homoVar) {
        // mit diesem Schleifenkonstrukt wird über alle Schlüssel iteriert (Typannotation ist hier nicht erlaubt)
        for (let key in _homoVar) {
            // zwischenspeichern des Werts, der mit dem Schlüssel assoziiert ist
            let value = _homoVar[key];
            // hübsche Sachen, die man mit der Konsole noch machen kann
            console.group(key);
            console.dir(value);
            console.groupEnd();
            // der Wert ist ein Array, also wird noch darüber iteriert
            for (let i = 0; i < value.length; i++)
                // und die einzelnen Datensätze darin angezeigt
                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_heteroPredef) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = "Optionen:";
        fieldset.innerText = _heteroPredef.class;
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
    }
    function handleChange(_event) {
        console.log(_event);
        berechnePreis(_event);
    }
    function berechnePreis(_event) {
        let anfangsPreis = 0;
        document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].name == "Stepper") { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
                let preis = Number(input[i].value);
                anfangsPreis += preis;
                let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
                erstellen.innerHTML = `<p>
            <p> ${input[i].className}</p>`;
                document.getElementById("Übersicht").appendChild(erstellen);
            }
            document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
            //for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].value);
                anfangsPreis += preis;
                let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
                erstellen.innerHTML = `<p>
            <p> ${input[i].name}</p>`;
                document.getElementById("Übersicht").appendChild(erstellen);
            }
            document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
        }
    }
    function kaufen(_event) {
        let bestellen = document.getElementById("buy"); //Der Button wird so über die Id angesprochen//
        bestellen.addEventListener("click", kontrolle);
    }
    function kontrolle(_event) {
        let eingabeArray = []; //Fehlende Angaben, den den Value 0 haben werden in das leere Array gepushed//
        let x = 0;
        let eingabe = document.getElementsByTagName("input");
        for (let i = 0; i < eingabe.length; i++) {
            if (eingabe[i].value == "") { // Wenn das Element einen leeren Value hat, dann wird dessen Name in das Array gepushed//
                let angabenotwendig = eingabe[i].name;
                eingabeArray.push(angabenotwendig);
            }
        }
        if (eingabeArray.length == 0) { // Wenn das Array leer ist, kommt die Rückmeldung:"Ihre Bestellung wurde aufgenommen"//
            alert("Ihre Bestellung wurde aufgenommen");
        }
        else { // Wenn sich Elemente mit leerem Value im Array befinden, werden diese ausgegeben.//
            alert(`Bitte ${eingabeArray} vervollständigen`);
        }
    }
})(L04_AssocArraysAndExport || (L04_AssocArraysAndExport = {}));
//# sourceMappingURL=main.js.map