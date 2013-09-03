Ext.define('agenda.store.PeriodosDia', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.PeriodoDia',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},

	data :{
		periodo: [
			{
            id: 1,
            descricao: 'Tarde'
			},
			{
            id: 2,
            descricao: 'Noite'
			}		
		]
	}

    ,proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'periodo'
        }
    }		
	/*
	
	
    proxy: {
        type: 'ajax',
        api: {
        	create:   '/periododiaAdd'
            ,read:    '/periododiaList'
            ,update:  '/periododiaUpdate'
            ,destroy: '/periododiaDelete'
        },
        reader: {
            type: 'json',
            root: 'periododia',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }*/
});