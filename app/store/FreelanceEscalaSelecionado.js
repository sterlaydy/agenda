Ext.define('agenda.store.FreelanceEscalaSelecionado', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Freelance',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    proxy: {
        type: 'localstorage',
        id:'freelanceescalaselecionado'
    }	
/*
    proxy: {
        type: 'ajax',
        api: {
            read:    '/freelanceList'
        },
        reader: {
            type: 'json',
            root: 'freelance',
            successProperty: 'success'
        }
    }
	
	
	*/
});