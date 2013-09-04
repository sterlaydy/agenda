Ext.define('agenda.view.funcao.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.FuncaoGrid',

    requires: ['Ext.toolbar.Paging', 'Ext.grid.plugin.RowEditing'],

    iconCls: 'icon-grid'
    ,title : 'Funcoes',
    store: 'Funcoes',
    
	plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        clicksToMoveEditor: 2,
        autoCancel: false,
        pluginId: 'funcaoRow'
    }],
	
    columns: [{
    	header: "Descricao",
		width: 170,
		flex:1,
		dataIndex: 'descricao'
		,editor: {
			 xtype: 'textfield'
		}		
	},
	{
		header: "Qtd.Festas",
		width: 50,
		flex:1,
		dataIndex: 'qtd_festas'
		,editor: {
			 xtype: 'textfield'
		}		
	},

	{
		header: "Vlr/Festa",
		width: 50,
		flex:1,
		dataIndex: 'valor'
		,editor: {
			 xtype: 'textfield'
		}
		
	}
	,	{
		header: "Ativo",
		width: 30,
		flex:1,
		dataIndex: 'ativo'
		,editor: {
			 xtype: 'checkboxfield'
			 ,inputValue: 'S' 
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
            store: 'Funcoes',
            displayInfo: true,
            displayMsg: 'Mostrando Funções {0} - {1} de {2}',
            emptyMsg: "Nenhuma função encontrada."
        }];

		this.callParent(arguments);
	}
});