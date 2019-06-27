var L12;
(function (L12) {
    //import { crc } from "./canvas";
    class Fish {
        draw(_x, _y) {
            let fish = new Path2D();
            fish.arc(_x, _y, 30, 0, 360);
            L12.crc.fillStyle = "black";
            L12.crc.fill(fish);
            L12.crc.stroke(fish);
            let fish1 = new Path2D();
            fish1.moveTo(_x + 30, _y);
            fish1.lineTo(_x + 70, _y + 40);
            fish1.lineTo(_x + 70, _y - 40);
            fish1.closePath();
            L12.crc.fillStyle = "orange";
            L12.crc.fill(fish1);
            L12.crc.stroke(fish1);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x - 10, _y - 10, 5, 0, 360);
            L12.crc.fillStyle = "white";
            L12.crc.fill(fishmachtauge);
            L12.crc.stroke(fishmachtauge);
        }
        update() {
            this.move();
            this.draw(this.x, this.y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > L12.canvas.width || this.x < 0 || this.y > L12.canvas.height || this.y < 0) {
                //update();
                console.log("Nix mehr Fisch");
                this.x = 1000;
                this.y = Math.random() * L12.canvas.height;
            }
        }
    }
    L12.Fish = Fish;
})(L12 || (L12 = {}));
//# sourceMappingURL=fish.js.map