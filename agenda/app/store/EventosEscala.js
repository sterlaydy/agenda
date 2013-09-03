Ext.define('agenda.store.EventosEscala', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Evento',
    autoLoad: false,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
	    proxy: {
        type: 'localstorage',
        id:'eventosescala'
    }
	
	/*

    proxy: {
        type: 'ajax',
        api: {
            read:    '/eventoListDtEvento'
        },
        reader: {
            type: 'json',
            root: 'eventos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
	*/
});