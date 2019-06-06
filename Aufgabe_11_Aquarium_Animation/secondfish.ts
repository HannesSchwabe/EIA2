namespace L11 {
    //import { crc } from "./canvas";
    export class SecondFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

		draw(_x: number, _y: number): void {
        let secondfish: Path2D = new Path2D();
        secondfish.rect(_x + 180,_y + 175, 80, 40);
        crc.fillStyle = "red";
        crc.fill(secondfish);
        crc.stroke(secondfish);

        let flosse: Path2D = new Path2D();
        flosse.moveTo(_x + 230, _y + 200);
        flosse.lineTo(_x + 270, _y + 240);
        flosse.lineTo(_x + 270, _y + 160);
        flosse.closePath();
        crc.fillStyle = "red";
        crc.fill(flosse);
        crc.stroke(flosse);

        let fishmachtauge: Path2D = new Path2D();
        fishmachtauge.arc(_x + 190, _y + 190, 5, 0, 360);
        crc.fillStyle = "white";
        crc.fill(fishmachtauge);
        crc.stroke(fishmachtauge);
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