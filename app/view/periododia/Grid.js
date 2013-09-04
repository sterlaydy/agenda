Ext.define('agenda.view.periododia.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.PeriodoDiaGrid',

    requires: ['Ext.toolbar.Paging'],

    iconCls: 'icon-grid',

    title : 'Periodo Dia',
    store: 'PeriodosDia',
	
	plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        clicksToMoveEditor: 2,
        autoCancel: false,
        pluginId: 'periodoRow'
    }],
	
    columns: [{
    	header: "Descricao",
		width: 170,
		flex:1,
		dataIndex: 'descricao'
		,editor: {
			 xtype: 'textfield'
		}
	}
	],

	initComponent: function() {

		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'PeriodosDia',
            displayInfo: true,
            displayMsg: 'Mostrando Periodos {0} - {1} de {2}',
            emptyMsg: "Nenhum periodo encontrado."
        }];

		this.callParent(arguments);
	}
});