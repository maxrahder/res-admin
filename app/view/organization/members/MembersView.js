Ext.define('Admin.view.organization.members.MembersView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.organization.members.MembersViewModel',
        'Admin.view.organization.members.MembersViewController',
        'Admin.view.organization.members.ActionsToolbar'
    ],
    controller: {
        xclass: 'Admin.view.organization.members.MembersViewController'
    },
    viewModel: {
        xclass: 'Admin.view.organization.members.MembersViewModel'
    },
    tbar: [{
        xtype: 'textfield',
        emptyText: 'Filter by name or ID',
        width: 160,
        reference: 'filter'
    }, {
        xtype: 'datefield',
        emptyText: 'Effective',
        width: 130,
        reference: 'effective'
    }, {
        xtype: 'button',
        iconCls: 'x-fa fa-close',
        handler: 'onClearFilter',
        tooltip: 'Clear filter'
    },{
        xclass: 'Admin.view.organization.members.ActionsToolbar',
        bind: {
            count: '{count}',
            selectedCount: '{selectedCount}'
        },
        listeners: {
            memberadd: 'onMemberAdd',
            export: 'onExport',
            idcards: 'onIdCards'
        }
    }],
    layout: 'fit',
    items: [{
        xtype: 'grid',
        selModel: {
            type: 'checkboxmodel',
            listeners: {
                selectionchange: 'onSelectionChange'
            }
        },
        columns: [{
            // xtype: 'templatecolumn',
            text: 'Name',
            dataIndex: 'full',
            menuDisabled: true,
            // tpl: '{firstName} {middleName} {LastName}',
            width: 200
        }, {
            dataIndex: 'sex',
            align: 'center',
            30: true,
            width: 28
        }, {
            xtype: 'datecolumn',
            text: 'DOB',
            dataIndex: 'dob',
            menuDisabled: true,
            width: 160,
            format: 'M j, Y'
        }, {
            text: 'Student ID',
            dataIndex: 'studentId',
            menuDisabled: true,
            flex: 1
        }, {
            xtype: 'datecolumn',
            text: 'Effective From',
            dataIndex: 'effectiveFrom',
            menuDisabled: true,
            width: 160,
            format: 'M j, Y'
        }, {
            xtype: 'datecolumn',
            text: 'Effective To',
            dataIndex: 'effectiveTo',
            menuDisabled: true,
            width: 160,
            format: 'M j, Y'
        }],
        bind: {
            store: '{members}'
        }
    }]
});
