namespace L11 {

    export class Bubble {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    
        draw(_x: number, _y: number): void {
        let bubble: Path2D = new Path2D();
        bubble.arc(_x, _y, 3, 0, 360);
        crc.strokeStyle = "white";
        crc.stroke(bubble);
        }

        update(): void {
            this.move();
            this.draw(this.x, this.y);
        }
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

    }
}

