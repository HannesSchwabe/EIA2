var L10;
(function (L10) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    let x;
    let y;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawbackground(x, y);
        drawsand(x, y);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawfish(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * canvas.width;
            let y = canvas.height;
            drawstone(x, y);
        }
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawbubbles(x, y);
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawplants(x, y);
        }
    }
    function drawbackground(_x, _y) {
        let water = new Path2D();
        water.rect(0, 0, 1000, 1000);
        crc.fillStyle = "blue";
        crc.fill(water);
        crc.stroke(water);
    }
    function drawsand(_x, _y) {
        let sand = new Path2D();
        sand.rect(0, 300, 1000, 500);
        crc.fillStyle = "yellow";
        crc.fill(sand);
        crc.stroke(sand);
    }
    function drawfish(_x, _y) {
        let fish = new Path2D();
        fish.arc(_x + 200, _y + 200, 30, 0, 360);
        crc.fillStyle = "orange";
        crc.fill(fish);
        crc.stroke(fish);
        let fish1 = new Path2D();
        fish1.moveTo(_x + 230, _y + 200);
        fish1.lineTo(_x + 270, _y + 240);
        fish1.lineTo(_x + 270, _y + 160);
        fish1.closePath();
        crc.fillStyle = "orange";
        crc.fill(fish1);
        crc.stroke(fish1);
        let fishmachtauge = new Path2D();
        fishmachtauge.arc(_x + 190, _y + 190, 5, 0, 360);
        crc.fillStyle = "white";
        crc.fill(fishmachtauge);
        crc.stroke(fishmachtauge);
    }
    function drawstone(_x, _y) {
        let stone = new Path2D;
        stone.moveTo(_x, _y);
        stone.bezierCurveTo(_x + 150, _y - 100, _x + 200, _y - 120, _x + 400, _y);
        crc.fillStyle = "grey";
        crc.fill(stone);
        crc.stroke(stone);
    }
    function drawbubbles(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y, 3, 0, 360);
        crc.strokeStyle = "white";
        crc.stroke(bubble);
    }
    function drawplants(_x, _y) {
        let plant = new Path2D;
        plant.moveTo(_x + 100, _y + 400);
        plant.bezierCurveTo(_x + 200, _y + 200, _x + 50, _y + 100, _x + 100, _y + 50);
        crc.fillStyle = "green";
        crc.fill(plant);
        crc.stroke(plant);
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=canvas.js.map