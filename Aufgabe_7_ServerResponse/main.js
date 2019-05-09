var L07_AssocArraysAndExport;
(function (L07_AssocArraysAndExport) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", kaufen);
    function init(_event) {
        //console.log(data);
        displayHomoVar(L07_AssocArraysAndExport.data);
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
            //console.group(key);
            //console.dir(value);
            //console.groupEnd();
            // der Wert ist ein Array, also wird noch darüber iteriert
            for (let i = 0; i < value.length; i++)
                // und die einzelnen Datensätze darin angezeigt
                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_heteroPredef) {
        let formelement = document.createElement("input");
        let legend = document.createElement("label");
        legend.innerText = _heteroPredef.call;
        formelement.setAttribute("type", _heteroPredef.type);
        formelement.setAttribute("id", _heteroPredef.id);
        formelement.setAttribute("name", _heteroPredef.name);
        formelement.setAttribute("value", _heteroPredef.value);
        formelement.setAttribute("step", _heteroPredef.step);
        formelement.setAttribute("min", _heteroPredef.min);
        formelement.setAttribute("max", _heteroPredef.max);
        formelement.setAttribute("class", _heteroPredef.class);
        formelement.setAttribute("call", _heteroPredef.call);
        formelement.setAttribute("alt", _heteroPredef.alt);
        formelement.appendChild(legend);
        document.getElementById("inhalt").appendChild(legend);
        legend.appendChild(formelement);
    }
    function handleChange(_event) {
        //console.log(_event);
        berechnePreis(_event);
    }
    function berechnePreis(_event) {
        //console.log("test");
        let anfangsPreis = 0;
        document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].id == "0") { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
                let preis = Number(input[i].value);
                let target = _event.target;
                anfangsPreis += preis;
                //if (input[i].getAttribute("call") == target.getAttribute("call")) {
                //  let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
                //erstellen.innerHTML = `<p> ${input[i].className}</p>`
                //document.getElementById("Übersicht").appendChild(erstellen);
                //}
                let anzahlKugeln = Number(input[i].value);
                if (anzahlKugeln > 0) {
                    let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
                    erstellen.innerHTML = `<p> ${input[i].className}</p>`;
                    document.getElementById("Übersicht").appendChild(erstellen);
                }
            }
            document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
            //for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].alt);
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
})(L07_AssocArraysAndExport || (L07_AssocArraysAndExport = {}));
//# sourceMappingURL=main.js.map