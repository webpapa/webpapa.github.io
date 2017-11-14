$(document).ready(function() {
	gnb (); //gnb 
	js_fixed (); //js_fixed
	js_search (); //js_search 
	input_auto_val_setting (); //input_auto_val_setting
	js_visual (); //js_visual
	banner_move (); //banner_move 
	relate_site (); //relate_site 
	floatingTop (); //floatingTop 	
	js_link (); //js_link
	js_card (); //js_card
	js_newsletter (); //js_newsletter
	js_ticker ();


	$(window).resize(function(){
		js_fixed (); //js_fixed
	});
	
});


//js_fixed
function js_fixed (){
	var fixed_obj = $("#header");
		fixed_obj.logo = fixed_obj.find(".logo"); 
//		fixed_obj.gnb = fixed_obj.find("#gnb");
		fixed_obj.nav = fixed_obj.find("#nav");
		fixed_obj.sc = fixed_obj.find(".totalsearch");
	
	$(window).scroll(function () {	
		if(fixed_obj.gnb.attr("class") == "web"){ 
			var winTop = $(this).scrollTop();
			if(winTop >= 36){
				fixed_obj.addClass("fixed");
				fixed_obj.logo.stop().animate({"top":45+"px", "width":195+"px", "height":42+"px"},100);
				fixed_obj.gnb.stop().animate({"height":65+"px"},100);
				fixed_obj.sc.stop().animate({"top":50+"px"},100);
			} else {
				fixed_obj.removeClass("fixed"); 	
				fixed_obj.logo.stop().animate({"top":60+"px", "width":241+"px", "height":52+"px"},100);
				fixed_obj.gnb.stop().animate({"height":105+"px"},100);
				fixed_obj.sc.stop().animate({"top":75+"px"},100);
			}
		}	
	});	
}


//js_search 
function js_search (){
	var search_obj = $(".totalsearch");
		search_obj.box = search_obj.find("div");
		search_obj.box.input = search_obj.box.find(">input");
		search_obj.btn = search_obj.find(">.btn"); 
	var	move = "";	
	 	
	//default
	js_search_def (search_obj);
	$(window).resize(function(){
		//js_search_def (search_obj);
	});
	
	//click
	search_obj.btn.click(function(){
		if(search_obj.box.is(":animated")) return false;
		if(!$(this).hasClass("active")){
			js_search_move (search_obj,"open");	
		} else {
			js_search_move (search_obj,"close");
		}	
		return false;	
	});	
	
	//mouseleave
	//search_obj.mouseleave(function(){
	$("#header").mouseleave(function(){		
		if($(".mob_btn").is(":hidden")){
			if(search_obj.btn.hasClass("active")){
				js_search_move (search_obj,"close");		
			}
		}
	});
}
function js_search_move (search_obj,move){
	if(move == "open"){
		search_obj.btn.addClass("active").find(">span").text("검색닫기");
		if($(".mob_btn").is(":hidden")){
			//$("#nav").fadeOut(100);
			search_obj.box.stop().animate({"width":306+"px"},500,"easeInOutExpo",function(){
				search_obj.box.input.fadeIn(300);
			});		
		} else {
			search_obj.box.fadeIn(300);		
		}	
	} else if(move == "close") {
		search_obj.btn.removeClass("active").find(">span").text("검색열기");	
		if($(".mob_btn").is(":hidden")){
			search_obj.box.input.fadeOut(0);
			search_obj.box.stop().animate({"width":33+"px"},500,"easeInOutExpo",function(){
				//$("#nav").fadeIn(100);	
			});	
		} else {
			search_obj.box.fadeOut(300);	
		}
	}	
}
function js_search_def (search_obj){
	search_obj.btn.removeClass("active").find(">span").text("검색열기");
	if(!$(".mob_btn").is(":hidden")){
		search_obj.box.hide();
	} else {
		search_obj.box.show();	
	}	
}	


