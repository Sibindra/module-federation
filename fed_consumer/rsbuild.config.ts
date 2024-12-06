import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [pluginReact() , 

    pluginModuleFederation({
      name: "fed_consumer",
      remotes: {
        fed_provider: "fed_provider@http://localhost:3000/mf-manifest.json",
      },

      shared: ["react", "react-dom"],
    })
  ],

  server: {
    port: 2000,
  }
});
