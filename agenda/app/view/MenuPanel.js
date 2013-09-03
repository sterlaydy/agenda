//app/view/WorkspacePanel.js 
Ext.define('agenda.view.MenuPanel', {
    extend: 'Ext.panel.Panel'
    ,alias: 'widget.MenuPanel'
	, layout: 'border'
    , padding: 0
    , defaults: {
        split: true
    }
    , items: [ 
    	{
    		xtype: 'WorkspacePanel'
    		, itemId: 'principal'
    		, region:'center'
    		, resizable: false
    		, collapsible: false
    		, floatable: false
    		, autoScroll: true
    	}
    ]
    ,dockedItems: [{
        xtype: 'toolbar'
        , dock: 'top'
        , border:1
        , defaults: {minWidth: 100}
        , items: [
        	{
        		xtype: 'text'
        		, text: 'Agenda'
        		, width: 190
        		, margin: '0 5 0 10'
        	}
        	,{
            	xtype: 'button'
            	, action: 'inicio'
            	, text: 'Inicio'
            //	, icon    : 'img/building.png'
            	, border: 1
            	, style: {
            	    borderColor: 'silver'
           		    , borderStyle: 'solid'
          		}
            }

            ,{
        		xtype: 'button'
        		, text: 'Cadastros'
        		, width: 150
        		//, margin: '0 5 0 10'
        	    , menu: {
        	        id: 'cadastros'
        	        ,items:[
                    {
                        xtype: 'button'
                        , action: 'funcao'
                        , text: 'Funcoes'
                    //    , icon    : 'img/building.png'
                        , border: 1
                        , style: {
                              borderColor: 'silver'
                            , borderStyle: 'solid'
                        }
                    }
                    ,{
                        xtype: 'button'
                        , action: 'periododia'
                        , text: 'Periodos Dia'
                    //    , icon    : 'img/building.png'
                        , border: 1
                        , style: {
                              borderColor: 'silver'
                            , borderStyle: 'solid'
                        }
                    }
                    ]
                }
            }

            ,{
        		xtype: 'button'
        		, text: 'Freelance'
        		, width: 150
                , action: 'freelance'
            }
            ,{
        		xtype: 'button'
        		, text: 'Escala'
        		, width: 150
                , action: 'escala'
            }


        ]
     }] ,
    initComponent: function () {

        //Error: do not forget this line in each initComponent method
        this.callParent(arguments);
    }
});

