demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#6ef442';
    addChangeStateEventListeners();
  },
  update: function(){},
};
