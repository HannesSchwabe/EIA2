var L12;
(function (L12) {
    class Bubble extends L12.Fish {
        draw(_x, _y) {
            let bubble = new Path2D();
            bubble.arc(_x, _y, 3, 0, 360);
            L12.crc.strokeStyle = "white";
            L12.crc.stroke(bubble);
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
                this.x = Math.random() * 1000;
                this.y = 600;
            }
        }
    }
    L12.Bubble = Bubble;
})(L12 || (L12 = {}));
//# sourceMappingURL=bubble.js.map