//input_auto_val_setting
function input_auto_val_setting (){
	var inputs = $(".input_val");
	for(var i=0; i<inputs.size(); i++){
		if(!inputs.eq(i).val()){
			inputs.titles = inputs.eq(i).attr("title");
			inputs.eq(i).val(inputs.titles);
		}
	}
	inputs.siblings("input[type=image], input[type=submit], input[type=button]").click(function(){
		var obj = $(this).siblings("input[type=text]"); 
		var v = obj.val();
		var t = obj.attr("title");
		
		if(v == t){
			obj.val("");			
		}
	});
	inputs.on("focus",function(){
		var t = $(this).attr("title");
		var v = $(this).val();

		if(t == v || v == ""){
			$(this).val("");
		}
	});
	inputs.on("blur",function(){
		var t = $(this).attr("title");
		var v = $(this).val();

		if(v == ""){
			$(this).val(t);
		}
	});
}


//gnb
function gnb (){
	var res = "";
	var param = $("#gnb");
		param.nav = param.find(">.al_box> #nav");
		param.nav.ul = param.nav.find(">ul"); 
		param.nav.ul.li = param.nav.ul.find(">li"); 
		param.nav.ul.li.a = param.nav.ul.li.find(">a"); 
		param.nav.ul.li.ul = param.nav.ul.li.find(">ul"); 
		param.nav.ul.li.ul.li = param.nav.ul.li.ul.find(">li"); 
		param.nav.ul.li.ul.li.a = param.nav.ul.li.ul.li.find(">a"); 
		param.nav.ul.li.ul.li.ul = param.nav.ul.li.ul.li.find(">ul"); 	
		param.nav.ul.li.ul.li.ul.li = param.nav.ul.li.ul.li.ul.find(">li"); 
		param.nav.ul.li.ul.li.ul.li.a = param.nav.ul.li.ul.li.ul.li.find(">a"); 
		param.blind = param.find(">#blind");
		param.times = "";
		param.blind.hei = "180"; 

	//default	
	param.nav.ul.li.a.each(function(e){
		$(this).addClass("num"+(e+1));	
	});
	param.nav.ul.li.ul.css({"height":0});			
	param.nav.ul.li.ul.find(">li:first-child").css({"padding-top":20+"px"});
	if(!$(".mob_btn").is(":hidden")) res = "mob";
	else res = "web";
	param.attr("class",res);		
	def(param);
	$(window).resize(function(){
		if(!$(".mob_btn").is(":hidden")) res2 = "mob";
		else res2 = "web";
		param.attr("class",res2);		
		if(res != res2){
			def(param);
			res = res2;
		}
	});
	
	//web
	param.nav.ul.li.a.mouseover(function(){
		clearTimeout(param.times); 
		if(param.attr("class") == "web"){
			param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
			$(this).addClass("ov").siblings("ul").addClass("ov");
			if($(this).siblings("ul").size() != 0){
				param.blind.show().stop().animate({"height":param.blind.hei +"px"},500,"easeOutCubic");	
				param.nav.ul.li.ul.show().stop().animate({"height":param.blind.hei +"px"},500,"easeOutCubic");		 	
			}
		}
	});
	
	param.nav.ul.li.a.mouseout(function(){
		if (param.attr("class") == "web") {
			param.times = setTimeout(function(){
				def(param);
			},1000);
		}	
	});	
	param.nav.ul.li.ul.mouseenter(function(){
		if (param.attr("class") == "web") {
			clearTimeout(param.times);
		}
	});
	
	param.nav.ul.mouseleave(function(){
		if (param.attr("class") == "web") {
			def(param);	
		}
	});
	param.nav.ul.li.ul.li.a.mouseover(function(){
		if (param.attr("class") == "web") {
			param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
			$(this).parent().parent().siblings("a").addClass("ov");
			$(this).parent().parent().addClass("ov");
		}
	});	
	param.nav.ul.li.a.focus(function(){
		if (param.attr("class") == "web") {
			$(this).mouseover();
		}
	});
	param.nav.ul.li.eq(4).find(">ul>li").last().find(">a").blur(function(){
		if (param.attr("class") == "web") {
			param.nav.ul.li.a.mouseout();
		}
	});
	
	//mobile
	function mob_close(){
		$(".mob_btn").removeClass("ov");
		$("#wrap>*").animate({"left":0},300,"easeOutCubic");
		param.stop().animate({"left":-220+"px"},300,"easeOutCubic",function(){
			$(this).hide().css({"height":"auto"});	
		});
		param.blind.stop().animate({"left":0,"opacity":0},300,"easeOutCubic",function(){
			$(this).hide();	
		});
	}
	$(".mob_btn").click(function(){
		if(!$(".mob_btn").hasClass("ov")){
			$(this).addClass("ov");
			$("#wrap > *").stop().animate({"left":220+"px"},300,"easeOutCubic");
			param.show().css({"height":$(document).height()+"px"});
			param.blind.show().css({"height":100+"%"}).stop().animate({"left":220,"opacity":0.6},300,"easeOutCubic");
		} else {
			mob_close();	
		}
		return false;	
	});
	param.blind.click(function(){
		mob_close();
		return false;	
	});
	
	param.nav.ul.li.a.click(function(){
		if(param.attr("class") == "mob"){
			param.nav.ul.li.ul.css({"height":"auto"});
			param.nav.ul.li.a.not(this).removeClass("ov").next().slideUp();
			$(this).toggleClass("ov").next().slideToggle();
			return false;
		} else if (param.attr("class") == "web") {
			return true;	
		}	 
	});
	param.nav.ul.li.ul.li.a.click(function(){ 
		if(param.attr("class") == "mob"){
			if($(this).next().size() != 0){
				param.nav.ul.li.ul.li.a.not(this).removeClass("ov").next().slideUp();
				$(this).toggleClass("ov").next().slideToggle();	
				return false;
			}
		} else if (param.attr("class") == "web") {
			return true;	
		}
	});
	param.nav.ul.li.ul.li.ul.li.a.click(function(){
		if(param.attr("class") == "mob"){
			if($(this).next().size() != 0){
				param.nav.ul.li.ul.li.ul.li.a.not(this).removeClass("ov").next().slideUp();
				$(this).toggleClass("ov").next().slideToggle();	
				return false;
			}
		} else if (param.attr("class") == "web") {
			return true;	
		}
	});
	
}	
function def(param){
	if(param.attr("class") == "web"){
		param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
		param.blind.css({"left":0,"opacity":0.9}).stop().animate({"height":0},500,"easeOutCubic",function(){
			$(this).hide();
		});	
		param.nav.ul.li.ul.stop().animate({"height":0},500,"easeOutCubic",function(){
			$(this).hide();	
		});
	} else if (param.attr("class") == "mob"){
		$(".mob_btn").removeClass("ov");
		$("#wrap > *").css({"left":0});
		param.hide().css({"height":"auto"});
		param.blind.hide().css({"opacity":0.6,"top":0});
		param.nav.ul.li.a.removeClass("ov").next().slideUp();
		param.nav.ul.li.ul.removeAttr("style");
		param.nav.ul.li.ul.li.a.removeClass("ov").next().slideUp();
		param.nav.ul.li.ul.li.ul.li.a.removeClass("ov").next().slideUp();
	}
}
 
 
//js_visual
function js_visual(){
    var slide = $(".section00");
    slide.controls = slide.find(">.vi_control");
    slide.counts = slide.controls.find(">.control");
    slide.btn_left = slide.controls.find(">.btn_left");
    slide.btn_right = slide.controls.find(">.btn_right");
    slide.btn_play = slide.controls.find(">.btn_play");
    slide.btn_stop = slide.controls.find(">.btn_stop");
    slide.ul = slide.find(">.visual");
    slide.li = slide.ul.find(">li");
    slide.a = slide.ul.find(">li>a");
    slide.speeds = 2000;
    slide.autos = "Y";
    slide.times = "";
    slide.times_speeds = 5000;
    slide.nums = 1;
 
    //제어
    if(slide.li.size() < 2){
        slide.controls.remove();
        return false;
    }
	
    //심볼
    $("<ul></ul>").appendTo(slide.controls);
    for(var i=0; i<slide.li.size(); i++){
        $('<li><a href="#">'+(i+1)+'번</a></li>').appendTo(slide.controls.find(">ul"));
    }
    slide.simbols = slide.controls.find(">ul>li");
    slide.simbols.eq(0).find(">a").addClass("on");
 
    //넘버링
    for(var i=0; i<slide.li.size(); i++){
        slide.li.eq(i).attr("data-count",(i+1));
    }
 
    //총 카운트 적용
    slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
 
    //버튼 : 다음
    slide.btn_right.click(function(){
        slide.btn_stop.click();
        movement("right");
        return false;
    });
 
    //버튼 : 이전
    slide.btn_left.click(function(){
        slide.btn_stop.click();
        movement("left");
        return false;
    });
 
    //버튼 : 재생
    slide.btn_play.click(function(){
        slide.btn_play.hide();
        slide.btn_stop.css("display","inline-block");
        slide.autos = "Y";
        slide.times = setTimeout(function(){
            movement("right");
        },slide.times_speeds);
        return false;
    });
 
    //버튼 : 정지
    slide.btn_stop.click(function(){
        slide.btn_stop.hide();
        slide.btn_play.css("display","inline-block");
        slide.autos = "N";
        clearTimeout(slide.times);
        return false;
    });
 
    //버튼 : 심볼
    slide.simbols.find(">a").click(function(){
        if($(this).hasClass("on")) return false;
        var idx = slide.simbols.index($(this).parent());
        slide.btn_stop.click();
        movement(idx);
        return false;
    });
 
    //자동재생
	if(slide.autos == "Y"){
		slide.btn_play.click();	
	} else {
		
	}  
 
    //animate
    function movement(ty){
        slide.li = slide.ul.find(">li");
 
        var olds = 0;
        var news = 0;
 
        if(ty == "right"){
            //다음
            olds = slide.nums;
            news = slide.nums + 1;
 
            if(news >= slide.li.size()) news = 0;
        } else if(ty == "left"){
            //이전
            olds = slide.nums;
            news = slide.nums - 1;
 
            if(news < 1) news = slide.li.size();
        } else {
            //심볼클릭
            olds = slide.nums;
            news = ty+1;
            if(news >= slide.li.size()) news = 0;
        }
 
        if(slide.li.eq(news-1).is(":animated")) return false;
 
        slide.li.eq(olds-1).stop().css({"opacity":"1","left":"0","z-index":"10"}).animate({"opacity":"0"},slide.speeds,function(){
            slide.li.eq(olds-1).css("left","100%");
            if(slide.autos == "Y"){
                slide.times = setTimeout(function(){
                    movement("right");
                },slide.times_speeds);
            }
        });
 
        slide.li.eq(news-1).stop().css({"opacity":"1","left":"0","z-index":"9"}).animate({"opacity":"1"},slide.speeds,function(){
        }); 
 
        slide.nums = news;
 
        //총 카운트 적용
        slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
 
        //심볼
        slide.simbols.find(">a.on").removeClass("on");
        slide.simbols.eq(slide.nums-1).find(">a").addClass("on");
    }
}
			
			 
//banner_move
function banner_move (){	
	var dir = "";
	var banner_obj = $(".slide_banner > .al_box > div");
		banner_obj.prev = banner_obj.siblings(".prev_btn");  
		banner_obj.next = banner_obj.siblings(".next_btn");  
	
	//default
	banner_size (banner_obj);
	$(window).resize(function(){
		banner_size (banner_obj);	
	});
		
	banner_obj.prev.click(function(){
		var i = $(this);
		banner_dir("right",banner_obj,i);
		return false;
	});	
	
	banner_obj.next.click(function(){
		var i = $(this);
		banner_dir("left",banner_obj,i);
		return false;
	});	 	
}
function banner_size (banner_obj){
	var elem_wid = (banner_obj.innerWidth());
	var win_wid = $(window).width();
	if($(".mob_btn").is(":hidden") && win_wid > 823){
		banner_obj.find(">ul>li").width(elem_wid/6);	
	} else if (!$(".mob_btn").is(":hidden") && win_wid > 823) {
		banner_obj.find(">ul>li").width(elem_wid/4);		
	} else if (!$(".mob_btn").is(":hidden") && win_wid <= 823 && win_wid > 463) {
		banner_obj.find(">ul>li").width(elem_wid/3);		
	} else if (!$(".mob_btn").is(":hidden") && win_wid <= 463) {
		banner_obj.find(">ul>li").width(elem_wid/2);		
	}		
}
function banner_dir(dir ,banner_obj,i){
	if(dir  == "left"){
		var pos = i.siblings("div").find(">ul>li:eq(1)").position().left; 
		i.siblings("div").find(">ul").stop().animate({"left":-pos+"px"},600,"easeInOutExpo",function(){
			$(this).css({"left":0});
			$(this).find(">li").first().appendTo($(this));	
		});
	} else if(dir  == "right"){
		var pos = i.siblings("div").find(">ul>li:eq(1)").position().left; 
		var t = i.siblings("div").find(">ul");
		t.css({"left":-pos+"px"});
		t.find(">li").last().prependTo(t);
		t.stop().animate({"left":0+"px"},600,"easeInOutExpo");
	}	
}
			
			
function tab_board_setting(str1,str2,str3){
    var tboard = $(str1);
    tboard.li = tboard.find(">li");
    tboard.li.a = tboard.li.find(">a");
    tboard.li.div = tboard.li.find(">div");
	
    tboard.li.css({"float":"left"});
    tboard.li.div.css({"position":"absolute","left":"0","top":str3+"px","margin-top":"0"});
    tboard.li.find(" .more").css({"position":"absolute"}).hide(); 			
	tboard.li.a.css({"left":(tboard.width() - tboard.li.innerWidth()*tboard.li.size())/2+"px"});
	$(window).resize(function(){
		tboard.li.a.css({"left":(tboard.width() - tboard.li.innerWidth()*tboard.li.size())/2+"px"});	
	});	
 
    tab_board_view(tboard,0);
     
    if(str2 == "click" || str2 == ""){
        tboard.li.a.on("click focus",function(){
            var idx = tboard.li.a.index($(this));
            tab_board_view(tboard,idx);
            return false;
        });
    }
    if(str2 == "over"){
        tboard.li.a.on("mouseover focus",function(){
            var idx = tboard.li.a.index($(this));
            tab_board_view(tboard,idx);
            return false;
        });
    }
}
function tab_board_view(tboard,str){
    var obj = tboard.li.eq(str);   
    obj.ul = obj.find(">div");
    obj.news = obj.find(">a");  
    if(obj.news.find(">img").size() != 0){
        obj.news.imgs = obj.news.find(">img")[0];   
        obj.news.types = obj.news.imgs.src.split(".");
        obj.news.types = obj.news.types[obj.news.types.length - 1];
    }
    obj.olds = tboard.li.find(">a.on");
    if(obj.news.find(">img").size() != 0 && obj.olds.size() > 0){
        obj.olds.imgs = obj.olds.find(">img")[0];
        obj.olds.types = obj.olds.imgs.src.split(".");
        obj.olds.types = obj.olds.types[obj.olds.types.length - 1];
    }
 
    tboard.li.div.css({"opacity":"0","z-index":1});
    tboard.li.find(" .more").hide();
    tboard.li.eq(str).find(" .more").show();
    obj.ul.css({"opacity":"1","z-index":10});
 
    obj.olds.removeClass("on");
    obj.news.addClass("on");
     
    if(obj.news.find(">img").size() != 0){
        if(obj.olds.size() > 0){
            obj.olds.imgs.src = obj.olds.imgs.src.replace("_ov."+obj.olds.types,"."+obj.olds.types);
        }
        if(obj.news.imgs.src.indexOf("_ov.") == -1){
            obj.news.imgs.src = obj.news.imgs.src.replace("."+obj.news.types,"_ov."+obj.news.types);
        }
    }
}


