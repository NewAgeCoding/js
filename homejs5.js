
$(".div-block-196").hover(function(){
  num4 = $(this).find("h5").offset()
  originLeft = num4.left;
  $(this).find("h5").animate({"marginLeft": "+=15px"}, 200);  
  }, function(){
   $(this).find("h5").animate({"marginLeft": "-=15px"}, 200);  
});
$("#blue2").css("background-color", "transparent")
$("#blue3").css("background-color", "transparent")
$("#blue4").css("background-color", "transparent")
$("#blue2 h3").css("color", "black")
$("#blue2 h5").css("color", "#778899")
$("#blue3 h3").css("color", "black")
$("#blue3 h5").css("color", "#778899")
$("#blue4 h3").css("color", "black")
$("#blue4 h5").css("color", "#778899")
$("#blue2").css("margin-right", "0px")
$("#blue3").css("margin-right", "0px")
$("#blue4").css("margin-right", "0px")
$("#blue2 h3").css("padding-left", "0px")
$("#blue2 h5").css("padding-left", "0px")
$("#blue3 h3").css("padding-left", "0px")
$("#blue3 h5").css("padding-left", "0px")
$("#blue4 h3").css("padding-left", "0px")
$("#blue4 h5").css("padding-left", "0px")
$("#embed2").css("display", "none")
$("#embed3").css("display", "none")
$("#embed4").css("display", "none")
function makeBlue(divz, embedz) {
  $(divz).css("background-color", "#0081ff")
  $(divz).css("margin-right", "10px")
  $(`${divz} h3`).css("padding-left", "10px")
  $(`${divz} h5`).css("padding-left", "10px")
  $(`${divz} h3`).css("color", "white")
  $(`${divz} h5`).css("color", "white")
 if(embedz == "#embed1") {
 	$("#embed1").html(`
		<iframe width="100%" height="415" src="https://www.youtube.com/embed/u16GRS2hYnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
  `)
 } else if (embedz == "#embed2") {
 	$("#embed1").html(`
  	<iframe width="100%" height="415" src="https://www.youtube.com/embed/8rLMP-TpjRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)
 } else if(embedz == "#embed3") {
 	$("#embed1").html(`
  <iframe width="100%" height="415" src="https://www.youtube.com/embed/5LtpihMN-2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)
 } else if(embedz == "#embed4") {
 	$("#embed1").html(`
	<iframe width="100%" height="415" src="https://www.youtube.com/embed/evEHeVYa5II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`)
 }
} 
$(document).on("click", "#blue1", function(){
	makeBlue("#blue1", "#embed1")
})
$(document).on("click", "#blue2", function(){
	makeBlue("#blue2", "#embed2")
})
$(document).on("click", "#blue3", function(){
	makeBlue("#blue3", "#embed3")
})
$(document).on("click", "#blue4", function(){
	makeBlue("#blue4", "#embed4")
})
$(".heading-149").hover(function(){
  $(this).css("background-color", "#1c8644");
  $(this).css("color", "white");
  }, function(){
  $(this).css("background-color", "transparent");
  $(this).css("color", "#1c8644");
});
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__zoomInDown');
const element3 = document.querySelector('.m3');
element3.classList.add('animate__animated', 'animate__zoomInDown');

const element45 = document.querySelector('.la');
element45.classList.add('animate__animated', 'animate__zoomInDown');

	setInterval(function() {
		gg = $("#secondBlock9").scrollLeft() + " px"
    gg = parseInt(gg)
    if(gg <= 62) {
      $("#greenBall1").css("background-color", "limegreen")
      $("#greenBall2").css("background-color", "white")
      $("#greenBall3").css("background-color", "white")
    }
    else if(gg >= 241 && gg <= 509) {
    	$("#greenBall1").css("background-color", "white")
      $("#greenBall2").css("background-color", "limegreen")
      $("#greenBall3").css("background-color", "white")
    } else if(gg >= 510) {
    	$("#greenBall1").css("background-color", "white")
      $("#greenBall2").css("background-color", "white")
      $("#greenBall3").css("background-color", "limegreen")
    }
  }, 1200);
$(".w-background-video>video").css("width", "90%")
$(".w-background-video>video").css("height", "90%")
$(".w-background-video>video").css("right", "-90%")

$(".toy").hover(function(){
  $(this).css("filter", "brightness(105%)");
  }, function(){
  $(this).css("filter", "brightness(100%)");
});
$(".goblue").hover(function(){
  $(this).css("color", "dodgerblue");
  }, function(){
  $(this).css("color", "black");
});
if($("#createVid").css("display") == "block"){
	console.log("g1")
  if ($(window).width() > 1000) {
      $("#createVid").html(`
      <div data-poster-url="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-transcode.mp4,https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" class="w-background-video w-background-video-atom" style="
			width: 1016px;
		"><video class="extremeshadow" id="76dbfba7-d967-e5fa-70ad-4774d7673e4a-video" autoplay="" loop="" style="background-image: url(&quot;https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-poster-00001.jpg&quot;); width: 90%; height: 90%; right: -90%; border: 3px solid black;" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-transcode.mp4" data-wf-ignore="true"><source src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-transcode.webm" data-wf-ignore="true"></video><noscript><style>
		  [data-wf-bgvideo-fallback-img] {
			display: none;
		  }
		  @media (prefers-reduced-motion: reduce) {
			[data-wf-bgvideo-fallback-img] {
			  position: absolute;
			  z-index: -100;
			  display: inline-block;
			  height: 100%;
			  width: 100%;
			  object-fit: cover;
			}
		  }</style><img data-wf-bgvideo-fallback-img="true" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637787af24da19234b82410b_android-shark-splash_87659-poster-00001.jpg" alt=""/></noscript><div aria-live="polite" style="display:none;"><button aria-controls="76dbfba7-d967-e5fa-70ad-4774d7673e4a-video" type="button" data-w-bg-video-control="true" class="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"><span hidden=""><img src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg" alt="Pause video"></span><span><img src="https://uploads-ssl.webflow.com/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg" alt="Play video"></span></button></div></div>
      `)
   }
}else{
	console.log("clear")
}
class Saal {
  constructor(name, img, icon, genre, desc, pOff, dollar) {
    this.name = name;
   	this.img = img;
    this.icon = icon;
   	this.genre = genre;
   	this.desc = desc;
 	this.pOff = pOff;
 	this.dollar = dollar;
  }
}

$(document).ready(function(){

	
	//$(".lightning").addClass("flashit")
  setTimeout(function(){
    //$(".lightning").css("display", "none")
    $(".image-130").addClass("grow")
    $(".image-153").addClass("grow")
  }, 500)

});







var xc = localStorage.getItem("idz");
if(xc){
	$(".profilepage").css("display", "block")
  $(".loginpage").css("display", "none")
}

function goAndroid() {
  $(".dddddee").css("background-color", "#1c8644")
  $(".gohoriman").css("background-color", "#1c8644")
  $(".bapadding").css("background-color", "#1c8644")
	$(".android-set").css("display", "block")
  $(".ios-set").css("display", "none")
  $("#a11").text("ANDROID")
  $(".ios-click").css("display", "block")
  $(".android-click").css("display", "none")
  localStorage.setItem("android", "on")
}

function goios() {
  $(".dddddee").css("background-color", "black")
  $(".gohoriman").css("background-color", "black")
  $(".bapadding").css("background-color", "black")
	$(".android-set").css("display", "none")
  $(".ios-set").css("display", "block")
  $("#a11").text("iOS")
  $(".android-click").css("display", "block")
  $(".ios-click").css("display", "none")
  localStorage.setItem("android", "off")
}

getAndroid = localStorage.getItem("android")

if(getAndroid) {
	if(getAndroid == "on"){
  	goAndroid()
  } else {
  	goios()

  }
}

$(document).on("click", ".android-click", function(){
	goAndroid()
 $(window).scrollTop(0);
})

$(document).on("click", ".ios-click", function(){
	goios()
 $(window).scrollTop(0);
})

$(window).on('load', function(){
	$(".loading").css("display", "none")
});
$(document).on("click", ".resetz", function(){
localStorage.removeItem("mybookmarks");
localStorage.removeItem("bookmarks");
localStorage.removeItem("readgames");
localStorage.removeItem("recently");
localStorage.removeItem("ivote");
localStorage.removeItem("commentPending");
})

 $(document).ready(function() {
imageUrl1 = "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6376447822f586c553b34d46_diablo-immortal-hd.jpg"

imageUrl2 = "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6376447822f586c553b34d46_diablo-immortal-hd.jpg"

imageUrl3 = "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1d7b1bd16fe33d8a1f8ee_plague-g1.jpg"

imageUrl4 = "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/637643199eebde614e6124c0_oddmar-hd1.jpg"

  $(".abc1").css("background-image", "url(" + imageUrl1 + ")");
  $(".abc2").css("background-image", "url(" + imageUrl2 + ")");
  $(".abc3").css("background-image", "url(" + imageUrl3 + ")");
  $(".abc4").css("background-image", "url(" + imageUrl4 + ")");

 });
//$(".newmobile").addClass("animate__animated")
//$(".newmobile").addClass("animate__slideInRight")

