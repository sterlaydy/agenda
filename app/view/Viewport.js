//app/view/Viewport.js 
Ext.define('agenda.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    requires: [
         'agenda.view.funcao.Formulario'
		,'agenda.view.funcao.Grid'

        ,'agenda.view.periododia.Formulario'
		,'agenda.view.periododia.Grid'

		,'agenda.view.MenuPanel'
		,'agenda.view.WorkspacePanel'
		,'agenda.view.FreelancePanel'

		,'agenda.view.freelance.FreelanceGrid'
		,'agenda.view.freelance.FreelanceAgendaGrid'
        ,'agenda.view.freelance.FreelanceAgExcGrid'

		,'agenda.view.escalaequipe.EscalaGrid'
		,'agenda.view.escalaequipe.FiltroEscalaPanel'
    ],

    //Error: it was initComponents
    initComponent: function () {
        Ext.apply(this, {
            items: [
	            {
	                  id: 'welcome'
	                , xtype: 'MenuPanel'
	                , title: 'Principal'
	                , region: 'center'
	                , margins: '5 5 5 5'
	            }
           ]
        });
        //Error: do not forget this line in each initComponent method
        this.callParent(arguments);
    }
});