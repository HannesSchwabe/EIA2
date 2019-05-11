var L07_SendData;
(function (L07_SendData) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address = "https://schwabeh.herokuapp.com?";
    let input = document.getElementsByTagName("input");
    function init(_event) {
        let button = document.getElementById("buy");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                address += input[i].className;
            }
            else if (input[i].value > "0") {
                address += input[i].className += input[i].value;
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("anhang").innerHTML = xhr.response;
        }
    }
})(L07_SendData || (L07_SendData = {}));
//# sourceMappingURL=sendData.js.map