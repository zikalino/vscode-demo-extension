export var layoutWelcome = {
  type: 'layout-welcome',
  header: [
    {
      type: 'header',
      title: 'Demo Extension',
      logo: 'logo.svg'
    }
  ],
  footer: [
    {
      type: 'checkbox',
      id: 'show_on_startup',
      name: 'Show welcome page on startup',
      'vertical-alignment': 'center'
    }
  ],
  'left-column': [
    {
      type: 'text-block',
      font: 'header-2',
      width: 'narrow',
      content: 'Get Started'
    },
    {
      type: 'tile',
      width: 'narrow',
      title: 'Install SDK and Toolchains',
      content:
        'Before you can start using this extension, ESP-IDF and toolchains need to be installed. Press <b>Default</b> to install latest version of ESP-IDF in default folder. Alternatively press <b>Advanced</b> to customize your setup.',
      buttons: [
        'Default|codicon-gear|xxx-action',
        'Advanced|codicon-settings|xxx-action'
      ]
    },
    {
      type: 'tile',
      width: 'narrow',
      title: 'Create a New Project',
      content:
        'Once SDK and Tools are installed, you can create a new project. You can either start with Hello World project or use Example Browser to choose one of the examples.',
      buttons: [
        'Hello World!|codicon-gear|xxx-action',
        'Browse Examples|codicon-list-selection|xxx-action'
      ]
    },
    {
      type: 'tile',
      width: 'narrow',
      title: 'Connect Your Board',
      content: 'Press <b>Connect</b> button below to discover your board.',
      buttons: ['Connect|codicon-plug|xxx-action']
    }
  ],
  'right-column': [
    {
      type: 'text-block',
      font: 'header-2',
      width: 'narrow',
      content: 'Useful Links'
    },
    {
      type: 'link',
      href: 'https://google.com',
      title: 'Repository',
      codicon: 'codicon-github'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'ESP32 Forums',
      codicon: 'codicon-comment'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'ESP-IDF',
      codicon: 'codicon-github'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'Open a New Issue',
      codicon: 'codicon-github'
    },
    {
      type: 'text-block',
      font: 'header-3',
      width: 'narrow',
      content: 'Tutorials'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'Install and Configure'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'Basic Use'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'Debugging'
    },

    {
      type: 'text-block',
      font: 'header-3',
      width: 'narrow',
      content: 'Documentation'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'XXX-1'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'XXX-2'
    },
    {
      type: 'link',
      href: 'https://bing.com',
      title: 'XXX-3'
    }
  ]
};
