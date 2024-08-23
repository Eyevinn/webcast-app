'use client';

import { WHIPClient } from '@eyevinn/whip-web-client';
import { Button, Snippet } from '@nextui-org/react';
import { generateSlug } from 'random-word-slugs';
import { useRef, useState } from 'react';

type Props = {
  whipEndpointUrl: URL;
  authkey?: string;
};

export default function CameraIngest({ whipEndpointUrl, authkey }: Props) {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [client, setClient] = useState<WHIPClient | null>(null);
  const [channelId] = useState<string>(generateSlug());
  const [channelUrl, setChannelUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onBroadcast = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const ingestUrl = new URL(whipEndpointUrl);
      ingestUrl.searchParams.append('channelId', channelId);
      const client = new WHIPClient({
        endpoint: ingestUrl.toString(),
        opts: { authkey, noTrickleIce: true }
      });
      setClient(client);
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then((mediaStream) => {
          video.srcObject = mediaStream;
          if (client) {
            return client.ingest(mediaStream);
          }
        })
        .finally(() => {
          console.log('Broadcast started');
          setIsBroadcasting(true);
          setChannelUrl(`${window.location.origin}/watch/?id=${channelId}`);
        });
    }
  };

  const onEndBroadcast = () => {
    if (client) {
      client.destroy().then(() => {
        console.log('Broadcast ended');
        setIsBroadcasting(false);
        setClient(null);
      });
    }
  };

  return (
    <div className="flex flex-col w-1/2 m-5">
      <video
        className="aspect-video border-2"
        ref={videoRef}
        autoPlay
        playsInline
        muted
      />
      {!isBroadcasting && (
        <Button
          color="secondary"
          className="mt-3 mb-3"
          onClick={() => onBroadcast()}
        >
          Broadcast
        </Button>
      )}
      {isBroadcasting && (
        <>
          <Button className="mt-3 mb-3" onClick={() => onEndBroadcast()}>
            End Broadcast
          </Button>
          {channelUrl && (
            <Snippet symbol="" variant="bordered">
              {channelUrl}
            </Snippet>
          )}
        </>
      )}
    </div>
  );
}
