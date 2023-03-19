import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likedNum, setlikedNum] = useState(tuit.likes)

    const toggleLike = () => {
        if (liked) {
            setlikedNum(likedNum - 1)
        } else {
            setlikedNum(likedNum + 1)
        }
        setLiked(!liked);
    };

    return (
        <div className="wd-pos-icons wd-p-max-width">
            <i className="far fa-comment text-primary me-3" style={{ fontSize: "24px" }}>
                {tuit.replies}
            </i>
            <i className="fas fa-external-link-alt text-primary me-3" style={{ fontSize: "24px" }}>
                {tuit.retuits}
            </i>
            <i
                className={`fas fa-heart ${liked ? "text-danger" : "text-primary"} me-3`}
                style={{ fontSize: "24px" }}
                onClick={toggleLike}
            >
                {likedNum}
            </i>
            <i className="fas fa-upload text-primary" style={{ fontSize: "24px" }}></i>
        </div>
    );
};

export default TuitStats;