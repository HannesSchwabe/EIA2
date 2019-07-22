var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class ThirdFish {
        constructor() {
            this.id = 3;
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * Abschlussaufgabe.canvas.height;
            this.dx = -10;
            this.dy = Math.random() * -1;
        }
        draw(_x, _y) {
            let thirdfish = new Path2D();
            thirdfish.rect(this.x + 10, this.y - 25, 100, 60);
            Abschlussaufgabe.crc.fillStyle = "pink";
            Abschlussaufgabe.crc.fill(thirdfish);
            Abschlussaufgabe.crc.stroke(thirdfish);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 110, this.y + 10);
            flosse.lineTo(this.x + 150, this.y + 70);
            flosse.lineTo(this.x + 150, this.y - 60);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "pink";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(this.x + 30, this.y - 10, 8, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
            Abschlussaufgabe.pfadgottes(thirdfish, _x, _y, this.id);
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
                this.x = 1000;
                this.y = Math.random() * 600;
            }
        }
    }
    Abschlussaufgabe.ThirdFish = ThirdFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=thirdfish.js.map