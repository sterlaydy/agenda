Ext.define('agenda.store.Funcoes', {
    extend: 'Ext.data.Store',
    model: 'agenda.model.Funcao'
  
/*  data :
{
    funcao: [
        {
            id_funcao: 1,
            descricao: 'Ed Spencer',
            qtd_festas: '10',
            ativo: 'S',
            valor: '12'

        }
    ]
}	[
         {id_funcao: '1',    descricao: 'Garçom', 	qtd_festas:'5',	ativo:'S', valor:'10' }
    ]	
*/

    ,proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'funcao'
        }
    }	
	
	/*
    autoLoad: true,
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},

    proxy: {
        type: 'ajax',
        api: {
        	create:   '/funcaoAdd'
            ,read:    '/funcaoList'
            ,update:  '/funcaoUpdate'
            ,destroy: '/funcaoDelete'
        },
        reader: {
            type: 'json',
            root: 'funcoes',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
	
	*/
});