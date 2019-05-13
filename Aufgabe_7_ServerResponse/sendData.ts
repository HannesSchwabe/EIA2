namespace L07_SendData {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100/";
    let address: string = "https://schwabeh.herokuapp.com/";
    let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(_event: Event): void {
        let button: HTMLElement = document.getElementById("buy");
        button.addEventListener("click", handleClickOnButton);
    }


    function handleClickOnButton(_event: Event): void {
        let link: string = "?";
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true && input[i].name != "Zustellung") {
                link += input[i].className + " " + "Ja" + "&";
            }

            if (input[i].value > "0" && input[i].type != "text" && input[i].name != "Zustellung") {
                link += input[i].name + "=" +  " " + input[i].value + "&";
            }

            if (input[i].value != "" && input[i].type == "text" && input[i].name != "Zustellung") {
                link += input[i].name + "=" +  " " + input[i].value + "&";
            }

            if (input[i].id == "radio3" && input[i].checked == true) {
                link += input[i].name + "=" +  " " + "Lieferung" + "&";
            }

            if (input[i].id == "radio4" && input[i].checked == true) {
                link += input[i].name + "=" +  " " + "Abholung" + "&";
            }
            
        }
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + link, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let prodElement = document.createElement('div');
            prodElement.innerHTML = `<div id="anhang">
            </div>`
            document.getElementById("body").appendChild(prodElement);


            let bestellungen: HTMLElement = document.createElement("p");
            let uberschrift: HTMLElement = document.createElement("h2");
            uberschrift.innerHTML = "Wir haben Ihre Bestellung erhalten!";
            document.getElementById("anhang").appendChild(uberschrift);
            bestellungen.innerHTML = `${xhr.response}`;
            document.getElementById("anhang").appendChild(bestellungen);
            console.log(xhr.response);
        }
    }
} 