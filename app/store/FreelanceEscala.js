Ext.define('agenda.store.FreelanceEscala', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Freelance',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35}
	/*
    ,proxy: {
        type: 'localstorage',
        id:'freelanceescala'
    }	
	
*/
    ,data: [
        {
			id_freelance:1,
			nome:'Maria',
			dt_nasc:'01/04/1992',
			email:'maria@maria.com	',
			facebook:'/sterlaydy',
			twitter:'',
			fone:'',
			celular1:'',
			celular2:'',
			fone_recado:'',
			ativo:'S'
        }
	]
	
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