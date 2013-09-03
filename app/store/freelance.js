Ext.define('agenda.store.Freelance', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Freelance',
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},

	
	/*
    proxy: {
        type: 'ajax',
        api: {
        	create:   '/freelanceAdd'
            ,read:    '/freelanceList'
            ,update:  '/freelanceUpdate'
            ,destroy: '/freelanceDelete'
        },
        reader: {
            type: 'json',
            root: 'freelance',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
	
    data: [
        {
			id_freelance:1,
			nome:'Ster',
			dt_nasc:'18/07/1985',
			email:'sterlaydy@gmail.com	',
			facebook:'/sterlaydy',
			twitter:'',
			fone:'',
			celular1:'',
			celular2:'',
			fone_recado:'',
			ativo:'S'
        },
        {
			id_freelance:2,
			nome:'Ster',
			dt_nasc:'18/07/1985',
			email:'sterlaydy@gmail.com	',
			facebook:'/sterlaydy',
			twitter:'',
			fone:'',
			celular1:'',
			celular2:'',
			fone_recado:'',
			ativo:'S'
        }		
    ]
	,*/
    proxy: {
        type: 'localstorage',
        id:'freelance'
    }	

	
});