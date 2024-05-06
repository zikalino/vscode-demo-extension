export var layoutNewGuiProject: any = {
  type: 'layout-form',
  id: 'root',
  header: [
    {
      type: 'header',
      title: 'New GUI Project'
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
              id: 'platform',
              name: 'Platform',
              items: [
                {
                  name: 'ESP-IDF',
                  description: 'Espressif ESP-IDF IoT Development Framework'
                },
                {
                  name: 'Arduino on ESP-IDF',
                  description: 'Create Arduino as a component project'
                },
                { name: 'Rust', description: 'Create a Rust Project' },
                { name: 'Zephyr', description: 'Create a Zephyr Project' },
                { name: 'NuttX', description: 'Create a NuttX Project' }
              ]
            },
            {
              type: 'combo',
              id: 'project_type',
              name: 'Project Type',
              items: [
                {
                  name: 'Empty Project',
                  description: 'Create an Empty Project'
                },
                {
                  name: 'GUI Project',
                  description: 'Create an Empty GUI Project'
                },
                {
                  name: 'Use Example',
                  description: 'Create a Project from Selected Example'
                },
                {
                  name: 'Copy Existing',
                  description: 'Create from Existing Project'
                },
                {
                  name: 'Import PlatformIO Project',
                  description:
                    'Create from Existing ESP-IDF Project Created with PlatformIO'
                }
              ]
            },
            {
              type: 'combo',
              id: 'target',
              name: 'Target',
              items: [
                'All',
                'ESP32',
                'ESP32-S2',
                'ESP32-S3',
                'ESP32-C2',
                'ESP32-C3',
                'ESP32-C6',
                'ESP32-H2',
                'ESP32-P4'
              ]
            }
          ]
        },
        {
          type: 'row',
          id: 'row_2',
          subitems: [
            {
              type: 'combo',
              id: 'idf_instance',
              name: 'Select ESP-IDF Instance',
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
