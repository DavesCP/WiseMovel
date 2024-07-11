import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user-app',
  exposes: {
    './Routes': 'apps/user-app/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
