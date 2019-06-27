var L12;
(function (L12) {
    //import { crc } from "./canvas";
    class SecondFish extends L12.Fish {
        draw(_x, _y) {
            let secondfish = new Path2D();
            secondfish.rect(_x + 10, _y - 25, 80, 40);
            L12.crc.fillStyle = "red";
            L12.crc.fill(secondfish);
            L12.crc.stroke(secondfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 30, _y);
            flosse.lineTo(_x + 10, _y + 40);
            flosse.lineTo(_x + 10, _y - 40);
            flosse.closePath();
            L12.crc.fillStyle = "red";
            L12.crc.fill(flosse);
            L12.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 75, _y - 10, 5, 0, 360);
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
                console.log("Raus");
                this.x = 0;
                this.y = Math.random() * L12.canvas.height;
            }
        }
    }
    L12.SecondFish = SecondFish;
})(L12 || (L12 = {}));
//# sourceMappingURL=secondfish.js.map