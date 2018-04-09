(function(){//开始画面
   var load = window.Load = function(){
        this.youxi = game.R["youxi"];
        //游戏开始图片
        this.kaishi = game.R["kaishi"];
   };

          //开始画面

Load.prototype.jiazai = function(){
    document.getElementById("bg").pause();
     document.getElementById("kaishi").play();
    game.ctx.drawImage(this.youxi,game.canvas.width-641,game.canvas.height-391);
    game.ctx.drawImage(this.kaishi,game.canvas.width -440,game.canvas.height-100,217,60);//开始游戏等会
    this.zou();//执行
};
//点击
  Load.prototype.zou = function(){
    var a = true;//bug 开锁

    document.onclick = function(event){
      if (a==true) {
        if (event.clientX >=502&&event.clientX<=717&&event.clientY>=342&&event.clientY<=399) {
          a = false;//bug上锁
          game.clear();
          game.start(); //加载完成后。可以开始游戏了。

      };
      };
    };

};



})();