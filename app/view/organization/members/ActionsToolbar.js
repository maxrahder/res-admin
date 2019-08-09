/**
* Toolbar with count and selectedCount configs. If you run the corresponding
* setter (or bind), the toolbar shows the member could and how many records
* are selected. The toolbar also has three buttons: Add, Export and (download)
* ID cards. The export and ID cards options are disabled when zero records are
* selected. The toolbar fires three events:
* - addmember
* - export
* - idcards
* The toolbar is pretty dumb -- it only knows about the two config properties
* (and doesn't know about any stores or grids), and the events simply reflect
* a user clicking on the corresponding buttons.
*/
Ext.define('Admin.view.organization.members.ActionsToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'actionstoolbar',
    renderConfig: {
        count: null,
        selectedCount: null
    },
    referenceHolder: true,
    applyCount: function (count) {
        return (count == null) ? 0 : count;
    },
    updateCount: function (count) {
        this.lookup('countLabel').setData({
            count: count
        });
    },
    applySelectedCount: function (count) {
        return (count == null) ? 0 : count;
    },
    updateSelectedCount: function (selected) {
        console.log('updateSelectedCount', selected);
        var disabled = (selected === 0);
        this.lookup('exportbutton').setDisabled(disabled);
        this.lookup('idcardsbutton').setDisabled(disabled);
        this.lookup('selected').setData({
            color: (disabled ? 'lightgray' : 'black'),
            count: selected
        })
    },
    defaults: {
        scale: 'large'
    },
    items: [{
        xtype: 'label',
        margin: '0 8 0 8',
        tpl: '<h2>{count:number("0,000")} members.</h2>',
        reference: 'countLabel'
    }, {
        tooltip: 'Add member',
        margin: '0 32 0 8',
        iconCls: 'x-fa x-green fa-plus-circle'
    }, {
        xtype: 'label',
        reference: 'selected',
        tpl: '<h2 style="color:{color}">{count:number("0,000")} members selected.</h2>'
    }, {
        iconCls: 'x-fa fa-download',
        reference: 'exportbutton',
        tooltip: 'Export'
    }, {
        iconCls: 'x-fa fa-id-card-o',
        reference: 'idcardsbutton',
        tooltip: 'Download ID cards'
    }],
    onAddTap: function(){
        this.fireEvent('addmember', this);
    },
    onExportTap: function(){
        this.fireEvent('export', this);
    },
    onIdCardsTap: function(){
        this.fireEvent('idcards', this);
    }
});
