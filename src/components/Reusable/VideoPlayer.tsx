import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  });

  return <video ref={ref} src={src} loop playsInline controls />;
}

export default function VideoPlayerComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
