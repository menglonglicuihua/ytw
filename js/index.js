$(".weix").hide(0);
var blank=$(".wx span");
  $(".wx").hover(function(){
    $(".weix").stop(true,true);
    blank.stop(true,true);
    var index=$(this).index(".wx");
    $(".weix").eq(index).show(0);
    $(".wx").css({"width":"124px","height":"34px","background":"#fff","z-index":"1000"});
    blank.eq(index).show(0);
  },function(){
    $(".weix").stop(true,true);
    blank.stop(true,true);
    var index=$(this).index(".wx");
    $(".weix").eq(index).hide(0);
    $(".wx").css({"width":"","height":"","background":"","z-index":"1"});
    blank.eq(index).hide(0);
  })

/****************************************************/

$(".shouj").hide(0);
var blank2=$(".shouji span");
  $(".shouji").hover(function(){
    $(".shouj").stop(true,true);
    blank2.stop(true,true);
    var index=$(this).index(".shouji");
    $(".shouj").eq(index).show(0);
    $(".shouji").css({"width":"148px","height":"34px","background":"#fff"});
    blank2.eq(index).show(0);
  },function(){
    $(".shouj").stop(true,true);
    blank2.stop(true,true);
    var index=$(this).index(".shouji");
    $(".shouj").eq(index).hide(0);
    $(".shouji").css({"width":"","height":"","background":""});
    blank2.eq(index).hide(0);
  })

/****************************************************/


$(".yttu2").hide(0);
var blank3=$(".yintai span");
  $(".yintai").hover(function(){
    $(".yttu2").stop(true,true);
    blank3.stop(true,true);
    var index=$(this).index(".yintai");
    $(".yttu2").eq(index).show(0);
    $(".yintai").css({"width":"82px","height":"34px","background":"#fff"});
    blank3.eq(index).show(0);
  },function(){
    $(".yttu2").stop(true,true);
    blank3.stop(true,true);
    var index=$(this).index(".yintai");
    $(".yttu2").eq(index).hide(0);
    $(".yintai").css({"width":"","height":"","background":""});
    blank3.eq(index).hide(0);
  })


/****************************************************/

$(".xuangou").slideUp(0);
  $(".gouwu").hover(function(){
    $(".xuangou").stop(true,true);
    var index=$(this).index(".gouwu");
    $(".xuangou").eq(index).slideDown(500);
  },function(){
    $(".xuangou").stop(true,true);
    var index=$(this).index(".gouwu");
    $(".xuangou").eq(index).slideUp(500);

  })


/****************************************************/

$(".nanzhuang").hide(0);
  $(".nvzhuang dl").hover(function(){
    $(".nanzhuang").stop(true,true);
    var index=$(this).index(".nvzhuang dl");
    $(".nanzhuang").eq(index).show(500);
    $(".ping").eq(index).css({"background":"#E5004F"});
    $(".ping span").eq(index).hide(0);
  },function(){
    $(".nanzhuang").stop(true,false);
    var index=$(this).index(".nvzhuang dl");
    $(".nanzhuang").eq(index).hide(500);
    $(".ping").eq(index).css({"background":"#333"});
    $(".ping span").eq(index).show(0);
  })


/****************************************************/

$(".ssk").focus(function(){
    if($(this).val()=="塑型丝袜满赠推荐"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val()==""){
      $(this).val("塑型丝袜满赠推荐")
    }
  })


/****************************************************/

$(".temai li").hover(function(){
  var index=$(this).index();
  $(".baokuanbox .baokuan").hide(0).eq(index).show(0);
   $(".cztm").css({"border-bottom": "5px solid #333"}).eq(index).css({"border-bottom":"5px solid #E5004F"});
  $(".cztm-zi").css({"fontWeight": "normal"}).eq(index).css({"fontWeight": "bold"});
  $(".shangjie").css({"display":"none"}).eq(index).css({"display":"block"});
  $(".xian").hide(0).eq(index).show(0);

})


/****************************************************/

