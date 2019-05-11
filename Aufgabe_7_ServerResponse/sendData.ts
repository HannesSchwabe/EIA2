namespace L07_SendData {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address: string = "https://schwabeh.herokuapp.com?";
    let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(_event: Event): void {
        let button: HTMLElement = document.getElementById("buy");
        button.addEventListener("click", handleClickOnButton);
    }


    function handleClickOnButton(_event: Event): void {
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                address += input[i].className;  
            }

            else if (input[i].value > "0") {
                address += input[i].className += input[i].value; 
            }
        }
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("zusammenfassung").innerHTML= xhr.response;
        }
    }
} 