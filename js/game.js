(function(){
    var game = window.Game = function(){
        this.SSS = 30;//难度
        this.init();//获取canvas上下文方法

    };
    Game.prototype.init = function(){
        this.s = 0;
        //随机数
        this.M;
        //血量减少在背景类
        this.o = 246 ;//多增加6滴血量 防止鼠标点击BUG
        this.P;//锁

        this.canvas = document.querySelector('canvas');//得到画布
        this.ctx = this.canvas.getContext("2d");//得到canvas上下文
        this.R = {
        "beijing" : "img/66.png",
        "guangtouqiang1" : "img/68.png",
        "guangtouqiang2" : "img/70.png",
        "guangtouqiang3" : "img/72.png",
        "guangtouqiang4" : "img/74.png",
        "kanshu1" : "img/44.png",
        "kanshu2" : "img/46.png",
        "kanshu3" : "img/48.png",
        "kanshu4" : "img/50.png",
        "kanshu5" : "img/52.png",
        "kanshu6" : "img/54.png",
        "kanshu7" : "img/56.png",
        "gouxiong1" : "img/96.png",
        "gouxiong2" : "img/98.png",
        "gouxiong3" : "img/100.png",
        "gouxiong4" : "img/102.png",
        "gouxiong5" : "img/104.png",
        "gouxiong6" : "img/106.png",
        "gouxiong7" : "img/108.png",
        "gouxiong8" : "img/110.png",
        "gouxiong9" : "img/112.png",
        "gouxiong10" : "img/114.png",
        "gouxiong11" : "img/116.png",
        "gouxiong12" : "img/118.png",
        "gouxiong13" : "img/120.png",
        "gouxiong14" : "img/122.png",
        "gouxiong15" : "img/124.png",
        "gouxiong16" : "img/126.png",
        "gouxiong17" : "img/128.png",
        "gouxiong18" : "img/130.png",
        "gouxiong19" : "img/132.png",
        "tubiao" : "img/135.png",//狗熊发现图标
        "zha" : "img/82.png",  //砍树特效
        "mucai" : "img/151.png", //木材图标
        "xieliang" : "img/146.png", //血量框
        "jianshao" : "img/148.png", //血量
        "fen" : "img/5.png",//金币
        "jia" : "img/8.png",//加分2
        "guo1" : "img/183.png", //过关图片背景开始
        "guo2" : "img/186.png",
        "guo3" : "img/188.png",
        "guo4" : "img/190.png",
        "guo5" : "img/192.png",
        "guo6" : "img/194.png",
        "guo7" : "img/196.png",
        "guo8" : "img/199.png",
        "guo9" : "img/201.png",
        "guo10" : "img/203.png",
        "guo11" : "img/205.png",
        "guo12" : "img/207.png",
        "guo13" : "img/209.png",
        "guo14" : "img/211.png",//过关结束
        "shibai1" : "img/222.png",//失败开始
        "shibai2" : "img/224.png",
        "shibai3" : "img/226.png",
        "shibai4" : "img/228.png",
        "shibai5" : "img/230.png",
        "shibai6" : "img/232.png",
        "shibai7" : "img/234.png",
        "shibai8" : "img/236.png",
        "shibai9" : "img/238.png",
        "kaishi" : "img/29.png",
        "youxi" : "img/26.png",
        "shibai10" : "img/240.png",//失败结束
        "guoguan" : "img/213.png",//恭喜过关
        "zaishi" : "img/215.png",//再来一次
        "over" : "img/over.png"//游戏结束
    };
        var self = this;//备份上下文
        var length = Object.keys(this.R).length; //所有资源图片的总数，使用了ES6的语法
         var count = 0; //已经加载完毕的图片的个数
          //遍历R对象中的所有图片
    for(var k in this.R){
        var img = new Image();
        img.src = this.R[k];
        this.R[k] = img;//把img变成真对象

        img.onload = function(){//图片加载
            count++;
            self.clear();//清屏


             if(count == length){

                 self.shilie();//先实例化所有  方法在底部

                self.load.jiazai();//开始画面

            }
        };
   };
    };

     //点击事件
    Game.prototype.kan = function(){
         var self = this;//备份

           document.onclick = function(){//鼠标按下
            self.s = 1;//信号
            setTimeout(function(){
            self.s = 2;
            self.o-= 6;//血量变化 需要41下归0               砍击血量
            //判定血量是否为0
          if (self.o == 0) {
            setTimeout(function(){
                self.shumu.guoguan1();
            },300);
         };
       },200);
    };
};

//主要定时器
    Game.prototype.start = function(){
        document.getElementById("kaishi").pause();//结束开始画面音乐
        document.getElementById("bg").play();//开始当前背景音乐
        this.clear();//先请屏幕
        var self = this;//备份
        var shijian = 0;//信号

            this.kan();//点击砍树 方法

     this.time1 = setInterval(function(){
        shijian++;
        //狗熊回头
           shijian % 120 == 0 ? self.M = 0:self.M = ~~(Math.random() *self.SSS);   //随机数 难度可以增加
            console.log(self.SSS);
//第一帧
         if (shijian %10 == 0) {
        self.clear();
        self.background.render();//等会放定时器里
        if (self.s == 0){
            self.renwu.render1();//日常动作

        }else if (self.s == 1){

             self.renwu.kan5();


        }else if (self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render1();
        };

        };

        //2
         if (shijian %20 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render1();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();


        }else if(self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();

            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render2();
        };
        };
        //3
         if (shijian %30 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render2();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();


        }else if (self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render3();
        };
        };
        //3
        if (shijian %40 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render2();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();


        }else if(self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };

        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render4();
        };
        };
  //第二帧
       if (shijian %50 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render2();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();



        }else if (self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render5();
        };
        };
        if (shijian %60 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render3();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();

        }else if (self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
       if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render6();
        };
        };


        if (shijian %70 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
            self.renwu.render3();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();

        }else if (self.s == 2) {
            self.renwu.kan7();
            self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render7();
        };
        };


        if (shijian %80 == 0) {
        self.clear();
        self.background.render();//等会放定时器里

        if (self.s == 0){
             self.renwu.render3();//日常动作

        }else if (self.s == 1){
            self.renwu.kan5();

        }else if(self.s == 2) {
           self.renwu.kan7();
           self.shumu.hehe();

        };
        if (self.M == 0) {
            self.gouxiong.render19();
            if (self.s == 1 || self.s == 2) {
                clearInterval(self.time1);
                self.shumu.render();

            };
        }else{
            self.gouxiong.render8();
        };
        };
        //可以加动作


        //收斧子
         if (shijian % 10 == 0) {

            if (self.s = 2) {
            self.s = 0;
        };
        };
        //归0
        if (shijian%120 == 0) {

            shijian = 0;
        };
     },20)};


 //实例先仍一边
    Game.prototype.shilie = function(){
        this.background = new Background();//实例化背景
            this.shumu = new Shumu();//实例化树木
            this.renwu = new Renwu();//实例人物
            this.gouxiong = new Gouxiong();//实例化狗熊
            this.load = new Load();//实例化加载开始画面
    };
    //清屏先仍一边
    Game.prototype.clear = function(){
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    };




})();