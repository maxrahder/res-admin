
Ext.define('Admin.view.organization.overview.OverviewView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Admin.view.organization.overview.OverviewViewController',
        'Admin.view.organization.overview.OverviewViewModel'
    ],

    controller: 'organization-overview-overviewview',
    viewModel: {
        type: 'organization-overview-overviewview'
    },

    html: 'Hello, World!!'
});
