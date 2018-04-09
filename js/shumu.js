(function(){//杂项
    var shumu = window.Shumu = function(){
          this.s = 0;//失败定时器信号
          this.tubiao = game.R["tubiao"];//狗熊发现图标
          this.zha = game.R["zha"];//砍树特效
          //树木血量为0时变化背景
          this.guo1 = game.R["guo1"];
          this.guo2 = game.R["guo2"];
          this.guo3 = game.R["guo3"];
          this.guo4 = game.R["guo4"];
          this.guo5 = game.R["guo5"];
          this.guo6 = game.R["guo6"];
          this.guo7 = game.R["guo7"];
          this.guo8 = game.R["guo8"];
          this.guo9 = game.R["guo9"];
          this.guo10 = game.R["guo10"];
          this.guo11 = game.R["guo11"];
          this.guo12 = game.R["guo12"];
          this.guo13 = game.R["guo13"];
          this.guo14 = game.R["guo14"];
          //减分
          this.fen = game.R["fen"];
          //被发现后的图片
          this.bai1 = game.R["shibai1"];
          this.bai2 = game.R["shibai2"];
          this.bai3 = game.R["shibai3"];
          this.bai4 = game.R["shibai4"];
          this.bai5 = game.R["shibai5"];
          this.bai6 = game.R["shibai6"];
          this.bai7 = game.R["shibai7"];
          this.bai8 = game.R["shibai8"];
          this.bai9 = game.R["shibai9"];
          this.bai10 = game.R["shibai10"];
          //恭喜过关
          this.guoguan = game.R["guoguan"];
          //再试一次
          this.zaishi = game.R["zaishi"];
          //游戏结束
          this.over = game.R["over"];
          //加分
          this.jia = game.R["jia"];

//被发现后 清屏 咆哮
//未被发现 看血量 清屏 换图
//各种杂项
    };
    //狗熊图标
    Shumu.prototype.render = function(){
      document.getElementById("faxian").play();
       var self = this;//备份
        this.s++;//失败定时器信号
       game.ctx.drawImage(this.tubiao,game.canvas.width -500,game.canvas.height-208,23,22);
       if (this.s == 1) {
        setTimeout(function(){//延时1秒执行
           self.faxian();//只执行一次 失败定时器
        },1000);

       };
};
//砍树特效
Shumu.prototype.hehe = function(){
    document.getElementById("kan").play();
    game.ctx.drawImage(this.zha,game.canvas.width -310,game.canvas.height-208,72,110);

};
//如果血量为0 执行
Shumu.prototype.guoguan1 = function(){
     var s = 0;//信号
     var self = this;//备份
       clearInterval(game.time1);//停止主定时器
       document.getElementById("bg").pause();
        document.getElementById("dao").play();

       this.time2 = setInterval(function(){//开启过关定时器
             s++;
             if (s%30 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo1,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%60 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo2,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%90 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo3,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%120 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo4,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%150 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo5,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%180 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo6,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%210 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo7,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%240 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo8,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%270 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo9,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%300 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo10,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%330 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo11,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%360 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo12,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%390 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo13,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%420 == 0) {
                game.clear();
                game.ctx.drawImage(self.guo14,game.canvas.width-641,game.canvas.height-391);
                //恭喜过关
                self.heihei();
                clearInterval(self.time2);
             };
       },4);
};
//如果被狗熊发现了 执行
  Shumu.prototype.faxian = function(){
    document.getElementById("bg").pause();
    document.getElementById("houjiao").play();
    var s = 0;//信号
     var self = this;//备份


       this.time3 = setInterval(function(){//开启失败定时器
             s++;
             if (s%30 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai1,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%60 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai2,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%90 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai3,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%120 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai4,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%150 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai5,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%180 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai6,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%210 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai7,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%240 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai8,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%270 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai9,game.canvas.width-641,game.canvas.height-391);
             };
             if (s%300 == 0) {
                game.clear();
                game.ctx.drawImage(self.bai10,game.canvas.width-641,game.canvas.height-391);

                clearInterval(self.time3);

                  self.haha();
             };

       },10);

  };
  //失败
  Shumu.prototype.haha = function(){
       game.ctx.drawImage(this.zaishi,game.canvas.width -440,game.canvas.height-100,217,60);
       game.ctx.drawImage(this.over,game.canvas.width -440,game.canvas.height-200,217,60);
       document.getElementById("jiao").play();//尖叫
        this.lai();//执行
  };
  //点击
  Shumu.prototype.lai = function(){

    var a = true;//bug 开锁
    document.onclick = function(event){
      if (a==true) {
        if (event.clientX >=502&&event.clientX<=717&&event.clientY>=342&&event.clientY<=399) {
          a = false;//bug解锁
          game.clear();
          game.init();

      };
      };
    };

};
//恭喜过关
Shumu.prototype.heihei = function(){
    document.getElementById("guoguan").play();

    game.ctx.drawImage(this.guoguan,game.canvas.width -520,game.canvas.height-330,364,81);
    game.ctx.drawImage(this.zaishi,game.canvas.width -440,game.canvas.height-100,217,60);

    this.zou();//执行
};
//点击
  Shumu.prototype.zou = function(){
    var a = true;//bug 开锁
    document.onclick = function(event){
      if (a==true) {
        if (event.clientX >=502&&event.clientX<=717&&event.clientY>=342&&event.clientY<=399) {
          a = false;//bug解锁
          game.clear();
          game.SSS-=10;//增加难度 3 次
          game.init();

      };
      };
    };
};
})();