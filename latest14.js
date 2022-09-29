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



// click slab to make green
$(document).on("click", ".wslab1", function(){
	$('.ty').removeClass("wslab1picked")
  $('.ty').addClass("wslab1")
  $(".headingpicked").css("color", "white")
  $(".whiteheading1").css("color", "white")
	$(this).removeClass("wslab1")
  $(this).addClass("wslab1picked")
  $(this).find(".whiteheading1").css("color", "blue")
  $(this).find(".headingpicked").css("color", "blue")
  $('.startdiv').css('display', "none")
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

  if(the_id == "b1"){
    fixy('glitchimg1')
        $('.replacediv').html(`
        <div class="leboxy123" style="    display: block;
        width: 330px;
        background-color: transparent;
        height: 200px;">
    
            <div class="leftu" style="    float: left;
            width: 100px;
            height: 100%;
            background: transparent;"> 
            <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
        </div> 
        
            <div class="rightu" style="    float: left;
            width: 230px;
            height: 100%;
            background: transparent;"> 
             <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Merge Stories</h1>
             <h2 class="fontzzzy2 move move">Puzzle</h2>
             <h3 class="fontzzzy3 move move">Trailer</h3>
        
        </div> 
        
         </div>
          
        
            <p id="p1" class="move">Coose merge yada yada</p>
        

        `)

  }

  
	if(the_id == "b2"){
    fixy('glitchimg2')
        $('.replacediv').html(`
        <div class="leboxy123" style="    display: block;
        width: 330px;
        background-color: transparent;
        height: 200px;">
    
            <div class="leftu" style="    float: left;
            width: 100px;
            height: 100%;
            background: transparent;"> 
            <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6335b128a24a7d80ceffd635_catera-icon.png" style="width: 100%">
        </div> 
        
            <div class="rightu" style="    float: left;
            width: 230px;
            height: 100%;
            background: transparent;"> 
             <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Caterra: RPG Battle Royale</h1>
             <h2 class="fontzzzy2 move">Puzzle</h2>
             <h3 class="fontzzzy3 move">Trailer</h3>
        
        </div> 
        
         </div>
          
        
            <p id="p1" class="move">Coose whether you want to dive into the furious battle royale or hunt down mighty monsters to become the best hunter!</p>
        

        `)

  }
  
  if(the_id == "b3"){
    fixy('glitchimg3')


 $('.replacediv').html(`
 <div class="leboxy123" style="    display: block;
 width: 330px;
 background-color: transparent;
 height: 200px;">

     <div class="leftu" style="    float: left;
     width: 100px;
     height: 100%;
     background: transparent;"> 
     <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
 </div> 
 
     <div class="rightu" style="    float: left;
     width: 230px;
     height: 100%;
     background: transparent;"> 
      <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Minion Masters</h1>
      <h2 class="fontzzzy2 move">Puzzle</h2>
      <h3 class="fontzzzy3 move">Trailer</h3>
 
 </div> 
 
  </div>
   
 
     <p id="p1" class="move">Engage in epic 1v1 or 2v2 battles, in this fast-paced strategic minion brawler that's easy to learn but hard to master.</p>
 

 `)

  }
  
if(the_id == "b4"){
        fixy('glitchimg4')


 $('.replacediv').html(`
 <div class="leboxy123" style="    display: block;
 width: 330px;
 background-color: transparent;
 height: 200px;">

     <div class="leftu" style="    float: left;
     width: 100px;
     height: 100%;
     background: transparent;"> 
     <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
 </div> 
 
     <div class="rightu" style="    float: left;
     width: 230px;
     height: 100%;
     background: transparent;"> 
      <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Ready Heroes: Nirvana Hun</h1>
      <h2 class="fontzzzy2 move">Puzzle</h2>
      <h3 class="fontzzzy3 move">Trailer</h3>
 
 </div> 
 
  </div>
   
 
    <p id="p1" class="move">It’s time to form your team by gathering your friends or making new ones, defeat all the other bosses and teams, and acquire all the keys to win the greatest honor in the history of Nirvana.</p>
 

 `)

}



  if(the_id == "b5"){
    fixy('glitchimg5')


 $('.replacediv').html(`
 <div class="leboxy123" style="    display: block;
 width: 330px;
 background-color: transparent;
 height: 200px;">

     <div class="leftu" style="    float: left;
     width: 100px;
     height: 100%;
     background: transparent;"> 
     <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
 </div> 
 
     <div class="rightu" style="    float: left;
     width: 230px;
     height: 100%;
     background: transparent;"> 
      <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Gunstars - Battle Royale</h1>
      <h2 class="fontzzzy2 move">Puzzle</h2>
      <h3 class="fontzzzy3 move">Trailer</h3>
 
 </div> 
 
  </div>
   
 
    <p id="p1" class="move">It’s time to form your team by gathering your friends or making new ones, defeat all the other bosses and teams, and acquire all the keys to win the greatest honor in the history of Nirvana.</p>
 

 `)

  }

  if(the_id == "b6"){
    fixy('glitchimg6')

 $('.replacediv').html(`
 <div class="leboxy123" style="    display: block;
 width: 330px;
 background-color: transparent;
 height: 200px;">

     <div class="leftu" style="    float: left;
     width: 100px;
     height: 100%;
     background: transparent;"> 
     <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
 </div> 
 
     <div class="rightu" style="    float: left;
     width: 230px;
     height: 100%;
     background: transparent;"> 
      <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">One Punch Man - The Strongest</h1>
      <h2 class="fontzzzy2 move">Puzzle</h2>
      <h3 class="fontzzzy3 move">Trailer</h3>
 
 </div> 
 
  </div>
   
 
    <p id="p1" class="move">The official turn-based strategy mobile RPG licensed by and adapted from popular Japanese anime series ONE PUNCH MAN is coming!</p>
 

 `)

  }



  if(the_id == "b7"){
    fixy('glitchimg7')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Warcraft Arclight Rumble</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Warcraft Arclight Rumble is a mobile action strategy game where collectible Warcraft Minis come to life to clash in epic melee battles.</p>


`)

}

if(the_id == "b8"){
    fixy('glitchimg8')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Dual Blader</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Dual blade has chosen you as a grand master.
   Begin your journey as a dual blade master from High Garden to Lava Cliff, whipping the evil creatures for the justice.</p>


`)

}


if(the_id == "b9"){
    fixy('glitchimg9')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Harry Potter: Magic Awakened</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">As a first year student, you will board the Hogwarts Express, meet many new classmates and friends, learn to cast spells, and experience fantastic times in the wizarding world.</p>


`)
}

if(the_id == "b10"){
    fixy('glitchimg10')





$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Kingdom Hunter</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">The Kingdom Hunter is an elaborate strategy TCG mobile game where true Heroes are united to establish a Kingdom and unlock the secrets of the ancient gods in order to conquer the world.</p>


`)


}


