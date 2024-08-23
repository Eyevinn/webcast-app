'use client';

import WhepPlayer from '../../../components/player/WhepPlayer';
import { useConfig } from '../../../hooks/config';

export default function Page({ params }: { params: { id: string } }) {
  const config = useConfig();
  if (config) {
    return (
      <main className="flex flex-col justify-center w-screen h-screen">
        <WhepPlayer
          whepUrl={new URL(`${config.whepEndpointUrl}/${params.id}`)}
        />
      </main>
    );
  }
}