function board_move (){
	var dir = "";
	var board_obj = $(".board_list");
		board_obj.prev = board_obj.siblings(".prev_btn");  
		board_obj.next = board_obj.siblings(".next_btn");  
	
	//default
	board_size (board_obj);
	$(window).resize(function(){
		board_size (board_obj);	
	});
		
	board_obj.prev.click(function(){
		var i = $(this);
		board_dir("right",board_obj,i);
		return false;
	});	
	
	board_obj.next.click(function(){
		var i = $(this);
		board_dir("left",board_obj,i);
		return false;
	});	 	
}
function board_size (board_obj){
	var elem_wid = (board_obj.innerWidth()+parseInt(board_obj.find(">ul>li>a").css("margin-right")));
	var win_wid = $(window).width();	
	if($(".mob_btn").is(":hidden") && win_wid > 623){
		board_obj.each(function() {
			if($(this).find(">ul>li").size() <=4){;
				$(this).siblings(".prev_btn").hide();	
				$(this).siblings(".next_btn").hide();	
			}
		});
		board_obj.find(">ul>li").width(elem_wid/4);	
	} else if (!$(".mob_btn").is(":hidden") && win_wid > 623) {	
		board_obj.prev.show();
		board_obj.next.show();
		board_obj.find(">ul>li").width(elem_wid/3);		
	} else if (!$(".mob_btn").is(":hidden") && win_wid <= 623 && win_wid > 463) {
		board_obj.find(">ul>li").width(elem_wid/2);		
	} else if (!$(".mob_btn").is(":hidden") && win_wid <= 463) {
		board_obj.find(">ul>li").width(elem_wid/1);		
	}					
}
function board_dir(dir,board_obj,i){
	if(dir == "left"){
		var pos = i.siblings(".board_list").find(">ul>li:eq(1)").position().left; 
		i.siblings(".board_list").find(">ul").stop().animate({"left":-pos+"px"},600,"easeInOutExpo",function(){
			$(this).css({"left":0});
			$(this).find(">li").first().appendTo($(this));	
		});
	} else if(dir == "right"){
		var pos = i.siblings(".board_list").find(">ul>li:eq(1)").position().left; 
		var t = i.siblings(".board_list").find(">ul");
		t.css({"left":-pos+"px"});
		t.find(">li").last().prependTo(t);
		t.stop().animate({"left":0+"px"},600,"easeInOutExpo");
	}	
}


