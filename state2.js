demo.state2 = function(){};
demo.state2.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#42f4ee';
    addChangeStateEventListeners();
  },
  update: function(){},
};
