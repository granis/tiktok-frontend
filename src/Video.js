import React from 'react'
import "./Video.css";

function Video() {
    return (
        <div className="video">
            <video 
            class="video__player"
            loop
            src="http://media.w3.org/2010/05/sintel/trailer.ogv"></video>

            {/* Videofooter */}
            {/* Videosidebar */}
        </div>
    )
}

export default Video
