define(['jquery', 'underscore', 'backbone', 'router', 'MainMenuView'], 
  function($, _, Backbone, Router, MainMenuView) {
    var initialize = function() {
      Router.initialize();
      
      new MainMenuView().render();
    }

    return {
      initialize: initialize
    };
});