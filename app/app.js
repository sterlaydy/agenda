Ext.Loader.setConfig({enabled: true});



// -- Entry Point --
Ext.application({
        name: 'agenda',

        //habilitar para usar play framework
        //appFolder: '/assets/javascripts/app',

        appFolder: './app',


        controllers: [ 'Funcoes'
                     , 'MenuController'
                     , 'PeriodoDia'
                     , 'Freelancer'
                     , 'Escala'
                     ]
            ,autoCreateViewport: true
    }
);