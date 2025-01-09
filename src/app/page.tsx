"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";

function Video() {
  const [isIntro, setIsIntro] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoRef.current?.paused) {
        setIsLoaded(true);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {!isLoaded && <div className="w-full aspect-video"></div>}
      {isIntro && (
        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
          muted
          onEnded={() => setIsIntro(false)}
          onLoadedData={() => setIsLoaded(true)}
          onPlay={() => setIsLoaded(true)}
          onPlaying={() => setIsLoaded(true)}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      )}
      <video
        className={isIntro ? `hidden` : `block`}
        width="100%"
        height="100%"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/videos/replay.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-dvh">
      <div></div>
      <h2 className="text-center font-bold font-mono text-gray-300 opacity-50 animate-fade">
        coming soon...
      </h2>
      <Video />
    </div>
  );
}
