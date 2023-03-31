import React, { useState } from "react";
import "../styles/VideoSideBar.css";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const VideoSideBar = ({ likes, shares, messages }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSideBar">
            <div className="videoSidebar_button">
                {liked ? (
                    <FavoriteRoundedIcon
                        fontSize="large"
                        onClick={(e) => setLiked(false)}
                    />
                ) : (
                    <FavoriteBorderRoundedIcon
                        fontSize="large"
                        onClick={(e) => setLiked(true)}
                    />
                )}

                <p>{liked ? (likes+1) : likes}</p>
            </div>

            <div className="videoSidebar_button">
                <MessageRoundedIcon fontSize="large" />
                <p>{messages}</p>
            </div>

            <div className="videoSidebar_button">
                <ShareRoundedIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSideBar;

