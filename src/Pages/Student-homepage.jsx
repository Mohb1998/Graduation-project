import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Studentpage()
{

   window.handsfree.update({
    hands: true,
    facemesh:true,
  })

  window.handsfree.enablePlugins('browser')
  window.handsfree.start()
  

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );

}

export default Studentpage;
