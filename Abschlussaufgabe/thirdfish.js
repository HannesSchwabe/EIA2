var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class ThirdFish {
        draw(_x, _y) {
            let thirdfish = new Path2D();
            thirdfish.rect(_x + 10, _y - 25, 100, 60);
            Abschlussaufgabe.crc.fillStyle = "pink";
            Abschlussaufgabe.crc.fill(thirdfish);
            Abschlussaufgabe.crc.stroke(thirdfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 110, _y + 10);
            flosse.lineTo(_x + 150, _y + 70);
            flosse.lineTo(_x + 150, _y - 60);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "pink";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 30, _y - 10, 8, 0, 360);
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
                //console.log("Raus");
                this.x = 1000;
                this.y = Math.random() * 600;
            }
        }
    }
    Abschlussaufgabe.ThirdFish = ThirdFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=thirdfish.js.map