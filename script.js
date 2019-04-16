const matrix = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
console.log(matrix[0].length)
const x = 41
const y = 33
const sharik = document.getElementById('sharik')
var left_sharik = 200
var top_sharik = -400
var bool_top = false
var bool_left = false
var bool_aj_dzax = false
var arrObj = []
$(document).ready(()=>{
	var left = 0
	console.log("hello")
	for (var i = 0; i < y; i++) {
		$("<div></div>").attr({"id":i+"tox"}).css({"height":100/y + "%","width":100 + "%"}).appendTo('#xax')
		for(var j = 0;j<x;j++){
			$("<div></div>").attr({"id":j+"cube","class":"cube"}).css({"height":100 + "%","width":100/x + "%"}).appendTo('#' + i + "tox")
		}
	}
	for(var i = 0;i<matrix.length;i++)
	{
		for(var j = 0;j<matrix[0].length;j++)
		{
			if(matrix[i][j] == 1 && $("#xax").children()[i].children[j])
			{
				$("#xax").children()[i].children[j].style.backgroundColor = 'white'
				arrObj.push({name:"cube"})
			}
			else if($("#xax").children()[i]){
				if($("#xax").children()[i].children[j])
				{
					$("#xax").children()[i].children[j].style.backgroundColor = 'black'
				}	
			}
		}
	}
	var key = (key)=>{
		console.log(key.keyCode)
		var IdKeyCode = key.keyCode
		if(IdKeyCode == 39 && left<$("#xax").width() - $("#sigar").width())
		{
			left+=8
		}
		else if(IdKeyCode == 37 && left>0)
		{
			left-=8
		}
		console.log(left)
		$("#sigar").css('left',left + "px")
	}
	getCoords = (elem) => { // кроме IE8-
	  var box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };

	}
	setInterval(()=>{
		var XLeft = getCoords(document.getElementById('sharik')).left
		var YTop = getCoords(document.getElementById('sharik')).top
		var element
		if(bool_top == true && bool_left == true)
		{
			element = document.elementFromPoint(XLeft+$('#sharik').width(),YTop+$('#sharik').height())
			left_sharik++
			top_sharik++
		}
		else if(bool_top == true && bool_left == false)
		{
			element = document.elementFromPoint(XLeft-1,YTop+$('#sharik').height())
			left_sharik--
			top_sharik++
		}
		else if(bool_top == false && bool_left == true)
		{
			element = document.elementFromPoint(XLeft+$("#sharik").width(),YTop-1)
			left_sharik++
			top_sharik--
		}
		else{
			element = document.elementFromPoint(XLeft-1,YTop-1)
			left_sharik--
			top_sharik--
		}
		if(getCoords(document.getElementById('sharik')).top < $('#xax').height())
		{
			if(element.className == "cube" && element.style.backgroundColor == "white")
			{
				element.style.backgroundColor = "black"
				arrObj.splice(0, 1)
				console.log(arrObj)
			}
		}
		if(($("#sharik").position().left + $("#sharik").width()) <= $("#sigar").position().left)
		{
			bool_aj_dzax = false
		}
		else if($("#sharik").position().left >= ($("#sigar").position().left + $("#sigar").width()))
		{
			bool_aj_dzax = true 
		}
		else{
			bool_aj_dzax = 'p'
		}
		$("#sharik").css({"left":left_sharik + "px","top":top_sharik + "px"})
		if(
			($('#sharik').position().top + $('#sharik').height()) > $('#sigar').position().top &&
			$('#sharik').position().left > $('#sigar').position().left &&
			$('#sharik').position().left < ($('#sigar').position().left + $('#sigar').width()) &&
			$('#sharik').position().top < $('#sigar').position().top
		)
		{
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
			($('#sharik').position().top + $('#sharik').height()) > $('#sigar').position().top &&
			($('#sharik').position().top + $('#sharik').height()) < ($('#sigar').position().top + $('#sigar').height()) &&
			($('#sharik').position().left + $('#sharik').width()) > $('#sigar').position().left &&
			bool_aj_dzax == false
		)
		{
			if(bool_left == true && bool_top == true)
			{
				bool_left = false
				bool_top = true
			}
		}
		else if(
			($('#sharik').position().top + $('#sharik').height()) > $("#sigar").position().top && 
			($('#sharik').position().top + $('#sharik').height()) < ($("#sigar").position().top + $("#sigar").height()) && 
			$("#sharik").position().left < ($("#sigar").position().left + $("#sigar").width()) &&
			bool_aj_dzax == true
		)
		{
			if(bool_left == false && bool_top == true)
			{
				bool_top = true
				bool_left = true
			}
		}
		else if(left_sharik < 0)
		{
			if(bool_top == true && bool_left == false)
			{
				bool_top = true
				bool_left = true
			}
			else if(bool_top == false && bool_left == false)
			{
				bool_top = false
				bool_left = true
			}
		}
		else if(top_sharik < 0 - $('#xax').height() - $('#sharik').height()){
			if(bool_top == false && bool_left == true)
			{
				bool_top = true
				bool_left = true
			}
			else if(bool_top == false && bool_left == false)
			{
				bool_top = true
				bool_left = false
			}
		}
		else if(left_sharik > $('#xax').width() - $('#sharik').width())
		{
			if(bool_top == true && bool_left == true)
			{
				bool_top = true
				bool_left = false
			}
			else if(bool_top == false && bool_left == true)
			{
				bool_top = false 
				bool_left = false
			}
		}
		else if($("#sharik").position().top + $("#sharik").height() > $("#pink").height() + $("#xax").height())
		{
			$('body').empty()
			$("<div></div>").attr('id','gameOverDivGlxavor').appendTo('body')
			$("<h1>Game Over</h1>").appendTo("#gameOverDivGlxavor")
		}
	},5)
	document.onkeydown = key
})
