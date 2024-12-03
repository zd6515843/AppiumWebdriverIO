const path = require('path');
const { config } = require('./wdio.shared.conf');

// Runner Configuration
config.port = 4723;

// Specs
config.specs = [
  '../test/specs/android/add-note-screen*.js'
];

// Capabilities
config.capabilities = [
  {
    "appium:platformName": 'Android',
    "appium:platformVersion": '13.0',
    "appium:deviceName": 'Pixel 6',
    "appium:automationName": 'UiAutomator2',
    "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true
  }
];

config.services = [['appium', {
  args: {
    relaxedSecurity: true
  }
}]];

exports.config = config;
