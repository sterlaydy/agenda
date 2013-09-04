Ext.define('agenda.controller.Funcoes', {
    extend: 'Ext.app.Controller',

    stores: ['Funcoes'],

    models: ['Funcao'],

    views: ['funcao.Formulario', 'funcao.Grid'],

    refs: [{
            ref: 'FuncaoForm',
            selector: 'form'
        },{
            ref: 'FuncaoGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
 //           'FuncaoGrid dataview': {
 //               itemdblclick: this.editFuncao
 //           },
            'FuncaoGrid button[action=add]': {
            	click: this.editFuncao
            },
            'FuncaoGrid button[action=delete]': {
                click: this.deleteFuncao
            }
			
            //captura evento edit do row editor
            ,'FuncaoGrid': {
                edit: this.updateFuncao
            }			
            ,'FuncaoGrid': {
                canceledit: this.cancelFuncao
            }				
        });
    }
	
    , editFuncao: function() {
        var grid  = Ext.ComponentQuery.query('FuncaoGrid')[0]; //this.getFreelanceGrid();
        var edit  = grid.getPlugin('funcaoRow');
        var store = this.getFuncoesStore();
        record = Ext.create('agenda.model.Funcao');

        edit.cancelEdit();
        store.insert(0, record);
        edit.startEdit(0, 0);
    }		
	
    , cancelFuncao: function() {	
        var grid  = Ext.ComponentQuery.query('FuncaoGrid')[0]; //this.getFreelanceGrid();
        var edit  = grid.getPlugin('funcaoRow');
        var store = this.getFuncoesStore();
        store.removeAt(0);

        edit.cancelEdit();

    }		
    , updateFuncao: function(editor, context, eOpts) {
        var id = context.record.get('id_funcao') ;
        var record = context.record;
        var store = this.getFuncoesStore();
		

		if ( ! id > 0 ){
			this.getFuncoesStore().add(record);
		}

        store.sync();
        store.load();
    },	
	
    deleteFuncao: function(button) {

    	var grid = this.getFuncaoGrid();
    	var record = grid.getSelectionModel().getSelection();
        var store = this.getFuncoesStore();

	    store.remove(record);
	    store.sync();

        //faz reload para atualziar
        store.load();
    }
});