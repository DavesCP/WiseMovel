import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'adm-app',
  exposes: {
    './Routes': 'apps/adm-app/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
