var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", steuerung);
    let x;
    let y;
    let fishArray = [];
    let bubbleArray = [];
    let secondfishArray = [];
    let thirdfishArray = [];
    let fourthfishArray = [];
    let zerofishArray = [];
    let fps = 30;
    let imageData;
    function steuerung(_event) {
        if (_event.keyCode == 37) {
            fishArray[0].update(-20, 0, 1);
        }
        if (_event.keyCode == 38) {
            fishArray[0].update(0, -20, 1);
        }
        if (_event.keyCode == 39) {
            fishArray[0].update(20, 0, 1);
        }
        if (_event.keyCode == 40) {
            fishArray[0].update(0, 20, 1);
        }
    }
    function pfadgottes(pfad, _x, _y) {
        if (Abschlussaufgabe.crc.isPointInPath(pfad, _x, _y) == true) {
            console.log("RRRRaus du dumme Sau, ich schwör ich fick disch amenakoi!!!");
            fishArray[0].update(0, 0, 2);
        }
    }
    Abschlussaufgabe.pfadgottes = pfadgottes;
    function init() {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc = Abschlussaufgabe.canvas.getContext("2d");
        drawbackground(x, y);
        drawsand(x, y);
        //Stone
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width - 200;
            let y = Abschlussaufgabe.canvas.height - 50;
            drawstone(x, y);
        }
        //Plant
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width - 80;
            let y = Abschlussaufgabe.canvas.height - 450;
            drawplants(x, y);
        }
        //Bubble
        for (let i = 0; i < 100; i++) {
            let bubble = new Abschlussaufgabe.Bubble();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            //bubble.draw(x, y);
            bubbleArray.push(bubble);
        }
        imageData = Abschlussaufgabe.crc.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        //STEUERUNGSFISCH
        for (let i = 0; i < 1; i++) {
            let fish = new Abschlussaufgabe.Fish();
            fishArray.push(fish);
            fish.draw();
        }
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = 11 - 5;
            let dy = Math.random() * -1;
            let secondfish;
            secondfish = new Abschlussaufgabe.SecondFish();
            secondfish.x = x;
            secondfish.y = y;
            secondfish.dx = dx;
            secondfish.dy = dy;
            secondfishArray.push(secondfish);
            secondfish.draw(x, y);
        }
        for (let i = 0; i < 1; i++) {
            let thirdfish = new Abschlussaufgabe.ThirdFish();
            thirdfishArray.push(thirdfish);
            thirdfish.draw(x, y);
        }
        for (let i = 0; i < 1; i++) {
            let fourthfish = new Abschlussaufgabe.FourthFish();
            fourthfishArray.push(fourthfish);
            fourthfish.draw(x, y);
        }
        for (let i = 0; i < 1; i++) {
            let zerofish = new Abschlussaufgabe.ZeroFish();
            zerofishArray.push(zerofish);
            zerofish.draw(fishArray[0].x, fishArray[0].y);
        }
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = 0;
            let dy = -Math.random();
            let bubble;
            bubble = new Abschlussaufgabe.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            //bubble.draw(x, y);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Abschlussaufgabe.crc.clearRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update(0, 0, 1);
        }
        for (let i = 0; i < secondfishArray.length; i++) {
            secondfishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < thirdfishArray.length; i++) {
            thirdfishArray[i].update();
        }
        for (let i = 0; i < fourthfishArray.length; i++) {
            fourthfishArray[i].update();
        }
        for (let i = 0; i < zerofishArray.length; i++) {
            zerofishArray[i].update(fishArray[0].x, fishArray[0].y);
        }
    }
    //Water
    function drawbackground(_x, _y) {
        let water = new Path2D();
        water.rect(0, 0, 1000, 1000);
        Abschlussaufgabe.crc.fillStyle = "blue";
        Abschlussaufgabe.crc.fill(water);
        Abschlussaufgabe.crc.stroke(water);
    }
    //Sand
    function drawsand(_x, _y) {
        let sand = new Path2D();
        sand.rect(0, 450, 1000, 300);
        Abschlussaufgabe.crc.fillStyle = "yellow";
        Abschlussaufgabe.crc.fill(sand);
        Abschlussaufgabe.crc.stroke(sand);
    }
    function drawstone(_x, _y) {
        let stone = new Path2D;
        stone.moveTo(_x, _y);
        stone.bezierCurveTo(_x + 150, _y - 100, _x + 200, _y - 120, _x + 400, _y);
        Abschlussaufgabe.crc.fillStyle = "grey";
        Abschlussaufgabe.crc.fill(stone);
        Abschlussaufgabe.crc.stroke(stone);
    }
    function drawplants(_x, _y) {
        let plant = new Path2D;
        plant.moveTo(_x + 100, _y + 400);
        plant.bezierCurveTo(_x + 200, _y + 200, _x + 50, _y + 100, _x + 100, _y + 50);
        Abschlussaufgabe.crc.fillStyle = "green";
        Abschlussaufgabe.crc.fill(plant);
        Abschlussaufgabe.crc.stroke(plant);
    }
    //fish.x > canvas.width && fish.x <= 0 && fish.y > canvas.height && fish.y <= 0
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=canvas.js.map