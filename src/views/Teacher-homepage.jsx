import React from "react";

import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'

import '../css/teachertransit.css'
import {Link} from "react-router-dom"

function Teacherpage() {
  return (

    <div className="teachertransit1483-container">
      <div className="teachertransit1483-teachertransit1483">
        <img
          alt="Ellipse81489"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDMwMCAzMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxjaXJjbGUgY3g9JzE1MCcgY3k9JzE1MCcgcj0nMTUwJyBmaWxsPScjMzk2REYxJyBmaWxsLW9wYWNpdHk9JzAuMjUnLz4KPC9zdmc+Cg=="
          className="teachertransit1483-svg"
        />
        <img
          alt="Ellipse914810"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDMwMCAzMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxjaXJjbGUgY3g9JzE1MCcgY3k9JzE1MCcgcj0nMTUwJyBmaWxsPScjMzk2REYxJyBmaWxsLW9wYWNpdHk9JzAuMjUnLz4KPC9zdmc+Cg=="
          className="teachertransit1483-svg1"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQwOScgaGVpZ2h0PSc2NTUnIHZpZXdCb3g9JzAgMCAxNDA5IDY1NScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzE0MDknIGhlaWdodD0nNjU1JyBmaWxsPScjQjNDRUY2JyBmaWxsLW9wYWNpdHk9JzAuNScvPgo8L3N2Zz4K"
          alt="Rectangle181486"
          className="teachertransit1483-image"
        />
        <Navbar2 />
        <Footer2 />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDA0JyBoZWlnaHQ9JzczJyB2aWV3Qm94PScwIDAgNDA0IDczJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nNDA0JyBoZWlnaHQ9JzczJyBmaWxsPScjNjQ5RUQzJy8+Cjwvc3ZnPgo="
          alt="Rectangle1614841"
          className="teachertransit1483-image1"
        />

        <Link to ="/MeetingRoom/?publish=true">
          <button className="teachertransit1483-text8">
            Create a room
          </button>
        </Link>
      </div>
    </div>
  );

}
export default Teacherpage;