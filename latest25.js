// latest js
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



function fixy(textzzz){
    $(".genrez11").css("color", "#789")
    //$(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
    $(".headingpicked").css("color", "#789")
    $(this).find(".whiteheading1").css("color", "lime")

    $(".dasimg11").html( ` 
    </div>
        <div class="glitch fade-in-left2" style="height: 175px;
		border: 2px solid;">
        <div class="glitch__item ${textzzz}"></div>
        <div class="glitch__item ${textzzz}"></div>
        <div class="glitch__item ${textzzz}"></div>
        <div class="glitch__item ${textzzz}"></div>
        <div class="glitch__item ${textzzz}"></div>    
    </div>
            `)

    
}


class AllGames {
  constructor(id, glitchy, name, genre, para, iconz, trailerz) {
    this.id = id
    this.glitchy = glitchy;
    this.name = name;
    this.genre = genre;
    this.para = para;
    this.iconz = iconz;
    this.trailerz = trailerz;
  }
}


g1 = new AllGames(
  'b1',
  'glitchimg1', 
  'Merge Stories', 
  'Puzzle',
  'Set sail in this fun free merge game adventure with a building game twist! Don’t be caught off guard by the dragons!', 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g2 = new AllGames(
  'b2',
  'glitchimg2', 
  'Caterra', 
  'Puzzle',
  'Choose whether you want to dive into the furious battle royale or hunt down mighty monsters to become the best hunter!', 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6335b128a24a7d80ceffd635_catera-icon.png', 
  '' 
)

g3 = new AllGames(
  'b3',
  'glitchimg3', 
  'Minion Masters', 
  'Puzzle',
  "Engage in epic 1v1 or 2v2 battles, in this fast-paced strategic minion brawler thats easy to learn but hard to master.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g4 = new AllGames(
  'b4',
  'glitchimg4', 
  'Ready Heroes', 
  'Puzzle',
  "It’s time to form your team by gathering your friends or making new ones, defeat all the other bosses and teams, and acquire all the keys to win the greatest honor in the history of Nirvana.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g5 = new AllGames(
  'b5',
  'glitchimg5', 
  'Gunstars', 
  'Puzzle',
  "It’s time to form your team by gathering your friends or making new ones, defeat all the other bosses and teams, and acquire all the keys to win the greatest honor in the history of Nirvana.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g6 = new AllGames(
  'b6',
  'glitchimg6', 
  'One Punch Man ', 
  'Puzzle',
  "The official turn-based strategy mobile RPG licensed by and adapted from popular Japanese anime series ONE PUNCH MAN is coming!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g7 = new AllGames(
  'b7',
  'glitchimg7', 
  'Warcraft Arclight Rumble', 
  'Puzzle',
  "Warcraft Arclight Rumble is a mobile action strategy game where collectible Warcraft Minis come to life to clash in epic melee battles.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g8 = new AllGames(
  'b8',
  'glitchimg8', 
  'Dual Blader', 
  'Puzzle',
  "Dual blade has chosen you as a grand master. Begin your journey as a dual blade master from High Garden to Lava Cliff, whipping the evil creatures for the justice.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g9 = new AllGames(
  'b9',
  'glitchimg9', 
  'Harry Potter', 
  'Puzzle',
  "As a first year student, you will board the Hogwarts Express, meet many new classmates and friends, learn to cast spells, and experience fantastic times in the wizarding world", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g10 = new AllGames(
  'b10',
  'glitchimg10', 
  'Kingdom Hunter', 
  'Puzzle',
  "The Kingdom Hunter is an elaborate strategy TCG mobile game where true Heroes are united to establish a Kingdom and unlock the secrets of the ancient gods in order to conquer the world.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g11 = new AllGames(
  'b11',
  'glitchimg11', 
  'Rainbow Six Mobile', 
  'Puzzle',
  "From the acclaimed Rainbow Six franchise, Rainbow Six Mobile is a free-to-play competitive, multiplayer first-person shooter experience on your phone.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g12 = new AllGames(
  'b12',
  'glitchimg12', 
  'Dear, Ella', 
  'Puzzle',
  "Meet Dear, Ella, a fate-guided adventure beyond time.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g13 = new AllGames(
  'b13',
  'glitchimg13', 
  'Time Raiders', 
  'Puzzle',
  "Delve deep and explore the vast eastern undergrounds. Treasures? Monsters? Who knows what awaits you...", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g14 = new AllGames(
  'b14',
  'glitchimg14', 
  'Star Trek Lower Decks', 
  'Puzzle',
  "The official Star Trek: Lower Decks idle game! Finally, after yet another tedious duty roster, the Lower Decks crew of the U.S.S. Cerritos is ready to party at a Zebulon Sisters concert!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g15 = new AllGames(
  'b15',
  'glitchimg15', 
  'Rent Please!', 
  'Puzzle',
  "Years of renting have made you finally decide to return to your home and inherit your family business to become a reliable landlord. As a good landlord, how will you build your community?", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)


g16 = new AllGames(
  'b16',
  'glitchimg16', 
  'DC Heroes & Villains', 
  'Puzzle',
  "The DC universe needs YOU in DC Heroes & Villains, an epic Puzzle RPG super hero game!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g17 = new AllGames(
  'b17',
  'glitchimg17', 
  'Shop Heroes Legends', 
  'Puzzle',
  "Embark on your journey as a prospective business tycoon and capitalize on strategic decisions to let your business prowess shine!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g18 = new AllGames(
  'b18',
  'glitchimg18', 
  'Iron Marines Invasion<', 
  'Puzzle',
  "Discover and conquer countless worlds across deep space. Unravel a story full of challenges and threats that will lead you across the galaxy on an extraordinary voyage.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)


g19 = new AllGames(
  'b19',
  'glitchimg19', 
  'Hungry for Home', 
  'Puzzle',
  "Suspenders is off on a grand journey to get home! With a food truck and his little brother Chibisuke in tow, come follow the Nyansukes as they travel the world!.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g20 = new AllGames(
  'b20',
  'glitchimg20', 
  'Milk Farm Tycoon', 
  'Puzzle',
  "After spending his life on the milk farm, grandpa has called it quits due to an udderly saturated market. Lily is ready to take over the farm management for gramps and fulfill his big dream of building a milk empire!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g21 = new AllGames(
  'b21',
  'glitchimg21', 
  'ZOMBIE Kingdom : Survival AFK', 
  'Puzzle',
  "The famine struck so hard this spring that there are people eating human flesh", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g22 = new AllGames(
  'b22',
  'glitchimg22', 
  'Summoners War: Chronicles', 
  'Puzzle',
  "An Action RPG based in the Summoners War Universe. Infinite Monster compositions to choose from based on your playstyle.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g23 = new AllGames(
  'b23',
  'glitchimg23', 
  'Design Blast - Match & Home', 
  'Puzzle',
  "Design Blast is a new matching puzzle game for free. Solve matching puzzles and design a home at your fingertips!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g24 = new AllGames(
  'b24',
  'glitchimg24', 
  'ScourgeBringer', 
  'Puzzle',
  "ScourgeBringer is a fast-paced free-moving roguelite platformer. Help Kyhra to explore the unknown.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g25 = new AllGames(
  'b25',
  'glitchimg25', 
  'KartRider: Drift', 
  'Puzzle',
  "Feel the rush of speed as you gather boosts and fine-tune your drifting skills. Collect unique items in chaotic and surprising races.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g26 = new AllGames(
  'b26',
  'glitchimg26', 
  'Bear Bakery - Merge Tycoon', 
  'Puzzle',
  "What is that smell? Welcome! The hot tycoon game you ordered has arrived! From now on, start a delightful day with adorable animal friends.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g27 = new AllGames(
  'b27',
  'glitchimg27', 
  'MementoMori: AFKRPG', 
  'Puzzle',
  "Boasting an epic soundtrack that can turn the world of gaming on its head, and some of the most stunning designs ever seen in a game.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g28 = new AllGames(
  'b28',
  'glitchimg28', 
  'Sniper Zombie 2', 
  'Puzzle',
  "Join Sniper Zombies 2 to prove your sniper skills and become the best zombie hunter in the city!", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)

g29 = new AllGames(
  'b29',
  'glitchimg29', 
  'Last War: Shelter Heroes', 
  'Puzzle',
  "Post Apocalyptic Saga of Survival. Take command on Last Shelter. Rebuild the Bunker. Save survivors. Explore & conquer the World.", 
  'https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png', 
  '' 
)



array_gamez = [g1, g2, g3, g4, g5, g6, g7, g8. g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29]


// click slab to make green
// id, glitchy, name, genre, para, iconz, trailerz
$(document).on("click", ".wslab1", function(){
	$('.ty').removeClass("wslab1picked")
  $('.ty').addClass("wslab1")
  $(".headingpicked").css("color", "white")
  $(".whiteheading1").css("color", "white")
	$(this).removeClass("wslab1")
  $(this).addClass("wslab1picked")
  $(this).find(".whiteheading1").css("color", "blue")
  $(this).find(".headingpicked").css("color", "blue")
  $('.startdiv333').css('display', "none")
  the_id = $(this).attr("id")



	if(the_id == "b1"){
    	$(".genrez11").css("color", "#789")
     // $(this).find(".genrez11").css("color", "white")
    $(".whiteheading1").css("color", "#789")
        $(".headingpicked").css("color", "#789")
         $(this).find(".whiteheading1").css("color", "blue")
          $(this).find(".headingpicked").css("color", "blue")
         
  	 $("#t1").text("Merge Stories")
     $("#p1").text("ayaya")
		$(".yellowsplat").html(`
    
    <h1 id="t1" class=" move">Merge Stories</h1><p id="p1" class="move">Set sail in this fun free merge game adventure with a building game twist! Don’t be caught off guard by the dragons!</p>
    `)

     $(".dasimg11").html( `

<div class="glitch fade-in-left2" style="height: 175px; border: 2px solid;">
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>
      <div class="glitch__item glitchimg1"></div>   
</div>

    `)
    

  }


  $.each(array_gamez, function(i, v){
    if(v.id == the_id) {
      $("#t1").text(v.namez)
      $(".fontzzzy2").text(v.genre)
      $("#p1").text(v.para)
      return false
    }
  })






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


$(document).on("click", ".glitchimg7", function(){
    url = 'https://play.google.com/store/search?q=Warcraft%20Arclight%20Rumble&c=apps&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})


$(document).on("click", ".glitchimg8", function(){
    url = 'https://play.google.com/store/apps/details?id=com.superbox.aos.dualblade&hl=en_ZA&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg9", function(){
    url = 'https://play.google.com/store/apps/details?id=com.netease.wb.goog.hpma'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg10", function(){
    url = 'https://play.google.com/store/apps/details?id=com.playredfox.kh'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg11", function(){
    url = 'https://play.google.com/store/apps/details?id=com.ubisoft.rainbowsixmobile.r6.fps.pvp.shooter'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg12", function(){
    url = 'https://play.google.com/store/apps/details?id=com.gamevil.hiella.android.google.global.normal&hl=en&gl=US'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg13", function(){
    url = 'https://play.google.com/store/apps/details?id=com.gtarcade.timeraiders'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg14", function(){
    url = 'https://play.google.com/store/apps/details?id=com.eastsidegames.lowerdecks'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg15", function(){
    url = 'https://play.google.com/store/apps/details?id=com.shimmergames.tenants.gp'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg16", function(){
    url = 'https://play.google.com/store/apps/details?id=com.ludia.dc2021'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg17", function(){
    url = 'https://play.google.com/store/apps/details?id=com.cloudcade.ltgames.shl'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg18", function(){
    url = 'https://play.google.com/store/apps/details?id=com.ironhidegames.android.ironmarines.invasion.rts'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg19", function(){
    url = 'https://play.google.com/store/apps/details?id=jp.co.toho.ouchinikaeritai'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg20", function(){
    url = 'https://play.google.com/store/apps/details?id=com.eastsidegames.milkinc'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg21", function(){
    url = 'https://play.google.com/store/apps/details?id=com.gameberrystudio.kzombieSaga'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg22", function(){
    url = 'https://play.google.com/store/apps/details?id=com.com2us.chronicles.android.google.us.normal'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg23", function(){
    url = 'https://play.google.com/store/apps/details?id=com.bigcool.puzzle.designblast'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg24", function(){
    url = 'https://play.google.com/store/apps/details?id=com.pid.scourgebringer'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg25", function(){
    url = 'https://play.google.com/store/apps/details?id=com.nexon.kartdrift'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg26", function(){
    url = 'https://play.google.com/store/apps/details?id=com.maf.bearbakery'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg27", function(){
    url = 'https://play.google.com/store/apps/details?id=jp.boi.mementomori.android'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg28", function(){
    url = 'https://play.google.com/store/apps/details?id=vng.sniper.shooting3d.zombie'
    window.open(url, '_blank');
})

$(document).on("click", ".glitchimg29", function(){
    url = 'https://play.google.com/store/apps/details?id=com.tinybytes.idleshelter'
    window.open(url, '_blank');
})
