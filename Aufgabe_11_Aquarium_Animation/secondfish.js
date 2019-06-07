var L11;
(function (L11) {
    //import { crc } from "./canvas";
    class SecondFish {
        draw(_x, _y) {
            let secondfish = new Path2D();
            secondfish.rect(_x + 10, _y - 25, 80, 40);
            L11.crc.fillStyle = "red";
            L11.crc.fill(secondfish);
            L11.crc.stroke(secondfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 30, _y);
            flosse.lineTo(_x + 10, _y + 40);
            flosse.lineTo(_x + 10, _y - 40);
            flosse.closePath();
            L11.crc.fillStyle = "red";
            L11.crc.fill(flosse);
            L11.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 75, _y - 10, 5, 0, 360);
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
                this.x = 0;
                this.y = Math.random() * L11.canvas.height;
            }
        }
    }
    L11.SecondFish = SecondFish;
})(L11 || (L11 = {}));
//# sourceMappingURL=secondfish.js.map