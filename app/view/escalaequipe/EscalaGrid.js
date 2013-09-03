Ext.define('agenda.view.escalaequipe.EscalaGrid', {
    extend: 'Ext.panel.Panel'
    ,alias: 'widget.EscalaGrid'
    ,requires: [
        'Ext.grid.*',
        'Ext.layout.container.HBox'    ],
    xtype: 'dd-grid-to-grid',


    width: 650,
    height: 300,
    layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 5
    },


    initComponent: function(){
        var group1 = this.id + 'group1',
            group2 = this.id + 'group2',
            columns = [{
                text: 'Id_Freelance',
                flex: 1,
                sortable: true,
                dataIndex: 'id_freelance'
                ,hidden:'true'
            }, {
                text: 'Freelance',
                width: 80,
                sortable: true,
                dataIndex: 'nome'
            }];

        this.items = [
         {
            itemId: 'FiltroEscalaPanel',
            xtype: 'FiltroEscalaPanel',
            flex: 1
           ,margins: '0 10 0 0'

         }
        ,{
            itemId: 'FreelanceEscalaGrid',
            flex: 1,
            xtype: 'grid',
            multiSelect: true,
                viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    dragGroup: group1,
                    dropGroup: group2
                }

                /* ,listeners: {
                    drop: function(node, data, dropRec, dropPosition) {
                        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                        Ext.example.msg('Drag from right to left', 'Dropped ' + data.records[0].get('name') + dropOn);
                    }
                }    */
            },
            store:  'FreelanceEscala',
            columns: columns,
            stripeRows: true,
            title: 'Freelancers Disponíveis',
            tools: [{
                type: 'refresh',
                tooltip: 'Reset both grids',
                scope: this,
                handler: this.onResetClick
            }],
            margins: '0 5 0 0'
        }, {
            itemId: 'FreelanceSelecionadoGrid',
            flex: 1,
            xtype: 'grid',
            viewConfig: {
                plugins: {
                    ptype: 'gridviewdragdrop',
                    dragGroup: group2,
                    dropGroup: group1
                }
                /* ,listeners: {
                    drop: function(node, data, dropRec, dropPosition) {
                        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
                        Ext.example.msg('Drag from left to right', 'Dropped ' + data.records[0].get('name') + dropOn);
                    }
                }  */
            },
            store:  'FreelanceEscalaSelecionado',
            columns: columns,
            stripeRows: true,
            title: 'Freelancers Selecionados'
        }];

        this.callParent();
    },

    onResetClick: function(){
        //refresh source grid
        this.down('#FreelanceEscalaGrid').getStore().loadData();

        //purge destination grid
        this.down('#FreelanceSelecionadoGrid').getStore().removeAll();
    }
});