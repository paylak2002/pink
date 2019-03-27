const x = 41
const y = 33
const sharik = document.getElementById('sharik')
var left_sharik = 0
var top_sharik = 0
var bool_top = true
var bool_left = true
$(document).ready(()=>{
	var left = 0
	console.log("hello")
	for (var i = 0; i < y; i++) {
		$("<div></div>").attr({"id":i+"tox"}).css({"height":100/y + "%","width":100 + "%"}).appendTo('#xax')
		for(var j = 0;j<x;j++){
			$("<div></div>").attr({"id":j+"cube","class":"cube"}).css({"height":100 + "%","width":100/x + "%"}).appendTo('#' + i + "tox")
		}
	}
	var key = (key)=>{
		console.log(key.keyCode)
		var IdKeyCode = key.keyCode
		if(IdKeyCode == 39 && left<$("#xax").width() - $("#sigar").width())
		{
			left+=4
		}
		else if(IdKeyCode == 37 && left>0)
		{
			left-=4
		}
		console.log(left)
		$("#sigar").css('left',left + "px")
	}
	setInterval(()=>{
		if(bool_top == true && bool_left == true)
		{
			left_sharik++
			top_sharik++
		}
		else if(bool_top == true && bool_left == false)
		{
			left_sharik--
			top_sharik++
		}
		else if(bool_top == false && bool_left == true)
		{
			left_sharik++
			top_sharik--
		}
		else{
			left_sharik--
			top_sharik--
		}
		$("#sharik").css({"left":left_sharik + "px","top":top_sharik + "px"})
		if(
			($('#sharik').position().top + $('#sharik').height()) > $('#sigar').position().top &&
			$('#sharik').position().left > $('#sigar').position().left &&
			$('#sharik').position().left < ($('#sigar').position().left + $('#sigar').width())
		)
		{
			console.log('jan2')
			if(bool_top == true && bool_left == true)
			{
				bool_left = true
				bool_top = false
			}
			else if(bool_top == true && bool_left == false)
			{
				bool_left = false
				bool_top = false
			}
		}
		else if(
			$('#sharik').position().top > $('#sigar').position().top &&
			$('#sharik').position().top < ($('#sigar').position().top + $('#sigar').height()) &&
			($('#sharik').position().left + $('#sharik').width()) > $('#sigar').position().left && bool_left == true
		)
		{
			bool_left = false
			bool_top = true
		}
		else if(
			$('#sharik').position().top > $('#sigar').position().top &&
			$('#sharik').position().top < ($('#sigar').position().top + $('#sigar').height()) &&
			$('#sharik').position().left < ($('#sigar').position().left + $('#sigar').width()) && bool_left == false
		)
		{
			console.log('jan')
			bool_left = true
			bool_top = true
		}
	},40)
	document.onkeydown = key
})
