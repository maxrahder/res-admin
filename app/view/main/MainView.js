Ext.define('Admin.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Admin.view.main.MainViewController',
        'Admin.view.main.MainViewModel',
        'Admin.view.navigation.NavigationView',
        'Admin.view.header.HeaderView'
    ],

    controller: { xclass: 'Admin.view.main.MainViewController' },
    viewModel: { xclass: 'Admin.view.main.MainViewModel' },

    dockedItems: [
        {
            xclass: 'Admin.view.header.HeaderView',
            dock: 'top'
        },
        {
            xclass: 'Admin.view.navigation.NavigationView',
            dock: 'left',
            reference: 'navigationTreeList',
            itemId: 'navigationTreeList',
            ui: 'nav',
            bind: {
                width: '{leftWidth}'
            },
            listeners: {
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }
    ],
    layout: 'fit',
    items: [
        {
            xtype: 'container',
            flex: 1,
            reference: 'mainCardPanel',
            cls: 'sencha-dash-right-main-container',
            itemId: 'contentPanel',
            layout: {
                type: 'card',
                anchor: '100%'
            }
        }
    ]
});
