import { useEffect, useState } from 'react';

export type ConfigDTO = {
  whipEndpointUrl: string;
  whipApiKey?: string;
  whepEndpointUrl: string;
};

const WHIP_ENDPOINT_URL = process.env.NEXT_PUBLIC_WHIP_ENDPOINT_URL;
const WHIP_API_KEY = process.env.NEXT_PUBLIC_WHIP_API_KEY;
const WHEP_ENDPOINT_URL = process.env.NEXT_PUBLIC_WHEP_ENDPOINT_URL;

export function useConfig() {
  const [config, setConfig] = useState<ConfigDTO | null>(null);

  useEffect(() => {
    if (WHIP_ENDPOINT_URL && WHEP_ENDPOINT_URL) {
      setConfig({
        whipEndpointUrl: WHIP_ENDPOINT_URL,
        whipApiKey: WHIP_API_KEY,
        whepEndpointUrl: WHEP_ENDPOINT_URL
      });
    }
  }, []);

  return config;
}
