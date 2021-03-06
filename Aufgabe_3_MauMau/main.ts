namespace MauMau {



    interface spielkarte {
        zahl: string;
        rot: boolean;
        symbol: string;
    }

    let karte1: spielkarte = {
        zahl: "7",
        rot: false,
        symbol: "pik",
    }

    let karte2: spielkarte = {
        zahl: "8",
        rot: false,
        symbol: "pik",
    }

    let karte3: spielkarte = {
        zahl: "9",
        rot: false,
        symbol: "pik",
    }

    let karte4: spielkarte = {
        zahl: "10",
        rot: false,
        symbol: "pik",
    }

    let karte5: spielkarte = {
        zahl: "bube",
        rot: false,
        symbol: "pik",
    }

    let karte6: spielkarte = {
        zahl: "dame",
        rot: false,
        symbol: "pik",
    }

    let karte7: spielkarte = {
        zahl: "koenig",
        rot: false,
        symbol: "pik",
    }

    let karte8: spielkarte = {
        zahl: "ass",
        rot: false,
        symbol: "pik",
    }

    let karte9: spielkarte = {
        zahl: "7",
        rot: false,
        symbol: "kreuz",
    }

    let karte10: spielkarte = {
        zahl: "8",
        rot: false,
        symbol: "kreuz",
    }

    let karte11: spielkarte = {
        zahl: "9",
        rot: false,
        symbol: "kreuz",
    }

    let karte12: spielkarte = {
        zahl: "10",
        rot: false,
        symbol: "kreuz",
    }

    let karte13: spielkarte = {
        zahl: "bube",
        rot: false,
        symbol: "kreuz",
    }

    let karte14: spielkarte = {
        zahl: "dame",
        rot: false,
        symbol: "kreuz",
    }

    let karte15: spielkarte = {
        zahl: "koenig",
        rot: false,
        symbol: "kreuz",
    }

    let karte16: spielkarte = {
        zahl: "ass",
        rot: false,
        symbol: "kreuz",
    }

    let karte17: spielkarte = {
        zahl: "7",
        rot: true,
        symbol: "herz",
    }

    let karte18: spielkarte = {
        zahl: "8",
        rot: true,
        symbol: "herz",
    }

    let karte19: spielkarte = {
        zahl: "9",
        rot: true,
        symbol: "herz",
    }

    let karte20: spielkarte = {
        zahl: "10",
        rot: true,
        symbol: "herz",
    }

    let karte21: spielkarte = {
        zahl: "bube",
        rot: true,
        symbol: "herz",
    }

    let karte22: spielkarte = {
        zahl: "dame",
        rot: true,
        symbol: "herz",
    }

    let karte23: spielkarte = {
        zahl: "koenig",
        rot: true,
        symbol: "herz",
    }

    let karte24: spielkarte = {
        zahl: "ass",
        rot: true,
        symbol: "herz",
    }

    let karte25: spielkarte = {
        zahl: "7",
        rot: true,
        symbol: "herz",
    }

    let karte26: spielkarte = {
        zahl: "8",
        rot: true,
        symbol: "herz",
    }

    let karte27: spielkarte = {
        zahl: "9",
        rot: true,
        symbol: "herz",
    }

    let karte28: spielkarte = {
        zahl: "10",
        rot: true,
        symbol: "herz",
    }

    let karte29: spielkarte = {
        zahl: "bube",
        rot: true,
        symbol: "herz",
    }

    let karte30: spielkarte = {
        zahl: "dame",
        rot: true,
        symbol: "herz",
    }

    let karte31: spielkarte = {
        zahl: "koenig",
        rot: true,
        symbol: "herz",
    }

    let karte32: spielkarte = {
        zahl: "ass",
        rot: true,
        symbol: "herz",
    }

    let ziehstapel: spielkarte[] = [karte1, karte2, karte3, karte4, karte5, karte6, karte7, karte8, karte9, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];
    let spielstapel: spielkarte[] = [];
    let handstapel: spielkarte[] = [];

    document.addEventListener("DOMContentLoaded", anzahlHandkarten);
    function anzahlHandkarten(): void {
        let base = 10;
        let promptValue: string = prompt('Wie viele Karten?');
        let anzahl = parseInt(promptValue, base);
        pushekartenInHandstapel(anzahl);
    }

    function pushekartenInHandstapel(_anzahl: number): void {
        let k: number = 0;
        for (let i: number = 0; i < _anzahl; i++) {
            k = Math.floor(Math.random() * ziehstapel.length);
            handstapel.push(ziehstapel[k]);
            let removed = ziehstapel.splice(k, 1);
            placeHandstapel(handstapel[i]);
        }
        pushekartenInSpielstapel();
        for (let i: number = 0; i < 32; i++) {
            placeZiehstapel(ziehstapel[i]);
        }
    }

    function pushekartenInSpielstapel(): void {
        let i: number = 0;
        let k: number = Math.floor(Math.random() * ziehstapel.length);
        spielstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);
        placeSpielstapel(spielstapel[i]);

    }

    function placeHandstapel(k: spielkarte): void {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="handstapel">
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </fieldset>`
        document.getElementById("body").appendChild(prodElement);
        console.log(handstapel);
    }

    function placeZiehstapel(k: spielkarte) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="ziehstapel">
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </fieldset>`
        document.getElementById("body").appendChild(prodElement);
        console.log(ziehstapel);
    }

    function placeSpielstapel(_k: spielkarte) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="spielstapel">
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </fieldset>`
        document.getElementById("body").appendChild(prodElement);
        console.log(spielstapel);
    }


    document.addEventListener("DOMContentLoaded", test)

    function test() {
        for (let  i: number = 0; i <= handstapel.length; i++) {
            let HandkartenEvent: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("handstapel")[i];
            HandkartenEvent.addEventListener("click", vonHandstapelInSpielstapel);


            function vonHandstapelInSpielstapel(_event: Event) {
                console.log('Hallo');
                console.log(_event);
                console.log(_event.target);
                _event.target 
            }
        }
    }


}
