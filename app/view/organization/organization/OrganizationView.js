Ext.define('Admin.view.organization.organization.OrganizationView', {
    xtype: 'organizationview',
    extend: 'Ext.tab.Panel',
    requires: [
        'Admin.view.organization.organization.OrganizationViewModel',
        'Admin.view.organization.organization.OrganizationViewController',
        'Admin.view.organization.members.MembersView',
        'Admin.view.organization.overview.OverviewView',
        'Admin.view.organization.search.SearchView'
    ],
    controller: {
        xclass: 'Admin.view.organization.organization.OrganizationViewController'
    },
    viewModel: {
        xclass: 'Admin.view.organization.organization.OrganizationViewModel'
    },
    // activeTab: 2,
    items: [{
        xclass: 'Admin.view.organization.overview.OverviewView',
        title: 'Overview'
    }, {
        xclass: 'Admin.view.organization.members.MembersView',
        title: 'Active Members'
    }, {
        xclass: 'Admin.view.organization.search.SearchView',
        title: 'Advanced Search'
    }]
});
