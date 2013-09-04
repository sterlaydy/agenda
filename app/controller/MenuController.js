Ext.define('agenda.controller.MenuController', {
     extend: 'Ext.app.Controller'
    ,views: [ 'agenda.view.MenuPanel'
              ,'agenda.view.FreelancePanel'
              ,'funcao.Grid'
              ,'escalaequipe.EscalaGrid'
            ]


	//à l'initialisation du controlleur
    ,init: function() {

    	// Add all components to observe
        this.control({

        		'MenuPanel button[action=inicio]' :{
				    click: this.removePanel
				},
        		'MenuPanel button[action=funcao]' :{
				    click: this.gerenciarFuncao
				},
                'MenuPanel button[action=periododia]' :{
                    click: this.gerenciarPeriodoDia
                },
                'MenuPanel button[action=freelance]' :{
                    click: this.gerenciarFreelance
                },
                'MenuPanel button[action=escala]' :{
                    click: this.gerenciarEscala
                }

		});
    },

    removePanel: function(){
    	//var panel  = Ext.ComponentQuery.query('MenuPanel')[0];
    	//panel.remove('principal');

    	this.trocaCentro( 'WorkspacePanel' );
    }

    , gerenciarFuncao: function(argument) {
        	this.trocaCentro( 'FuncaoGrid' );
    }
    , gerenciarPeriodoDia: function(argument) {
        	this.trocaCentro( 'PeriodoDiaGrid' );
    }

    , gerenciarFreelance: function(argument) {
        this.trocaCentro( 'FreelancePanel' );
    }

    , gerenciarEscala: function(argument) {
        this.trocaCentro( 'EscalaGrid' );
    }
    , trocaCentro: function(page) {
        var panel  = Ext.ComponentQuery.query('MenuPanel')[0];
    	panel.remove('principal');
    	panel.add({
    		xtype: page
    		, itemId: 'principal'
    		, region:'center'
    		, resizable: false
    		, collapsible: false
    		, floatable: false
    		, autoScroll: false
    		// , border: false
    	});
    	panel.doLayout();
    }
});