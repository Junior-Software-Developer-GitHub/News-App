Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: Ext.create('MyExtGenApp.store.Article', {
        listeners: {
            load: function(me, records, successful, operation, eOpts) {
                console.log(records);
            }
        }
    }),
    grouped: true,
    groupFooter: {
        xtype: 'gridsummaryrow'
    },
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Id',
            dataIndex: 'Id',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'},
        },
        {
            
            text: 'Title',
            dataIndex: 'Title',
            editable: true, 
            width: 130
        },
        {
            text: 'Subtitle',
            dataIndex: 'Subtitle',
            editable: true, 
            width: 130
        },
        {
            text: 'Content',
            dataIndex: 'Content',
            editable: true, 
            width: 130
        },
        {
            text: 'Created date',
            dataIndex: 'CreatedDate',
            editable: true, 
            width: 230
        },
        {
            text: 'Published date',
            dataIndex: 'PublishedDate',
            editable: true, 
            width: 230
        },
        {
            xtype: 'checkcolumn',
            dataIndex: 'checkBox',
            sortable:false,
            editable: true,
            text: 'Delete',
            align: 'center',
            
            listeners:{
                checkchange:function(grid, location){
                    if (confirm('Are you sure you want to delete this article?')) {
                        let id = grid._record.data.Id;
                        alert("Article is deleted successfully!");
                        Ext.Ajax.request({
                            url: 'http://localhost:8080/delete/' + id,
                            method: 'DELETE',
                            
                            success: function(response, opts) {
                                console.log("SUCCESS!");
                                window.location.reload();
                            },
                       
                            failure: function(response, opts) {
                                console.log('server-side failure with status code ' + response.status);
                                window.location.href='http://localhost:1962/#personnelview';

                            },
                            function(){
                                window.location.href='http://localhost:1962/#personnelview';
                            }

                        });
                      } else {
                            return;
                      }
                    
                }
            }
        }
    ],
    listeners: {
        edit: function(grid, location) {
            let record = location.record;
            let id = record.get('Id');
            let title = record.get('Title');
            let subtitle = record.get('Subtitle');
            let content = record.get('Content');
            let createdDate = record.get('CreatedDate');
            let publishedDate = record.get('PublishedDate');
            console.log(location);

            if(title === "" || subtitle === "" || content === "" || createdDate === null || publishedDate === null){
                alert("fill each field!");
                return;
            }
            Ext.Ajax.request({
                url: 'http://localhost:8080/edit',
                jsonData: {
                    Id: id,
                    Title: title,
                    Subtitle: subtitle,
                    Content: content,
                    CreatedDate: createdDate,
                    PublishedDate: publishedDate
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    alert("Article is edited successfully!");
                    console.dir(obj);
                    return;
                },
           
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                    return;
                }
                
            });
        }
    }
});
