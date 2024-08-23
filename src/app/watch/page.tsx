'use client';

import { Suspense } from 'react';
import Channel from './Channel';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Channel />
    </Suspense>
  );
}
