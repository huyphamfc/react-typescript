import React, { useState, useRef } from 'react';

import styles from './style.module.css';

function MyVideo() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      return;
    }

    videoRef.current?.play();
  };

  return (
    <>
      <video
        ref={videoRef}
        className={styles.video}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
      </video>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
    </>
  );
}

export default MyVideo;
