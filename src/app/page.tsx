"use client";

import { useState } from "react";

export function Video() {
  const [isIntro, setIsIntro] = useState<boolean>(true);

  return (
    <>
      {isIntro && (
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          onEnded={() => setIsIntro(false)}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      )}
      <video
        className={isIntro ? `hidden` : `block`}
        width="100%"
        height="100%"
        autoPlay
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
    <div className="flex flex-col items-center justify-between h-screen">
      <div></div>
      <h2 className="text-center font-bold font-mono text-gray-300 opacity-50">
        coming soon...
      </h2>
      <Video />
    </div>
  );
}
