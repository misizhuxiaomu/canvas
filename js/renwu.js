(function(){
  var renwu = window.Renwu = function(){
    //光头强
       //日常动作4个
         this.dongzuo1 = game.R["guangtouqiang1"];
         this.dongzuo2 = game.R["guangtouqiang2"];
         this.dongzuo3 = game.R["guangtouqiang3"];
         this.dongzuo4 = game.R["guangtouqiang4"];


      //砍树动作7个
      this.dongzuo5 = game.R["kanshu1"];
      this.dongzuo6 = game.R["kanshu2"];
      this.dongzuo7 = game.R["kanshu3"];
      this.dongzuo8 = game.R["kanshu4"];
      this.dongzuo9 = game.R["kanshu5"];
      this.dongzuo10 = game.R["kanshu6"];
      this.dongzuo11 = game.R["kanshu7"];




  };
  //日常动作
  Renwu.prototype.render1 = function(){
       game.ctx.drawImage(this.dongzuo1,game.canvas.width -400,game.canvas.height-208,76,106);
  };
   Renwu.prototype.render2 = function(){
       game.ctx.drawImage(this.dongzuo2,game.canvas.width -396,game.canvas.height-206,76,103);
  };
    Renwu.prototype.render3 = function(){
       game.ctx.drawImage(this.dongzuo3,game.canvas.width -390,game.canvas.height-210,64,109);
  };
     Renwu.prototype.render4 = function(){
       game.ctx.drawImage(this.dongzuo4,game.canvas.width -396,game.canvas.height-210,74,108);
  };
//砍树动作
Renwu.prototype.kan1 = function(){
    game.ctx.drawImage(this.dongzuo5,game.canvas.width -370,game.canvas.height-200,50,98);
};
Renwu.prototype.kan2 = function(){
 game.ctx.drawImage(this.dongzuo6,game.canvas.width -378,game.canvas.height-204,49,102);
};
Renwu.prototype.kan3 = function(){
 game.ctx.drawImage(this.dongzuo7,game.canvas.width -412,game.canvas.height-204,87,104);
};
Renwu.prototype.kan4 = function(){
 game.ctx.drawImage(this.dongzuo8,game.canvas.width -384,game.canvas.height-206,67,106);
};
Renwu.prototype.kan5 = function(){
 game.ctx.drawImage(this.dongzuo9,game.canvas.width -416,game.canvas.height-206,89,107);
};
Renwu.prototype.kan6 = function(){
 game.ctx.drawImage(this.dongzuo10,game.canvas.width -388,game.canvas.height-202,65,103);
};
Renwu.prototype.kan7 = function(){
 game.ctx.drawImage(this.dongzuo11,game.canvas.width -366,game.canvas.height-202,88,102);

};
//测试




})();