$(".rmpp li").hover(function(){
  var index=$(this).index();
  $(".youni .suoyi").hide(0).eq(index).show(0);
   $(".rmpp li").css({"border-bottom": "3px solid #333"}).eq(index).css({"border-bottom":"3px solid #E70050"});
  $(".rmpp li a").css({"fontWeight": "normal"}).eq(index).css({"fontWeight": "bold"});
  $(".xiajie2").css({"display":"none"}).eq(index).css({"display":"block"});
  $(".xian").hide(0).eq(index).show(0);
})


/****************************************************/

$(".qizhi").hover(function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"220px"},100);
  $(".border-left",this).animate({height:"260px"},100);
  $(".border-bottom",this).animate({width:"220px"},100);
  $(".border-right",this).animate({height:"260px"},100);
},function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"0"},100);
  $(".border-left",this).animate({height:"0"},100);
  $(".border-bottom",this).animate({width:"0"},100);
  $(".border-right",this).animate({height:"0"},100);
})


/****************************************************/

$(".tuijie2").hover(function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"202px"},100);
  $(".border-left",this).animate({height:"252px"},100);
  $(".border-bottom",this).animate({width:"202px"},100);
  $(".border-right",this).animate({height:"252px"},100);
},function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"0"},100);
  $(".border-left",this).animate({height:"0"},100);
  $(".border-bottom",this).animate({width:"0"},100);
  $(".border-right",this).animate({height:"0"},100);
})



/****************************************************/

$(".rsjd").hover(function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"270px"},100);
  $(".border-left",this).animate({height:"180px"},100);
  $(".border-bottom",this).animate({width:"270px"},100);
  $(".border-right",this).animate({height:"180px"},100);
},function(){
  var index=$(this).index();
  $(".border-top").stop(true,true);
  $(".border-left").stop(true,true);
  $(".border-bottom").stop(true,true);
  $(".border-right").stop(true,true);
  $(".border-top",this).animate({width:"0"},100);
  $(".border-left",this).animate({height:"0"},100);
  $(".border-bottom",this).animate({width:"0"},100);
  $(".border-right",this).animate({height:"0"},100);
})



/****************************************************/
//banner轮播

/*$(".banntu").fadeOut(0).eq(0).fadeIn(0);
var num=0;
function change(){
   num++;
   if(num>=$(".banntu").length){
      num=0;
   }
   $(".banntu").fadeOut(100).eq(num).fadeIn(200);
  $(".btn>li").css("background","#211616").eq(num).css("background","#E5004F")
}
$('.btn>li').each(function(index,obj){
  $(obj).mouseover(function(){ 
  $('.banntu').stop(true,true)
  $('.banntu').fadeOut(600).eq(index).fadeIn(600);
  $('.btn>li').css('background','#211616').eq(index).css('background','#e5004f') 
        num=index;
  })
})

var t=setInterval(function(){change("r")},2000);

$(".banntu").mouseover(function(){
  var index=$(this).index();
  $(".banner-left").css({"opacity":"0"}).eq(index).css({"opacity":"0.7"})
   $(".banner-right").css({"opacity":"0"}).eq(index).css({"opacity":"0.7"})
})

$('.banner').mouseover(function(){
    $('.banner-left').show();
    $('.banner-right').show();
    clearInterval(t)
})
$('.banner').mouseout(function(){
    $('.banner-right').hide();
    $('.banner-left').hide();
    t = setInterval(function(){change("r")},2000)
})


$(".banner-right").click(function(){
  change();
})*/





$('.banntu').fadeOut(0).eq(0).fadeIn(0);
var num = 0;
function change(type){
  if(type=="r"){
    num++;
   if(num>=$('.banntu').size()){
    num = 0;
   }
 }else if(type=="l"){
     num--;
   if(num==-1){
    num =$('.banntu').size()-1;
   }
 }
   
   $('.banntu').fadeOut(300).eq(num).fadeIn(600)
   $('.btn>li').css('border-bottom','8px solid #211616').eq(num).css('border-bottom','8px solid #e5004f')
}
var t = setInterval(function(){change("r")},2000)

