var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class FourthFish {
        draw(_x, _y) {
            let fourthfish = new Path2D();
            fourthfish.rect(_x, _y - 25, 130, 90);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(fourthfish);
            Abschlussaufgabe.crc.stroke(fourthfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 20, _y + 10);
            flosse.lineTo(_x - 10, _y + 70);
            flosse.lineTo(_x - 10, _y - 60);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 100, _y - 10, 8, 0, 360);
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
    Abschlussaufgabe.FourthFish = FourthFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fourthfish.js.map