//relate_site
function relate_site (){
	var relate_js = $(".relate_site > .al_box");
		relate_js.btn = relate_js.find(">.btn"); 
		relate_js.elem = relate_js.find(">.cont");  
			
	relate_js.btn.click(function(){
		if(relate_js.elem.is(":animated")) return false;	
		if(!$(this).hasClass("up")){
			$(this).addClass("up").html("<span>콘텐츠 열기</span>");
			relate_js.elem.slideUp(600,"easeInOutExpo");
			//$("body,html").stop().animate({"scrollTop":(relate_js.offset().top)+"px"},500,"easeInOutExpo");	
		} else {
			$(this).removeClass("up").html("<span>콘텐츠 닫기</span>");
			relate_js.elem.slideDown(600,"easeInOutExpo");
			//$("body,html").stop().animate({"scrollTop":$(document).height()+"px"},500,"easeInOutExpo");
		}
		return false;	
	});			
}


//floatingTop
function floatingTop (){
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		var headerTop = $("#header").height();
		
		if (winTop > headerTop) {
			$(".floating_top").fadeIn(300,"easeOutCubic");
		} else if (winTop <= headerTop) {
			$(".floating_top").fadeOut(300,"easeOutCubic");
		}
	});	
	$(".floating_top a").click(function(){
		$("body,html").stop().animate({"scrollTop":"0"},600,"easeOutCubic");
		return false;
	});
}


