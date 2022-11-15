//###########################################################
//  Class - pre reg games
//###########################################################
class RegGames {
  constructor(id, glitchy, name, genre, para, iconz, trailerz, urlz) {
    this.id = id
    this.glitchy = glitchy;
    this.name = name;
    this.genre = genre;
    this.para = para;
    this.iconz = iconz;
    this.trailerz = trailerz;
    this.urlz = urlz;
  }
}



//###########################################################
//  Part 1 - Glitch screen
//###########################################################
function add_glitch(namez){
  $(".big-screen-real").html( ` 
  <div class="glitch" style="height: 175px;
  border: 2px solid;">
      <div class="glitch__item ${namez}"></div>
      <div class="glitch__item ${namez}"></div>
      <div class="glitch__item ${namez}"></div>
      <div class="glitch__item ${namez}"></div>
      <div class="glitch__item ${namez}"></div>    
  </div>
  `)
}

//###########################################################
//  Part 2 - Pre reg header and description
//###########################################################
function add_description(titlez, genrez, para){
  $(".descriptionz1").html( ` 
      <div style="width: 100%; height: 24px;">
          <div class="metitle">${titlez}</div> 
          <div class="megenre" style="width: 120px;">${genrez}</div>
      </div>
      <div style="font-size:13px;">${para}</div>
  `)
}

//  <div>
// <div class="itemz1 flexy-item">asdasd</div>
// <div class="itemz1 flexy-item">bbbb</div>
// </div> 

//###########################################################
//  Part 3 - all the games
//###########################################################
start = 1
random_div_name = 0
function add_all_games(gaimz){
  $.each(gaimz, function(i, v){

        if(start >= 3){
            start = 1
        }

        // The actual game name and its genre
        blocky = `
            <div class="click-gamez itemz1 flexy-item" style="margin-bottom:15px;">
            
                <div class="myname">
                    ${v.name}
                </div>
            
                <div style="
                color: grey;
                font-size: 10px;
                font-family: exo;
                width: 130px;
                ">
                    ${v.genre}
                </div>
            </div>
        `

      // Random div class name
      div_name = "divy"+random_div_name
      new_block = `<div class=${div_name}></div>`

      // if block 1
      if(start == 1) {
        // Append the new created div to the main body
        $(".flexy").append(new_block)

        // Append the game to the new div
        $("."+div_name).append(blocky)
      } else if (start == 2){
          // minus 1 to get previous div
          previous_div_class = random_div_name - 1
          $("."+previous_div_class).append(blocky)
          
      }


      // Increment stats
      start = start + 1
      random_div_name 
  })
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


array_gamez = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29]

//###########################################################
//  Start 
//###########################################################
add_glitch(g1.glitchy)
add_description(g1.name, g1.genre, g1.para)
add_all_games(array_gamez)



//###########################################################
//  Click-gamez
//###########################################################
$(document).on("click", ".click-gamez", function(){
  get_name = $(this).find(".myname").text()
  get_name = get_name.replace(/\s/g, "")

  // Reset color to black
  $(".myname").css("color", "black")
  $(this).find(".myname").css("color", "blue")
  

  $.each(array_gamez, function(i, v){
      if(get_name == v.name.replace(/\s/g, "")) {
          add_glitch(v.glitchy)
          add_description(v.name, v.genre, v.para)
          return false
      }
  })

})
