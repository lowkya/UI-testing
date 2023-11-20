exports.config = {
  framework: 'jasmine',
  specs: ['src/**/*.spec.js'],  // Specify the path to your end-to-end test files
  capabilities: {
    browserName: 'safari',  // You can choose another browser if needed
  },
  baseUrl: 'http://localhost:4200/',  // Adjust the base URL according to your Angular app
};
