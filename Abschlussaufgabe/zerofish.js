var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class ZeroFish {
        constructor() {
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * Abschlussaufgabe.canvas.height;
            this.dx = 25 - 5;
            this.dy = Math.random() * -5;
        }
        draw(_x, _y) {
            let zerofish = new Path2D();
            zerofish.rect(this.x, this.y - 25, 30, 15);
            zerofish.closePath();
            Abschlussaufgabe.crc.fillStyle = "grey";
            Abschlussaufgabe.crc.fill(zerofish);
            Abschlussaufgabe.crc.stroke(zerofish);
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y - 20);
            flosse.lineTo(this.x - 25, this.y - 5);
            flosse.lineTo(this.x - 25, this.y - 35);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "grey";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(this.x + 23, this.y - 20, 3, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
            Abschlussaufgabe.pfadgottes(zerofish, _x, _y);
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
                this.y = Math.random() * 600;
            }
        }
    }
    Abschlussaufgabe.ZeroFish = ZeroFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=zerofish.js.map