interface spielkarte {
    zahl: string;
    farbe: string;
    symbol: string;
}

let karte1: spielkarte = {
    zahl: "7",
    farbe: "schwarz",
    symbol: "pik",
}

let karte2: spielkarte = {
    zahl: "8",
    farbe: "schwarz",
    symbol: "pik",
}

let karte3: spielkarte = {
    zahl: "9",
    farbe: "schwarz",
    symbol: "pik",
}

let karte4: spielkarte = {
    zahl: "10",
    farbe: "schwarz",
    symbol: "pik",
}

let karte5: spielkarte = {
    zahl: "bube",
    farbe: "schwarz",
    symbol: "pik",
}

let karte6: spielkarte = {
    zahl: "dame",
    farbe: "schwarz",
    symbol: "pik",
}

let karte7: spielkarte = {
    zahl: "koenig",
    farbe: "schwarz",
    symbol: "pik",
}

let karte8: spielkarte = {
    zahl: "ass",
    farbe: "schwarz",
    symbol: "pik",
}

let karte9: spielkarte = {
    zahl: "7",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte10: spielkarte = {
    zahl: "8",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte11: spielkarte = {
    zahl: "9",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte12: spielkarte = {
    zahl: "10",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte13: spielkarte = {
    zahl: "bube",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte14: spielkarte = {
    zahl: "dame",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte15: spielkarte = {
    zahl: "koenig",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte16: spielkarte = {
    zahl: "ass",
    farbe: "schwarz",
    symbol: "kreuz",
}

let karte17: spielkarte = {
    zahl: "7",
    farbe: "rot",
    symbol: "herz",
}

let karte18: spielkarte = {
    zahl: "8",
    farbe: "rot",
    symbol: "herz",
}

let karte19: spielkarte = {
    zahl: "9",
    farbe: "rot",
    symbol: "herz",
}

let karte20: spielkarte = {
    zahl: "10",
    farbe: "rot",
    symbol: "herz",
}

let karte21: spielkarte = {
    zahl: "bube",
    farbe: "rot",
    symbol: "herz",
}

let karte22: spielkarte = {
    zahl: "dame",
    farbe: "rot",
    symbol: "herz",
}

let karte23: spielkarte = {
    zahl: "koenig",
    farbe: "rot",
    symbol: "herz",
}

let karte24: spielkarte = {
    zahl: "ass",
    farbe: "rot",
    symbol: "herz",
}

let karte25: spielkarte = {
    zahl: "7",
    farbe: "rot",
    symbol: "herz",
}

let karte26: spielkarte = {
    zahl: "8",
    farbe: "rot",
    symbol: "herz",
}

let karte27: spielkarte = {
    zahl: "9",
    farbe: "rot",
    symbol: "herz",
}

let karte28: spielkarte = {
    zahl: "10",
    farbe: "rot",
    symbol: "herz",
}

let karte29: spielkarte = {
    zahl: "bube",
    farbe: "rot",
    symbol: "herz",
}

let karte30: spielkarte = {
    zahl: "dame",
    farbe: "rot",
    symbol: "herz",
}

let karte31: spielkarte = {
    zahl: "koenig",
    farbe: "rot",
    symbol: "herz",
}

let karte32: spielkarte = {
    zahl: "ass",
    farbe: "rot",
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
    kartenInHandstapel(anzahl);
}

function kartenInHandstapel(_anzahl: number): void {
    for(let i:number = 0; i<=_anzahl; i++) {
        let k: number = Math.floor(Math.random() * ziehstapel.length);
        handstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);
        placeHandstapel(handstapel[k]);
        kartenInSpielstapel();
        placeZiehstapel(ziehstapel[k]);
    }
}

function kartenInSpielstapel() {
    let i: number = Math.floor(Math.random() * ziehstapel.length);
    spielstapel.push(ziehstapel[i]);
    let removed = ziehstapel.splice(i, 1);
    placeSpielstapel(spielstapel[i]);
}

function placeHandstapel (_k: spielkarte) {
    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="handstapel">
    <p> ${_k.farbe} </p>
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </div>`
    document.getElementById("body").appendChild(prodElement);
}

function placeZiehstapel(_k: spielkarte) {
    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="ziehstapel">
    <p> ${_k.farbe} </p>
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </div>`
    document.getElementById("body").appendChild(prodElement);
}

function placeSpielstapel(_k: spielkarte) {
    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="spielstapel">
    <p> ${_k.farbe} </p>
    <p> ${_k.zahl} </p>
    <p> ${_k.symbol} </p>
    </div>`
    document.getElementById("body").appendChild(prodElement);
}
