import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { useEffect, useState } from 'react';

function CompTensorFlow() {

    const [x, setX] = useState(true);
    const [image, setHola] = useState();

    useEffect(()=>{
        console.log("dentro de use effect");
        setHola(document.getElementById("image"));
    });

    let result;

    function toggle() {
        console.log(image.src);
        if (x) {
            image.src = "image1.jpg";
            setHola({ ...image });
            setX(!x);
        } else {
            image.src = "image2.jpg";
            setHola({ ...image });
            setX(!x);
        }
    }

    async function run() {
        const c = document.getElementById('canvas');
        const context = c.getContext('2d');
        context.drawImage(image, 0, 0);
        context.font = '10px Arial';

        const model = await cocoSsd.load();
        result = await model.detect(image);

        for (let i = 0; i < result.length; i++) {
            context.beginPath();
            context.rect(...result[i].bbox);
            context.lineWidth = 1;
            context.strokeStyle = 'green';
            context.fillStyle = 'green';
            context.stroke();
            context.fillText(
                result[i].score.toFixed(3) + ' ' + result[i].class, result[i].bbox[0],
                result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10);
        }
    }

    return <div>
        <h1>TensorFlow.js Object Detection</h1>
        <select id='base_model'>
            <option value="lite_mobilenet_v2">SSD Lite Mobilenet V2</option>
            <option value="mobilenet_v1">SSD Mobilenet v1</option>
            <option value="mobilenet_v2">SSD Mobilenet v2</option>
        </select>
        <button type="button" id="run" onClick={run}>Run</button>
        <button type="button" id="toggle" onClick={toggle}>Toggle Image</button>
        <div>
            <img id="image" />
            <canvas id="canvas" width="600" height="399"></canvas>
        </div>
    </div>;
}

export default CompTensorFlow;