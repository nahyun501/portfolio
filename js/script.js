// JavaScript Document

/*숫자카운트*/
$(".my_skill li:nth-child(1)").click(function(){
	var count0 = 0;
	timeCounter();
	function timeCounter(){
		num0 = setInterval(count0Fn, 13);
		function count0Fn(){
			count0++;
			if (count0 > 95){
				clearInterval(num0);
			} else {
				$(".number").eq(0).text(count0 + "%");
				$(".number").css({"font-family":"East Sea Dokdo"});
			}
		}
	}
});

$(".my_skill li:nth-child(2)").click(function(){
	var count1 = 0;
	timeCounter();
	function timeCounter(){
		num1 = setInterval(count1Fn, 13);
		function count1Fn(){
			count1++;
			if (count1 > 90){
				clearInterval(num1);
			} else {
				$(".number1").eq(0).text(count1 + "%");
				$(".number").css({"font-family":"East Sea Dokdo"});
			}
		}
	}
});

$(".my_skill li:nth-child(3)").click(function(){
	var count2 = 0;
	timeCounter();
	function timeCounter(){
		num2 = setInterval(count2Fn, 13);
		function count2Fn(){
			count2++;
			if (count2 > 80){
				clearInterval(num2);
			} else {
				$(".number2").eq(0).text(count2 + "%");
				$(".number").css({"font-family":"East Sea Dokdo"});
			}
		}
	}
});

$(".my_skill li:nth-child(4)").click(function(){
	var count3 = 0;
	timeCounter();
	function timeCounter(){
		num3 = setInterval(count3Fn, 13);
		function count3Fn(){
			count3++;
			if (count3 > 85){
				clearInterval(num3);
			} else {
				$(".number3").eq(0).text(count3 + "%");
				$(".number").css({"font-family":"East Sea Dokdo"});
			}
		}
	}
});

/*스킬 클릭시 이벤트 발생*/
$(".my_skill li").click(function(){
	$(this).addClass("click_on");
});

$(".my_skill li").click(function(){
	$(this).children("span").addClass("num_on");
});


/*마우스 효과*/
/*
$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
		
      var range = 20;
      
      var color = "background: rgb("+getRandomInt(0,10)+","+getRandomInt(0,10)+","+getRandomInt(0,10)+");";
      
      var sizeInt = getRandomInt(10, 25);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('body').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 1);

});
*/

/*web 호버했을때 도형 아래로 움직이기*/
$(".port_web li a").hover(
	function(){
			$(this).stop().animate({"bottom":"-443"+"px"},700);
	},
	function(){
			$(this).stop().animate({"bottom":"0"},700);
	}
);

/*화살표 반복*/
setInterval(function(){
	$(".mouse_scroll").animate({"bottom":"-150px"},500);
	$(".mouse_scroll").animate({"bottom":"-130px"},500);
});

/*포트폴리오 클릭하면 메뉴오픈*/
$(".port_open").click(function(){
	$( '.port_menu' ).show(function(){
	$(".port_01").animate({"top":"0"},800,function(){
		$(".port_02").animate({"top":"0"},800,function(){
			$(".port_03").animate({"top":"0"},800);
		});
	});
});
});

/*닫기 버튼 누르면 사라짐*/
$(".close").click(function(){
	$(".port_menu").hide();
});









