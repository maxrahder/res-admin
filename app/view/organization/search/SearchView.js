Ext.define('Admin.view.organization.search.SearchView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.organization.search.SearchViewModel',
        'Admin.view.organization.search.SearchViewController',
        'Admin.view.organization.search.CriteriaView'
    ],
    controller: {
        xclass: 'Admin.view.organization.search.SearchViewController'
    },
    viewModel: {
        xclass: 'Admin.view.organization.search.SearchViewModel'
    },
    layout: 'fit',
    dockedItems:[{
        xclass: 'Admin.view.organization.search.CriteriaView'
    }],
    items: []
});
