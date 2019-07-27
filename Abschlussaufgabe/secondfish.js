var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //import { crc } from "./canvas";
    class SecondFish {
        constructor() {
            this.id = 2;
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * Abschlussaufgabe.canvas.height;
            this.dx = 16 - 5;
            this.dy = Math.random() * -1;
        }
        draw(_x, _y) {
            let secondfish = new Path2D();
            secondfish.rect(this.x + 10, this.y - 25, 80, 40);
            Abschlussaufgabe.crc.fillStyle = "orange";
            Abschlussaufgabe.crc.fill(secondfish);
            Abschlussaufgabe.crc.stroke(secondfish);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 30, this.y);
            flosse.lineTo(this.x + 10, this.y + 40);
            flosse.lineTo(this.x + 10, this.y - 40);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "orange";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(this.x + 75, this.y - 10, 5, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
            Abschlussaufgabe.pfadgottes(secondfish, _x, _y, this.id);
        }
        update(_x, _y) {
            this.move();
            this.draw(_x, _y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Abschlussaufgabe.canvas.width || this.x < 0 || this.y > Abschlussaufgabe.canvas.height || this.y < 0) {
                //update();
                //console.log("Raus");
                this.x = 0;
                this.y = Math.random() * Abschlussaufgabe.canvas.height;
            }
        }
    }
    Abschlussaufgabe.SecondFish = SecondFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=secondfish.js.map