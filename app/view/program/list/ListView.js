
Ext.define('Admin.view.program.list.ListView',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Admin.view.program.list.ListViewController',
        'Admin.view.program.list.ListViewModel'
    ],

    controller: 'program-list-listview',
    viewModel: {
        type: 'program-list-listview'
    },

    html: 'Hello, World!!'
});
