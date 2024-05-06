export var layoutNewGuiProject: any = {
  type: 'layout-form',
  id: 'root',
  header: [
    {
      type: 'header',
      title: 'New GUI Project',
      logo: 'gui.svg'
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
              id: 'framework',
              name: 'Framework',
              items: [ "Shiny GUI"]
            },
            {
              type: 'combo',
              id: 'platform',
              name: 'Platform',
              items: [ 'ESP IDF', 'Arduino', 'Rust' ]
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
              id: 'screen_size',
              name: 'Screen',
              items: [ "480x480", "480x240", "240x240"]
            }
          ]
        },
        {
          type: 'row',
          id: 'row_3',
          subitems: [
            {
              type: 'combo',
              id: 'idf_instance',
              name: 'Select ESP-IDF Instance',
              items: [ 'ESP-IDF 5.0', 'ESP-IDF 5.3' ] 
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
              type: 'folder-selector',
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
