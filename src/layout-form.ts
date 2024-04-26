export var layoutForm: any = {
  type: 'layout-form',
  id: 'main-form',
  header: {
    type: 'header',
    title: 'Form Demo'
  },
  form: [
    {
      type: 'datagrid',
      id: 'gridxxx',
      subitems: [
        {
          type: 'grid-header',
          id: 'gra',
          subitems: [
            {
              type: 'grid-header-cell',
              id: 'head1',
              content: 'Type'
            },
            {
              type: 'grid-header-cell',
              id: 'head2',
              content: 'Version'
            },
            {
              type: 'grid-header-cell',
              id: 'head3',
              content: 'Location'
            },
            {
              type: 'grid-header-cell',
              id: 'head4',
              content: 'Actions'
            }
          ]
        },
        {
          type: 'grid-row',
          id: 'gr1',
          subitems: [
            {
              type: 'grid-cell',
              id: 'gr1c1',
              content: 'ESP-IDF'
            },
            {
              type: 'grid-cell',
              id: 'gr1c2',
              content: 'v5.1.2'
            },
            {
              type: 'grid-cell',
              id: 'gr1c3',
              content: 'c:/users/zim/esp/v5.1.2/esp-idf'
            },
            {
              type: 'grid-cell',
              id: 'gr1c4',
              content:
                '<a title="Delete this SDK" class="tooltip codicon codicon-trash"></a><a title="Verify / Synchronize this SDK" class="tooltip codicon codicon-sync"></a>'
            }
          ]
        },
        {
          type: 'grid-row',
          id: 'gr2',
          subitems: [
            {
              type: 'grid-cell',
              id: 'gr2c1',
              content: 'ESP-IDF'
            },
            {
              type: 'grid-cell',
              id: 'gr2c2',
              content: 'v5.1.3'
            },
            {
              type: 'grid-cell',
              id: 'gr2c3',
              content: 'c:/users/zim/esp/v5.1.3/esp-idf'
            },
            {
              type: 'grid-cell',
              id: 'gr2c4',
              content:
                '<a title="Delete this SDK" class="tooltip codicon codicon-trash"></a><a title="Verify / Synchronize this SDK" class="tooltip codicon codicon-sync"></a>'
            }
          ]
        }
      ]
    },
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
              name: 'Combo with Details',
              items: [
                {
                  name: 'ESP-IDF',
                  description: 'Espressif ESP-IDF IoT Development Framework'
                }
              ]
            },
            {
              type: 'combo',
              id: 'sdk_version',
              name: 'Basic Combo',
              items: ['v5.1.3', 'v5.1.2', 'develop']
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
          id: 'row_2',
          subitems: [
            {
              type: 'input',
              id: 'project-name',
              name: 'Project Name'
            },
            {
              type: 'button',
              id: 'buttonx',
              text: 'Button'
            },
            {
              type: 'textarea',
              id: 'textareax'
            },
            {
              type: 'textfield',
              id: 'textfieldx'
            },
            {
              type: 'progressring'
            },
            {
              type: 'tag'
            },
            {
              type: 'badge'
            },
            {
              type: 'link'
            },
            {
              type: 'radiogroup',
              subitems: [
                {
                  id: 'radio_1',
                  value: 'r1',
                  text: 'Radio 1',
                  type: 'radio'
                },
                {
                  id: 'radio_2',
                  value: 'r2',
                  text: 'Radio 2',
                  type: 'radio'
                }
              ]
            },
            {
              type: 'checkbox',
              text: 'Sample Checkbox',
              id: 'checkbox_id'
            }
          ]
        }
      ]
    },
    {
      type: 'fieldset',
      id: 'fieldset_3',
      subitems: [
        {
          type: 'row',
          id: 'row_3',
          subitems: [
            {
              type: 'datagrid',
              id: 'gridxxx',
              subitems: [
                {
                  type: 'gridrow',
                  id: 'gra',
                  subitems: [
                    {
                      type: 'gridcell',
                      id: 'gc1'
                    },
                    {
                      type: 'gridcell',
                      id: 'gc2'
                    }
                  ]
                },
                {
                  type: 'gridrow',
                  id: 'grb',
                  subitems: [
                    {
                      type: 'gridcell',
                      id: 'gc1a'
                    },
                    {
                      type: 'gridcell',
                      id: 'gc2b'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  footer: {}
}
