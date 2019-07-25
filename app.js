/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Admin.Application',
    name: 'Admin',
    requires: ['Admin.view.main.MainView'],
    mainView: 'Admin.view.main.MainView'
});
