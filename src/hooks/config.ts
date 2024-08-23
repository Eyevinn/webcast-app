import { useEffect, useState } from 'react';
import { ConfigDTO, getConfig } from '../server/actions/config';

export function useConfig() {
  const [config, setConfig] = useState<ConfigDTO | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WHIP_ENDPOINT_URL) {
      console.log('Using build env variables');
      setConfig({
        whipEndpointUrl: process.env.NEXT_PUBLIC_WHIP_ENDPOINT_URL,
        whipApiKey: process.env.NEXT_PUBLIC_WHIP_API_KEY
      });
    } else {
      console.log('Using server env variables');
      getConfig().then((config) => {
        setConfig(config);
      });
    }
  }, []);

  return config;
}
