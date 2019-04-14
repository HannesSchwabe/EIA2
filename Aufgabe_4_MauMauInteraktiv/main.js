var MauMau;
(function (MauMau) {
    let karte1 = {
        zahl: "7",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte2 = {
        zahl: "8",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte3 = {
        zahl: "9",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte4 = {
        zahl: "10",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte5 = {
        zahl: "bube",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte6 = {
        zahl: "dame",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte7 = {
        zahl: "koenig",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte8 = {
        zahl: "ass",
        rot: false,
        symbol: "pik",
        value: 3,
    };
    let karte9 = {
        zahl: "7",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte10 = {
        zahl: "8",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte11 = {
        zahl: "9",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte12 = {
        zahl: "10",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte13 = {
        zahl: "bube",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte14 = {
        zahl: "dame",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte15 = {
        zahl: "koenig",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte16 = {
        zahl: "ass",
        rot: false,
        symbol: "kreuz",
        value: 4,
    };
    let karte17 = {
        zahl: "7",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte18 = {
        zahl: "8",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte19 = {
        zahl: "9",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte20 = {
        zahl: "10",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte21 = {
        zahl: "bube",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte22 = {
        zahl: "dame",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte23 = {
        zahl: "koenig",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte24 = {
        zahl: "ass",
        rot: true,
        symbol: "karo",
        value: 2,
    };
    let karte25 = {
        zahl: "7",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte26 = {
        zahl: "8",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte27 = {
        zahl: "9",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte28 = {
        zahl: "10",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte29 = {
        zahl: "bube",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte30 = {
        zahl: "dame",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte31 = {
        zahl: "koenig",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let karte32 = {
        zahl: "ass",
        rot: true,
        symbol: "herz",
        value: 1,
    };
    let ziehstapel = [karte1, karte2, karte3, karte4, karte5, karte6, karte7, karte8, karte9, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];
    let spielstapel = [];
    let handstapel = [];
    document.addEventListener("DOMContentLoaded", anzahlHandkarten);
    document.addEventListener("DOMContentLoaded", test);
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", vonZiehstapelInHandstapelKeyDown);
    document.addEventListener("DOMContentLoaded", sortCard);
    function anzahlHandkarten() {
        let base = 10;
        let promptValue = prompt('Wie viele Karten?');
        let anzahl = parseInt(promptValue, base);
        pushekartenInHandstapel(anzahl);
    }
    function pushekartenInHandstapel(_anzahl) {
        let k = 0;
        for (let i = 0; i < _anzahl; i++) {
            k = Math.floor(Math.random() * ziehstapel.length);
            handstapel.push(ziehstapel[k]);
            let removed = ziehstapel.splice(k, 1);
            placeHandstapel(handstapel[i], i);
        }
        pushekartenInSpielstapel();
        for (let i = 0; i < ziehstapel.length; i++) {
            placeZiehstapel(ziehstapel[i], i);
        }
    }
    function pushekartenInSpielstapel() {
        let i = 0;
        let k = Math.floor(Math.random() * ziehstapel.length);
        spielstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);
        placeSpielstapel(spielstapel[i]);
    }
    function placeHandstapel(k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="handstapel" id=${_i}>
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </fieldset>`;
        document.getElementById("kastenhandstapel").appendChild(prodElement);
    }
    function placeZiehstapel(k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="ziehstapel" id=${_i}>
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </fieldset>`;
        document.getElementById("kastenziehstapel").appendChild(prodElement);
    }
    function placeSpielstapel(_k) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="spielstapel">
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </fieldset>`;
        document.getElementById("kastenspielstapel").appendChild(prodElement);
    }
    //Karten von Handstapel in Spielstapel:
    function test() {
        for (let i = 0; i <= handstapel.length; i++) {
            let handkartenEvent = document.getElementsByClassName("handstapel")[i];
            handkartenEvent.addEventListener("click", vonHandstapelInSpielstapel);
        }
    }
    function vonHandstapelInSpielstapel(_event) {
        console.log(_event);
        let clickedCard = _event.target;
        let cardId = clickedCard.id;
        let cardIdNumber = Number(cardId);
        let karteInSpielstapel = handstapel[cardIdNumber];
        spielstapel.push(handstapel[cardIdNumber]);
        handstapel.splice(cardIdNumber, 1);
        placeSpielstapel(karteInSpielstapel);
        console.log(spielstapel);
        console.log(handstapel);
        placeHandstapelLeeren(cardIdNumber);
        test();
    }
    function placeHandstapelLeeren(_cardIdNumber) {
        document.getElementById("kastenhandstapel").innerHTML = "";
        for (let i = 0; i < handstapel.length; i++) {
            placeHandstapelAktualisiert(handstapel[i], i);
        }
        //for (let i: number = 0; i <= _cardIdNumber; i++) {
        //    document.getElementById("kastenhandstapel").innerHTML = handstapel[i];
        //}
    }
    function placeHandstapelAktualisiert(k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="handstapel" id=${_i}>
        <p> ${k.zahl} </p>
        <p> ${k.symbol} </p>
        </fieldset>`;
        document.getElementById("kastenhandstapel").appendChild(prodElement);
    }
    //Karten von Ziehstapel in Handstapel:
    //Mit Klick auf Ziehstapel:
    function init() {
        for (let i = 0; i <= ziehstapel.length; i++) {
            let handkartenEvent = document.getElementsByClassName("ziehstapel")[i];
            handkartenEvent.addEventListener("click", vonZiehstapelInHandstapel);
        }
    }
    function vonZiehstapelInHandstapel() {
        let k = Math.floor(Math.random() * ziehstapel.length);
        handstapel.push(ziehstapel[k]);
        ziehstapel.splice(k, 1);
        document.getElementById("kastenhandstapel").innerHTML = "";
        for (let i = 0; i < handstapel.length; i++) {
            placeHandstapelAktualisiertZwei(handstapel[i], i);
        }
        test();
    }
    function placeHandstapelAktualisiertZwei(k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="handstapel" id=${_i}>
        <p> ${k.zahl} </p>
        <p> ${k.symbol} </p>
        </fieldset>`;
        document.getElementById("kastenhandstapel").appendChild(prodElement);
    }
    //Mit Leertaste:
    function vonZiehstapelInHandstapelKeyDown(_event) {
        if (_event.keyCode == 32) {
            let k = Math.floor(Math.random() * ziehstapel.length);
            handstapel.push(ziehstapel[k]);
            ziehstapel.splice(k, 1);
            document.getElementById("kastenhandstapel").innerHTML = "";
            for (let i = 0; i < handstapel.length; i++) {
                placeHandstapelAktualisiertKeyDown(handstapel[i], i);
            }
            test();
        }
    }
    function placeHandstapelAktualisiertKeyDown(k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="handstapel" id=${_i}>
        <p> ${k.zahl} </p>
        <p> ${k.symbol} </p>
        </fieldset>`;
        document.getElementById("kastenhandstapel").appendChild(prodElement);
    }
    //Handstapel sortieren...
    function sortCard() {
        handstapel.sort(sortiereKarten);
        document.getElementById("handstapel").innerHTML = "";
        for (let i = 0; i < handstapel.length; i++) {
            erstelleHandkartenNeu(handstapel[i], i);
        }
        //init();
    }
    function sortiereKarten(_a, _b) {
        if (_a.value < _b.value) {
            return -1;
        }
        if (_a.value > _b.value) {
            return 1;
        }
        return 0;
    }
    function erstelleHandkartenNeu(_c, _i) {
        let prodCard = document.createElement("div");
        prodCard.innerHTML = `<fieldset class="handstapel id="${_i}">
        <p> ${_c.zahl}</p>
        <p> ${_c.symbol}</p>
        </fieldset>`;
        document.getElementById("kastenhandstapel").appendChild(prodCard);
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=main.js.map