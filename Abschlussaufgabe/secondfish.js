var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //import { crc } from "./canvas";
    class SecondFish {
        draw(_x, _y) {
            let secondfish = new Path2D();
            secondfish.rect(_x + 10, _y - 25, 80, 40);
            Abschlussaufgabe.crc.fillStyle = "orange";
            Abschlussaufgabe.crc.fill(secondfish);
            Abschlussaufgabe.crc.stroke(secondfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 30, _y);
            flosse.lineTo(_x + 10, _y + 40);
            flosse.lineTo(_x + 10, _y - 40);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "orange";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 75, _y - 10, 5, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
        }
        update() {
            this.move();
            this.draw(this.x, this.y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Abschlussaufgabe.canvas.width || this.x < 0 || this.y > Abschlussaufgabe.canvas.height || this.y < 0) {
                //update();
                console.log("Raus");
                this.x = 0;
                this.y = Math.random() * Abschlussaufgabe.canvas.height;
            }
        }
    }
    Abschlussaufgabe.SecondFish = SecondFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=secondfish.js.map