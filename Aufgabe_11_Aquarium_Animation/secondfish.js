var L11;
(function (L11) {
    //import { crc } from "./canvas";
    class SecondFish {
        draw(_x, _y) {
            let secondfish = new Path2D();
            secondfish.rect(_x + 180, _y + 175, 80, 40);
            L11.crc.fillStyle = "red";
            L11.crc.fill(secondfish);
            L11.crc.stroke(secondfish);
            let flosse = new Path2D();
            flosse.moveTo(_x + 230, _y + 200);
            flosse.lineTo(_x + 270, _y + 240);
            flosse.lineTo(_x + 270, _y + 160);
            flosse.closePath();
            L11.crc.fillStyle = "red";
            L11.crc.fill(flosse);
            L11.crc.stroke(flosse);
            let fishmachtauge = new Path2D();
            fishmachtauge.arc(_x + 190, _y + 190, 5, 0, 360);
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
        }
    }
    L11.SecondFish = SecondFish;
})(L11 || (L11 = {}));
//# sourceMappingURL=secondfish.js.map