if(the_id == "b11"){
    fixy('glitchimg11')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Rainbow Six Mobile</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">From the acclaimed Rainbow Six franchise, Rainbow Six Mobile is a free-to-play competitive, multiplayer first-person shooter experience on your phone.</p>


`)
}

if(the_id == "b12"){
    fixy('glitchimg12')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Dear, Ella</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Meet Dear, Ella, a fate-guided adventure beyond time.</p>


`)
}



if(the_id == "b13"){
    fixy('glitchimg13')




$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Time Raiders</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Delve deep and explore the vast eastern undergrounds.
   Treasures? Monsters? Who knows what awaits you...</p>


`)


}

if(the_id == "b14"){
    fixy('glitchimg14')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Star Trek Lower Decks</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">The official Star Trek: Lower Decks idle game! Finally, after yet another tedious duty roster, the Lower Decks crew of the U.S.S. Cerritos is ready to party at a Zebulon Sisters concert!</p>


`)


}

if(the_id == "b15"){
    fixy('glitchimg15')




$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Rent Please!-Landlord Sim</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Years of renting have made you finally decide to return to your home and inherit your family business to become a reliable landlord. As a good landlord, how will you build your community?</p>


`)

}

if(the_id == "b16"){
    fixy('glitchimg16')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">DC Heroes & Villains</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">The DC universe needs YOU in DC Heroes & Villains, an epic Puzzle RPG super hero game!</p>


`)


}

