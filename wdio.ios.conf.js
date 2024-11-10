const path = require('path');
const { config } = require('./wdio.shared.conf');

// Runner Configuration
config.port = 4723;

// Specs
config.specs = [
  '.test/specs/ios/ios-todo-item-screen*.js'
];

// Capabilities
config.capabilities = [
  {
    "appium:platformName": 'ios',
    "appium:platformVersion": '17.5',
    "appium:deviceName": 'iPhone 15',
    "appium:automationName": 'XCUITest',
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app")  
  }
]

exports.config = config;
