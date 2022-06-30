// import React, { useEffect, useRef, useState, useMemo } from "react";
// import {
//   MeetingProvider,
//   MeetingConsumer,
//   useMeeting,
//   useParticipant,
// } from "@videosdk.live/react-sdk";
// import { authToken, createMeeting } from "../api";
// import ReactPlayer from "react-player";


// function JoinScreen({ getMeetingAndToken }) {
//   const [meetingId, setMeetingId] = useState(null);
//   const onClick = async () => {
//     await getMeetingAndToken(meetingId);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Meeting Id"
//         onChange={(e) => {
//           setMeetingId(e.target.value);
//         }}
//       />
//       <button onClick={onClick}>Join</button>
//       {" or "}
//       <button onClick={onClick}>Create Meeting</button>
//     </div>
//   );
// }

// function VideoComponent(props) {
//   const micRef = useRef(null);
//   const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
//     props.participantId
//   );

//   const videoStream = useMemo(() => {
//     if (webcamOn) {
//       const mediaStream = new MediaStream();
//       mediaStream.addTrack(webcamStream.track);
//       return mediaStream;
//     }
//   }, [webcamStream, webcamOn]);

//   useEffect(() => {
//     if (micRef.current) {
//       if (micOn) {
//         const mediaStream = new MediaStream();
//         mediaStream.addTrack(micStream.track);

//         micRef.current.srcObject = mediaStream;
//         micRef.current
//           .play()
//           .catch((error) =>
//             console.error("videoElem.current.play() failed", error)
//           );
//       } else {
//         micRef.current.srcObject = null;
//       }
//     }
//   }, [micStream, micOn]);

//   return (
//     <div key={props.participantId}>
//       {micOn && micRef && <audio ref={micRef} autoPlay />}
//       {webcamOn && (
//         <ReactPlayer
//           //
//           playsinline // very very imp prop
//           pip={false}
//           light={false}
//           controls={true}
//           muted={true}
//           playing={true}
//           //
//           url={videoStream}
//           //
//           height={"100px"}
//           width={"100px"}
//           onError={(err) => {
//             console.log(err, "participant video error");
//           }}
//         />
//       )}
//     </div>
//   );
// } 

// function Controls() {
//   const { leave, toggleMic, toggleWebcam } = useMeeting();
//   return (
//     <div>
//       <button onClick={leave}>Leave</button>
//       <button onClick={toggleMic}>toggleMic</button>
//       <button onClick={toggleWebcam}>toggleWebcam</button>
//     </div>
//   );
// }

// function Container(props) {
//   const [joined, setJoined] = useState(false);
//   const { join } = useMeeting();
//   const { participants } = useMeeting();
//   const joinMeeting = () => {
//     setJoined(true);
//     join();
//   };

//   return (
//     <div className="container">
//       <h3>Meeting Id: {props.meetingId}</h3>
//       {joined ? (
//         <div>
//           <Controls />
//           {[...participants.keys()].map((participantId) => (
//             <VideoComponent participantId={participantId} />
//           ))}
//         </div>
//       ) : (
//         <button onClick={joinMeeting}>Join</button>
//       )}
//     </div>
//   );
// }

// function MeetingRoom() {
//   const [meetingId, setMeetingId] = useState(null);

//   const getMeetingAndToken = async (id) => {
//     const meetingId =
//       id == null ? await createMeeting({ token: authToken }) : id;
//     setMeetingId(meetingId);
//   };

//   return authToken && meetingId ? (
//     <MeetingProvider
//       config={{
//         meetingId,
//         micEnabled: true,
//         webcamEnabled: false,
//         name: "C.V. Raman",
//       }}
//       token={authToken}
//     >
//       <MeetingConsumer>
//         {() => <Container meetingId={meetingId} />}
//       </MeetingConsumer>
//     </MeetingProvider>
//   ) : (
//     <JoinScreen getMeetingAndToken={getMeetingAndToken} />
//   );
// }

// export default MeetingRoom;

// go build ./cmd/signal/json-rpc/main.go && ./main -c config.toml
import React, { useEffect, useRef } from 'react';
import { Client, LocalStream } from 'ion-sdk-js';
import { IonSFUJSONRPCSignal } from 'ion-sdk-js/lib/signal/json-rpc-impl';

import  '../css/teacherpage.css'

import Navbar2 from '../components/Navbar2'

function MeetingRoom() 
{

  const pubVideo = useRef();

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
    isPub = false;
  }

  //When the app mounts for the first time we will create a new connection to the server
  useEffect(() => {
    signal = new IonSFUJSONRPCSignal("ws://176.58.107.71:7000/ws");
    client = new Client(signal, config);
    signal.onopen = () => client.join("test room");
  }, []);


  //Teacher
  const start = (event) => {
    
    //Camera
    if (event) {
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
        // subVideo.current.MediaTrackSupportedConstraints.noiseSuppression = true;
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
    <div>
          <div>

            <div id="pubVideo" className="bg-black" controls ref={pubVideo}></div>

                <div className="teacherpage4611-teacherpage4611">\
                  <Navbar2 />                   
                  <img
                    alt="Studentname4619"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzQ0JyBoZWlnaHQ9Jzg3MScgdmlld0JveD0nMCAwIDM0NCA4NzEnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IG9wYWNpdHk9JzAuMycgd2lkdGg9JzM0NCcgaGVpZ2h0PSc4NzEnIGZpbGw9JyM2NDlFRDMnLz4KPC9zdmc+Cg=="
                    className="teacherpage4611-image"
                  />
                  <span className="teacherpage4611-text05">Student list</span>
                  <img
                    alt="Rectangle144621"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTM2NScgaGVpZ2h0PSczOCcgdmlld0JveD0nMCAwIDEzNjUgMzgnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScxMzY1JyBoZWlnaHQ9JzM4JyBmaWxsPScjRDlEOUQ5Jy8+Cjwvc3ZnPgo="
                    className="teacherpage4611-image1"
                  />
                  <img
                    alt="Rectangle154623"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nOTc0JyBoZWlnaHQ9JzM4JyB2aWV3Qm94PScwIDAgOTc0IDM4JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nOTc0JyBoZWlnaHQ9JzM4JyBmaWxsPScjNjQ5RUQzJy8+Cjwvc3ZnPgo="
                    className="teacherpage4611-image2"
                  />
                  <span className="teacherpage4611-text06">Student concentration</span>
                  <span className="teacherpage4611-text07">80%</span>
                  <span className="teacherpage4611-text08">
                    <span>Mohb Khaled</span>
                    <br></br>
                    <span>Mira Emad</span>
                    <br></br>
                    <span>Sherif Tarek</span>
                    <br></br>
                    <span>Seif Koreitam</span>
                    <br></br>
                    <span>Rowan</span>
                  </span>

                  <div className="teacherpage4611-group14629">
                  <button id="bnt_pubcam" className="teacherpage4611-text18" onClick={() => start(true)}>Publish Camera</button>
                  </div>

                  <div className="teacherpage4611-group24631">
                  <button id="bnt_pubscreen" className="teacherpage4611-text19" onClick={() => start(false)}>Publish Screen</button>
                  </div>
                </div>
          </div>
    </div>
  );
}

export default MeetingRoom;

