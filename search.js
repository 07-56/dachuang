var value,
	sch = $('#searcher');
sch.val("搜你想搜的").bind("input propertychange" , function () {
		value = sch.val();
	},).bind({
	focus : function () {
		if(sch.val() == "搜你想搜的"){
			sch.val("");
		}
	},
	blur : function () {
		if(sch.val() != "搜你想搜的"){
			sch.val(value);
		}
		if(sch.val() == ""){
			sch.val("搜你想搜的");
		}
	}
});