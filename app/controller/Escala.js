Ext.define('agenda.controller.Escala', {
    extend: 'Ext.app.Controller',

    stores: ['FreelanceEscala', 'FreelanceEscalaSelecionado', 'DiaSemanaStore', 'EventosEscala'],

    models: ['Freelance'],

    views: ['escalaequipe.EscalaGrid','escalaequipe.FiltroEscalaPanel' ],

    refs: [{
            ref: 'EscalaGrid',
            selector: 'escalaGrid'  ,

            ref: 'FiltroEscalaPanel',
            selector: 'filtroEscalaPanel'
        }
    ],

    init: function() {
	
        this.control({
            'FiltroEscalaPanel datefield': {
                select: this.loadEventos
            }



            /*
            ,'funcaoCombo combobox': {
                select : this.mensagem
            }
            ,'eventoCombo combobox': {
                select : this.mensagem
            }
            'FreelanceGrid button[action=add]': {
                click: this.editFreelance
            },
            'FreelanceGrid button[action=delete]': {
                click: this.deleteFreelance
            },
            //captura evento edit do row editor
            'FreelanceGrid': {
                edit: this.updateFreelance
            }*/
        });
    }

    ,mensagem: function(){
        alert('oi');
    }
	
    ,loadEventos: function(field, value, eOpts){

        //Formata data conforme necessário
        var d = new Date(value);
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();

        dt_selecionada = curr_year+ "-" + curr_month + "-" +  curr_date ;

        store = this.getEventosEscalaStore();
        store.proxy.extraParams = {dt_evento: dt_selecionada};
        store.load();

    }

    ,loadFreelancersDisponiveis: function(combo, records, eOpts){
        funcao_selecionada =  records[0].data.id_funcao ;
        dia_semana_selecionado = //a partida da data


        // new Date(from);
        //var hoje=new Date();
        //var dia= hoje.getDay();


        store = this.getEventosEscalaStore();
        store.proxy.extraParams = {id_funcao: funcao_selecionada, dia_semana :dia_semana_selecionado };
        store.load();
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

    ,updateFreelance: function(editor, context, eOpts) {
        var id_freelance = context.record.get('id_freelance') ;
        var record = context.record;

		if ( ! id_freelance > 0 ){
			this.getFreelanceStore().add(record);
		}

        this.getFreelanceStore().sync();

        this.getFreelanceStore().load();
    },

    deleteFreelance: function(button) {

    	var grid = this.getFuncaoGrid(),
    	record = grid.getSelectionModel().getSelection(),
        store = this.getFuncoesStore();

	    store.remove(record);
	    this.getFuncoesStore().sync();

        //faz reload para atualziar
        this.getFuncoesStore().load();
    }
});