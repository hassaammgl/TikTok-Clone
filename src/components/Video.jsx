import React, { useRef, useState } from "react";
import '../styles/Video.css'
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

const Video = ({ url, channel, description, song, likes, messages, shares }) => {
    const [playing, setplaying] = useState(false);

    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setplaying(false);
        }
        else {
            videoRef.current.play();
            setplaying(true);
        }
    }

    return (
        <div className="video">
            <div class="ratio ratio-16x9">
                <iframe onClick={handleVideoPress}
                    ref={videoRef}
                    title={description}
                    className="video_player"
                    src={url} allowfullscreen></iframe>
            </div>

            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSideBar likes={likes} shares={shares} messages={messages} />
        </div>
    );
};

export default Video;