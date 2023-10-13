import React from "react";
import video from "./hero-video.mp4";

export default function Hero() {
  return (
    <video
      playsinline="playsinline"
      muted="muted"
      loop="loop"
      autoplay="autoplay"
      preload="metadata"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
