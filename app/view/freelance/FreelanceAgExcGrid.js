Ext.define('agenda.view.freelance.FreelanceAgExcGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.FreelanceAgExcGrid',

    requires: ['Ext.toolbar.Paging', 'Ext.grid.plugin.RowEditing'],

    iconCls: 'icon-grid',

    title : 'Exceções',
    store: 'FreelanceAgExc',

    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        clicksToMoveEditor: 2,
        autoCancel: false
        //        listeners: {
        //             canceledit: function(view){
        //                 view.grid.fireEvent('canceledit', this);
        //             }
        //        }
    }],

    height:'100%',
    columns: [
        {
            text: "ID"
        	,hidden: true
           , dataIndex: 'idfreelance_agenda_excecao'
        },

        {
            text: "Dt.Exceção",
            dataIndex: 'dt_excecao'
            ,editor: {
                xtype: 'datefield'
            }
        },

        {
            text: "Periodo",
            dataIndex: 'id_periodo_dia'
            ,editor: {
                xtype: 'textfield'
            }
        },
        {
            text: "Comentário",
            dataIndex: 'comentario'
            ,editor: {
                xtype: 'textfield'
            }
        },

        {
            text: "Freelance"
        	,hidden: true
            ,dataIndex: 'id_freelance'
            ,editor: {
                xtype: 'textfield'
            }

        }
    ]

    ,initComponent: function() {

    this.dockedItems = [{
         xtype: 'toolbar',
         items: [{
             iconCls: 'icon-save',
             itemId: 'add',
            // text: 'Adicionar',
             action: 'add'
         },{
             iconCls: 'icon-delete',
             //text: 'Excluir',
             action: 'delete'
         }]
     } ];

    this.callParent(arguments);
    }
});