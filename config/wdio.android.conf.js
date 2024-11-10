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
    "appium:platformVersion": '12.0',
    "appium:deviceName": 'Pixel5',
    "appium:automationName": 'UiAutomator2',
    "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true
  }
]

exports.config = config;
