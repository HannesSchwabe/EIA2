var L11;
(function (L11) {
    //import { crc } from "./canvas";
    class Fish {
        draw(_x, _y) {
            let fish = new Path2D();
            fish.arc(_x, _y, 30, 0, 360);
            L11.crc.fillStyle = "black";
            L11.crc.fill(fish);
            L11.crc.stroke(fish);
            let fish1 = new Path2D();
            fish1.moveTo(_x + 30, _y);
            fish1.lineTo(_x + 70, _y + 40);
            fish1.lineTo(_x + 70, _y - 40);
            fish1.closePath();
            L11.crc.fillStyle = "orange";
            L11.crc.fill(fish1);
            L11.crc.stroke(fish1);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x - 10, _y - 10, 5, 0, 360);
            L11.crc.fillStyle = "white";
            L11.crc.fill(fishmachtauge);
            L11.crc.stroke(fishmachtauge);
        }
        update() {
            this.move();
            this.draw(this.x, this.y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > L11.canvas.width || this.x < 0 || this.y > L11.canvas.height || this.y < 0) {
                //update();
                console.log("Raus");
                this.x = 1000;
                this.y = Math.random() * L11.canvas.height;
            }
        }
    }
    L11.Fish = Fish;
})(L11 || (L11 = {}));
//# sourceMappingURL=fish.js.map