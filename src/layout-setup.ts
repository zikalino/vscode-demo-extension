export var layoutSetup: any = {
  type: 'layout-form',
  id: 'root',
  header: [
    {
      type: 'header',
      title: 'Setup Toolchains & SDKs',
      logo: 'setup.svg'
    }
  ],
  form: [
    {
      type: 'fieldset',
      id: 'main_fieldset',
      subitems: [
        {
          type: 'row',
          id: 'row_1',
          subitems: [
            {
              type: 'combo',
              id: 'sdk_type',
              name: 'Select SDK',
              items: [
                'ESP-IDF',
                'Arduino',
                'Rust',
                'Zephyr',
                'NuttX',
                'MicroPython',
                'Go',
                '.net NanoFramework'
              ]
            }
          ],
        },
        {
          type: 'row',
          id: 'row_custom_esp_idf',
          subitems: [
            {
              type: 'combo',
              id: 'esp_idf_version',
              name: 'Select ESP-IDF Version',
              items: [
                { name: 'ESP-IDF 5.0', description: 'Release Version' },
                { name: 'ESP-IDF 5.3', description: 'Release Version' }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'fieldset',
      id: 'fieldset_tinygo',
      subitems: [
        {
          type: 'step',
          id: 'step_tinygo_install_go',
          description: 'Install Go',
          verify: 'go --version',
          install: 'scoop install go'
        },
        {
          type: 'step',
          id: 'step_tinygo_install_tinygo',
          description: 'Install TinyGo',
          verify: 'scoop install tinygo',
          install: 'tinygo --version'
        }

      ]
    }
  ],
  footer: [
    {
      type: 'footer',
      id: 'footer',
      subitems: [
        {
          type: 'button',
          id: 'create_button',
          text: 'Create'
        }
      ]
    }
  ]
};
