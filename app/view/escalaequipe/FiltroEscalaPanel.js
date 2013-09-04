Ext.define('agenda.view.escalaequipe.FiltroEscalaPanel', {
    extend: 'Ext.panel.Panel'
    ,alias: 'widget.FiltroEscalaPanel'
    ,layout: {
        type: 'vbox'
        ,align: 'stretch'
        ,padding: 5
    }
    , items: [
        {
            xtype: 'datefield'
            , itemId: 'dtEvento'
            ,  fieldLabel: 'Data'
            , width:150

        }
        ,{
            xtype: 'combobox'
            , itemId: 'eventoCombo'
            ,  fieldLabel: 'Evento:'
            , width:150
            , store: 'EventosEscala'
            , displayField: 'id_evento'
            , valueField: 'id_evento'
        }
        ,{
            xtype: 'combobox'
            , itemId: 'funcaoCombo'
            ,  fieldLabel: 'Funcão:'
            , width:150

        }


    ]
});

