Ext.define('Admin.view.organization.organization.OrganizationViewController', {
    extend: 'Ext.app.ViewController',

    onUpdateStore: function(store) {
        var count = store.getCount();

        this.getViewModel().set('count', count);
    }
});
