
var refer_link = "https://jawsomegames.com/login/"
var game_name  = ""
var game_msg = ""
// See if user logged in
getID = localStorage.getItem("idz")
if(getID){
	$.get("https://jawsomegames.com/validate/"+getID, function(data, status){
   	if(data == 'err'){
    	alert("Please Login")
    } else {
    		console.log(data)
      	$.each( data, function( key, value ) {
          name = value[1]
          points = value[5]
          refer_link = refer_link + value[4]
          localStorage.setItem("refer_link", refer_link)
          peepsRef = value[6]
          pic = value[9]
          le_daat = value[10]
          game_name  = value[12]
          game_msg = value[13]
          if(pic == 0) {
          	pic = `<img style="width:110px;" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/630771aeb6555d5c593940af_babyshark.png">`
          } else if (pic == 1) {
            pic = `<img style="width:110px;" src='https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62b067cecb2d9a517f6cf19f_Spike.png'>`
          }
          $(".mypic").html(pic)
          $(".mystats").html(
            `
             <h2 style="font-size: 18px; margin: 0;">Welcome Back</h2>  
             ${name} <BR>
             Member for ${le_daat} <BR>
             Points = ${points} <BR>
             People refered = ${peepsRef} <BR>   
             <button class="button-5 tata3 invmobile" role="button">Invite a friend</button><BR> 
            `
          )  
        });    
      $(".posty").css("display", "block")
    } 
  });
} else {
	alert("Please Login")
}
var clicky = 0
function myFunction() {  
			if(clicky == 0) {
          $(".put").html(
          `<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5fccc288214d880019f2178e&product=sticky-share-buttons-buttons' async='async'></script`+">"+
           `<div class="sharethis-inline-share-buttons" data-url="${refer_link}" data-title="Join this 	great site so we can both earn points!"></div> `
          )
					clicky = 1
      }
			console.log("REFER:", refer_link)
  		$(".sharebox").css("display", "block")
}  
function invitefriend() {
  arr = refer_link.split("login/");
  refer_link = '?id='+arr[1]
  const shareData = {
    title: 'Android Shark',
    text: "You are receiving an exclusive invitation to join Android Shark. An exciting NEW review platform that makes discovering mobile games easier and more fun. It's completely free.",
    url: '/invite'+refer_link
  }
  async function gg2() {
    const image = await fetch('https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628b87b7a31b554187446678_shark.png');
    const blob = await image.blob();
    const file = new File([blob], 'image.png', { type: 'image/png' });
    const filesArray = [file];
 	 shareData.files = filesArray;
    try {
      navigator.share(shareData);
    } catch (err) {
      alert("Error")
    } 
  }
	gg2()
}
$(document).on("click", ".invmobile", function(){
invitefriend()
})
function myFunction2() {  
  $(".suggestbox").css("display", "block")
}  
$(document).on("click", ".closeee", function(){
  $(".sharebox").css("display", "none")
  $(".suggestbox").css("display", "none")
})
$(document).on("click", "#clickindie", function(){
	var pagination = 1
  $(".allfonts").css("background-color", "white")
  $(".allfonts").css("color", "black")
  $(".allfonts").removeClass("orange")
  $("#clickindie").addClass("orange")
  $(".profile").css("display", "none")
  $(".resources1").css("display", "none")
  $(".community1").css("display", "none")
  $('.indiegames').html('')
  $('.commz').css("display","none")
  $('.indiegames').css("display","flex")
  $("#indieawards").css("background-color", "purple")
  	$("#indieawards").css("color", "white")
  $("#commzpick").css("background-color", "transparent")
  $("#commzpick").css("color", "black")
  $.get("https://jawsomegames.com/get-indie/1", function(data, status){
    $.each( data, function( key, value ) {
    		console.log(key, value)
        name = value[0]
        pic = value[1]
      	desc = value[2]
        votez = value[3]
      	$('.indiegames').append(`
        <div class="indieblock" style="margin-right:20px;">
        <div class="imgz111">
         	<h3 class="indiegameh" style="color:grey; text-align: center;">${name}</h3>
        	<img style="width:225px;" src="https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62694cab80c17552d1ab505a_endurance-icon.jpg" loading="lazy" alt="">
          </div><div class="desc2222" style="width: 100%;">  
          <div class="div-block-31133333363" style="width:100%;">
          <div class="div-block-31133333365" style="width:100%;">
          <img style="float:left;" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62a8bec2d276b20fc08c4f90_heart.png" loading="lazy" alt="" class="heartvote">
          <div class="votesscore" style="float:right;"><h5 style="margin:0;">${votez}</h5></div></div></div></div></div>   
      `) 
    });
  });
  currentDiv = ""
	$(document).on("click", ".heartvote", function(){
  	dagaim = $(this).parent().parent().parent().find("h3").text()
    scorez = $(this).parent().find(".votesscore").text()
    currentDiv = $(this).parent().find(".votesscore")
    scorez = parseInt(scorez) + 1
    console.log(scorez, dagaim)
    $(this).parent().find(".votesscore").text(scorez)
    $.post("https://jawsomegames.com/like", {options: dagaim}, function(data, status){
    	 console.log(data)
      if(data == "You already voted!") {
      	scorez = currentDiv.text()
        console.log('TTTTTTTTTTTTTT', scorez)
        scorez = parseInt(scorez) - 1
        currentDiv.text(scorez)
        console.log('xxxxxxxxxxxxxxx', scorez)
      } else {
      console.log("dun")
      }     
  	});
  })
})
$(document).on("click", "#commzpick", function(){
  $('.commz').css("display","block")
  $('.indiegames').css("display","none")
  $("#indieawards").css("background-color", "transparent")
  $("#indieawards").css("color", "black")
  $("#commzpick").css("background-color", "orange")
  $("#commzpick").css("color", "white")
});
$(document).on("click", "#clickprofile", function(){
	$(".allfonts").css("background-color", "white")
  $(".allfonts").css("color", "black")
  $(".allfonts").removeClass("orange")
  $("#clickprofile").addClass("orange")
  $(".profile").css("display", "block")
  $(".resources1").css("display", "none")
  $(".community1").css("display", "none")
  $(".indiegames").css("display", "none")
})
$(document).on("click", "#clickresources", function(){
	$(".allfonts").css("background-color", "white")
  $(".allfonts").css("color", "black")
  $(".allfonts").removeClass("orange")
  $("#clickresources").addClass("orange")
  $(".profile").css("display", "none")
  $(".resources1").css("display", "block")
  $(".community1").css("display", "none")
  $(".indiegames").css("display", "none")
})
$(document).on("click", "#clickcommunity", function(){
	$(".allfonts").css("background-color", "white")
  $(".allfonts").css("color", "black")
  $(".allfonts").removeClass("orange")
  $("#clickcommunity").addClass("orange")
  $(".profile").css("display", "none")
  $(".resources1").css("display", "none")
  $(".community1").css("display", "block")
  $(".indiegames").css("display", "none")
  stringz = `
  <div style="height: 50px;">
    <div style="float:left; position:relative; top: -25px; display:none;"><h3>${game_name}</h3></div>
    <div><p style="text-align:center;">comment pending<p></div>      
	</div>
	<div style="display:none;"> <p>${game_msg}</p></div>
	`
    $(".mecomment").html('')
  $(".mecomment").append(stringz)
})
$(document).on("click", ".likey", function(){
	get_id = localStorage.getItem("idz")
  likey = $(this).attr('id')
  likey = likey.replace('d','');
  numz = parseInt(likey)
  likeAmount = $(this).parent().find(".tt2").text()
  gb = $(this).parent().find(".tt2")
  likeAmount = parseInt(likeAmount) + 1
  $(this).parent().find(".tt2").text("("+likeAmount+")")
  $.post("https://jawsomegames.com/likecomment", {id: get_id, like: numz}, function(result){
    	if(result != "dun"){
        likeAmount = gb.text()
        likeAmount = parseInt(likeAmount) - 1
        gb.text("("+likeAmount+")")
      }
  });
})
  $.get("https://jawsomegames.com/getcomments", function(data, status){		
    	$.each( data, function( key, value ) {
      	idz = value[0]
        votez = value[1]
        console.log(idz, votez)
        $(".likedtext"+idz).html(votez)
      })
  });
  get_recent_games = localStorage.getItem('recently')
  get_recent_games = JSON.parse(get_recent_games)
  if(get_recent_games) {
    $.each( get_recent_games, function( key, value ) {
      	game_name = key
        game_name = game_name.replace(/-/g , ' ')   
        splity = value.split(",");
        urlz = splity[0]
        imgz = splity[1]
        fully = `
          <div style="width:100px; float:left; text-align: center; margin-right: 25px;">
          <img src="${imgz}" style="width:100%; border-radius:6px;">
          <a href="${urlz}"><h3 style="color: grey;
    font-size: 11px;
    margin-top: 6px;
    line-height: 15px;">${game_name}</h3></a>
          </div>
        `
        $("#recentgames").append(fully + "<BR>")   	
    })
  }
  get_bookmarks = localStorage.getItem('bookmarks')
  get_bookmarks = JSON.parse(get_bookmarks)
  if(get_bookmarks) {
    $.each( get_bookmarks, function( key, value ) {
      	game_name = key
        game_name = game_name.replace(/-/g , ' ')
      	splity = value.split(",");
        urlz = splity[0]
        imgz = splity[1]  
        fully = `
          <div style="width:100px; float:left; text-align: center; margin-right: 25px;">
          <img src="${imgz}" style="width:100%; border-radius:6px;">
          <a href="${urlz}"><h3 style="color: grey;
    font-size: 11px;
    margin-top: 6px;
    line-height: 15px;">${game_name}</h3></a>
          </div>
        `   
        $("#booked").append(fully + "<BR>")  	
    })
  }
  $(document).on("click", ".mysuggestion", function(){
  		console.log("show")
  	  $(".suggestbox").css("display", "block")
  })
