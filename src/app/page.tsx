'use client';

import { Link } from '@nextui-org/react';
import CameraIngest from '../components/ingest/CameraIngest';
import { useConfig } from '../hooks/config';

export default function Page() {
  const config = useConfig();
  if (config) {
    return (
      <main className="flex flex-col justify-center w-screen h-screen">
        <div className="text-center">
          <h1 className="text-primary text-xl">Simple Webcast</h1>
          <div>
            <p>Press Broadcast</p>
            <p>Copy and share link to webcast</p>
            <p>WATCH</p>
          </div>
        </div>
        <div className="flex justify-center">
          <CameraIngest
            whipEndpointUrl={new URL(config.whipEndpointUrl)}
            authkey={config.whipApiKey}
          />
        </div>
        <div className="text-center">
          <p>
            by{' '}
            <Link href={'https://www.eyevinn.se'}>Eyevinn Technology AB</Link>
          </p>
          <p>
            Simple Webcast is{' '}
            <Link href={'https://github.com/Eyevinn/webcast-app'}>
              open source
            </Link>{' '}
            and implements WHIP and WHEP
          </p>
          <p className="text-xs">
            This demo site is powered by{' '}
            <Link
              href={
                'https://symphony.com/insights/blog/introducing-symphonys-media-bridge/'
              }
            >
              Symphony Media Bridge
            </Link>
            {' and '}
            <Link href={'https://www.osaas.io'}>Open Source Cloud</Link>
          </p>
        </div>
      </main>
    );
  }
}
