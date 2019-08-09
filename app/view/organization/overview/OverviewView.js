Ext.define('Admin.view.organization.overview.OverviewView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Admin.view.organization.overview.OverviewViewController',
        'Admin.view.organization.overview.OverviewViewModel',
        'Ext.chart.theme.GreenGradients'
    ],
    controller: {
        xclass: 'Admin.view.organization.overview.OverviewViewController'
    },
    viewModel: {
        xclass: 'Admin.view.organization.overview.OverviewViewModel'
    },
    defaults: {
        flex: 1
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'polar',
            theme: 'green-gradients',
            legend: true,
            margin: 24,
            series: [
                {
                    type: 'pie',
                    innerPadding: 60,
                    angleField: 'count',
                    rotation: 143,
                    label: {
                        // display: 'none',
                        field: 'programCode'
                    }
                }
            ],
            bind: {
                store: '{programs}'
            }
        },
        {
            xtype: 'grid',
            margin: 8,
            title: 'Recent Activity',
            bind: {
                store: '{recentActivity}'
            },
            columns: [
                {
                    xtype: 'datecolumn',
                    format: 'M j, Y',
                    dataIndex: 'when',
                    width: 100
                },
                {
                    dataIndex: 'who',
                    flex: 1
                },
                {
                    dataIndex: 'what',
                    flex: 1
                }
            ]
        }
    ]
});