if(the_id == "b17"){
    fixy('glitchimg17')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Shop Heroes Legends</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Embark on your journey as a prospective business tycoon and capitalize on strategic decisions to let your business prowess shine!</p>


`)


}

if(the_id == "b18"){
    fixy('glitchimg18')




$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Iron Marines Invasion</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Discover and conquer countless worlds across deep space. Unravel a story full of challenges and threats that will lead you across the galaxy on an extraordinary voyage.</p>


`)



}

if(the_id == "b19"){
    fixy('glitchimg19')




$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Hungry for Home: A Cat's Tail</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Suspenders is off on a grand journey to get home! With a food truck and his little brother Chibisuke in tow, come follow the Nyansukes as they travel the world!.</p>


`)



}

if(the_id == "b20"){
    fixy('glitchimg20')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Milk Farm Tycoon</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">After spending his life on the milk farm, grandpa has called it quits due to an udderly saturated market. Lily is ready to take over the farm management for gramps and fulfill his big dream of building a milk empire!</p>


`)


}


if(the_id == "b21"){
    fixy('glitchimg21')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">ZOMBIE Kingdom : Survival AFK</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">The famine struck so hard this spring that there are people eating human flesh</p>


`)


}

if(the_id == "b22"){
    fixy('glitchimg22')




$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Summoners War: Chronicles</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">An Action RPG based in the Summoners War Universe. Infinite Monster compositions to choose from based on your playstyle.</p>


`)
}

if(the_id == "b23"){
    fixy('glitchimg23')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Design Blast - Match & Home</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Design Blast is a new matching puzzle game for free. Solve matching puzzles and design a home at your fingertips!</p>


`)


}

if(the_id == "b24"){
    fixy('glitchimg24')



$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">ScourgeBringer</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">ScourgeBringer is a fast-paced free-moving roguelite platformer. Help Kyhra to explore the unknown.</p>


`)


}

if(the_id == "b25"){
    fixy('glitchimg25')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">KartRider: Drift</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Feel the rush of speed as you gather boosts and fine-tune your drifting skills. Collect unique items in chaotic and surprising races.</p>


`)
}

if(the_id == "b26"){
    fixy('glitchimg26')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Bear Bakery - Merge Tycoon</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">What is that smell? Welcome! The hot tycoon game you ordered has arrived! From now on, start a delightful day with adorable animal friends.</p>


`)

}

if(the_id == "b27"){
    fixy('glitchimg27')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">MementoMori: AFKRPG</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Boasting an epic soundtrack that can turn the world of gaming on its head, and some of the most stunning designs ever seen in a game.</p>


`)



}

if(the_id == "b28"){
    fixy('glitchimg28')


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class=" move" class="fontzzzy" style="margin-top: 0;">Sniper Zombie 2</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Join Sniper Zombies 2 to prove your sniper skills and become the best zombie hunter in the city!</p>


`)
}

if(the_id == "b29"){
    fixy('glitchimg29')
    $(".yellowsplat").html(`
<h1 id="t1" class=" move">Last War: Shelter Heroes</h1>
<p id="p1" class="move">
Post Apocalyptic Saga of Survival. Take command on Last Shelter. Rebuild the Bunker. Save survivors. Explore & conquer the World.
</p>
`)


$('.replacediv').html(`
<div class="leboxy123" style="    display: block;
width: 330px;
background-color: transparent;
height: 200px;">

    <div class="leftu" style="    float: left;
    width: 100px;
    height: 100%;
    background: transparent;"> 
    <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63355e734fa11542f1cbd488_merge-stories-icon.png" style="width: 100%">
</div> 

    <div class="rightu" style="    float: left;
    width: 230px;
    height: 100%;
    background: transparent;"> 
     <h1 id="t1" class="move" class="fontzzzy" style="margin-top: -14px;">Last War: Shelter Heroes</h1>
     <h2 class="fontzzzy2 move">Puzzle</h2>
     <h3 class="fontzzzy3 move">Trailer</h3>

</div> 

 </div>
  

   <p id="p1" class="move">Post Apocalyptic Saga of Survival. Take command on Last Shelter. Rebuild the Bunker. Save survivors. Explore & conquer the World.
   </p>


`)
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
