'use server';

type Config = {
  whipEndpointUrl: URL;
  whipApiKey?: string;
};

let _config: Config | undefined = undefined;

function readConfig(): Config {
  if (!_config) {
    _config = readConfigFromEnv();
  }
  return _config;
}

function readConfigFromEnv(): Config {
  if (!process.env.WHIP_ENDPOINT_URL) {
    throw new Error('WHIP_ENDPOINT_URL is not set');
  }
  return {
    whipEndpointUrl: new URL(process.env.WHIP_ENDPOINT_URL),
    whipApiKey: process.env.WHIP_API_KEY
  };
}

export type ConfigDTO = {
  whipEndpointUrl: string;
  whipApiKey?: string;
};

export async function getConfig(): Promise<ConfigDTO> {
  return {
    whipEndpointUrl: readConfig().whipEndpointUrl.toString(),
    whipApiKey: readConfig().whipApiKey
  };
}
