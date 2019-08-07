Ext.define('Admin.view.program.list.ListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.program-list-listview',
    data: {
        name: 'Admin'
    },
    stores: {
        programList: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: Admin.url('ProgramView/List'),
                reader: {
                    type: 'json',
                    rootProperty: 'rows',
                    totalProperty: 'totalRecordCount'
                },
                listeners: {
                    // exception: {
                    //     fn: me.onAjaxException,
                    //     scope: me
                    // }
                }
            }
        }
    }
});
