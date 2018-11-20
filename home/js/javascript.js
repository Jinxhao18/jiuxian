window.onload=function () {
    $("#leftItem1").mouseenter(function () {
        console.log("aaa");
        let index=$(this).index();
        $(".nav-left-box li").eq(index).addClass("on");
        $(this).parents(".nav-left-box").next(".menuBox").show();
    });
    $("#leftItem1").mouseleave(function () {
        $(this).parents(".nav-left-box").next(".menuBox").hide();
        let index=$(this).index();
        $(".nav-left-box li").eq(index).removeClass("on");
    });
    $(".menuBox").mouseenter(function () {
        //console.log("aaa");
        let index=$(".nav-left .menuBox").index($(this));
        //console.log(index);
        $(this).parent().find(".nav-left-box li").eq(index).addClass("on");
        $(this).show();
    });
    $(".menuBox").mouseleave(function () {
        //console.log("aaa");
        let index=$(".nav-left .menuBox").index($(this));
        //console.log(index);
        $(this).parent().find(".nav-left-box li").eq(index).removeClass("on");
        $(this).hide();
    });

    //横向导航栏
    $(".nav-middle li").mouseenter(function () {
        $(this).addClass("on");
    });
    $(".nav-middle li").mouseleave(function () {
        $(this).removeClass("on");
    });

    ///轮播图
    let i=0;
    function lunbo() {
        const oList=$(".bigImg-ul li");
        const oBtn=$(".small-btn li");
        console.log(oList);
        oList.each(function () {
            $(this).hide();
        });
        oBtn.each(function () {
            $(this).css("background-color","#000");
        });
        i++;
        oList.eq(i-1).fadeOut("2000");
         oList.eq(i).fadeIn("2000");
         oBtn.eq(i).css("background-color","#c00");
         if(i<oList.length-1){

         }
         else {
             i=0;
         }

    }
    //setInterval(lunbo,1000);


    $(".small-ul li").mouseenter(function () {
        let index = $(".small-ul li").index($(this));
        //console.log(index);
        $(this).css("background-color","#c00");
        $(this).parents(".mainBanner").find(".bigImg-ul li").css("display","none");
       //console.log(x);
        $(".bigImg-ul li").eq(index).css("display","block");
    });
    $(".small-btn li").mouseleave(function () {
        var index=$(".small-ul").index($(this));
        $(this).css("background-color","#000");
    });

    $(".indexTabNav li").mouseenter(function (e) {
        const index=$(".indexTabNav li").index($(this));
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".indexTabConWrap .indexTabCon").hide().eq(index).show();
    });
    $(".indexTab2Nav li").mouseenter(function (e) {
        const index=$(".indexTab2Nav li").index($(this));
        console.log(index);
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".indexTab2 .indexTab2ConList").hide().eq(index).show();
    });



    //右边动画
    let oUl=$(".ad1 .indexTuiList ul").eq(0),
        oBtn=$(".ad1 .index_btn li"),
        oBtn_num=oBtn.length,
    // console.log(oBtn_num);
        oWidth=oUl.find('li').eq(0).width(), 
        timmer= null,
        current= 0;

    function doSlider() {
        oBtn.eq(current).addClass("on").siblings("li").removeClass("on");
        oUl.stop().animate({
            left:-(current+1)*oWidth+"px"
        },function () {
            if(current  ==oBtn_num){
                current=0;
                oBtn.eq(current).addClass("on").siblings("li").removeClass("on");
                oUl.css("left",-(current+1)*oWidth+"px");
            }
        });
    }
    function solider1() {
        current++;
        doSlider();
    }
        timmer= setInterval(solider1,2000);
        oBtn.click(function () {
            current=$(this).index();
            doSlider();
        });
        oUl.hover(function () {
            clearInterval(timmer);
        },function () {
            timmer=setInterval(solider1,2000);
        });
        //动画2
    let oUl2=$(".ad2 .indexTuiList ul").eq(0),
        oBtn2=$(".ad2 .index_btn li"),
        oBtn_num2=oBtn2.length,
        // console.log(oBtn_num);
        oWidth2=oUl2.find('li').eq(0).width(),
        timmer2= null,
        current2= 0;
    function doSlider2() {
        oBtn2.eq(current2).addClass("on").siblings("li").removeClass("on");
        oUl2.stop().animate({
            left:-(current2+1)*oWidth2+"px"
        },function () {
            if(current2==oBtn_num2){
                current2=0;
                oBtn2.eq(current).addClass("on").siblings("li").removeClass("on");
                oUl2.css("left",-(current2+1)*oWidth2+"px");
            }
        });
    }
    function solider2() {
        current2++;
        doSlider2();
    }
    timmer2= setInterval(solider2,2000);
    oBtn2.click(function () {
        current2=$(this).index();
       doSlider2();
    });
    oUl2.hover(function () {
        clearInterval(timmer2);
    },function () {
        timmer2=setInterval(solider2,2000);
    });

////优惠推荐js
    let oDiv= $(".youhuiCon");
    let oWidth3= 1200;
    let num3= $(".youhuiList").length;
    let oBtn3=$(".rightNavBox div");
    let current3= 0;
    $(".contentBox .left-btn").click(function () {
        if(current3>num3-2){
            return;
        }
        current3++;
        iDian(-1);

    });
    $(".contentBox .right-btn").click(function () {
        if(current3<1){
            return;
        }
        current3--;
        iDian(-1);
    });
    function iDian(e) {

        oDiv.animate({
            left:e*oWidth3*current3+"px"
        });
        oBtn3.eq(current3).addClass("on").siblings("div").removeClass("on");
    }
    oBtn3.click(function () {
        $(this).addClass("on").siblings("div").removeClass("on");
        let index=$(this).index();
        oDiv.animate({
            left:-oWidth3*index+"px"
        })
    });
//    1楼js
    $(".hot-sale-box .hot-sale-top .right a").mouseenter( function() {
        let index=$(".hot-sale-box .hot-sale-top .right a").index($(this));
        console.log(index);
        $(this).addClass("on").siblings("a").removeClass("on");
        $(".hot-sale-bottom ul").eq(index).show().siblings("ul").hide();
    });


};
