var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    document.addEventListener("DOMContentLoaded", init);
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
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = -8 + -2;
            let dy = Math.random() * -1;
            let fish;
            fish = new Abschlussaufgabe.Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw(x, y);
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
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = -4 + -2;
            let dy = Math.random() * -1;
            let thirdfish;
            thirdfish = new Abschlussaufgabe.ThirdFish();
            thirdfish.x = x;
            thirdfish.y = y;
            thirdfish.dx = dx;
            thirdfish.dy = dy;
            thirdfishArray.push(thirdfish);
            thirdfish.draw(x, y);
        }
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = 15 - 5;
            let dy = Math.random() * -1;
            let fourthfish;
            fourthfish = new Abschlussaufgabe.FourthFish();
            fourthfish.x = x;
            fourthfish.y = y;
            fourthfish.dx = dx;
            fourthfish.dy = dy;
            fourthfishArray.push(fourthfish);
            fourthfish.draw(x, y);
        }
        for (let i = 0; i < 1; i++) {
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            let dx = 25 - 5;
            let dy = Math.random() * -5;
            let zerofish;
            zerofish = new Abschlussaufgabe.ZeroFish();
            zerofish.x = x;
            zerofish.y = y;
            zerofish.dx = dx;
            zerofish.dy = dy;
            zerofishArray.push(zerofish);
            zerofish.draw(x, y);
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
        //Fish
        for (let i = 0; i < 1; i++) {
            let fish = new Abschlussaufgabe.Fish();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            fish.x = x;
            fish.y = y;
            fish.draw(x, y);
            fishArray.push(fish);
            console.log(fish.x);
        }
        //SecondFish
        for (let i = 0; i < 1; i++) {
            let secondfish = new Abschlussaufgabe.SecondFish();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            secondfish.draw(x, y);
            secondfishArray.push(secondfish);
        }
        //ThirdFish
        for (let i = 0; i < 1; i++) {
            let thirdfish = new Abschlussaufgabe.ThirdFish();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            thirdfish.draw(x, y);
            thirdfishArray.push(thirdfish);
        }
        //FourthFish
        for (let i = 0; i < 1; i++) {
            let fourthfish = new Abschlussaufgabe.FourthFish();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            fourthfish.draw(x, y);
            fourthfishArray.push(fourthfish);
        }
        //ZeroFish
        for (let i = 0; i < 1; i++) {
            let zerofish = new Abschlussaufgabe.ZeroFish();
            let x = Math.random() * Abschlussaufgabe.canvas.width;
            let y = Math.random() * Abschlussaufgabe.canvas.height;
            zerofish.draw(x, y);
            zerofishArray.push(zerofish);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Abschlussaufgabe.crc.clearRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
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
            zerofishArray[i].update();
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