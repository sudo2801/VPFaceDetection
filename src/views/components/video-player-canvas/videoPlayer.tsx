// VideoPlayer.tsx
import { useRef, useState, useLayoutEffect, FC } from "react";
import { fabric } from "fabric";
import * as faceapi from "face-api.js";
import { CButton } from "../shared/buttons";

interface VideoPlayerProps {
  selectedVideo: File | null;
  setSelectedVideo:Function
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  selectedVideo,
  setSelectedVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | null>(null);

  useLayoutEffect(() => {
    if (!fabricCanvas && canvasRef.current) {
      const canvas = new fabric.Canvas(canvasRef.current);
      setFabricCanvas(canvas);
    }
    faceMyDetect();
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
    } catch (error) {
      console.error("Error loading faceapi models:", error);
    }
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      if (videoRef.current && canvasRef.current) {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks();
        const canvas = canvasRef.current;
        const displaySize: faceapi.IDimensions = {
          width: videoRef.current.offsetWidth,
          height: videoRef.current.offsetHeight,
        };

        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
          }
        }

        // DRAW YOUR FACE IN WEBCAM
        faceapi.matchDimensions(canvasRef.current, displaySize);

        const resized = faceapi.resizeResults(detections, displaySize);

        faceapi.draw.drawDetections(canvasRef.current, resized);
      }
    }, 500);
  };

  const handleOnClickPlay = () => {
    videoRef.current && videoRef.current.play();
  };
  const handleOnClickPause = () => {
    videoRef.current && videoRef.current.pause();
  };
  const handleNewVideo = () => {
    videoRef.current = null;
    canvasRef.current = null;
    setSelectedVideo(null)
  };

  return (
    <div>
      {selectedVideo && (
        <>
          <div className="relative mt-10">
            <video
              className="rounded-md border-4 border-violet-600 w-[400px] h-[350px] sm:m-2"
              ref={videoRef}
              autoPlay
            >
              <source
                src={URL.createObjectURL(selectedVideo)}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="flex items-center justify-center mt-2">
              <CButton
                label="Play"
                onClick={handleOnClickPlay}
                type="primary"
              />
              <CButton
                label="Upload New Video"
                onClick={handleNewVideo}
                type="dark"
              />
              <CButton
                label="Pause"
                onClick={handleOnClickPause}
                type="secondary"
              />
            </div>
            <canvas
              ref={canvasRef}
              width="640"
              height="480"
              style={{
                position: "absolute",
                zIndex: 1,
                cursor: "pointer",
                top: 0,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
