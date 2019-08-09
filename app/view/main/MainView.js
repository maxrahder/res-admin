Ext.define('Admin.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.main.MainViewController',
        'Admin.view.main.MainViewModel',
        'Admin.view.organization.organization.OrganizationView'
    ],
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },

    dockedItems: [
        {
            xtype: 'label',
            cls: 'mainheader',
            docked: 'top',
            bind: {
                html: '{organization.text}'
            }
        }
    ],
    layout: 'fit',
    items: [
        {
            xclass: 'Admin.view.organization.organization.OrganizationView'
        }
    ]
});
