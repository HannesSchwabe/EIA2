namespace L12 {
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let x: number;
    let y: number;

    let fishArray: Fish[] = [];
    let bubbleArray: Bubble[] = [];
    let secondfishArray: SecondFish[] = []; 

    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawbackground(x, y);
        drawsand(x, y);
        //Stone
        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * canvas.width - 200;
            let y: number = canvas.height - 50;
            drawstone(x, y);
        }

        //Plant
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * canvas.width - 80;
            let y: number = canvas.height - 450;
            drawplants(x, y);
        }

        //Bubble
        for (let i: number = 0; i < 100; i++) {
            let bubble: Bubble = new Bubble();
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            //bubble.draw(x, y);
            bubbleArray.push(bubble);
        }

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = -4 + -2;
            let dy: number = Math.random() * - 1;
            let fish: Fish;
            fish = new Fish();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw(x, y);
        }

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = 8 - 5;
            let dy: number = Math.random() * -1;
            let secondfish: SecondFish;
            secondfish = new SecondFish();
            secondfish.x = x;
            secondfish.y = y;
            secondfish.dx = dx;
            secondfish.dy = dy;
            secondfishArray.push(secondfish);
            secondfish.draw(x, y);
        }

        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = 0;
            let dy: number = -Math.random();
            let bubble: Bubble;
            bubble = new Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            //bubble.draw(x, y);
        }

        update();

        //Fish
        for (let i: number = 0; i < 10; i++) {
            let fish: Fish = new Fish();
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            fish.x = x;
            fish.y = y;
            fish.draw(x, y);
            fishArray.push(fish);
            console.log(fish.x);
        }

        //SecondFish
        for (let i: number = 0; i < 5; i++) {
            let secondfish: SecondFish = new SecondFish();
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            secondfish.draw(x, y);
            secondfishArray.push(secondfish);
        }


    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }


        for (let i: number = 0; i < secondfishArray.length; i++) {
            secondfishArray[i].update();
        }

        for (let i: number = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
    }

    //Water
    function drawbackground(_x: number, _y: number): void {
        let water: Path2D = new Path2D();
        water.rect(0, 0, 1000, 1000);
        crc.fillStyle = "blue";
        crc.fill(water);
        crc.stroke(water);
    }

    //Sand
    function drawsand(_x: number, _y: number): void {
        let sand: Path2D = new Path2D();
        sand.rect(0, 450, 1000, 300);
        crc.fillStyle = "yellow";
        crc.fill(sand);
        crc.stroke(sand);
    }



    function drawstone(_x: number, _y: number): void {
        let stone: Path2D = new Path2D;
        stone.moveTo(_x, _y);
        stone.bezierCurveTo(_x + 150, _y - 100, _x + 200, _y - 120, _x + 400, _y);
        crc.fillStyle = "grey";
        crc.fill(stone);
        crc.stroke(stone);
    }



    function drawplants(_x: number, _y: number): void {
        let plant: Path2D = new Path2D;
        plant.moveTo(_x + 100, _y + 400);
        plant.bezierCurveTo(_x + 200, _y + 200, _x + 50, _y + 100, _x + 100, _y + 50);
        crc.fillStyle = "green";
        crc.fill(plant);
        crc.stroke(plant);
    }
    //fish.x > canvas.width && fish.x <= 0 && fish.y > canvas.height && fish.y <= 0
}