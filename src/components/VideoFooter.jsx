import React from "react";
import "../styles/VideoFooter.css";
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import img1 from '../assets/disc.png'


const VideoFooter = ({ channel, description, song }) => {
    return <div className="videoFooter">
        <div className="videoFooter_text">
            <h3>@{channel}</h3>
            <p>{ description }</p>
            <div className="videoFooter_ticker">
                <MusicNoteRoundedIcon
                    className="videoFooter_icon"
                />
                <div class="hwrap">
                    <div class="hmove">
                        <div class="hitem">{song}</div>
                    </div>
                </div>

            </div>
        </div>
        <img className="videoFooter_record" src={img1} alt="none" />
    </div>;
};

export default VideoFooter;
