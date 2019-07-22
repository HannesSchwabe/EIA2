var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class FourthFish {
        constructor() {
            this.id = 4;
            this.x = Math.random() * Abschlussaufgabe.canvas.width;
            this.y = Math.random() * Abschlussaufgabe.canvas.height;
            this.dx = 15 - 5;
            this.dy = Math.random() * -1;
        }
        draw(_x, _y) {
            let fourthfish = new Path2D();
            fourthfish.rect(this.x, this.y - 25, 130, 90);
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(fourthfish);
            Abschlussaufgabe.crc.stroke(fourthfish);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 10);
            flosse.lineTo(this.x - 10, this.y + 70);
            flosse.lineTo(this.x - 10, this.y - 60);
            flosse.closePath();
            Abschlussaufgabe.crc.fillStyle = "black";
            Abschlussaufgabe.crc.fill(flosse);
            Abschlussaufgabe.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(this.x + 100, this.y - 10, 8, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
            Abschlussaufgabe.pfadgottes(fourthfish, _x, _y, this.id);
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
    Abschlussaufgabe.FourthFish = FourthFish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fourthfish.js.map