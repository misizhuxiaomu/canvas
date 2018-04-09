(function(){
  //背景和血量
    var background =  window.Background =  function(){
    this.img = game.R["beijing"];
    this.mucai = game.R["mucai"];
    this.xieliang = game.R["xieliang"];
    this.jianshao = game.R["jianshao"];

    };
  Background.prototype.render = function(){
      game.ctx.save();//保存状态 防止污染
      game.ctx.drawImage(this.img,game.canvas.width-641,game.canvas.height-391);
      game.ctx.drawImage(this.mucai,game.canvas.width -640,game.canvas.height-390,71,71);//木材
      game.ctx.drawImage(this.xieliang,game.canvas.width -570,game.canvas.height-360,249,14);//血量背景
      game.ctx.drawImage(this.jianshao,game.canvas.width -568,game.canvas.height-358,game.o,10);//血量减少 定义在game
      game.ctx.restore();//恢复状态
  };




})();