import React, { useEffect, useRef } from 'react';
import { Client, LocalStream } from 'ion-sdk-js';
import { IonSFUJSONRPCSignal } from 'ion-sdk-js/lib/signal/json-rpc-impl';

function MeetingRoom() 
{

  const pubVideo = useRef();
  const subVideo = useRef();

  let isPub, client, signal;

  let displayStream;

  const config = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };
  
  // http://localhost:8000/?publish=true
  //Check the url to see if the client is a publisher or a viewer
  const URL = new URLSearchParams(window.location.search).get("publish");
  console.log("url", URL);
  if (URL) {
    isPub = true;
  } else {
    isPub =false;
  }

  //When the app mounts for the first time we will create a new connection to the server
  useEffect(() => {
    signal = new IonSFUJSONRPCSignal("ws://localhost:7000/ws");
    client = new Client(signal, config);
    signal.onopen = () => client.join("test room");


    //Student
    if (!isPub) {
      client.ontrack = (track, stream) => {
        console.log("got track: ", track.id, "for stream: ", stream.id);
        track.onunmute = () => {
          subVideo.current.srcObject = stream;
          subVideo.current.autoplay = true;
          subVideo.current.muted = false;

          stream.onremovetrack = () => {
            subVideo.current.srcObject = null;
          }
        }
      }
    }
  }, []);


  //Teacher
  const start = (event) => {
    
    //Camera
    if (event) {

      console.log("Sharing camera")

      LocalStream.getUserMedia({
        resolution: 'vga',
        audio: true,
        codec: "vp8"
      }).then((media) => 
      {
        pubVideo.current.srcObject = media;
        pubVideo.current.autoplay = true;
        pubVideo.current.controls = true;
        pubVideo.current.muted = false;
        client.publish(media);
      }).catch(console.error);

    }
    
    //Share screen
    else
    {
      LocalStream.getDisplayMedia({
        resolution: 'vga',
        video: true,
        audio: true,
        codec: "vp8"
      })
      .then((media) => {
      displayStream = media;

  navigator.mediaDevices.getUserMedia({ audio : true, video : false })
    .then((stream) => {
      var audioTracks = stream.getAudioTracks();
      for (var i = 0; i < audioTracks.length; i++) {
        displayStream.addTrack(audioTracks[i]);
      }

      pubVideo.current.srcObject = displayStream;
      pubVideo.current.autoplay = true;
      pubVideo.current.controls = true;
      pubVideo.current.muted = false;
      pubVideo.current.audio = true;
      client.publish(displayStream);
});

      }).catch(console.error);

    }
  }

  return (
    <div className="flex flex-col h-screen relative">
    <header className="flex h-16 justify-center items-center text-xl bg-black text-white">

    <div>ion-sfu</div>
      {isPub ? (
        <div className="absolute top-2 right-5">
        <button id="bnt_pubcam" className="bg-blue-500 px-4 py-2 text-white rounded-lg mr-5" onClick={() => start(true)}>Publish Camera</button>
        <button id="bnt_pubscreen" className="bg-green-500 px-4 py-2 text-white rounded-lg" onClick={() => start(false)}>Publish Screen</button>
      </div>
      ) : null
    }
    </header>
    {isPub ?
    (
      <div id="pubVideo" className="bg-black" controls ref={pubVideo}></div>
    ) : 
    (
      <video id="subVideo" className="bg-black" controls ref={subVideo}></video>
    )}
    </div>
  );
}

export default MeetingRoom;