Ext.define('MyExtGenApp.model.Article', {
    extend: 'Ext.data.Model',
    alias: 'model.articleModel',
    fields: [
        {name: 'Id', type: 'string'},
        {name: 'Title', type: 'string'},
        {name: 'Content', mapping: 'Content', type: 'string'},
        {name: 'CreatedDate', type: 'date'},
        {name: 'PublishedDate', type: 'date'},
        {name: 'Subtitle', type: 'string'}
    ]
})