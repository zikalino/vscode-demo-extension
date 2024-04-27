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
      id: 'fieldset_1',
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
      id: 'fieldset_2',
      subitems: [
        {
          type: 'row',
          id: 'xrow_1',
          narrow: true,
          subitems: [
            {
              type: 'textfield',
              id: 'project_name',
              name: 'Project Name'
            }
          ]
        },
        {
          type: 'row',
          id: 'xrow_2',
          narrow: true,
          subitems: [
            {
              type: 'textfield',
              id: 'project_location',
              name: 'Project Location'
            }
          ]
        },
        {
          type: 'row',
          id: 'xrow_3',
          narrow: true,
          subitems: [
            {
              type: 'checkbox',
              id: 'initialize_git_repo',
              name: 'Initialize Git Repository'
            }
          ]
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
          id: 'button_create',
          text: 'Create'
        }
      ]
    }
  ]
};
