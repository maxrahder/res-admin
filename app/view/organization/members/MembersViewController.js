Ext.define('Admin.view.organization.members.MembersViewController', {
    extend: 'Ext.app.ViewController',

    initViewModel: function(vm) {
        this.onSelectionChange(null, []);
        this.lookup('filter').on(
            'change',
            Ext.Function.createBuffered(this.onFilterChange, 500, this)
        );
        this.lookup('effective').on('change', this.onFilterChange, this);
    },
    onClearFilter: function() {
        this.lookup('filter').setValue('');
        this.lookup('effective').setValue(null);
    },

    onFilterChange: function() {
        var value = this.lookup('filter').getValue(),
            effective = this.lookup('effective').getValue();

        effective = effective ? effective.getTime() : 0;
        // The user typed something in the filter field.
        // It could be a name, or a student ID.
        // If the string contains a number, assume it's a student ID.
        // Otherwise, do slightly different things if there are one,
        // two or three strings in the search. Always assume the name
        // starts with what the user types. Here's how the code
        // matches first, middle and last name, when the user types
        // one, two or three strings:
        // 1 string. last || first || middle
        // 2 string. (first && last) || (first && middle) || (middle && last)
        // 3 string. first && second && last
        // > 3 words, ignore
        // We also need to fiter on effect date, if one was provided.

        var store = this.getViewModel().get('members');

        // Local functions for each situation.
        function checkEffective(record) {
            if (effective) {
                var data = record.data,
                    from = data.effectiveFrom ? data.effectiveFrom.getTime() : Number.MIN_VALUE,
                    to = data.effectiveTo ? data.effectiveTo.getTime() : Number.MAX_VALUE;

                return effective >= from && effective <= to;
            } else {
                return true;
            }
        }

        function checkOne(record) {
            var data = record.data,
                result =
                    data.lastLower.indexOf(words[0]) === 0 ||
                    data.firstLower.indexOf(words[0]) === 0 ||
                    data.middleLower.indexOf(words[0]) === 0;

            return result && checkEffective(record);
        }

        function checkTwo(record) {
            var data = record.data,
                result =
                    (data.firstLower.indexOf(words[0]) === 0 &&
                        data.lastLower.indexOf(words[1]) === 0) ||
                    (data.firstLower.indexOf(words[0]) === 0 &&
                        data.middleLower.indexOf(words[1]) === 0) ||
                    (data.middleLower.indexOf(words[0]) === 0 &&
                        data.lastLower.indexOf(words[1]) === 0);

            if (result) {
                console.log(record.data);
            }

            return result && checkEffective(record);
        }

        function checkThree(record) {
            var data = record.data,
                result =
                    data.firstLower.indexOf(words[0]) === 0 &&
                    data.middleLower.indexOf(words[1]) === 0 &&
                    data.lastLower.indexOf(words[2]) === 0;

            return result && checkEffective(record);
        }
        var lengthFunctions = [null, checkOne, checkTwo, checkThree];

        function checkStudentId(record) {
            var data = record.data;

            return data.studentId.toLowerCase().indexOf(value) === 0;
        }

        // Clear the filter, then re-filter based on the rules described
        // above.
        store.clearFilter();
        value = value.trim().toLowerCase();
        var words = value.split(' ');

        // If there is a value, and no more than three words, then filter.
        // Else show all records.
        if (value || words.length <= 3) {
            var fn = value.match(/\d/) ? checkStudentId : lengthFunctions[words.length];

            if (fn) {
                store.filterBy(fn);
            }
        }
    },

    onSelectionChange: function(store, records) {
        console.log('onSelectionChange');
        this.getViewModel().set('selectedCount', records.length);
    },

    onMemberAdd: function() {
        console.log('onMemberAdd');
    },
    onExport: function() {
        console.log('onExport');
    },
    onIdCards: function() {
        console.log('    },');
    }
});
