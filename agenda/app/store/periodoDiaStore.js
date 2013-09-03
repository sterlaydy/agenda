Ext.define('agenda.store.PeriodoDiaStore', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'descricao',  type: 'string'}
    ],
    data : [
        {id: 1,    descricao: 'Tarde'}
        ,{id: 2,    descricao: 'Noite'}
    ],
    autoLoad: true
});