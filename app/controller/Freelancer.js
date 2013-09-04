Ext.define('agenda.controller.Freelancer', {
    extend: 'Ext.app.Controller',

    stores: ['Freelance'
            , 'FreelanceAgenda'
            , 'DiaSemanaStore'
            , 'FreelanceAgExc'
            ],

    models: ['Freelance'
                , 'FreelanceAgenda'
                , 'FreelanceAgExc'
            ] ,

    views: ['freelance.FreelanceAgendaGrid'
            , 'freelance.FreelanceGrid'
            , 'freelance.FreelanceAgExcGrid'
           ],

    refs: [{
            ref: 'FreelanceGrid',
            selector: 'freelanceGrid'
        },{
            ref: 'FreelanceAgendaGrid',
            selector: 'freelanceAgendaGrid'
        },{
             ref: 'FreelanceAgExcGrid',
             selector: 'freelanceAgExcGrid'
         }

    ],

    init: function() {

        // seta listner para o evento Load do Store
        this.getFreelanceStore().addListener('load',this.loadGrid, this);

        this.control({

            'FreelanceGrid dataview': {
                itemclick: this.atualizaGridAgenda
            }

            ,'diaSemanaCombo combobox': {
                render: this.mensagem
            }
            ,
            'FreelanceGrid button[action=add]': {
                click: this.editFreelance
            },
            'FreelanceGrid button[action=delete]': {
                click: this.deleteFreelance
            },
            //captura evento edit do row editor
            'FreelanceGrid': {
                edit: this.updateFreelance
            }
//FreelanceAgendaGrid
            ,
            'FreelanceAgendaGrid button[action=add]': {
                click: this.editFreelanceAgenda
            },
            'FreelanceAgendaGrid button[action=delete]': {
                click: this.deleteFreelanceAgenda
            },
            //captura evento edit do row editor
            'FreelanceAgendaGrid': {
                edit: this.updateFreelanceAgenda
            }

//FreelanceAgExcGrid
            ,
            'FreelanceAgExcGrid button[action=add]': {
                click: this.editFreelanceAgExc
            },
            'FreelanceAgExcGrid button[action=delete]': {
                click: this.deleteFreelanceAgExc
            },
            //captura evento edit do row editor
            'FreelanceAgExcGrid': {
                edit: this.updateFreelanceAgExc
            }

        });
    }

    ,mensagem: function(){
        alert('oi');
    }

    ,loadGrid: function(grid, record){
		//alert('oi');
		if ( record[0] != undefined){
			this.reloadAgendaStore( record[0].data.id_freelance );
		}
	}

    ,atualizaGridAgenda: function(grid, record){
        this.reloadAgendaStore( record.data.id_freelance );
    }

    ,reloadAgendaStore: function(id) {
        var store = this.getFreelanceAgendaStore();
        var store2 = this.getFreelanceAgExcStore();

		store.filter('id_freelance', id);
		store2.filter('id_freelance', id);

/*		
        store.proxy.extraParams = {id_freelance : id};

        store2.proxy.extraParams = {id_freelance : id};
*/		
			store.load();
	        store2.load();

    }

    , editFreelance: function() {
        var grid  = Ext.ComponentQuery.query('FreelanceGrid')[0]; //this.getFreelanceGrid();
        var edit = grid.getPlugin('freelanceRow');
        var store = this.getFreelanceStore();

        edit.cancelEdit();

        record = Ext.create('agenda.model.Freelance');
        store.insert(0, record);

        edit.startEdit(0, 0);
    }

    ,updateFreelance: function(editor, context) {
        var id_freelance = context.record.get('id_freelance') ;
        var record = context.record;
        var store = this.getFreelanceStore();
		
		alert(id_freelance);
		//alert(record);

		if ( ! id_freelance > 0 ){
			store.add(record);
		}

        store.sync();
	  	store.load();
    },

    deleteFreelance: function(button) {

    	var grid = this.getFreelanceGrid();
    	var record = grid.getSelectionModel().getSelection();
        var store = this.getFreelanceStore();

	    store.remove(record);
	    this.getFreelanceStore().sync();

        //faz reload para atualziar
        this.getFreelanceStore().load();
    }


/*

    , editFreelance: function() {
        var grid  = Ext.ComponentQuery.query('FreelanceGrid')[0]; //this.getFreelanceGrid();
        var edit = grid.getPlugin('freelanceRow');
        var store = this.getFreelanceStore();

        edit.cancelEdit();

        record = Ext.create('agenda.model.Freelance');
        store.insert(0, record);

        edit.startEdit(0, 0);
    }

    ,updateFreelance: function(editor, context, eOpts) {
        var id_freelance = context.record.get('id_freelance') ;
        var record = context.record;
        var store = this.getFreelanceStore();

		if ( ! id_freelance > 0 ){
			this.getFreelanceStore().add(record);
		}

        store.sync();

        store.load();
    },

    deleteFreelance: function(button) {

    	var grid = this.getFreelanceGrid();
    	var record = grid.getSelectionModel().getSelection();
        var store = this.getFreelanceStore();

	    store.remove(record);
	    store.sync();

        //faz reload para atualziar
        store.load();
    }
*/
});