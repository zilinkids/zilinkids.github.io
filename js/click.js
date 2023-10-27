var a_idx = 0;

jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("爱搞科技的子霖kids","zilinkids的qqBot","小王fly","XiaowangBot","清瑜","Hope解说","小乐kids","BadJui","python王","BSOD-SYSTEM","乱敲代码pro","爱搞机的学生","编程","手工","点赞","投币","收藏","加关注");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX, y = e.pageY;
		$i.css({
			"z-index": 5,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
		});
		$("body").append($i);
		$i.animate({
			"top": y - 180,
			"opacity": 0
		},3000,function() {
			$i.remove();
		});
	});
	setTimeout('delay()', 2000);
});

function delay() {
	$(".buryit").removeAttr("onclick");
}