//js_link
function js_link (){
	var link_obj = $(".link_go > .bor >ul");
		link_obj.li = link_obj.find("li");
		link_obj.li.a = link_obj.li.find(">a");

	link_obj.li.a.mouseover(function(){
		$(this).siblings(".tool_tip").show();
	});
	link_obj.li.a.mouseout(function(){
		$(this).siblings(".tool_tip").hide();
	});
}


// js_card
function js_card (){
	var nl_obj = $(".card >.bor");
		nl_obj.controls = nl_obj.find(">.control"); 
		nl_obj.controls.a = nl_obj.controls.find(">a");
		nl_obj.ul = nl_obj.find(">ul"); 
		nl_obj.ul.li = nl_obj.ul.find(">li"); 
	
	nl_obj.controls.a.click(function(){
		var t = $(this).index();
		if(nl_obj.ul.li.eq(t).is(":animated")) return false;
		
		nl_obj.controls.a.removeClass("on");
		nl_obj.ul.li.stop().animate({"opacity":0},500,function(){
			$(this).css({"z-index":1,"left":100+"%","display":"none","opacity":0});		
		});
		nl_obj.controls.a.eq(t).addClass("on");
		nl_obj.ul.li.eq(t).css({"z-index":10,"left":0,"display":"block"}).stop().animate({"opacity":1},500);
		return false;	
	});
}


