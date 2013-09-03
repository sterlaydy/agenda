Ext.define('agenda.view.freelance.FreelanceGrid' ,{
    extend: 'Ext.grid.Panel'
    ,alias : 'widget.FreelanceGrid'
    ,requires: ['Ext.toolbar.Paging', 'Ext.grid.plugin.RowEditing']

    ,iconCls: 'icon-grid'
    ,margins: '0 5 0 0'
    ,title : 'Cadastro de freelancers',
    store: 'Freelance',
   // height:'100%',
    plugins: [{
        ptype: 'rowediting',
        clicksToEdit: 2,
        clicksToMoveEditor: 2,
        autoCancel: false,
        pluginId: 'freelanceRow'
    }],

    columns: [
        {
            text: "Id Freelance",
            flex:1,
            hidden: true,
            menuDisabled: true,
            dataIndex: 'id_freelance',
            summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<span style="font-size:12px">' + Ext.String.format('{0} freelancer {1}', value, value !== 1 ? 's' : '') + '</span>';
            }
        },
        {
            text: "Nome",
            width: 200,
            menuDisabled: true,
            dataIndex: 'nome',
            align:'left'
            ,editor: {
                 xtype: 'textfield'
            }
        },
        {
            text: "Email",
            width: 150,
            menuDisabled: true,
            dataIndex: 'email',
            align:'left'
            ,editor: {
                 xtype: 'textfield'            }
        }
		,{
            text: "Celular 1",
            width: 80,
            dataIndex: 'celular1',
            align:'left',
            menuDisabled: true
            ,editor: {
                 xtype: 'textfield'
            }
        },
        {
            text: "Aniversário",
            width: 110,
            menuDisabled: true,
            xtype: 'datecolumn',
            format: 'd/m/Y',
            dataIndex: 'dt_nasc',
            align:'left'
            ,editor: {
                 xtype: 'datefield'
                 ,format: 'd/m/Y'
                ,minValue: '01/01/1900'
                ,maxValue: Ext.Date.format(new Date(), 'd/m/Y')
            }
        },
        {
            text: "Facebook",
            width: 100,
            dataIndex: 'facebook',
            menuDisabled: true,
            align:'left'
            ,editor: {
                 xtype: 'textfield'
            }

        },
        {
            text: "Twitter",
            width: 100,
            dataIndex: 'twitter',
            align:'left',
            menuDisabled: true
            ,editor: {
                 xtype: 'textfield'
            }
        }
        ,{
            text: "Fone",
            width: 80,
            dataIndex: 'fone',
            align:'left',
            menuDisabled: true
            ,editor: {
                 xtype: 'textfield'
            }
        }
        ,{
            text: "Celular 2",
            width: 80,
            dataIndex: 'celular2',
            align:'left',
            menuDisabled: true
            ,editor: {
                 xtype: 'textfield'
            }
        }
        ,{
            text: "Fone Rec.",
            width: 80,
            dataIndex: 'fone_recado',
            align:'left',
            menuDisabled: true
            ,editor: {
                 xtype: 'textfield'
            }
        }
        ,{
            text: "Ativo",
            width: 60,
            dataIndex: 'ativo',
            align:'left',
            checked   : 1,
            menuDisabled: true
            ,editor: {
                 xtype: 'checkboxfield'
            }
        }
    ]

    ,initComponent: function() {

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
        }

        ,{
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Freelance',
            displayInfo: true,
            displayMsg: 'Mostrando Frelancers {0} - {1} de {2}',
            emptyMsg: "Nenhum freelancer encontrado."
        }];

        this.callParent(arguments);
    }
});
