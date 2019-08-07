
Ext.define('Admin.view.recent.RecentView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Admin.view.recent.RecentViewController',
        'Admin.view.recent.RecentViewModel'
    ],

    controller: 'recent-recentview',
    viewModel: {
        type: 'recent-recentview'
    },

    html: 'Hello, World!!'
});
