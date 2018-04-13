/**
 * author levi
 * url http://levi.cg.am
 */
$(function() {
	function debug(msg){
		$("#debug").text(msg + "\n");
	}
	$(document).mousemove(function(e) {
		if (!!this.move) {
			var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
				callback = document.call_down || function() {
					var posTop = e.pageY - posix.y, posLeft = e.pageX - posix.x;
					var canvas = $(this.move_target).parent();
                    var boxHeight = $(this.move_target).height();
                    var btns = $(".f-btns").eq($(".box").index(this.move_target));//按钮对象
					if(posTop < 0){
						posTop = 0;
					}else if(posTop > canvas.innerHeight() - $(this.move_target).height()){
						posTop = canvas.innerHeight() - $(this.move_target).height();
					}
					if(posLeft < 0){
						posLeft = 0;
					}else if(posLeft > canvas.innerWidth() - $(this.move_target).width()){
						posLeft = canvas.innerWidth() - $(this.move_target).width();
					}
					$(this.move_target).css({
						'top': posTop,
						'left': posLeft
					});
                    
                    btns.css("top",posTop+boxHeight);
                    btns.css("left",posLeft);
                    
                   
				};
			callback.call(this, e, posix);
			return false;
		}
	}).mouseup(function(e) {
		if (!!this.move) {
			var callback = document.call_up || function(){};
			callback.call(this, e);
			$.extend(this, {
				'move': false,
				'move_target': null,
				'call_down': false,
				'call_up': false
			});
		}
	});
});