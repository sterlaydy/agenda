Ext.define('agenda.store.Eventos', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Evento',
    autoLoad: false,
    pageSize: 35,
   autoLoad: {start: 0, limit: 35}
       ,proxy: {
        type: 'localstorage',
        id:'evento'
    }	
	
/*
    proxy: {
        type: 'ajax',
        api: {
        	create:   '/eventoAdd'
            ,read:    '/eventoList'
            ,update:  '/eventoUpdate'
            ,destroy: '/eventoDelete'
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