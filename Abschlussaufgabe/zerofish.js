var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class ZeroFish {
        draw(_x, _y) {
            let zerofish = new Path2D();
            zerofish.rect(_x, _y - 25, 30, 15);
            Abschlussaufgabe.crc.fillStyle = "grey";
            Abschlussaufgabe.crc.fill(zerofish);
            Abschlussaufgabe.crc.stroke(zerofish);
            let flosse = new Path2D();
            flosse.moveTo(_x, _y - 20);
            flosse.lineTo(_x - 25, _y - 5);
            flosse.lineTo(_x - 25, _y - 35);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "grey";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 23, _y - 20, 3, 0, 360);
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
                this.y = Math.random() * 600;
            }
        }
    }
    Abschlussaufgabe.ZeroFish = ZeroFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=zerofish.js.map