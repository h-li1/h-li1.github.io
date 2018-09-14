	function navi() {
		$(".nav").addClass("nav_active");
		$(".nav_content").addClass("nav_content_active");
                $(".nav_bg").attr('style', 'display:block');
		setTimeout(function() {
			$(".nav_bg").addClass("nav_bg_active");
                	$(".nav_content").attr('style', 'display:block');
            	}, 200);
	}
	function closeNavi() {
		$(".nav").removeClass("nav_active");
		$(".nav_content").removeClass("nav_content_active");
		$(".nav_bg").removeClass("nav_bg_active");
		setTimeout(function() {
                	$(".nav_content").attr('style', 'display:none');
                	$(".nav_bg").attr('style', 'display:none');
            	}, 1000);
	}

	function ua() {
	var explorer = window.navigator.userAgent ;
        if (explorer.indexOf("MSIE") >= 0) {
            return 'ie';
        }
        else if (explorer.indexOf("Firefox") >= 0) {
            return 'Firefox';
        }
        else if(explorer.indexOf("Chrome") >= 0){
            return 'Chrome';
        }
        else if(explorer.indexOf("Safari") >= 0){
            return 'Safari';
        }
	}

	function greeting() {
			var hour = new Date().getHours(); 
			var greeting;
			if (hour < 12) {
				greeting = "Morning";
				$("body").attr('style',
				'background: linear-gradient(to right, #ffb347, #ffcc33);');
				$(".nav span").attr('style',
				'background: linear-gradient(to right, #ffb347, #ffcc33);');
				$("#current").attr('style',
				'background: linear-gradient(to right, #ffb347, #ffcc33);-webkit-background-clip:text;color:transparent;');
				$(".close_btn").attr('style',
				'background: linear-gradient(to right, #ffb347, #ffcc33);');
			} else if (hour >= 12 && hour <= 17) {
				greeting = "Afternoon";
				$("body").attr('style',
				'background: linear-gradient(to right, #56ab2f, #a8e063);');
				$(".nav span").attr('style',
				'background: linear-gradient(to right, #56ab2f, #a8e063);');
				$("#current").attr('style',
				'  background: linear-gradient(to right, #56ab2f, #a8e063);-webkit-background-clip:text;color:transparent;');
				$(".close_btn").attr('style',
				'  background: linear-gradient(to right, #56ab2f, #a8e063);');

			} else {
				greeting = "Evening";
				$("body").attr('style',
				'background: linear-gradient(to right, #8e2de2, #4a00e0);');
				$(".nav span").attr('style',
				'background: linear-gradient(to right, #8e2de2, #4a00e0);');
				$("#current").attr('style',
				'background: linear-gradient(to right, #8e2de2, #4a00e0);-webkit-background-clip:text;color:transparent;');
				$(".close_btn").attr('style',
				'background: linear-gradient(to right, #8e2de2, #4a00e0);');
			}
			document.getElementById("greeting").innerHTML = greeting;
	}

	function showInfo() {
	document.getElementById("browsertype").innerHTML=ua();
	document.getElementById("platform").innerHTML=navigator.platform;
	$(".getintouch iframe").attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5379601022287!2d145.065194315124!3d-37.98791075180088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66dc8b6485c8f%3A0xab1aee0ffeadf575!2sMentone+Grammar+School!5e0!3m2!1sen!2sau!4v1536713756021');
	}

	function viewPhoto1() {
		$(".hp .displayhorizontal").attr('style','background-image:url("./image/me_au_yr9learningjourney_atshoreham.jpg");');
		$(".hp .displayhorizontal").removeClass("na");
	}
	function viewPhotoOut() {
		setTimeout(function() {
                	$(".hp .displayhorizontal").addClass("na");
                	$(".hp .displayvertical").addClass("na");
            	}, 300);
	}
	function viewPhoto2() {
		$(".hp .displayhorizontal").attr('style','background-image:url("./image/feature/mymusiccover.jpg");');
		$(".hp .displayhorizontal").removeClass("na");
	}
	
	function viewPhoto3() {
		$(".hp .displayhorizontal").attr('style','background-image:url("./image/feature/myproduction.gif");');
		$(".hp .displayhorizontal").removeClass("na");
	}
	function viewPhoto4(){
		$(".hp .displayvertical").attr('style','background-image:url("./image/view_sky_cloud1.jpg");');
		$(".hp .displayvertical").removeClass("na");
	}
	





	flag = 0;
	function rdmQuote() {
		var x = Math.round(Math.random()*2)+1;
		if(
			x == 1
		){
			$(".quote:nth-child(1)").removeClass("na");
			$(".mystories .feature").attr('style','background-image:url("../../image/me_au_yr9learningjourney_atshoreham.jpg")');
			document.getElementById("featureremark").innerHTML = "learning journey at shoreham";
		};

		if(
			x == 2
		){
			$(".quote:nth-child(2)").removeClass("na");
			$(".mystories .feature").attr('style','background-image:url("../../image/reflexcam_carrumbeach.jpg")');
			document.getElementById("featureremark").innerHTML = "Carrum Beach with my reflex camera";

		};

		if(
			x == 3
		){
			$(".quote:nth-child(3)").removeClass("na");
			$(".mystories .feature").attr('style','background-image:url("../../image/delicacy_backhome.jpg")');
			document.getElementById("featureremark").innerHTML = "Italian restaurant run in suzhou p.r.c.";

		};
	}

	function taste(){
		$(".dowehavethesametaste").addClass("na");
		$(".clickmeandtry").removeClass("na");
	}

	function tryme(){
	if(flag == 0) {
		$("iframe").attr('src','https://www.youtube.com/embed/rD2iQmO_Rx0?autoplay=1');
		document.getElementById("tryme").innerHTML = "Please Wait While Loading";
		setTimeout(function() {
			document.getElementById("tryme").innerHTML = "Stop Music";
            	}, 4000);
		flag = 1;
	}
	else if (flag = 1) {
		$("iframe").attr('src','');
		$("#tryme").addClass("na");
	}
	}

	function hdPhoto() {
		$(".fullscreenblack").removeClass("na");
		$(".hdphoto").removeClass("na");
	}
	function shutHdPhoto() {
		$(".fullscreenblack").addClass("na");
		$(".hdphoto").addClass("na");
	}
	function attrHdPhoto() {
		$(".hdphoto").attr('style','background:url("../../image/delicacy_mg.jpg")');
		$(".main a").attr('href','../../image/delicacy_mg.jpg');
	}

	function loadSideChain() {
		$(".sidechain").attr('src','https://www.youtube.com/embed/NyrD_mDth4k?start=10');
		document.getElementById("sidechain").innerHTML="LOADING";
	}
	function loadAe() {
		$(".ae").attr('src','https://www.youtube.com/embed/WU-cuoyE7tM');
		document.getElementById("ae").innerHTML="LOADING";

	}








	function playDemo1() {
		var demo1 = document.getElementById("demo1");
		demo1.play();
		$("#demo-1").addClass("album-playing");
	}
	function stopDemo1() {
		var demo1 = document.getElementById("demo1");
		demo1.pause();
		demo1.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo2() {
		var demo2 = document.getElementById("demo2");
		demo2.play();
		$("#demo-2").addClass("album-playing");
	}
	function stopDemo2() {
		var demo2 = document.getElementById("demo2");
		demo2.pause();
		demo2.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo3() {
		var demo3 = document.getElementById("demo3");
		demo3.play();
		$("#demo-3").addClass("album-playing");
	}
	function stopDemo3() {
		var demo3 = document.getElementById("demo3");
		demo3.pause();
		demo3.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo4() {
		var demo4 = document.getElementById("demo4");
		demo4.play();
		$("#demo-4").addClass("album-playing");
	}
	function stopDemo4() {
		var demo4 = document.getElementById("demo4");
		demo4.pause();
		demo4.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo5() {
		var demo5 = document.getElementById("demo5");
		demo5.play();
		$("#demo-5").addClass("album-playing");
	}
	function stopDemo5() {
		var demo5 = document.getElementById("demo5");
		demo5.pause();
		demo5.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo6() {
		var demo6 = document.getElementById("demo6");
		demo6.play();
		$("#demo-6").addClass("album-playing");
	}
	function stopDemo6() {
		var demo6 = document.getElementById("demo6");
		demo6.pause();
		demo6.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo7() {
		var demo7 = document.getElementById("demo7");
		demo7.play();
		$("#demo-7").addClass("album-playing");
	}
	function stopDemo7() {
		var demo7 = document.getElementById("demo7");
		demo7.pause();
		demo7.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo8() {
		var demo8 = document.getElementById("demo8");
		demo8.play();
		$("#demo-8").addClass("album-playing");
	}
	function stopDemo8() {
		var demo8 = document.getElementById("demo8");
		demo8.pause();
		demo8.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo9() {
		var demo9 = document.getElementById("demo9");
		demo9.play();
		$("#demo-9").addClass("album-playing");
	}
	function stopDemo9() {
		var demo9 = document.getElementById("demo9");
		demo9.pause();
		demo9.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo10() {
		var demo10 = document.getElementById("demo10");
		demo10.play();
		$("#demo-10").addClass("album-playing");
	}
	function stopDemo10() {
		var demo10 = document.getElementById("demo10");
		demo10.pause();
		demo10.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo11() {
		var demo11 = document.getElementById("demo11");
		demo11.play();
		$("#demo-11").addClass("album-playing");
	}
	function stopDemo11() {
		var demo11 = document.getElementById("demo11");
		demo11.pause();
		demo11.load();
		$(".album").removeClass("album-playing");
	}
	function playDemo12() {
		var demo12 = document.getElementById("demo12");
		demo12.play();
		$("#demo-12").addClass("album-playing");
	}
	function stopDemo12() {
		var demo12 = document.getElementById("demo12");
		demo12.pause();
		demo12.load();
		$(".album").removeClass("album-playing");
	}

	function friendscomment() {
		$(".photo").addClass("na");
		$(".comment").removeClass("na");
	}
	function shutFriendscomment() {
		$(".comment").addClass("na");
		$(".photo").removeClass("na");
	}