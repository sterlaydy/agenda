Ext.define('agenda.view.FreelancePanel', {
    extend: 'Ext.panel.Panel'
    ,alias: 'widget.FreelancePanel'
    ,layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 5
    }
    , items: [
        {
            xtype: 'FreelanceGrid'
            , itemId: 'FreelanceGridItem'
            , flex: 5
        }

        ,{
            xtype: 'FreelanceAgendaGrid'
            , itemId: 'FreelanceAgendaGridItem'
            , flex : 1
        }

        ,{
            xtype: 'FreelanceAgExcGrid'
            , itemId: 'FreelanceAgExcGridItem'
            , flex : 2
        }

    ]
});

