Ext.define('agenda.store.DiaSemanaStore', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'descricao',  type: 'string'}
    ],
    data : [
        {id: 1,    descricao: 'Segunda'}
       , {id: 2,    descricao: 'Terça'}
       , {id: 3,    descricao: 'Quarta'}
       , {id: 4,    descricao: 'Quinta'}
       , {id: 5,    descricao: 'Sexta'}
       , {id: 6,    descricao: 'Sábado'}
       , {id: 7,    descricao: 'Domingo'}
    ],
    autoLoad: true
});