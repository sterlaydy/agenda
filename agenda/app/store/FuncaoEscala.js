Ext.define('agenda.store.FuncoesEscala', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Funcao',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35}

	
	    ,proxy: {
        type: 'localstorage',
        id:'funcaoescala'
    }	
	
	/*
    proxy: {
        type: 'ajax',
        api: {
            read:    '/funcaoListAtivo'
        },
        reader: {
            type: 'json',
            root: 'funcoes',
            successProperty: 'success'
        }
    }
	*/
});