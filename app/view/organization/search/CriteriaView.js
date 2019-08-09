Ext.define('Admin.view.organization.search.CriteriaView', {
    extend: 'Ext.form.Panel',

    padding: 12,
    defaults: {
        flex: 1
    },
    layout: 'hbox',
    items: [{
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Name',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'firstName',
                margin: '0 4 0 0',
                width: 100
            }, {
                xtype: 'textfield',
                name: 'middleName',
                margin: '0 4 0 0',
                width: 24
            }, {
                xtype: 'textfield',
                name: 'lastName',
                width: 100
            }]
        }, {
            xtype: 'textfield',
            fieldLabel: 'Address Line 1',
            name: 'address1'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Address Line 2',
            name: 'address2'
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'City, State Zip',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                name: 'city',
                margin: '0 4 0 0',
                width: 100
            }, {
                xtype: 'textfield',
                name: 'state',
                margin: '0 4 0 0',
                width: 32
            }, {
                xtype: 'label',
                html: ','
            }, {
                xtype: 'textfield',
                name: 'zip',
                width: 80
            }]
        }]
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: 'Date of birth',
        layout: 'vbox',
        defaults: {
            labelWidth: 36,
            width: 200
        },
        items: [{
            xtype: 'datefield',
            fieldLabel: 'From'
        }, {
            xtype: 'datefield',
            fieldLabel: 'To'
        }]
    },{
        xtype: 'checkboxfield',
        fieldLabel: 'Include inactive'
    }]
});
