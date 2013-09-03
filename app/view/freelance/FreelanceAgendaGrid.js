Ext.define('agenda.view.freelance.FreelanceAgendaGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.FreelanceAgendaGrid',

    requires: ['Ext.toolbar.Paging', 'Ext.grid.plugin.RowEditing'],

    iconCls: 'icon-grid',
    margins: '0 5 0 0'
   , title : 'Disponibilidade',
    store: 'FreelanceAgenda',

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
            text: "iD",
        	hidden: true
           , dataIndex: 'id_freelance_agenda'
        },

        {
            text: "Dia Semana",
            //width: 100,
            dataIndex: 'dia_semana'
            ,editor: {
                xtype: 'combobox',
                store: 'DiaSemanaStore',
                displayField: 'descricao',
                valueField: 'id'
                ,name:'dia_semana'
                ,id:'diaSemanaCombo'
            }

            /*,
            renderer: function(val){
                index = myStore.findExact('id',val);
                if (index != -1){
                    rs = myStore.getAt(index).data;
                    return rs.display;
                }
            } */
        },

        {
            text: "Id Periodo Dia",
            //width: 100,
            dataIndex: 'id_periodo_dia'
        },

        {
            text: "Freelance",
        	hidden: true

            ,dataIndex: 'id_freelance'
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