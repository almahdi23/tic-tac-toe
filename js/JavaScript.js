$(document).ready(function () {

	// create and return the cross
	function cross() {
		var cross = document.createElement("div")
		$(cross).addClass("cross")

		var lineone = document.createElement("div")
		$(lineone).addClass("line")
		var linetwo = document.createElement("div")
		$(linetwo).addClass("line")

		$(cross).append(lineone)
		$(cross).append(linetwo)

		return cross;
	};

	// create and return the circle
	function circle() {
		var circle = document.createElement("div")
		$(circle).addClass("circle")

		var circlein = document.createElement("div")
		$(circlein).addClass("circlein")

		$(circle).html(circlein)

		return circle;
	};

	// 9 square elements
	var ela = document.getElementById("a");
	var elb = document.getElementById("b");
	var elc = document.getElementById("c");
	var eld = document.getElementById("d");
	var ele = document.getElementById("e");
	var elf = document.getElementById("f");
	var elg = document.getElementById("g");
	var elh = document.getElementById("h");
	var eli = document.getElementById("i");

	// conditon of if any player can play or the other player has win match is win
	var conditon

	function ok() {
		conditon = "ok";
	};

	function not() {
		conditon = "not";
	};
	ok()

	
	var l = 1;

	// js reset and css resets function
	function res() {
		l = 1;
		$("#l").removeClass("bg") // winnig player bg green color
		$("#r").removeClass("bg") // winnig player bg green color
		$(".square").removeClass("match") // remove innerHTML from all squares
	};

	$(".square").click(function (e) {
		if (conditon == "ok") {
			var trclass = e.target.className
			var trid = e.target.id
			var tr = e.target
			if (trclass == "square") { // if player clicking in a empty square
				inc();
				if (l % 2 == 0) {
					$(tr).html(cross());
					bgcolor()
				} else {
					$(tr).html(circle());
					bgcolor()
				};
				match()
			};
		};
	});


	function match() {
		var sqa = ela.childNodes[0] || "empty"
		var sqacls = sqa.className
		var sqb = elb.childNodes[0] || "empty"
		var sqbcls = sqb.className
		var sqc = elc.childNodes[0] || "empty"
		var sqccls = sqc.className
		var sqd = eld.childNodes[0] || "empty"
		var sqdcls = sqd.className
		var sqe = ele.childNodes[0] || "empty"
		var sqecls = sqe.className
		var sqf = elf.childNodes[0] || "empty"
		var sqfcls = sqf.className
		var sqg = elg.childNodes[0] || "empty"
		var sqgcls = sqg.className
		var sqh = elh.childNodes[0] || "empty"
		var sqhcls = sqh.className
		var sqi = eli.childNodes[0] || "empty"
		var sqicls = sqi.className

		// cross match
		if (sqacls == "cross" && sqbcls == "cross" && sqccls == "cross") {
			a();
			b();
			c();
			win("cross")
		} else if (sqacls == "cross" && sqecls == "cross" && sqicls == "cross") {
			a();
			e();
			i();
			win("cross")
		} else if (sqacls == "cross" && sqdcls == "cross" && sqgcls == "cross") {
			a();
			d();
			g();
			win("cross")
		} else if (sqccls == "cross" && sqecls == "cross" && sqgcls == "cross") {
			c();
			e();
			g();
			win("cross")
		} else if (sqccls == "cross" && sqfcls == "cross" && sqicls == "cross") {
			c();
			f();
			i();
			win("cross")
		} else if (sqgcls == "cross" && sqhcls == "cross" && sqicls == "cross") {
			g();
			h();
			i();
			win("cross")
		} else if (sqdcls == "cross" && sqecls == "cross" && sqfcls == "cross") {
			d();
			e();
			f();
			win("cross")
		} else if (sqbcls == "cross" && sqecls == "cross" && sqhcls == "cross") {
			b();
			e();
			h();
			win("cross")
		};

		// circle match
		if (sqacls == "circle" && sqbcls == "circle" && sqccls == "circle") {
			a();
			b();
			c();
			win("circle")
		} else if (sqacls == "circle" && sqecls == "circle" && sqicls == "circle") {
			a();
			e();
			i();
			win("circle")
		} else if (sqacls == "circle" && sqdcls == "circle" && sqgcls == "circle") {
			a();
			d();
			g();
			win("circle")
		} else if (sqccls == "circle" && sqecls == "circle" && sqgcls == "circle") {
			c();
			e();
			g();
			win("circle")
		} else if (sqccls == "circle" && sqfcls == "circle" && sqicls == "circle") {
			c();
			f();
			i();
			win("circle")
		} else if (sqgcls == "circle" && sqhcls == "circle" && sqicls == "circle") {
			g();
			h();
			i();
			win("circle")
		} else if (sqdcls == "circle" && sqecls == "circle" && sqfcls == "circle") {
			d();
			e();
			f();
			win("circle")
		} else if (sqbcls == "circle" && sqecls == "circle" && sqhcls == "circle") {
			b();
			e();
			h();
			win("circle")
		};

		// check if the match is draw
		var sqa = ela.innerHTML
		var sqb = elb.innerHTML
		var sqc = elc.innerHTML
		var sqd = eld.innerHTML
		var sqe = ele.innerHTML
		var sqf = elf.innerHTML
		var sqg = elg.innerHTML
		var sqh = elh.innerHTML
		var sqi = eli.innerHTML
		if (sqa != "" &&
			sqb != "" &&
			sqc != "" &&
			sqd != "" &&
			sqe != "" &&
			sqf != "" &&
			sqg != "" &&
			sqh != "" &&
			sqi != "") {
			alert("match is draw , click the reset button to play again")
		};
	};

	// green bg color for winning player number icon
	bgcolor()

	function bgcolor() {
		if (l % 2 == 0) {
			$(".right-player").addClass("red")
			$(".left-player").removeClass("red")
		} else {
			$(".left-player").addClass("red")
			$(".right-player").removeClass("red")
		};
	};

	// genarating odd even number to indentify player
	function inc() {
		l++;
	};


	// empty all 9 square when reseting
	function empty() {
		$(".square").html("")
	}

	// reset button click to reset the full game
	$("#reset").click(function () {
		res()
		ok()
		empty()
		bgcolor()
	});

	// winnig function
	function win(t) {
		$(".player").removeClass("red")
		if (t == "cross") {
			$("#l").addClass("bg")
			not()
			setTimeout(function () {
				alert("Player 1 won , click the reset button to play again");
			},100);
		} else if (t == "circle") {
			$("#r").addClass("bg")
			not()
			setTimeout(function() {
				alert("Player 2 won , click the reset button to play again");
			},100);
		};
	};

	function addMatchClass(el) {
		$(el).addClass("match")
	}

	// function to to add bgcolor in the line match
	function a() {
		addMatchClass(ela)
	};

	function b() {
		addMatchClass(elb)
	};

	function c() {
		addMatchClass(elc)
	};

	function d() {
		addMatchClass(eld)
	};

	function e() {
		addMatchClass(ele)
	};

	function f() {
		addMatchClass(elf)
	};

	function g() {
		addMatchClass(elg)
	};

	function h() {
		addMatchClass(elh)
	};

	function i() {
		addMatchClass(eli)
	};
	var j = true;
	console.log(typeof j);
});
