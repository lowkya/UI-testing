import { defineConfig } from "cypress";
import * as registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //     require('@cypress/code-coverage/task')(on, config)
  //     // include any other plugin code...
  //
  //     // It's IMPORTANT to return the config object
  //     // with any changed environment variables
  //     return config
  //   }
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // @ts-ignore
      registerCodeCoverageTasks(on, config);
      return config;
    },
    baseUrl: 'http://localhost:4200',
  },
});
