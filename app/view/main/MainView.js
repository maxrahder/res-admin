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
            reference: 'navigation',
            ui: 'nav',
            bind: {
                width: '{leftWidth}'
            },
            listeners: {
                selectionchange: 'onNavigationSelectionChange'
            }
        }
    ],
    layout: 'card',
    items: []
});
