var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //import { crc } from "./canvas";
    class Fish {
        constructor() {
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * Abschlussaufgabe.canvas.height;
            this.dx = -8 + -2;
            this.dy = Math.random() * -1;
            this.a = 1;
        }
        draw() {
            let fish = new Path2D();
            fish.arc(this.x, this.y, 15 * this.a, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "red";
            Abschlussaufgabe.crc.fill(fish);
            Abschlussaufgabe.crc.stroke(fish);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(this.x - 5, this.y - 5, 4 * this.a, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
        }
        update(_x, _y, _s) {
            this.move(_x, _y, _s);
            this.draw();
        }
        move(_x, _y, _s) {
            this.x += _x;
            this.y += _y;
            this.a = this.a * _s;
            if (this.x > Abschlussaufgabe.canvas.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = 1000;
            }
            if (this.y > Abschlussaufgabe.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }
    Abschlussaufgabe.Fish = Fish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fish.js.map