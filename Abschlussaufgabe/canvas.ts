namespace Abschlussaufgabe {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", steuerung);
    let serverAddress: string = "https://schwabeh.herokuapp.com/";
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    
    let score: number = 0;
    let x: number;
    let y: number;

    let fishArray: Fish[] = [];
    let bubbleArray: Bubble[] = [];
    let secondfishArray: SecondFish[] = [];
    let thirdfishArray: ThirdFish[] = [];
    let fourthfishArray: FourthFish[] = [];
    let zerofishArray: ZeroFish[] = [];
    let FabianFischMachtAAPause: boolean = false;

    let fps: number = 30;
    let imageData: ImageData;

    function steuerung(_event: KeyboardEvent) {
        if (_event.keyCode == 37) {
            fishArray[0].update(-20, 0, 1);
        }
        if (_event.keyCode == 38) {
            fishArray[0].update(0, -20, 1);
        }
        if (_event.keyCode == 39) {
            fishArray[0].update(20, 0, 1);
        }
        if (_event.keyCode == 40) {
            fishArray[0].update(0, 20, 1);
        }
    }

    export function pfadgottes(pfad: Path2D, _x: number, _y: number, _id: number) {
        if (crc.isPointInPath(pfad, _x, _y) == true && _id == 0) {
            console.log("RRRRaus du dumme Sau!!!");
            fishArray[0].update(0, 0, 2);
            zerofishArray.splice(0, 1);
            MakeFabianFishRichAgain()
        }
        if (crc.isPointInPath(pfad, _x, _y) == true && _id == 2) {
            if (fishArray[0].a < _id) {
                console.log("Game over!");
                FabianFischMachtAAPause = true;
                FabianFishNixMehrBlubb();
            }
            console.log("RRRRaus du dumme Sau!!!");
            fishArray[0].update(0, 0, 1.5);
            secondfishArray.splice(0, 1);
            MakeFabianFishRichAgain()
        }
        if (crc.isPointInPath(pfad, _x, _y) == true && _id == 3) {
            if (fishArray[0].a < _id) {
                console.log("Game over!");
                FabianFischMachtAAPause = true;
                FabianFishNixMehrBlubb();
            }
            console.log("RRRRaus du dumme Sau!!!");
            fishArray[0].update(0, 0, 1.33);
            thirdfishArray.splice(0, 1);
            MakeFabianFishRichAgain()
        }
        if (crc.isPointInPath(pfad, _x, _y) == true && _id == 4) {
            if (fishArray[0].a < _id) {
                console.log("Game over!");
                FabianFischMachtAAPause = true;
                FabianFishNixMehrBlubb();
            }
            console.log("RRRRaus du dumme Sau!!!");
            fishArray[0].update(0, 0, 1.25);
            fourthfishArray.splice(0, 1);
            MakeFabianFishRichAgain()
        }
    }

    function MakeFabianFishRichAgain() {
        score += 1000;
        document.getElementById("idScore").innerHTML = score.toString();
    }

    function FabianFishNixMehrBlubb() {
        let gamertag: string = prompt("Verrate FabianFish Deinen Namen, du Plankton!");
        console.log(gamertag);
        insert(gamertag);
        find();
    }

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

        //STEUERUNGSFISCH
        for (let i: number = 0; i < 1; i++) {
            let fish: Fish = new Fish();
            fishArray.push(fish);
            fish.draw();
        }

        for (let i: number = 0; i < 1; i++) {
            let secondfish: SecondFish = new SecondFish();
            secondfishArray.push(secondfish);
            secondfish.draw(x, y);
        }

        for (let i: number = 0; i < 1; i++) {
            let thirdfish: ThirdFish = new ThirdFish();
            thirdfishArray.push(thirdfish);
            thirdfish.draw(x, y);
        }

        for (let i: number = 0; i < 1; i++) {
            let fourthfish: FourthFish = new FourthFish();
            fourthfishArray.push(fourthfish);
            fourthfish.draw(x, y);
        }

        for (let i: number = 0; i < 1; i++) {
            let zerofish: ZeroFish = new ZeroFish();
            zerofishArray.push(zerofish);
            zerofish.draw(fishArray[0].x, fishArray[0].y);
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
    }

    function update(): void {
        if (FabianFischMachtAAPause == false) {

            window.setTimeout(update, 1000 / fps);
            crc.clearRect(0, 0, canvas.width, canvas.height);
            crc.putImageData(imageData, 0, 0);


            for (let i: number = 0; i < fishArray.length; i++) {
                fishArray[i].update(0, 0, 1);
            }


            for (let i: number = 0; i < secondfishArray.length; i++) {
                secondfishArray[i].update(fishArray[0].x, fishArray[0].y);
            }

            for (let i: number = 0; i < bubbleArray.length; i++) {
                bubbleArray[i].update();
            }

            for (let i: number = 0; i < thirdfishArray.length; i++) {
                thirdfishArray[i].update(fishArray[0].x, fishArray[0].y);
            }

            for (let i: number = 0; i < fourthfishArray.length; i++) {
                fourthfishArray[i].update(fishArray[0].x, fishArray[0].y);
            }

            for (let i: number = 0; i < zerofishArray.length; i++) {
                zerofishArray[i].update(fishArray[0].x, fishArray[0].y);
            }
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

    function insert(_name: string): void {
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&score" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function sendRequest (_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse (_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse (_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let Spielerliste: Player[] = JSON.parse(xhr.response);
            for (let i:number = 0; i <= Spielerliste.length; i++) {
                let Spielername: string = Spielerliste[i].name;
                let Spielerscore: string = Spielerliste[i].score;
                document.getElementById("output").innerHTML = "Name: " + Spielername + "Score: " + Spielerscore;
            }
        }
    }
}