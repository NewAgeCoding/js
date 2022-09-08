page = 1
splash_image = "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6315ff86597de774a2a20cb6_dface-p-500.jpg"
heading_game = "Diablo Immortal"
para = "Diablo Immortal is a fairly decent free-to-play ARPG that you can enjoy on a smartphone."

// Click arrow to go left
$(document).on("click", ".arrowgo", function(){
	if(page == 1){
    $(".pg1").animate({'margin-left': "-370px"}); 
  	$(".pg2").animate({'margin-left': "60px"}); 
    $(".arrowgo").text("<")
    page = 2
  } else {
    $(".pg1").animate({'margin-left': "0px"}); 
  	$(".pg2").animate({'margin-left': "370px"}); 
    $(".arrowgo").text(">")
    page = 1
  }

})

// click slab to make green
$(document).on("click", ".wslab1", function(){
	$('.ty').removeClass("wslab1picked")
  $('.ty').addClass("wslab1")
  $(".headingpicked").css("color", "white")
  $(".whiteheading1").css("color", "white")
	$(this).removeClass("wslab1")
  $(this).addClass("wslab1picked")
  $(this).find(".whiteheading1").css("color", "lime")
  $(this).find(".headingpicked").css("color", "lime")
  
  the_id = $(this).attr("id")

	if(the_id == "b1"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
         $(this).find(".whiteheading1").css("color", "lime")
          $(this).find(".headingpicked").css("color", "lime")
         
  	 $("#t1").text("Diablo Immortal")
     $("#p1").text("Diablo Immortal is a fairly decent free-to-play ARPG that you can enjoy on a smartphone.")
		$(".yellowsplat").html(`
    
    <h1 id="t1" class="heading-1609226612 move">Merge Stories</h1><p id="p1" class="move">Set sail in this fun free merge game adventure with a building game twist! Don’t be caught off guard by the dragons!</p>
    `)

     $(".dasimg11").html( `

<div class="glitch fade-in-left">
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>   
</div>

    `)
    

  }
  
	if(the_id == "b2"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
       $(this).find(".whiteheading1").css("color", "lime")
    	$("#t1").text("Mech War")
     $("#p1").text("lorum ipso yada yad ayaasdd")
     $(".yellowsplat").html(`
    <h1 id="t1" class="heading-1609226612 move">Caterra: RPG Battle Royale</h1><p id="p1" class="move">Coose whether you want to dive into the furious battle royale or hunt down mighty monsters to become the best hunter!</p>
 `)
  	 $(".dasimg11").html( `
 
</div>

          <div class="glitch fade-in-left">
      <div class="glitch__item glitchimg2"></div>
      <div class="glitch__item glitchimg2"></div>
      <div class="glitch__item glitchimg2"></div>
      <div class="glitch__item glitchimg2"></div>
      <div class="glitch__item glitchimg2"></div>
    
    </div>
    	`)
  }
  
  if(the_id == "b3"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
  $(this).find(".whiteheading1").css("color", "lime")
     $("#t1").text("Plague Inc")
     $("#p1").text("lorum Plague yada Plague ayaasdd")
     $(".yellowsplat").html(`
    <h1 id="t1" class="heading-1609226612 move">Minion Masters</h1><p id="p1" class="move">Engage in epic 1v1 or 2v2 battles, in this fast-paced strategic minion brawler that's easy to learn but hard to master.</p>
 `)
  	$(".dasimg11").html(`
              <div class="glitch fade-in-left">
      <div class="glitch__item glitchimg3"></div>
      <div class="glitch__item glitchimg3"></div>
      <div class="glitch__item glitchimg3"></div>
      <div class="glitch__item glitchimg3"></div>
      <div class="glitch__item glitchimg3"></div>
    
    </div>`) 
  }
  
    if(the_id == "b4"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
  $(this).find(".whiteheading1").css("color", "lime")
     $("#t1").text("Oddmar")
     $("#p1").text("oddmar is blah blah")
     $(".yellowsplat").html(`
    <h1 id="t1" class="heading-1609226612 move">Ready Heroes: Nirvana Hunt</h1><p id="p1" class="move">It’s time to form your team by gathering your friends or making new ones, defeat all the other bosses and teams, and acquire all the keys to win the greatest honor in the history of Nirvana.</p>
 `)
  	$(".dasimg11").html(`
              <div class="glitch fade-in-left">
      <div class="glitch__item glitchimg4"></div>
      <div class="glitch__item glitchimg4"></div>
      <div class="glitch__item glitchimg4"></div>
      <div class="glitch__item glitchimg4"></div>
      <div class="glitch__item glitchimg4"></div>
    
    </div>`)
  }
  if(the_id == "b5"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
  $(this).find(".whiteheading1").css("color", "lime")
     $("#t1").text("Not Not")
     $("#p1").text("Not Not is blah blah")
      $(".yellowsplat").html(`
  <h1 id="t1" class="heading-1609226612 move">Gunstars - Battle Royale</h1><p id="p1" class="move">A multiplayer Battle-Royale made for mobile! Play solo or invite friends and live epic experiences within the battle arenas of the Gunstars universe.</p>
 `)
  	$(".dasimg11").html(`
       <div class="glitch fade-in-left">
      <div class="glitch__item glitchimg5"></div>
      <div class="glitch__item glitchimg5"></div>
      <div class="glitch__item glitchimg5"></div>
      <div class="glitch__item glitchimg5"></div>
      <div class="glitch__item glitchimg5"></div>   
    </div>`)
  }
  if(the_id == "b6"){
    	$(".genrez11").css("color", "#789")
      $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
  $(this).find(".whiteheading1").css("color", "lime")
     $("#t1").text("Ancient Planet")
     $("#p1").text("planet is blah blah")
      $(".yellowsplat").html(`
    <h1 id="t1" class="heading-1609226612 move">One Punch Man - The Strongest</h1><p id="p1" class="move">The official turn-based strategy mobile RPG licensed by and adapted from popular Japanese anime series ONE PUNCH MAN is coming!</p>
 `)
  	$(".dasimg11").html(`
       <div class="glitch fade-in-left">
      <div class="glitch__item glitchimg6"></div>
      <div class="glitch__item glitchimg6"></div>
      <div class="glitch__item glitchimg6"></div>
      <div class="glitch__item glitchimg6"></div>
      <div class="glitch__item glitchimg6"></div>
    
    </div>`)
  }
})


  $(document).ready(function() {
  	setTimeout(function(){
		    $("#t1").addClass("move"); 
    		$("#p1").addClass("move");     
    },550)

});


$(document).on("click", ".glitchimg1", function(){
    url = ' https://play.google.com/store/apps/details?id=com.jellybtn.mergestories&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg2", function(){
    url = ' https://play.google.com/store/apps/details?id=cats.battle.royale&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg3", function(){
    url = ' https://play.google.com/store/apps/details?id=com.betadwarf.minionmasters.googleplay&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg4", function(){
    url = 'https://play.google.com/store/apps/details?id=com.droidelite.iwcbt&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg5", function(){
    url = 'https://play.google.com/store/apps/details?id=com.Monomyto.GunStars&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg6", function(){
    url = 'https://play.google.com/store/apps/details?id=com.moonton.opmen&hl=en&gl=US'
    window.open(url, '_blank');
})
