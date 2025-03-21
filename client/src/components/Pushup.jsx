import React, { useRef, useEffect, useState } from 'react';
import "./push.css"
import { onMounted } from 'vue';
import { Pose, POSE_CONNECTIONS } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

function Pushup() {

    const videoElement = useRef(null);
  const canvasElement = useRef(null);
  const [pushupCount, setPushupCount] = useState(0);
  const [position, setPosition] = useState('up');

  function calculateAngle(a, b, c) {
    const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs(radians * (180 / Math.PI));
    if (angle > 180) {
      angle = 360 - angle;
    }
    return angle;
  }

  function onResults(results) {
    const canvasCtx = canvasElement.current.getContext('2d');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.current.width, canvasElement.current.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.current.width, canvasElement.current.height);

    if (results.poseLandmarks) {
      const landmarks = results.poseLandmarks;

      drawConnectors(canvasCtx, landmarks, POSE_CONNECTIONS, { color: '#00FF00', lineWidth: 4 });
      drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', radius: 5 });

      const leftElbowAngle = calculateAngle(landmarks[11], landmarks[13], landmarks[15]);
      const rightElbowAngle = calculateAngle(landmarks[12], landmarks[14], landmarks[16]);

      if ((leftElbowAngle < 70 || rightElbowAngle < 70) && position === 'up') {
        setPosition('down');
      }

      if ((leftElbowAngle > 160 && rightElbowAngle > 160) && position === 'down') {
        setPosition('up');
        setPushupCount((prevCount) => prevCount + 1);
      }
    }

    canvasCtx.restore();
  }

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResults);

    const camera = new Camera(videoElement.current, {
      onFrame: async () => {
        await pose.send({ image: videoElement.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    return () => {
      camera.stop(); // Cleanup camera on unmount
    };
  }, []);

    return (
        <div>
      <video ref={videoElement} className="input_video"></video>
      <canvas ref={canvasElement} className="output_canvas" width="640px" height="480px"></canvas>
      <div id="pushup-count">Push-ups: {pushupCount}</div>
    </div>
    )
}

export default Pushup