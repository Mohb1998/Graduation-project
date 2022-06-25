import React from "react";

import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'

import '../css/studenttransit.css'
import {Link} from "react-router-dom"

function Studentpage() {
  return (
    <div className="studenttransit1482-container">

      <div className="studenttransit1482-studenttransit1482">
        <img
          alt="Ellipse71488"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDMwMCAzMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxjaXJjbGUgY3g9JzE1MCcgY3k9JzE1MCcgcj0nMTUwJyBmaWxsPScjMzk2REYxJyBmaWxsLW9wYWNpdHk9JzAuMjUnLz4KPC9zdmc+Cg=="
          className="studenttransit1482-svg"
        />
        <img
          alt="Ellipse61487"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgdmlld0JveD0nMCAwIDMwMCAzMDAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxjaXJjbGUgY3g9JzE1MCcgY3k9JzE1MCcgcj0nMTUwJyBmaWxsPScjMzk2REYxJyBmaWxsLW9wYWNpdHk9JzAuMjUnLz4KPC9zdmc+Cg=="
          className="studenttransit1482-svg1"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQwOScgaGVpZ2h0PSc2NTUnIHZpZXdCb3g9JzAgMCAxNDA5IDY1NScgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3Qgd2lkdGg9JzE0MDknIGhlaWdodD0nNjU1JyBmaWxsPScjQjNDRUY2JyBmaWxsLW9wYWNpdHk9JzAuNScvPgo8L3N2Zz4K"
          alt="Rectangle181484"
          className="studenttransit1482-image"
        />
        <span className="studenttransit1482-text">Active Meetings</span>
        <Navbar2 />
        <Footer2 />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDA0JyBoZWlnaHQ9JzczJyB2aWV3Qm94PScwIDAgNDA0IDczJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB3aWR0aD0nNDA0JyBoZWlnaHQ9JzczJyBmaWxsPScjNjQ5RUQzJy8+Cjwvc3ZnPgo="
          alt="Rectangle1614845"
          className="studenttransit1482-image1"
        />
        <Link to ="/MeetingRoom2/">
          <button className="studenttransit1482-text09">
            Join a room
          </button>
        </Link>
        <span className="studenttransit1482-text10">
          Dr.Hany has an open meeting
        </span>
      </div>
    </div>
  );

}
export default Studentpage;