var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bubble {
        draw(_x, _y) {
            let bubble = new Path2D();
            bubble.arc(_x, _y, 3, 0, 360);
            Abschlussaufgabe.crc.strokeStyle = "white";
            Abschlussaufgabe.crc.stroke(bubble);
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
                this.x = Math.random() * 1000;
                this.y = 600;
            }
        }
    }
    Abschlussaufgabe.Bubble = Bubble;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bubble.js.map