$('.nar').mouseover(function(){
    $('.banner-left').show();
    $('.banner-right').show();
    clearInterval(t)
})
$('.nar').mouseout(function(){
    $('.banner-right').hide();
    $('.banner-left').hide();
    t = setInterval(function(){change("r")},2000)
})

$('.btn>li').each(function(index,obj){
  $(obj).mouseover(function(){ 
  $('.banntu').stop(true,true)
  $('.banntu').fadeOut(600).eq(index).fadeIn(600);
  $('.btn>li').css('border-bottom','8px solid #211616').eq(index).css('border-bottom','8px solid #e5004f') 
        num=index;
  })
})

$('.banner-right').click(function(){
    change("r");
})
$('.banner-left').click(function(){
    change("l");
})
/****************************************************/
//线框
$(".jing").hover(function(){
  var index=$(this).index();
  $(".tyj-left").stop(true,true);
  $(".tyj-right").stop(true,true);
  $(".tyj-left",this).animate({left:"0"},600)
  $(".tyj-right",this).animate({right:"0"},600)
},function(){
  var index=$(this).index();
  $(".tyj-left").stop(true,false);
  $(".tyj-right").stop(true,false);
  $(".tyj-left",this).animate({left:"-30px"},600)
  $(".tyj-right",this).animate({right:"-30px"},600)
})


/****************************************************/
 //楼层跳转
 $(window).scroll(function(){
    var tops = $(window).scrollTop();
    if(tops>=700){
      $('.guding').fadeIn(500)
    }else{
      $('.guding').fadeOut(500)
    }
    $('.shishuang').each(function(index,obj){ 
        if($(obj).position().top<=tops){
        $('.gd').removeClass('kanwobianle').eq(index).addClass('kanwobianle');
      }
    })
     /*按需加载*/
  var ch=document.documentElement.clientHeight;
  for (var i = 0; i < $(".shishuang").size(); i++) {
    if($(".shishuang")[i].offsetTop<=tops+ch){
      var imgs=$("img",$(".shishuang")[i]);
      for (var j = 0; j < imgs.length; j++) {
        var src=imgs[j].getAttribute("data-src");
        imgs[j].src=src;
      };
    }
  };  
 })

/*$('.gd').each(function(index,obj){ 
    $(obj).click(function() { 
    $('.gd').removeClass('kanwobianle').eq(index).addClass('kanwobianle')
    $(window).scrollTop($('.shishuang').eq(index).position().top);
    
        })
  })*/

$(".gd").click(function(){
  var num=$(this).index();
  var cc=document.body.scrollTop?document.body:document.documentElement;
  $(this).removeClass("kanwobianle").eq(num).addClass("kanwobianle");
  animate(cc,{scrollTop:$(".shishuang")[num].offsetTop},300,Tween.Linear);
})

  $('.gdd').click(function(){
    var dd=document.body.scrollTop?document.body:document.documentElement;
     animate(dd,{scrollTop:0},300,Tween.Linear)
    })
/****************************************************/


$(".good-left").click(function(e){
     var ev=e||window.event;
     if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$(this).prev(".good");
     $(".goodbox>div:first",$(evafa)).before($(".goodbox>div:last",$(evafa)));
     $(".goodbox",$(evafa)).stop(true,true); 
     $(".goodbox",$(evafa)).animate({"left":"-170px"},0);  
     $(".goodbox",$(evafa)).animate({"left":"0px"},1000);  
});
$(".good-right").click(function(e){
     var ev=e||window.event;
      if(ev.preventDefault){
          ev.preventDefault()
     }else{
          ev.returnValue=false;
     };
     var evafa=$($(this).prev("a")).prev(".good");
     $(".goodbox",$(evafa)).stop(true,true); 
     $(".goodbox",$(evafa)).animate({"left":"-170px"},1000,function(){
     $(".goodbox",$(evafa)).css({"left":"0px"});
     $(".goodbox>div:last",$(evafa)).after($(".goodbox>div:first",$(evafa))); 
     });
});

/****************************************************/
