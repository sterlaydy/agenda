Ext.define('agenda.store.FreelanceAgenda', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.FreelanceAgenda',
    autoLoad: false,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
	    /*data: [
        {
			id_freelance_agenda: 1
			, dia_semana: 1
			, id_periodo_dia:1
			, id_freelance:1
        },
        {
			id_freelance_agenda: 1
			, dia_semana: 1
			, id_periodo_dia:1
			, id_freelance:2
        }		
    ]*/
	
	/*
	
    data:{'items':[
        { 'id_freelance_agenda': '1',  "dia_semana":"1",  "id_periodo_dia":"1","id_freelance":"1"  },
        { 'id_freelance_agenda': '2',  "dia_semana":"1",  "id_periodo_dia":"1","id_freelance":"1" },
        { 'id_freelance_agenda': '3', "dia_semana":"1",  "id_periodo_dia":"1","id_freelance":"2"  },
        { 'id_freelance_agenda': '4', "dia_semana":"1", "id_periodo_dia":"1","id_freelance":"3"  }
    ]},
	*/
    proxy: {
        type: 'localstorage',
        id:'freelanceagenda'
    }	
	
	

	/*
    proxy: {
        type: 'ajax',
        api: {
        	create:   '/freelanceagendaAdd'
            ,read:    '/freelanceagendaList'
            ,update:  '/freelanceagendaUpdate'
            ,destroy: '/freelanceagendaDelete'
        },
        reader: {
            type: 'json',
  //                  idProperty: 'id_freelanceAgenda',

            root: 'freelanceAgenda',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
	
*/	
});