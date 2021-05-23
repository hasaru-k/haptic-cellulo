import React from 'react';

function Video(props: any) {
    return <video
                muted
                autoPlay
                playsInline
                loop
                src={props.src}
                height={"60%"}
                width={"80%"}
                style={{
                    display: "block",
                    boxShadow: "0px 1px 17px 0px #ffffff38",
                    borderRadius: "5px",
                    marginLeft: "10%"}}>
            </video>
}

export default Video;