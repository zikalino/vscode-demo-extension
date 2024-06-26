import * as vscode from 'vscode';
import YAML from 'yaml';
import { marked } from 'marked';
import GenericWebView from '@zim.kalinowski/vscode-helper-toolkit';

var extensionUri: vscode.Uri;
var mediaFolder: vscode.Uri;
var extensionContext: vscode.ExtensionContext;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate (context: vscode.ExtensionContext) {
  extensionContext = context;
  extensionUri = context.extensionUri;

  mediaFolder = vscode.Uri.joinPath(extensionUri, 'media');

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vscode-demo-extension" is now active!');

  let disposable = vscode.commands.registerCommand('vscode-demo-extension.displayWelcomeDemo', () => {
    displayWelcomeDemo();
  });

  disposable = vscode.commands.registerCommand('vscode-demo-extension.displayWelcomeGuiDemo', () => {
    displayWelcomeGuiDemo();
  });

  disposable = vscode.commands.registerCommand('vscode-demo-extension.browseExamples', () => {
    browseExamples();
  });

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayFormDemo',
    () => {
      displayFormDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayFormWithStepsDemo',
    () => {
      displayFormWithStepsDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayNewProjectDemo',
    () => {
      displayNewProjectDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayNewGuiProjectDemo',
    () => {
      displayNewGuiProjectDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displaySetupDemo',
    () => {
      displaySetupDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayCanvasDemo',
    () => {
      displayCanvasDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayCanvasMapDemo',
    () => {
      displayCanvasMapDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayTabbedFormDemo',
    () => {
      displayTabbedFormDemo();
    }
  );

  disposable = vscode.commands.registerCommand(
    'vscode-demo-extension.displayComponentManagerDemo',
    () => {
      displayComponentManagerDemo();
    }
  );


  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate () {}


//import {layoutWelcome } from "./layout-welcome";
var layoutWelcome: any = require('./layout-welcome.yaml');

async function displayWelcomeDemo() {
  let view = new GenericWebView(extensionContext, "Welcome!");
  view.createPanel(layoutWelcome);
}

var layoutWelcomeGui: any = require('./layout-welcome-gui.yaml');

async function displayWelcomeGuiDemo() {
  let view = new GenericWebView(extensionContext, "Welcome!");
  view.createPanel(layoutWelcomeGui);
}

import { dataExamples } from "./data-examples";
import { GenericWebView } from '@zim.kalinowski/vscode-helper-toolkit';

async function browseExamples() {

  let populateMsg = {
    command: 'populate',
    data: dataExamples
  };

  let setActionsMsg = {
    command: 'actions',
    data: [
      {
        codicon: 'codicon-folder-opened',
        description: 'Create Project',
        action: 'action-oprn'
      },
      {
        codicon: 'codicon-github',
        description: 'Open on Github',
        action: 'action-github'
      },
      {
        codicon: 'codicon-comment-discussion',
        description: 'Discuss',
        action: 'action-discussion'
      }
    ]
  };

  let html = `

  | Supported Targets | ESP32 | ESP32-C2 | ESP32-C3 | ESP32-C6 | ESP32-H2 | ESP32-P4 | ESP32-S2 | ESP32-S3 | Linux |
  | ----------------- | ----- | -------- | -------- | -------- | -------- | -------- | -------- | -------- | ----- |
  
  # Hello World Example
  
  Starts a FreeRTOS task to print "Hello World".
  
  (See the README.md file in the upper level 'examples' directory for more information about examples.)
  
  ## How to use example
  
  Follow detailed instructions provided specifically for this example.
  
  Select the instructions depending on Espressif chip installed on your development board:
  
  - [ESP32 Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/stable/get-started/index.html)
  - [ESP32-S2 Getting Started Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/index.html)
  
  
  ## Example folder contents
  
  The project **hello_world** contains one source file in C language [hello_world_main.c](main/hello_world_main.c). The file is located in folder [main](main).
  
  ESP-IDF projects are built using CMake. The project build configuration is contained in CMakeLists.txt files that provide set of directives and instructions describing the project's source files and targets (executable, library, or both).
  
  Below is short explanation of remaining files in the project folder.
  
  
  ├── CMakeLists.txt
  ├── pytest_hello_world.py      Python script used for automated testing
  ├── main
  │   ├── CMakeLists.txt
  │   └── hello_world_main.c
  └── README.md                  This is the file you are currently reading
  
  
  For more information on structure and contents of ESP-IDF projects, please refer to Section [Build System](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/build-system.html) of the ESP-IDF Programming Guide.
  
  ## Troubleshooting
  
  * Program upload failure
  
      * Hardware connection is not correct: run idf.py -p PORT monitor, and reboot your board to see if there are any output logs.
      * The baud rate for downloading is too high: lower your baud rate in the menuconfig menu, and try again.
  
  ## Technical support and feedback
  
  Please use the following feedback channels:
  
  * For technical queries, go to the [esp32.com](https://esp32.com/) forum
  * For a feature request or bug report, create a [GitHub issue](https://github.com/espressif/esp-idf/issues)
  
  We will get back to you as soon as possible.
  
  
    `;

  let rootMarkup = `
  # Examples

  This directory contains a range of example ESP-IDF projects. These examples are intended to demonstrate parts of the ESP-IDF functionality, and to provide code that you can copy and adapt into your own projects.
  
  ## Example Layout
  
  The examples are grouped into subdirectories by category. Each category directory contains one or more example projects:
  
  - 'bluetooth/bluedroid' Classic BT, BLE and coex examples using default Bluedroid host stack.
  - 'bluetooth/nimble' BLE examples using NimBLE host stack.
  - 'bluetooth/esp_ble_mesh' ESP BLE Mesh examples.
  - 'bluetooth/hci' HCI transport (VHCI and HCI UART) examples.
  - 'build_system' Examples of build system features.
  - 'cxx' C++ language utilization examples and experimental components.
  - 'ethernet' Ethernet network examples.
  - 'get-started' Simple examples with minimal functionality. Good start point for beginners.
  - 'mesh' Wi-Fi Mesh examples.
  - 'network' Examples related to general network environment, test & analysis.
  - 'openthread' OpenThread examples.
  - 'peripherals' Examples showing driver functionality for the various onboard ESP32 peripherals.
  - 'protocols' Examples showing network protocol interactions.
  - 'provisioning' Wi-Fi provisioning examples.
  - 'security' Examples about security features.
  - 'storage' Examples showing data storage methods using SPI flash, external storage like the SD/MMC interface and flash partitioning.
  - 'system' Demonstrates some internal chip features, or debugging & development tools.
  - 'wifi' Advanced Wi-Fi features (For network protocol examples, see 'protocols' instead.)
  - 'Zigbee' Zigbee network and device examples.
  
  In addition to these examples, 'commmon_components' directory contains code shared by several examples.
  
  ## Using Examples
  
  Before building an example, be sure to follow the [ESP-IDF Getting Started Guide](https://idf.espressif.com/) to ensure you have the required development environment.
  
  Building an example is the same as building any other project:
  
  - Change into the directory of the new example you'd like to build.
  - Run 'idf.py set-target TARGET' to select the correct chip target to build before opening the project configuration menu. By default the target is 'esp32'. For all options see 'idf.py set-target --help'
  - Run 'idf.py menuconfig' to open the project configuration menu. Most examples have a project-specific "Example Configuration" section here (for example, to set the WiFi SSID & password to use).
  - 'idf.py build' to build the example.
  - Follow the printed instructions to flash, or run 'idf.py -p PORT flash'.
    `;

  let nodeMarkup = `
# Example

This directory contains a range of example ESP-IDF projects. These examples are intended to demonstrate parts of the ESP-IDF functionality, and to provide code that you can copy and adapt into your own projects.

## Example Layout

Just something should go here....
`;

  let detailsMsgHello = {
    command: 'details',
    data:
      "<div style='padding-left: 24px; padding-right: 24px; padding-top: 4px; width=100%; text-wrap: wrap;'>" +
      marked.parse(html) +
      '</div>'
  };

  let detailsMsgRoot = {
    command: 'details',
    data:
      "<div style='padding-left: 24px; padding-right: 24px; padding-top: 4px; width=100%; text-wrap: wrap;'>" +
      marked.parse(rootMarkup) +
      '</div>'
  };

  let detailsMsgNode = {
    command: 'details',
    data:
      "<div style='padding-left: 24px; padding-right: 24px; padding-top: 4px; width=100%;' text-wrap: wrap;>" +
      marked.parse(nodeMarkup) +
      '</div>'
  };

  let formDefinition = {
    type: 'layout-tree-with-details',
    id: 'layout'
    };

  let view = new GenericWebView(extensionContext, "Examples");

  view.MsgHandler = function (msg: any) {
    switch (msg.command) {
      case 'ready':
        view.postMessage(populateMsg);
        view.postMessage(detailsMsgRoot);
        return;
      case 'selected':
        // XXX - here we can load html content of the example
        if (msg.type === 'none') {
          view.postMessage(detailsMsgRoot);
        }
        if (msg.type === 'node') {
          view.postMessage(detailsMsgNode);
        }
        if (msg.type === 'leaf') {
          view.postMessage(detailsMsgHello);
          view.postMessage(setActionsMsg);
        }
        return;
      default:
        console.log('XXX');
    }


  };

  view.createPanel(formDefinition);
}

var layoutForm: any = require('./layout-form.yaml');

async function displayFormDemo () {
  let view = new GenericWebView(extensionContext, "Generic");
  view.createPanel(layoutForm);

  view.MsgHandler = function (msg: any) {
    if (msg.command === 'button-clicked') {
      vscode.window.showInformationMessage('Button ' + msg.id + ' Clicked!');
      if (msg.id === 'close') {
        view.close();
      }
    } else if (msg.command === 'radio-clicked') {
      vscode.window.showInformationMessage('Radio ' + msg.id + ' Clicked!');
    } else if (msg.command === 'dropdown-clicked') {
      vscode.window.showInformationMessage('Dropdown item ' + msg.id + ' Clicked!');
    }
  };
}

var layoutFormWithSteps: any = require('./layout-form-with-steps.yaml');

var page: number = 1;
async function displayFormWithStepsDemo () {
  let view = new GenericWebView(extensionContext, "Steps");
  view.createPanel(layoutFormWithSteps);

  function reconfigure() {
    for (var i = 1; i < 5; i++) {
      if (i === page) {
        view.showElement("page_" + i.toString());
      } else {
        view.hideElement("page_" + i.toString());
      }

      if (page === 1) {
        view.hideElement("prev");
        view.showElement("next");
        view.hideElement("complete");
      } else if (page === 3) {
        view.hideElement("next");
        view.showElement("prev");
        view.showElement("complete");
      } else {
        view.showElement("prev");
        view.showElement("next");
        view.hideElement("complete");
      }
    }
  }

  view.MsgHandler = function (msg: any) {
    if (msg.command === 'button-clicked') {
      // vscode.window.showInformationMessage('Button ' + msg.id + ' Clicked!');
      if (msg.id === 'prev') {
        if (page > 1) {
          page -= 1;
        }
      } else if (msg.id === 'next') {
        if (page < 5) {
          page += 1;
        }
      }
      reconfigure();
    } else if (msg.command === 'radio-clicked') {
      vscode.window.showInformationMessage('Radio ' + msg.id + ' Clicked!');
    } else if (msg.command === 'dropdown-clicked') {
      vscode.window.showInformationMessage('Dropdown item ' + msg.id + ' Clicked!');
    } else if (msg.command === 'ready') {
      reconfigure();
    }
  };
}

var layoutTabbedForm: any = require('./layout-tabbed-form.yaml');

async function displayTabbedFormDemo () {
  let view = new GenericWebView(extensionContext, "Generic");
  view.createPanel(layoutTabbedForm);
}

var layoutComponentManagerForm: any = require('./layout-component-manager.yaml');


async function displayComponentManagerDemo () {
  let view = new GenericWebView(extensionContext, "Generic");
  view.createPanel(layoutComponentManagerForm);
}

var layoutNewProject: any = require("./layout-new-project.yaml");

async function displayNewProjectDemo () {
  let view = new GenericWebView(extensionContext, "Generic");
  view.createPanel(layoutNewProject);
}

var layoutNewGuiProject: any = require('./layout-new-gui-project.yaml');


async function displayNewGuiProjectDemo () {
  let view = new GenericWebView(extensionContext, "Generic");
  view.createPanel(layoutNewGuiProject);
}

var layoutSetup: any = require("./layout-setup.yaml");

async function displaySetupDemo () {
  let view = new GenericWebView(extensionContext, "Setup");
  view.createPanel(layoutSetup);

  view.MsgHandler = function (msg: any) {
    if (msg.command === 'ready') {
      view.showElement('fieldset_esp_idf');
      view.showElement("fieldset_tinygo");
    } else if (msg.command === 'button-clicked') {
      //vscode.window.showInformationMessage('Button ' + msg.id + ' Clicked!');
      if (msg.id === 'close') {
        view.close();
      } else if (msg.id === 'create_button') {
        view.runStepsInstallation();
      }
    } else if (msg.command === 'radio-clicked') {
      vscode.window.showInformationMessage('Radio ' + msg.id + ' Clicked!');
    } else if (msg.command === 'dropdown-clicked') {
      vscode.window.showInformationMessage('Dropdown item ' + msg.id + ' Clicked X!');

      view.hideElement("fieldset_tinygo");
      view.hideElement('fieldset_esp_idf');

      if (msg.id === 'ESP-IDF') {
        // XXX - show ESP-IDF version
        view.showElement('fieldset_esp_idf');
        view.disableElement('fieldset_esp_idf');
      } else if (msg.id === 'TinyGo') {
        view.showElement("fieldset_tinygo");
      } else {
        view.enableElement('create-button');
      }
      view.runStepsVerification();
    }
  };

}

var layoutCanvas: any = require('./layout-canvas.yaml');

async function displayCanvasDemo () {
  let view = new GenericWebView(extensionContext, "Canvas");
  view.createPanel(layoutCanvas);

  view.MsgHandler = function (msg: any) {
    if (msg.command === 'button-clicked') {
      vscode.window.showInformationMessage('Button ' + msg.id + ' Clicked!');
      if (msg.id === 'close') {
        view.close();
      }
    } else if (msg.command === 'ready') {
      view.requestDefinition();
    } else if (msg.command === 'save-definition') {
      console.log("GOT DEFINITION: " + msg.definition);
    } else if (msg.command === 'radio-clicked') {
      vscode.window.showInformationMessage('Radio ' + msg.id + ' Clicked!');
    } else if (msg.command === 'dropdown-clicked') {
      vscode.window.showInformationMessage('Dropdown item ' + msg.id + ' Clicked X!');
      if (msg.id === 'ESP-IDF') {
        // XXX - show ESP-IDF version
        view.showElement('fieldset_esp_idf');
        view.disableElement('fieldset_esp_idf');
      } else {
        // XXX - hide ESP-IDF version
        view.hideElement('fieldset_esp_idf');
        view.enableElement('create-button');
      }
    }
  };
}

var layoutCanvasMap: any = require('./layout-canvas-map.yaml');

async function displayCanvasMapDemo () {
  let view = new GenericWebView(extensionContext, "Map");
  view.createPanel(layoutCanvasMap);

  view.MsgHandler = function (msg: any) {
    if (msg.command === 'button-clicked') {
      vscode.window.showInformationMessage('Button ' + msg.id + ' Clicked!');
      if (msg.id === 'close') {
        view.close();
      }
    } else if (msg.command === 'ready') {
      view.requestDefinition();
    } else if (msg.command === 'save-definition') {
      console.log("GOT DEFINITION: " + msg.definition);
    } else if (msg.command === 'radio-clicked') {
      vscode.window.showInformationMessage('Radio ' + msg.id + ' Clicked!');
    } else if (msg.command === 'dropdown-clicked') {
      vscode.window.showInformationMessage('Dropdown item ' + msg.id + ' Clicked X!');
      if (msg.id === 'ESP-IDF') {
        // XXX - show ESP-IDF version
        view.showElement('fieldset_esp_idf');
        view.disableElement('fieldset_esp_idf');
      } else {
        // XXX - hide ESP-IDF version
        view.hideElement('fieldset_esp_idf');
        view.enableElement('create-button');
      }
    }
  };
}
