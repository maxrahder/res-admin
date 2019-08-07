Ext.define('Admin.view.navigation.NavigationView', {
    extend: 'Ext.list.Tree',

    requires: [
        'Admin.view.navigation.NavigationViewController',
        'Admin.view.navigation.NavigationViewModel',
        'Ext.list.Tree'
    ],

    controller: 'navigation-navigationview',
    viewModel: {
        type: 'navigation-navigationview'
    },

    ui: 'nav',

    expanderFirst: false,
    expanderOnly: false,

    fields: [
        {
            name: 'text'
        }
    ],

    store: {
        root: {
            expanded: true,
            children: [
                {
                    text: 'Programs',
                    iconCls: 'x-fa fa-desktop',
                    rowCls: 'nav-tree-badge nav-tree-badge-new',
                    route: 'programs', // routeId defaults to viewType
                    leaf: true
                },
                {
                    text: 'Payments',
                    iconCls: 'x-fa fa-bank',
                    rowCls: 'nav-tree-badge nav-tree-badge-hot',
                    route: 'payments',
                    leaf: true
                },
                // {
                //     text: 'Profile',
                //     iconCls: 'x-fa fa-user',
                //     viewType: 'profile',
                //     leaf: true
                // },
                // {
                //     text: 'Search results',
                //     iconCls: 'x-fa fa-search',
                //     viewType: 'searchresults',
                //     leaf: true
                // },
                // {
                //     text: 'FAQ',
                //     iconCls: 'x-fa fa-question',
                //     viewType: 'faq',
                //     leaf: true
                // },
                // {
                //     text: 'Pages',
                //     iconCls: 'x-fa fa-leanpub',
                //     expanded: false,
                //     selectable: false,
                //     // routeId: 'pages-parent',
                //     // id: 'pages-parent',

                //     children: [
                //         {
                //             text: 'Blank Page',
                //             iconCls: 'x-fa fa-file-o',
                //             viewType: 'pageblank',
                //             leaf: true
                //         },

                //         {
                //             text: '404 Error',
                //             iconCls: 'x-fa fa-exclamation-triangle',
                //             viewType: 'page404',
                //             leaf: true
                //         },
                //         {
                //             text: '500 Error',
                //             iconCls: 'x-fa fa-times-circle',
                //             viewType: 'page500',
                //             leaf: true
                //         },
                //         {
                //             text: 'Lock Screen',
                //             iconCls: 'x-fa fa-lock',
                //             viewType: 'lockscreen',
                //             leaf: true
                //         },

                //         {
                //             text: 'Login',
                //             iconCls: 'x-fa fa-check',
                //             viewType: 'login',
                //             leaf: true
                //         },
                //         {
                //             text: 'Register',
                //             iconCls: 'x-fa fa-pencil-square-o',
                //             viewType: 'register',
                //             leaf: true
                //         },
                //         {
                //             text: 'Password Reset',
                //             iconCls: 'x-fa fa-lightbulb-o',
                //             viewType: 'passwordreset',
                //             leaf: true
                //         }
                //     ]
                // },
                // {
                //     text: 'Widgets',
                //     iconCls: 'x-fa fa-flask',
                //     viewType: 'widgets',
                //     leaf: true
                // },
                {
                    text: 'Library',
                    iconCls: 'x-fa fa-book',
                    route: 'library',
                    leaf: true
                }
            ]
        }
    }
});
