var L07_SendData;
(function (L07_SendData) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100/";
    let address = "https://schwabeh.herokuapp.com/";
    let input = document.getElementsByTagName("input");
    function init(_event) {
        let button = document.getElementById("buy");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        let link = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true && input[i].name != "Zustellung") {
                link += input[i].className + " " + "Ja" + "&";
            }
            if (input[i].value > "0" && input[i].type != "text" && input[i].name != "Zustellung") {
                link += input[i].name + "=" + " " + input[i].value + "&";
            }
            if (input[i].value != "" && input[i].type == "text" && input[i].name != "Zustellung") {
                link += input[i].name + "=" + " " + input[i].value + "&";
            }
            if (input[i].id == "radio3" && input[i].checked == true) {
                link += input[i].name + "=" + " " + "Lieferung" + "&";
            }
            if (input[i].id == "radio4" && input[i].checked == true) {
                link += input[i].name + "=" + " " + "Abholung" + "&";
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + link, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let prodElement = document.createElement('div');
            prodElement.innerHTML = `<div id="anhang">
            </div>`;
            document.getElementById("body").appendChild(prodElement);
            let bestellungen = document.createElement("p");
            let uberschrift = document.createElement("h2");
            uberschrift.innerHTML = "Wir haben Ihre Bestellung erhalten!";
            document.getElementById("anhang").appendChild(uberschrift);
            bestellungen.innerHTML = `${xhr.response}`;
            document.getElementById("anhang").appendChild(bestellungen);
            console.log(xhr.response);
        }
    }
})(L07_SendData || (L07_SendData = {}));
//# sourceMappingURL=sendData.js.map