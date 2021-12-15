import React, { useRef, useEffect } from "react";

import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../Scripts/utilities";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Studentpage()
{
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runFacemesh = async () => {

    const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
      detect(net);
    }, 1);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const face = await net.estimateFaces({input:video});
      console.log(face);

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(()=>{drawMesh(face, ctx)});
    }
  };

  useEffect(()=>{runFacemesh()}, []);

  return (
    <div>
      <Navbar/>
      <div className="App">
      <header className="App-header">
        <Webcam class="Webcam" ref={webcamRef}/>
        <canvas class="webcam-canvas" ref={canvasRef}/>
      </header>
    </div>
    <Footer/>
    </div>
  );

}

export default Studentpage;
