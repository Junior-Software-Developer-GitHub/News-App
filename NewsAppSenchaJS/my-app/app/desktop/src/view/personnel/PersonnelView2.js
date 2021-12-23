Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},

    cls: 'personnelview',

    constructor: function() {
        Ext.apply(this, {
        
            listeners: {
                canceledit: 'onEditCancelled'
            },
            store: Ext.create('MyExtGenApp.store.Article', {
                listeners: {
                    load: function(me, records, successful, operation, eOpts) {
                        console.log(records);
                    }
                }
            })
        });
        this.callParent(arguments);
    },

    initComponent: function() {
        
        this.callParent(arguments);
    }
});
