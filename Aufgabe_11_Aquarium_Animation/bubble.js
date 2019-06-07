var L11;
(function (L11) {
    class Bubble {
        draw(_x, _y) {
            let bubble = new Path2D();
            bubble.arc(_x, _y, 3, 0, 360);
            L11.crc.strokeStyle = "white";
            L11.crc.stroke(bubble);
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
                this.x = Math.random() * 1000;
                this.y = 600;
            }
        }
    }
    L11.Bubble = Bubble;
})(L11 || (L11 = {}));
//# sourceMappingURL=bubble.js.map