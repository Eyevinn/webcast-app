'use client';

import { useConfig } from '../../../hooks/config';

export default function Page({ params }: { params: { id: string } }) {
  const config = useConfig();
  if (config) {
    return (
      <main className="flex flex-col justify-center w-screen h-screen">
        <h1>{params.id}</h1>
      </main>
    );
  }
}
