/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Admin.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    requires: ['Admin.view.organization.overview.OverviewView'],

    navigationXtypeMap: {
        programs: 'organization',
        invoices: 'invoices',
        library: 'library'
    },

    config: {
        currentViewXtype: undefined
    },

    onNavigationSelectionChange: function(component, node) {
        // node = programs | invoices | library
        if (node === 'programs') {
            this.setCurrentView('overviewview');
        }
    },

    updateCurrentViewXtype: function(newXtype, oldXtype){

    },

    setCurrentViewXtype: function(viewXtype, instanceId) {
        // Find the view and make it the active item.
        // Popping up preserves the previous view, but otherwise
        // the previous view is destroyed. For example, going
        // from a member detail back up to the program or
        // organization will 
        // Some old views get destroyed as the user navigates.
        var view = this.getView();
        var found = this.getView().down(viewXtype);
        if (viewXtype === 'overviewview'){
            if (!found){
                found = 
            }
        }
        this.oldView = found;
    }
});
