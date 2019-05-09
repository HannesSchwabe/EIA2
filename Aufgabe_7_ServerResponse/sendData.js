var L07_SendData;
(function (L07_SendData) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address = "https://schwabeh.herokuapp.com?Schokolade=5&Vanille=3";
    function init(_event) {
        let button = document.getElementById("buy");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("zusammenfassung").innerHTML = xhr.response;
        }
    }
})(L07_SendData || (L07_SendData = {}));
//# sourceMappingURL=sendData.js.map