// js_newsletter
function js_newsletter (){
	var nl_obj = $(".newsletter >.bor");
		nl_obj.controls = nl_obj.find(">.control"); 
		nl_obj.controls.a = nl_obj.controls.find(">a");
		nl_obj.ul = nl_obj.find(">ul"); 
		nl_obj.ul.li = nl_obj.ul.find(">li"); 
	
	nl_obj.controls.a.click(function(){
		var t = $(this).index();
		if(nl_obj.ul.li.eq(t).is(":animated")) return false;
		
		nl_obj.controls.a.removeClass("on");
		nl_obj.ul.li.stop().animate({"opacity":0},500,function(){
			$(this).css({"z-index":1,"left":100+"%","display":"none","opacity":0});		
		});
		nl_obj.controls.a.eq(t).addClass("on");
		nl_obj.ul.li.eq(t).css({"z-index":10,"left":0,"display":"block"}).stop().animate({"opacity":1},500);
		return false;	
	});
}


// js_ticker
var sett = "";
function js_ticker (){
	var ticker_obj = $(".state_ticker >.wrap");
		ticker_obj.ul = ticker_obj.find(">ul");
		ticker_obj.ul.li = ticker_obj.ul.find(">li");
		ticker_obj.ul.li.a = ticker_obj.ul.li.find(">a");
	
	sl_Top(ticker_obj);
	ticker_obj.ul.li.a.bind("mouseenter focus",function(){
		clearInterval(sett);
		return false;
	});
	ticker_obj.ul.li.a.bind("mouseleave focusout",function(){
		clearInterval(sett);
		sl_Top (ticker_obj);
		return false;
	});
}
function move_ac (ticker_obj){
	ticker_obj.ul.stop().animate({"top":-ticker_obj.ul.li.height()+"px"},1000,"easeInOutExpo",function(){
		ticker_obj.ul.find(">li").eq(0).appendTo(ticker_obj.ul);
		$(this).css({"top":0});
	});
}	
function sl_Top (ticker_obj){
	clearInterval(sett);
	sett = setInterval(function(){
		move_ac (ticker_obj);
	},4000);
}
