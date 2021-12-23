Ext.define('MyExtGenApp.store.Article', {
    extend: 'Ext.data.Store',

    alias: 'store.articleStore',
    model: 'MyExtGenApp.model.Article',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/get',
        reader: { 
            type: 'json',
            rootProperty: 'data',
        }
    },
    autoLoad: true
})