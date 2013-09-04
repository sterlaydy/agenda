Ext.define('agenda.view.funcao.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.FuncaoForm',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Editar/Criar Funcao',
    layout: 'fit',
    autoShow: true,
    width: 280,
    
    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
					{
					    xtype: 'textfield',
					    name : 'id_funcao',
					    fieldLabel: 'id_funcao',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'descricao',
                        fieldLabel: 'Descricao'
                    },
                    {
                        xtype: 'textfield',
                        name : 'qtd_festas',
                        fieldLabel: 'Qtd.Festas'
                    },
                    {
                        xtype: 'textfield',
                        name : 'ativo',
                        fieldLabel: 'Ativo'
                    },
                    {
                        xtype: 'textfield',
                        name : 'valor',
                        fieldLabel: 'Valor'
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Salvar',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});