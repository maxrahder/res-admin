Ext.define('Admin.view.organization.organization.OrganizationViewModel', {
    extend: 'Ext.app.ViewModel',

    stores: {
        members: {
            autoLoad: true,
            sorters: ['last'],
            fields: [
                'studentId',
                'first',
                'middle',
                'last',
                'sex',
                {
                    name: 'dob',
                    type: 'date',
                    dateFormat: 'n/j/Y'
                },
                {
                    name: 'effectiveFrom',
                    type: 'date',
                    dateFormat: 'n/j/Y'
                },
                {
                    name: 'effectiveTo',
                    type: 'date',
                    dateFormat: 'n/j/Y'
                },
                {
                    name: 'full',
                    calculate: function(data) {
                        var s = data.first + ' ' + data.middle + ' ' + data.last;

                        s = s.replace(/\s+/g, ' ').trim();

                        return s;
                    }
                },
                {
                    name: 'firstLower',
                    calculate: function(data) {
                        return data.first.toLowerCase();
                    }
                },
                {
                    name: 'middleLower',
                    calculate: function(data) {
                        return data.middle.toLowerCase();
                    }
                },
                {
                    name: 'lastLower',
                    calculate: function(data) {
                        return data.last.toLowerCase();
                    }
                }
            ],
            proxy: {
                type: 'ajax',
                url: 'resources/data/members.json',
                // url: 'https://s3-us-west-2.amazonaws.com/edu.umich.rahder/res/members.json',
                cors: true,
                useDefaultXhrHeader: false,
                reader: {
                    type: 'array'
                }
            },
            listeners: {
                load: 'onUpdateStore',
                filterchange: 'onUpdateStore'
            }
        },
        programs: {
            data: [
                {
                    rootId: 29088,
                    text: 'Regular Students',
                    count: 2174,
                    programCode: 'MSU'
                },
                {
                    rootId: 29091,
                    text: 'Graduate Assistants',
                    count: 2996,
                    programCode: 'MSUGA'
                },
                {
                    rootId: 29089,
                    text: 'International Students',
                    count: 4309,
                    programCode: 'IMSU'
                },
                {
                    rootId: 29090,
                    text: 'Visiting Scholars',
                    count: 17,
                    programCode: 'MSUVS'
                }
            ]
        },

        recentActivity: {
            sorters: ['when'],
            fields: [
                {
                    name: 'when',
                    type: 'date',
                    dateFormat: 'd/m/Y'
                }
            ],
            data: [
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'Mary Price',
                    what: 'Edited student Binh Chou (A6482942)',
                    when: '01/08/2019'
                },
                {
                    who: 'Mary Price',
                    what: 'Terminated student Lingshang Wang (A7234688)',
                    when: '29/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '29/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '29/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '29/07/2019'
                },
                {
                    who: 'Mary Price',
                    what: 'Edited student John Smith (A7234688)',
                    when: '28/07/2019'
                },
                {
                    who: 'Mary Price',
                    what: 'Edited student John Smith (A7234688)',
                    when: '28/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '28/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '28/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '28/07/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'Mary Price',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                },
                {
                    who: 'You',
                    what: 'Edited student John Smith (A7234688)',
                    when: '01/08/2019'
                }
            ]
        }
    }
});
