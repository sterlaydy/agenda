Ext.define('agenda.store.FreelanceAgExc', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.FreelanceAgExc',
    autoLoad: false,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
	
    proxy: {
        type: 'localstorage',
        id:'freelanceagexc'
    }	

/*	
	
	    data: [
        {
			idfreelance_agenda_excecao:1
			, dt_excecao:'22/09/2013'
			, id_periodo_dia:2
			, comentario:'Teste auto carregado'
			, id_freelance:1
        },
        {
			idfreelance_agenda_excecao:2
			, dt_excecao:'25/10/2013'
			, id_periodo_dia:1
			, comentario:'Novo teste'
			, id_freelance:2
        }		
    ]


    proxy: {
        type: 'ajax',
        api: {
        	create:   '/freelanceagendaexcecaoAdd'
            ,read:    '/freelanceagendaexcecaoList'
            ,update:  '/freelanceagendaexcecaoUpdate'
            ,destroy: '/freelanceagendaexcecaoDelete'
        },
        reader: {
            type: 'json',
            root: 'FreelanceAgExc',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
	
*/
});