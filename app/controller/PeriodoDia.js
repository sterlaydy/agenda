Ext.define('agenda.controller.PeriodoDia', {
    extend: 'Ext.app.Controller',

    stores: ['PeriodosDia'],

    models: ['PeriodoDia'],

    views: ['periododia.Formulario', 'periododia.Grid'],

    refs: [{
            ref: 'PeriodoDiaForm',
            selector: 'form'
        },{
            ref: 'PeriodoDiaGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
 //           'PeriodoDiaGrid dataview': {
 //               itemdblclick: this.editPeriodoDia
 //           },
            'PeriodoDiaGrid button[action=add]': {
            	click: this.editPeriodoDia
            },
            'PeriodoDiaGrid button[action=delete]': {
                click: this.deletePeriodoDia
            }
            //captura evento edit do row editor
            ,'PeriodoDiaGrid': {
                edit: this.updatePeriodoDia
            }			
            ,'PeriodoDiaGrid': {
                canceledit: this.cancelPeriodoDia
            }			
        });
    },
	
    editPeriodoDia: function() {
        var grid  = Ext.ComponentQuery.query('PeriodoDiaGrid')[0]; //this.getFreelanceGrid();
        var edit  = grid.getPlugin('periodoRow');
        var store = this.getPeriodosDiaStore();
        record = Ext.create('agenda.model.PeriodoDia');

        edit.cancelEdit();
        store.insert(0, record);
        edit.startEdit(0, 0);
    }	
	
    , cancelPeriodoDia: function() {	
        var grid  = Ext.ComponentQuery.query('PeriodoDiaGrid')[0]; //this.getFreelanceGrid();
        var edit  = grid.getPlugin('periodoRow');
        var store = this.getPeriodosDiaStore();
        store.removeAt(0);
        edit.cancelEdit();

    }
	
    , updatePeriodoDia: function(editor, context, eOpts) {
        var id = context.record.get('id_periododia') ;
        var record = context.record;
        var store = this.getPeriodosDiaStore();

		if ( ! id > 0 ){
			this.getPeriodosDiaStore().add(record);
		}

        store.sync();
        store.load();
    }
	
	, deletePeriodoDia: function(button) {

    	var grid = this.getPeriodoDiaGrid();
    	var record = grid.getSelectionModel().getSelection();
        var store = this.getPeriodosDiaStore();

	    store.remove(record);
	    store.sync();

        //faz reload para atualziar
        store.load();
    }
});