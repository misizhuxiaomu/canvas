(function(){
  var gouxiong = window.Gouxiong = function(){

    //狗熊日常跳舞动作
    this.xionger1 = game.R["gouxiong1"];
    this.xionger2 = game.R["gouxiong2"];
    this.xionger3 = game.R["gouxiong3"];
    this.xionger4 = game.R["gouxiong4"];
    this.xionger5 = game.R["gouxiong5"];
    this.xionger6 = game.R["gouxiong6"];
    this.xionger7 = game.R["gouxiong7"];
    this.xionger8 = game.R["gouxiong8"];
    this.xionger9 = game.R["gouxiong9"];
    this.xionger10 = game.R["gouxiong10"];
    this.xionger11 = game.R["gouxiong11"];
    this.xionger12 = game.R["gouxiong12"];
    this.xionger13 = game.R["gouxiong13"];
    this.xionger14 = game.R["gouxiong14"];
    this.xionger15 = game.R["gouxiong15"];
    this.xionger16 = game.R["gouxiong16"];
    this.xionger17 = game.R["gouxiong17"];
    //2个转身动作
    this.xionger18 = game.R["gouxiong18"];
    this.xionger19 = game.R["gouxiong19"];



  };

Gouxiong.prototype.render1 = function(){
   game.ctx.drawImage(this.xionger1,game.canvas.width -550,game.canvas.height-240,91,143);

};
Gouxiong.prototype.render2 = function(){

   game.ctx.drawImage(this.xionger2,game.canvas.width -580,game.canvas.height-224,124,126);

};
Gouxiong.prototype.render3 = function(){

   game.ctx.drawImage(this.xionger3,game.canvas.width -598,game.canvas.height-208,147,110);
};
Gouxiong.prototype.render4 = function(){

    game.ctx.drawImage(this.xionger4,game.canvas.width -590,game.canvas.height-202,127,104);
};
Gouxiong.prototype.render5 = function(){

  game.ctx.drawImage(this.xionger5,game.canvas.width -578,game.canvas.height-220,88,122);
};
Gouxiong.prototype.render6 = function(){

   game.ctx.drawImage(this.xionger6,game.canvas.width -572,game.canvas.height-250,79,153);
};
Gouxiong.prototype.render7 = function(){

   game.ctx.drawImage(this.xionger7,game.canvas.width -590,game.canvas.height-212,101,114);
};
Gouxiong.prototype.render8 = function(){

   game.ctx.drawImage(this.xionger8,game.canvas.width -592,game.canvas.height-206,108,106);
};
Gouxiong.prototype.render9 = function(){

   game.ctx.drawImage(this.xionger9,game.canvas.width -592,game.canvas.height-198,109,99);
};
Gouxiong.prototype.render10 = function(){

   game.ctx.drawImage(this.xionger10,game.canvas.width -582,game.canvas.height-212,96,113);
};
Gouxiong.prototype.render11 = function(){

   game.ctx.drawImage(this.xionger11,game.canvas.width -568,game.canvas.height-234,85,135);
};
Gouxiong.prototype.render12 = function(){

   game.ctx.drawImage(this.xionger12,game.canvas.width -599,game.canvas.height-200,143,102);
};
Gouxiong.prototype.render13 = function(){

   game.ctx.drawImage(this.xionger13,game.canvas.width -604,game.canvas.height-202,119,103);
};
Gouxiong.prototype.render14 = function(){

   game.ctx.drawImage(this.xionger14,game.canvas.width -600,game.canvas.height-204,130,106);
};
Gouxiong.prototype.render15 = function(){

   game.ctx.drawImage(this.xionger15,game.canvas.width -578,game.canvas.height-212,116,114);
};
Gouxiong.prototype.render16 = function(){

   game.ctx.drawImage(this.xionger16,game.canvas.width -562,game.canvas.height-226,66,128);
};
Gouxiong.prototype.render17 = function(){

   game.ctx.drawImage(this.xionger17,game.canvas.width -584,game.canvas.height-230,99,135);
};
//转身动作
Gouxiong.prototype.render18 = function(){

   game.ctx.drawImage(this.xionger18,game.canvas.width -590,game.canvas.height-220,110,122);
};
Gouxiong.prototype.render19 = function(){

   game.ctx.drawImage(this.xionger19,game.canvas.width -606,game.canvas.height-198,117,98);
};




})();