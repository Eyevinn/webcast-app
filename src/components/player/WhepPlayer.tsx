'use client';

import { WebRTCPlayer } from '@eyevinn/webrtc-player';
import { useEffect, useRef } from 'react';

type Props = {
  whepUrl: URL;
};

export default function WhepPlayer({ whepUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let player: WebRTCPlayer;
    if (videoRef.current) {
      const video = videoRef.current;
      player = new WebRTCPlayer({
        video,
        type: 'whep'
      });
      player.load(whepUrl).then(() => {
        player.mute();
      });
    }
    return () => {
      player.destroy();
    };
  }, [whepUrl]);

  return (
    <video
      className="aspect-video border-2"
      ref={videoRef}
      autoPlay
      playsInline
      controls
    />
  );
}
