Ext.define('Admin.view.organization.overview.OverviewView', {
    extend: 'Ext.panel.Panel',
    xtype: 'overviewview',

    requires: [
        'Admin.view.organization.overview.OverviewViewController',
        'Admin.view.organization.overview.OverviewViewModel',
        'Admin.view.program.list.ListView'
    ],

    controller: 'organization-overview-overviewview',
    viewModel: {
        type: 'organization-overview-overviewview'
    },

    layout: 'fit',
    items: [
        {
            xclass: 'Admin.view.program.list.ListView'
        }
    ]
});
