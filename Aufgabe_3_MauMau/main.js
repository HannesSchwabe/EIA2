var MauMau;
(function (MauMau) {
    let karte1 = {
        zahl: "7",
        rot: false,
        symbol: "pik",
    };
    let karte2 = {
        zahl: "8",
        rot: false,
        symbol: "pik",
    };
    let karte3 = {
        zahl: "9",
        rot: false,
        symbol: "pik",
    };
    let karte4 = {
        zahl: "10",
        rot: false,
        symbol: "pik",
    };
    let karte5 = {
        zahl: "bube",
        rot: false,
        symbol: "pik",
    };
    let karte6 = {
        zahl: "dame",
        rot: false,
        symbol: "pik",
    };
    let karte7 = {
        zahl: "koenig",
        rot: false,
        symbol: "pik",
    };
    let karte8 = {
        zahl: "ass",
        rot: false,
        symbol: "pik",
    };
    let karte9 = {
        zahl: "7",
        rot: false,
        symbol: "kreuz",
    };
    let karte10 = {
        zahl: "8",
        rot: false,
        symbol: "kreuz",
    };
    let karte11 = {
        zahl: "9",
        rot: false,
        symbol: "kreuz",
    };
    let karte12 = {
        zahl: "10",
        rot: false,
        symbol: "kreuz",
    };
    let karte13 = {
        zahl: "bube",
        rot: false,
        symbol: "kreuz",
    };
    let karte14 = {
        zahl: "dame",
        rot: false,
        symbol: "kreuz",
    };
    let karte15 = {
        zahl: "koenig",
        rot: false,
        symbol: "kreuz",
    };
    let karte16 = {
        zahl: "ass",
        rot: false,
        symbol: "kreuz",
    };
    let karte17 = {
        zahl: "7",
        rot: true,
        symbol: "herz",
    };
    let karte18 = {
        zahl: "8",
        rot: true,
        symbol: "herz",
    };
    let karte19 = {
        zahl: "9",
        rot: true,
        symbol: "herz",
    };
    let karte20 = {
        zahl: "10",
        rot: true,
        symbol: "herz",
    };
    let karte21 = {
        zahl: "bube",
        rot: true,
        symbol: "herz",
    };
    let karte22 = {
        zahl: "dame",
        rot: true,
        symbol: "herz",
    };
    let karte23 = {
        zahl: "koenig",
        rot: true,
        symbol: "herz",
    };
    let karte24 = {
        zahl: "ass",
        rot: true,
        symbol: "herz",
    };
    let karte25 = {
        zahl: "7",
        rot: true,
        symbol: "herz",
    };
    let karte26 = {
        zahl: "8",
        rot: true,
        symbol: "herz",
    };
    let karte27 = {
        zahl: "9",
        rot: true,
        symbol: "herz",
    };
    let karte28 = {
        zahl: "10",
        rot: true,
        symbol: "herz",
    };
    let karte29 = {
        zahl: "bube",
        rot: true,
        symbol: "herz",
    };
    let karte30 = {
        zahl: "dame",
        rot: true,
        symbol: "herz",
    };
    let karte31 = {
        zahl: "koenig",
        rot: true,
        symbol: "herz",
    };
    let karte32 = {
        zahl: "ass",
        rot: true,
        symbol: "herz",
    };
    let ziehstapel = [karte1, karte2, karte3, karte4, karte5, karte6, karte7, karte8, karte9, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];
    let spielstapel = [];
    let handstapel = [];
    document.addEventListener("DOMContentLoaded", anzahlHandkarten);
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
            placeHandstapel(handstapel[i]);
        }
        pushekartenInSpielstapel();
        for (let i = 0; i < 32; i++) {
            placeZiehstapel(ziehstapel[i]);
        }
    }
    function pushekartenInSpielstapel() {
        let i = 0;
        let k = Math.floor(Math.random() * ziehstapel.length);
        spielstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);
        placeSpielstapel(spielstapel[i]);
    }
    function placeHandstapel(k) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<div class="handstapel">
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </div>`;
        document.getElementById("body").appendChild(prodElement);
        console.log(handstapel);
    }
    function placeZiehstapel(k) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<div class="ziehstapel">
    <p> ${k.zahl} </p>
    <p> ${k.symbol} </p>
    </div>`;
        document.getElementById("body").appendChild(prodElement);
        console.log(ziehstapel);
    }
    function placeSpielstapel(_k) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<div class="spielstapel">
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </div>`;
        document.getElementById("body").appendChild(prodElement);
        console.log(spielstapel);
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=main.js.map