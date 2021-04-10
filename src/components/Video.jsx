import React from 'react';

function Video(props) {
    return <video
                muted
                autoPlay
                playsInline
                loop
                src={props.src}
                height={"100%"}
                width={"100%"}
                style={{
                    display: "block",
                    boxShadow: "0px 1px 17px 0px #ffffff38",
                    borderRadius: "5px"}}>
            </video>
}

export default Video;