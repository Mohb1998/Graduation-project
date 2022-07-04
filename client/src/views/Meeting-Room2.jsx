// go build ./cmd/signal/json-rpc/main.go && ./main -c config.toml
import React, { useEffect, useRef } from 'react';
import { Client, LocalStream } from 'ion-sdk-js';
import { IonSFUJSONRPCSignal } from 'ion-sdk-js/lib/signal/json-rpc-impl';

import  '../css/studentpage.css'

import Navbar2 from '../components/Navbar2'

import * as faceapi from 'face-api.js';

//Student
function MeetingRoom2()
{

    const [modelsLoaded, setModelsLoaded] = React.useState(false);
    const [captureVideo, setCaptureVideo] = React.useState(false);
  
    const videoRef = React.useRef();
    const videoHeight = 480;
    const videoWidth = 640;
    const canvasRef = React.useRef();
  
    React.useEffect(() => {
      const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models';
  
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]).then(setModelsLoaded(true));
      }
      loadModels();
    }, []);
  
    const startVideo = () => {
      setCaptureVideo(true);
      navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error("error:", err);
        });
    }
  
    const handleVideoOnPlay = () => {
      setInterval(async () => {
        if (canvasRef && canvasRef.current) {
          canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
          const displaySize = {
            width: videoWidth,
            height: videoHeight
          }
  
          faceapi.matchDimensions(canvasRef.current, displaySize);
  
          const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
  
          const resizedDetections = faceapi.resizeResults(detections, displaySize);
  
          canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
          canvasRef && canvasRef.current && faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
          canvasRef && canvasRef.current && faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
          canvasRef && canvasRef.current && faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
        }
      }, 300)
    }
  
    const closeWebcam = () => {
      videoRef.current.pause();
      videoRef.current.srcObject.getTracks()[0].stop();
      setCaptureVideo(false);
    }

    const subVideo = useRef();
  
    let isPub = false, client, signal;
    let displayStream;
    let userStream;
  
    const config = {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };

    //function mute()
    //{
      // const videoaudioTrack = displayStream.getTracks().find(track => track.kind === 'audio');
      // videoaudioTrack.enabled = false;
    //}

  
    //When the app mounts for the first time we will create a new connection to the server
    useEffect(() => {
      signal = new IonSFUJSONRPCSignal("ws://176.58.107.71:7000/ws"); //176.58.107.71
      client = new Client(signal, config);
      signal.onopen = () => client.join("test room");
  
  
      //Student
      if (!isPub) {
  
        LocalStream.getUserMedia({
          video: false,
          audio: true,
          codec: "vp8"
        })
        .then((media) => {
        displayStream = media;
        navigator.mediaDevices.getUserMedia({ audio : true })
          .then((stream) => {
            var audioTracks = stream.getAudioTracks();
            for (var i = 0; i < audioTracks.length; i++) {
              displayStream.addTrack(audioTracks[i]);
            }
  
            subVideo.current.srcObject = displayStream;
            subVideo.current.autoplay = false;
            subVideo.current.controls = true;
            subVideo.current.muted = false;
            subVideo.current.audio = true;
            client.publish(displayStream);
        });
  
        }).catch(console.error);
  
  
        client.ontrack = (track, stream) => {
          console.log("got track: ", track.id, "for stream: ", stream.id);
          track.onunmute = () => {
            subVideo.current.srcObject = stream;
            subVideo.current.autoplay = true;
            subVideo.current.muted = true;
  
            stream.onremovetrack = () => {
              subVideo.current.srcObject = null;
            }
          }
        }
      }
    }, []);
    
    return(

        <div>
            
            <div className="studentpage-container">

            <div className="studentpage-studentpage">

        <Navbar2/>

        <video id="subVideo" className="studentpage-videobox" controls ref={subVideo}></video>

        {/* <button className="studentpage-group3">
          <span className="studentpage-text5">Raise hand</span>
        </button> */}


        <div className="studentpage-group6">
          <span className="studentpage-text6">Share camera</span>
        </div>

        <div className="studentpage-group6">
                {
                captureVideo && modelsLoaded ?
                <button className="studentpage-text6"onClick={closeWebcam}>
                Close Webcam
                </button>
                :
                <button className="studentpage-text6" onClick={startVideo}>
                Open Webcam
                </button>
                }
            </div> 


        {/* <button className="studentpage-group5" >
          <span className="studentpage-text7">Unmute</span>
        </button>
        <button className="studentpage-group4">
          <span className="studentpage-text8">Mute</span>
        </button> */}


 <div className="studentpage-rectangle20">
{
captureVideo ?
modelsLoaded ?
<div>
<div style={{display:"flex", display: 'flex', justifyContent: 'right' }}>
    <video ref={videoRef} height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} />
    <canvas ref={canvasRef} style={{ position: 'absolute' }} />
</div>
</div>
:
<div>loading...</div>
:
<>
</>
}
</div>



      </div>
    </div>
        </div>
    )
    
}

export default MeetingRoom2;