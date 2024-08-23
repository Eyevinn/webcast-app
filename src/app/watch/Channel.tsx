'use client';

import { useSearchParams } from 'next/navigation';
import WhepPlayer from '../../components/player/WhepPlayer';
import { useConfig } from '../../hooks/config';

export default function Channel() {
  const config = useConfig();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  if (config) {
    return (
      <main className="flex flex-col justify-center w-screen h-screen">
        <WhepPlayer whepUrl={new URL(`${config.whepEndpointUrl}/${id}`)} />
      </main>
    );
  }
}
