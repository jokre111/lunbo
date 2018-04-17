window.onload = function(){
	var val = 1;
	var timer;
    function right(){
    	clearTimeout(timer);
    	val++;
		if(val == 5){
			$('.list li').eq(0).addClass('white').siblings().removeClass('white');
		}
		if(val==6){
			val = 2;
			$('.list li').eq(val-1).addClass('white').siblings().removeClass('white');
			$('.wrap').css("left",-500*val+'px')
		}else{
			$('.wrap').css("left",-500*val+'px');
			$('.list li').eq(val-1).addClass('white').siblings().removeClass('white');
		}
		timer = setTimeout(right,4000)
    }
    function left(){
    	val--;

		if(val==0){
			val = 4;
			$('.wrap').css("left",-500*val+'px');
			$('.list li').eq(val-1).addClass('white').siblings().removeClass('white');
		}else{
			$('.wrap').css("left",-500*val+'px');
			$('.list li').eq(val-1).addClass('white').siblings().removeClass('white');
		}
	}
    timer = setTimeout(right,2000);
	$('.btn2').click(function(){
		right();
	})
	$('.btn1').click(function(){
		left();
	})
}
