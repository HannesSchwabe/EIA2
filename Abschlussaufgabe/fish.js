var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //import { crc } from "./canvas";
    class Fish {
        draw(_x, _y) {
            let fish = new Path2D();
            fish.arc(_x, _y, 15, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "red";
            Abschlussaufgabe.crc.fill(fish);
            Abschlussaufgabe.crc.stroke(fish);
            let fish1 = new Path2D();
            fish1.moveTo(_x + 14, _y);
            fish1.lineTo(_x + 24, _y + 40);
            fish1.lineTo(_x + 24, _y - 40);
            fish1.closePath();
            Abschlussaufgabe.crc.fillStyle = "red";
            Abschlussaufgabe.crc.fill(fish1);
            Abschlussaufgabe.crc.stroke(fish1);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x - 5, _y - 5, 4, 0, 360);
            Abschlussaufgabe.crc.fillStyle = "white";
            Abschlussaufgabe.crc.fill(fishmachtauge);
            Abschlussaufgabe.crc.stroke(fishmachtauge);
        }
        updatee() {
            this.move();
            this.draw(this.x, this.y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Abschlussaufgabe.canvas.width || this.x < 0 || this.y > Abschlussaufgabe.canvas.height || this.y < 0) {
                //update();
                //console.log("Nix mehr Fisch");
                this.x = 1000;
                this.y = Math.random() * Abschlussaufgabe.canvas.height;
            }
        }
    }
    Abschlussaufgabe.Fish = Fish;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fish.js.map