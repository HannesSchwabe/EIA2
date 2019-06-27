var L12;
(function (L12) {
    document.addEventListener("DOMContentLoaded", init);
    let x;
    let y;
    let fishArray = [];
    let bubbleArray = [];
    let secondfishArray = [];
    let fps = 30;
    let imageData;
    function init() {
        L12.canvas = document.getElementsByTagName("canvas")[0];
        L12.crc = L12.canvas.getContext("2d");
        drawbackground(x, y);
        drawsand(x, y);
        //Stone
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * L12.canvas.width - 200;
            let y = L12.canvas.height - 50;
            drawstone(x, y);
        }
        //Plant
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * L12.canvas.width - 80;
            let y = L12.canvas.height - 450;
            drawplants(x, y);
        }
        //Bubble
        for (let i = 0; i < 100; i++) {
            let bubble = new L12.Bubble();
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            //bubble.draw(x, y);
            bubbleArray.push(bubble);
        }
        imageData = L12.crc.getImageData(0, 0, L12.canvas.width, L12.canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            let dx = -4 + -2;
            let dy = Math.random() * -1;
            let fish;
            fish = new L12.Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw(x, y);
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            let dx = 8 - 5;
            let dy = Math.random() * -1;
            let secondfish;
            secondfish = new L12.SecondFish();
            secondfish.x = x;
            secondfish.y = y;
            secondfish.dx = dx;
            secondfish.dy = dy;
            secondfishArray.push(secondfish);
            secondfish.draw(x, y);
        }
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            let dx = 0;
            let dy = -Math.random();
            let bubble;
            bubble = new L12.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            //bubble.draw(x, y);
        }
        update();
        //Fish
        for (let i = 0; i < 10; i++) {
            let fish = new L12.Fish();
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            fish.x = x;
            fish.y = y;
            fish.draw(x, y);
            fishArray.push(fish);
            console.log(fish.x);
        }
        //SecondFish
        for (let i = 0; i < 5; i++) {
            let secondfish = new L12.SecondFish();
            let x = Math.random() * L12.canvas.width;
            let y = Math.random() * L12.canvas.height;
            secondfish.draw(x, y);
            secondfishArray.push(secondfish);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L12.crc.clearRect(0, 0, L12.canvas.width, L12.canvas.height);
        L12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < secondfishArray.length; i++) {
            secondfishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
    }
    //Water
    function drawbackground(_x, _y) {
        let water = new Path2D();
        water.rect(0, 0, 1000, 1000);
        L12.crc.fillStyle = "blue";
        L12.crc.fill(water);
        L12.crc.stroke(water);
    }
    //Sand
    function drawsand(_x, _y) {
        let sand = new Path2D();
        sand.rect(0, 450, 1000, 300);
        L12.crc.fillStyle = "yellow";
        L12.crc.fill(sand);
        L12.crc.stroke(sand);
    }
    function drawstone(_x, _y) {
        let stone = new Path2D;
        stone.moveTo(_x, _y);
        stone.bezierCurveTo(_x + 150, _y - 100, _x + 200, _y - 120, _x + 400, _y);
        L12.crc.fillStyle = "grey";
        L12.crc.fill(stone);
        L12.crc.stroke(stone);
    }
    function drawplants(_x, _y) {
        let plant = new Path2D;
        plant.moveTo(_x + 100, _y + 400);
        plant.bezierCurveTo(_x + 200, _y + 200, _x + 50, _y + 100, _x + 100, _y + 50);
        L12.crc.fillStyle = "green";
        L12.crc.fill(plant);
        L12.crc.stroke(plant);
    }
    //fish.x > canvas.width && fish.x <= 0 && fish.y > canvas.height && fish.y <= 0
})(L12 || (L12 = {}));
//# sourceMappingURL=canvas.js.map