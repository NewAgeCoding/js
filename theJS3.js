// ##################################################################
// Search
// ##################################################################
games = ["among us", "archero", "ancient planet tower defense", "art of war 3 global conflict", "cardinal quest 2", "baseball9", "altos adventure", "forge of empires",
    "adventure beaks", "skullgirls", "alien isolation", "infinitode2", "nba 2k", "scary horror 2", "bloons td 6", "moonshades", "prison empire tycoon", "bloody bastards",
    "badland", "battle of polytopia", "bee brilliant", "castle crush", "city island5", "cooking fever", "exploding kittens", "raid shadow legends",
    "the walking zombie 2", "lara croft relic run", "block puzzle", "asphalt 9 legends", "guardian tales", "plant the world", "flip diving", "square fists boxing", "brawlhalla",
    "cube escape paradox", "eternium", "fishdom", "gardenscapes", "good pizza great pizza", "grimvalor", "hill climb racing 2", "hellrider 3",
    "hocus", "horizon chase world tour", "hot wheels race off", "hyperforma", "moto x3m bike race game", "mousebusters", "rooster defense", "botworld adventure",
     "nihilumbra", "onebit adventure", "pinball deluxe reloaded", "pirates showdown", "power rangers legacy wars", "great conqueror",
    "magic survival", "legend of solgard", "metal soldiers 2", "sky children of the light", "wild castle td", "space expedition", "genshin impact",
    "quell", "roblox", "shadow fight arena", "sky force reloaded", "snowman story", "life is strange", "death park 2", "forgotton anne",
    "stardew valley",  "tank battle heroes", "vampires fall origins", "cosmic challenge racing", "fin ancient mystery", "oddmar", "brawlhalla",
    "jurassic monster world", "pubg mobile", "traffic racer", "swordigo",  "mars mars", 
    "call of duty mobile", "ea sports ufc", "day r survival", "snail bob 3", "shadow hunter lost world", "mega tower", "me is king",
    "candy crush soda saga", "space marshals 2", "1945 air force", "snow bros classic", "golf king world tour", "hockey all stars",
    "geometry dash subzero", "rival gears racing", "tsuki adventure", "grumpy dwarf", "hello yogurt", "air attack", "air attack 2",
     "age of magic", "basketball battle", "ancient bricks", "top fuel hot rod", "smashy road wanted 2", "g switch 3", "johnny trigger",
      "mrbean special delivery", "ski safari 2", "transmute galaxy battle", "demolition derby 3", "the witchs isle", "temple run 2", "sword of xolan"
      , "sea invaders", "apple knight", "real racing 3", "constellation eleven", "xenowerk", "super cat tales 2", "lightning duru", "subway surfers", 
      "godzilla defense force", "orbia", "carx highway racing",  "spongebob krusty cook off", "dragon mania legends", "cut the rope 2",
       "walk master", "okay", "endurance", "flaming-core", "simcity buildit", "snake arena", "leps world 3", "find a way", "megabots battle arena",
        "earn 2 die", "not not", "rail rush", "fancy pants adventures", "kung fu fight arena", "payback 2", "plank!", "sky fighters 3d", "stick war legacy",
         "the frostrune", "real boxing 2", "world of tennis roaring 20s", "bowmasters", "cats are liquid", "module td", "32 secs",
    "pba bowling challenge", "gunspell 2", "mortal crusade", "robot destroyer red siren", "angry birds 2", "election year knockout"
]


$(".leftBar1").html(`
<a href="https://androidshark.com"><div class="myButton t10 homeBtn"><img src="https://androidshark.com/img/icons/houseHome.png"></div></a> 
<i class="fa fa-search sss" style="position: relative; color: grey; visibility: hidden; z-index: 5; left: 0; top: 57px;"></i> 
<input type="text" class="fname-mobile" name="fname" placeholder="Search...">
`)

reset = 0
newList = games
$("input.fname-mobile[type='text']").on('input', function () {
    texty = $(this).val()
	texty = texty.replace(/\s+/g, '-') 
    texty = texty.toLowerCase();
    reset = reset + 1
	$("#removeHeading").css("color", "transparent")
    $(".dropdownsearch").css("display", "block")
    if (reset >= 1) {
        $(".dropdownsearch").html("")
        reset = 0
    }

    $(".mobileTabs").css("display", "none")
    $(".btnBorders").css("border-left", "4px solid #282b30")
    $(".mobileDropDown").css("display", "none")
    $('html').css('overflow-y', 'visible');
    $('body').css('overflow-y', 'visible');


    if (texty.length < 1) {
        $(".dropdownsearch").css("display", "none")
    }

    var i;
    for (i = 0; i < games.length; ++i) {

        if (games[i].indexOf(texty) > -1) {

            if (texty.length > 1) {
                if (games[i].charAt(0) == texty.charAt(0) && games[i].charAt(1) == texty.charAt(1)) {
                    gameName = games[i]
                    hrefGame = gameName.replace(/\s+/g, "-");
					zz = hrefGame.match(/[a-zA-Z]+|[0-9]+/g);
					
					taz = ""
					$.each(zz , function(index, val) { 
						if(index == 0) {
							taz = val
						} else {
							taz = taz + "-"  + val
						} 
					});
								
					if (taz == "nba-2-k"){
					taz = "nba-2k"
					}  else if(taz == "moto-x-3-m-bike-race-game") {
					taz = "moto-x3m-bike-race-game"
					}
					
					 else if(taz == "sky-fighters-3-d") {
					taz = "sky-fighters-3d"
					}
					 else if(taz == "world-of-tennis-roaring-20-s") {
					taz = "world-of-tennis-roaring-20s"
					}
				
					if(jQuery.inArray(hrefGame, newList) != -1) {
						gameName = "<a href=https://androidshark.com/review/" + taz + ">" + games[i] + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} else {
					   gameName = "<a href=https://androidshark.com/review/" + taz + ">" + games[i] + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} 
					
         
                }


            } else {
                if (games[i].charAt(0) == texty.charAt(0)) {
                    gameName = games[i]
                    hrefGame = gameName.replace(/\s+/g, "-");
					zz = hrefGame.match(/[a-zA-Z]+|[0-9]+/g);
					
					taz = ""
					$.each(zz , function(index, val) { 
						if(index == 0) {
							taz = val
						} else {
							taz = taz + "-"  + val
						} 
					});
					
					if (taz == "nba-2-k"){
					taz = "nba-2k"
					}  else if(taz == "moto-x-3-m-bike-race-game") {
			taz = "moto-x3m-bike-race-game"
		}
					
					if(jQuery.inArray(hrefGame, newList) != -1) {
						gameName = "<a href=https://androidshark.com/review/" + taz + ">" + games[i] + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} else {
					   gameName = "<a href=https://androidshark.com/review/" + taz + ">" + games[i] + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} 
					
                }
            }

        }
    }
});

$("input.fname-mobile[type='text']").focusout(function(){
	$("#removeHeading").css("color", "#789")
	$("#dropdownsearch").css("display", "none")
});


// countdownT
var countDownDate2 = new Date("May 20, 2022 12:30:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function () {

    // Get today's date and time
    var now2 = new Date().getTime();

    // Find the distance between now and the count down date
    var distance2 = countDownDate2 - now2;

    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    dayzzz2 = "days"
    if (days2 == 1) {
        dayzzz2 = "day"
    } else if (days2 == 0) {
        dayzzz2 = ""
        days2 = ""
    }


		try {
      if (days2 == 0) {
        document.getElementById("demo2").innerHTML = + hours2 + "h "
            + minutes2 + "m " + seconds2 + "s";

        // document.getElementById("mobileTimer2").innerHTML = + hours2 + "h "
        //   + minutes2 + "m " + seconds2 + "s";
      } else {
        document.getElementById("demo2").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
            + minutes2 + "m " + seconds2 + "s";

        // document.getElementById("mobileTimer2").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
        //   + minutes2 + "m " + seconds2 + "s";
      }

      //console.log(distance2)
      // If the count down is over, write some text 
      if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("demo2").innerHTML = "<div style='visibility:visible;'>Standby...</div>";
        // document.getElementById("mobileTimer2").innerHTML = "<div style='visibility:hidden;'>aa</div>";

      }
    } catch(err) {
      console.log("")
    }

    
    
    
    
    
		try {
      if (days2 == 0) {
        document.getElementById("demo3").innerHTML = + hours2 + "h "
          + minutes2 + "m " + seconds2 + "s";

        // document.getElementById("mobileTimer2").innerHTML = + hours2 + "h "
        //   + minutes2 + "m " + seconds2 + "s";
      } else {
        document.getElementById("demo3").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
          + minutes2 + "m " + seconds2 + "s";

        // document.getElementById("mobileTimer2").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
        //   + minutes2 + "m " + seconds2 + "s";
      }

      //console.log(distance2)
      // If the count down is over, write some text 
      if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("demo3").innerHTML = "<div style='visibility:visible;'>Standby...</div>";
        // document.getElementById("mobileTimer2").innerHTML = "<div style='visibility:hidden;'>aa</div>";

      } 

    }catch(err) {
      console.log("")
    }
}, 1000);
  
//############################################
// Class Genre
//############################################
  class addGame {
    constructor(aLink, img, name, multi) {
      this.aLink = aLink;
      this.img = img;
      this.name = name;
      this.multi = multi;
    }
  }
  baseLinkReview = "https://androidshark.com/review/"
  baseLinkImg = "https://uploads-ssl.webflow.com/"
  
	//################################################################
	// CASUAL TOP 8
	//################################################################

	casual2a = new addGame(baseLinkReview+"bee-brilliant", baseLinkImg+"6262a56df551ed5332d9048e/628266d23da26d3ce1eac273_bee-brilliant-icon.jpg", "Bee Brilliant")

	casual4a = new addGame(baseLinkReview+"mousebusters", baseLinkImg+"6262a56df551ed5332d9048e/627d39a58fdb8888d02ab807_mousebusters-icon.jpg", "Mousebusters")
	casual5a = new addGame(baseLinkReview+"orbia", baseLinkImg+"6262a56df551ed5332d9048e/62826d03beebffbca0a683b8_orbia-icon.jpg", "Orbia")
	casual6a = new addGame(baseLinkReview+"pinball-deluxe-reloaded", baseLinkImg+"6262a56df551ed5332d9048e/62826ee9e660e3d51ee093ee_pinball-deluxe-reloaded-icon.jpg", "Pinball Deluxe Reloaded")

	// CASUAL TOP 7
	casual1b = new addGame(baseLinkReview+"ancient-bricks", baseLinkImg+"6262a56df551ed5332d9048e/62751ddcef962458ae10ebe7_ancient-bricks-icon.jpg", "Ancient Bricks")
	casual2b = new addGame(baseLinkReview+"candy-crush-soda-saga", baseLinkImg+"6262a56df551ed5332d9048e/62826f5540bdbd76e8c9d9fb_candy-crush-soda-saga-icon.jpg", "Candy Crush Soda Saga")
	casual3b = new addGame(baseLinkReview+"okay", baseLinkImg+"6262a56df551ed5332d9048e/62826f8036c579cd92b39aa8_okay-icon.jpg", "Okay")
	casual4b = new addGame(baseLinkReview+"plank!", baseLinkImg+"6262a56df551ed5332d9048e/62826f9e0031d3872de6c14a_plank-icon.jpg", "plank!")
	casual5b = new addGame(baseLinkReview+"snake-arena", baseLinkImg+"6262a56df551ed5332d9048e/62826fb5ca4d6970be5e9d70_snake-arena-icon.jpg", "snake-arena")
	casual6b = new addGame(baseLinkReview+"subway-surfers", baseLinkImg+"6262a56df551ed5332d9048e/62826fcf8cd3e4d6a602fe56_subway-surfers-icon.jpg", "Subway Surfers")
	casual7b = new addGame(baseLinkReview+"temple-run-2", baseLinkImg+"6262a56df551ed5332d9048e/62826ffebeebff4863a6940b_temple-run-2-icon.jpg", "Temple Run 2")
	casual8b = new addGame(baseLinkReview+"walk-master", baseLinkImg+"6262a56df551ed5332d9048e/62827013ec9b21307b0c84d1_walk-master-icon.jpg", "Walk Master")


	// CASUAL TOP 6
	casual1c = new addGame(baseLinkReview+"angry-birds-2", baseLinkImg+"6262a56df551ed5332d9048e/62751ddb8e918f05816bd828_angry-birds-2-icon.jpg", "Angry Birds 2")
	casual2c = new addGame(baseLinkReview+"snowman-story", baseLinkImg+"6262a56df551ed5332d9048e/6282705467562c7de8c710db_snowman-story-icon.jpg", "Snowman Story")
	casual3c = new addGame(baseLinkReview+"tsuki-adventure", baseLinkImg+"6262a56df551ed5332d9048e/6282706cc2bb1eb7adf3838c_tsuki-adventure-icon.jpg", "Tsuki Adventure")


	// ADDING TO CASUAL ARRAY
	casualTop8 = [casual2a, casual4a, casual5a, casual6a]
	casualTop7 = [casual1b, casual2b, casual3b, casual4b, casual5b, casual6b, casual7b, casual8b]
	casualTop6 = [casual1c, casual2c, casual3c]


	//################################################################
	// ACTION TOP 8
	//################################################################
	action1a = new addGame(baseLinkReview+"altos-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62751dd579f96081482e1d83_altos-icon.jpg", "Altos Adventure")
	action2a = new addGame(baseLinkReview+"among-us", baseLinkImg+"6262a56df551ed5332d9048e/62751ddaf2602e65d605c7eb_among-us-icon.jpg", "Among Us")
	action3a = new addGame(baseLinkReview+"archero", baseLinkImg+"6262a56df551ed5332d9048e/628270e6b18b7d83064dfbf0_archero-icon.jpg", "Archero")
	action4a = new addGame(baseLinkReview+"bowmasters", baseLinkImg+"6262a56df551ed5332d9048e/6282710308cf60f9b368ce43_bowmasters-icon.jpg", "Bowmasters")
	action5a = new addGame(baseLinkReview+"brawlhalla", baseLinkImg+"6262a56df551ed5332d9048e/6280fc7249d8f3f9fea9a520_brawlhalla-icon.jpg", "Brawlhalla")
	action7a = new addGame(baseLinkReview+"endurance", baseLinkImg+"6262a56df551ed5332d9048e/628271329a967729bc7b83bf_endurance-icon.jpg", "Endurance")
	action8a = new addGame(baseLinkReview+"grimvalor", baseLinkImg+"6262a56df551ed5332d9048e/6282758aaf33b4e30eacda6b_grim-valor-icon.jpg", "Grimvalor")
	action9a = new addGame(baseLinkReview+"johnny-trigger", baseLinkImg+"6262a56df551ed5332d9048e/628275acca4d6948975ec9b3_johnny-trigger-icon.jpg", "Johnny Trigger")
	action10a = new addGame(baseLinkReview+"robot-destroyer-red-siren", baseLinkImg+"6262a56df551ed5332d9048e/62827a2fbeadf904433aaed8_robot-destroyer-icon.jpg", "Robot Destroyer Red Siren")
	action11a = new addGame(baseLinkReview+"shadow-hunter-lost-world", baseLinkImg+"6262a56df551ed5332d9048e/62827a7d6ef765a60bbacd16_shadow-hunter-icon.jpg", "Shadow Hunter Lost World")
	action12a = new addGame(baseLinkReview+"sky-force-reloaded", baseLinkImg+"6262a56df551ed5332d9048e/62827add67562c85b0c75205_sky-force-reloaded-icon.jpg", "Sky Force Reloaded")
	action13a = new addGame(baseLinkReview+"space-marshals-2", baseLinkImg+"6262a56df551ed5332d9048e/62827b97b18b7d56544e4f3b_space-marshals-2-icon.jpg", "Space Marshals 2")
	//action14a = new addGame(baseLinkReview+"swamp-attack", baseLinkImg+"swamp-attack-icon.jpg", "Swamp Attack")
	action15a = new addGame(baseLinkReview+"tank-battle-heroes", baseLinkImg+"6262a56df551ed5332d9048e/62827c083fa4d076eca30d76_tank-battle-heroes-icon.jpg", "Tank Battle Heroes")
	action16a = new addGame(baseLinkReview+"the-walking-zombie-2", baseLinkImg+"6262a56df551ed5332d9048e/62827c439b63e6e406ed5b42_the-walking-zombie-2-icon.jpg", "The Walking Zombie 2")
	action17a = new addGame(baseLinkReview+"badland", baseLinkImg+"6262a56df551ed5332d9048e/62827c8329c884b819e8d2c0_badland-icon.jpg", "Badland")
	action18a = new addGame(baseLinkReview+"brawlhalla", baseLinkImg+"6262a56df551ed5332d9048e/6280fc7249d8f3f9fea9a520_brawlhalla-icon.jpg", "Brawlhalla")

	// ACTION TOP 7
	action1b = new addGame(baseLinkReview+"air-attack-2", baseLinkImg+"6262a56df551ed5332d9048e/62751dd1fcd2a7300716c2e7_air-attack-2-icon.jpg", "Air Attack 2")
	//action2b = new addGame(baseLinkReview+"banana-kong", baseLinkImg+"banana-kong-icon.jpg", "Banana Kong")
	action3b = new addGame(baseLinkReview+"jurassic-monster-world", baseLinkImg+"6262a56df551ed5332d9048e/62827d61c5982f625619907e_jurassic-monster-world-icon.jpg", "Jurassic Monster World")
	action4b = new addGame(baseLinkReview+"lara-croft-relic-run", baseLinkImg+"6262a56df551ed5332d9048e/62827dad9b8456c3e03a642e_lara-icon.jpg", "Lara Croft Relic Run")
	action5b = new addGame(baseLinkReview+"magic-survival", baseLinkImg+"6262a56df551ed5332d9048e/62827e109b09ef78011fdd90_magic-survival-icon.jpg", "Magic Survival")

	action7b = new addGame(baseLinkReview+"payback-2", baseLinkImg+"6262a56df551ed5332d9048e/62827e66ec9b211d150cec1a_payback-2-icon.jpg", "Payback 2")
	action8b = new addGame(baseLinkReview+"sea-invaders", baseLinkImg+"6262a56df551ed5332d9048e/62827e98964b595799e383c3_sea-invaders-icon.jpg", "Sea Invaders")
	action9b = new addGame(baseLinkReview+"ski-safari-2", baseLinkImg+"6262a56df551ed5332d9048e/62827eda6fa522e5ffdb385a_ski-safari-2-icon.jpg", "Ski Safari 2")
	action10b = new addGame(baseLinkReview+"sky-fighters-3d", baseLinkImg+"6262a56df551ed5332d9048e/62827f27ad54fa03ed44bef8_sky-fighters-icon.jpg", "Sky Fighters 3D")
	action11b = new addGame(baseLinkReview+"xenowerk", baseLinkImg+"6262a56df551ed5332d9048e/62827f485ad7580f4aad5817_xenowerk-icon.jpg", "Xenowerk")

	// ACTION TOP 6
	action1c = new addGame(baseLinkReview+"1945-air-force", baseLinkImg+"6262a56df551ed5332d9048e/62751dcf528a36b6dfea999c_1945-icon.jpg", "1945 Air Force")
	action2c = new addGame(baseLinkReview+"air-attack", baseLinkImg+"6262a56df551ed5332d9048e/62751dda343133c02f466f0e_air-attack-icon.jpg", "Air Attack")
	action3c = new addGame(baseLinkReview+"lightning-duru", baseLinkImg+"6262a56df551ed5332d9048e/6282822e9d08b52c15ea873f_lightduru-icon.jpg", "Lightning Duru")
	action4c = new addGame(baseLinkReview+"metal-soldiers-2", baseLinkImg+"6262a56df551ed5332d9048e/6282826ca403efb20c87b450_metal-icon.jpg", "Metal Soldiers 2")
	action5c = new addGame(baseLinkReview+"rail-rush", baseLinkImg+"6262a56df551ed5332d9048e/6282828de3c51ae7621c1330_rail-rush-icon.jpg", "Rail Rush")
	//action6c = new addGame(baseLinkReview+"skiing-yeti-mountain", baseLinkImg+"skiing-yeti-mountain-icon.jpg", "Skiing Yeti Mountain")
	action7c = new addGame(baseLinkReview+"transmute-galaxy-battle", baseLinkImg+"6262a56df551ed5332d9048e/628283243fa4d08577a33ee9_transmute-galaxy-battle-icon.jpg", "Transmute Galaxy Battle")

	// ADDING TO ACTION ARRAY
	actionTop8 = [action1a, action2a, action3a, action4a, action5a, action7a, action8a, 
			   action9a, action10a, action11a, action12a, action13a,  action15a, action16a, action17a]

	actionTop7 = [action1b, action3b, action4b, action5b, 
				action7b, action8b, action9b, action10b, action11b]

	actionTop6 = [action1c, action2c, action3c, action4c, action5c, action7c]

	//################################################################
	// FIGHTING TOP 8
	//################################################################
	fight1a = new addGame(baseLinkReview+"bloody-bastards", baseLinkImg+"6262a56df551ed5332d9048e/627d3a2e8fdb881f032ab99d_bloody-bastards-icon.jpg", "Bloody Bastards", "multi")
	fight2a = new addGame(baseLinkReview+"power-rangers-legacy-wars", baseLinkImg+"6262a56df551ed5332d9048e/628283780e573c02bfa4593b_power-rangers-icon.jpg", "Power Rangers Legacy Wars", "multi")
	fight3a = new addGame(baseLinkReview+"shadow-fight-arena", baseLinkImg+"6262a56df551ed5332d9048e/62828398b18b7d210d4ec8f9_shadow-fight-arena-icon.jpg", "Shadow Fight Arena", "multi")
	fight4a = new addGame(baseLinkReview+"skullgirls", baseLinkImg+"6262a56df551ed5332d9048e/628283c036c579d5e9b40bf2_skullgirls-icon.jpg", "Skullgirls", "multi")

	// FIGHTING TOP 7

	// FIGHTING TOP 6
	fight1c = new addGame(baseLinkReview+"kung-fu-fight-arena", baseLinkImg+"6262a56df551ed5332d9048e/628283e3964b592197e3c43b_kung-fu-fight-arena-icon.jpg", "Kung Fu Fight Arena")
	fight2c = new addGame(baseLinkReview+"megabots-battle-arena", baseLinkImg+"6262a56df551ed5332d9048e/628283fea542c7e3988c6314_megabots-battle-arena-icon.jpg", "Megabots Battle Arena", "multi")

	// ADDING TO ACTION ARRAY
	fightTop8 = [fight1a, fight2a, fight3a, fight4a]
	fightTop6 = [fight1c, fight2c]



	//################################################################
	// ADVENTURE TOP 8       3D
	//################################################################
	adventure1a = new addGame(baseLinkReview+"alien-isolation", baseLinkImg+"6262a56df551ed5332d9048e/62751dda085d1721590269bb_alien-isolation-icon.jpg", "alien-isolation")

	adventure2a = new addGame(baseLinkReview+"call-of-duty-mobile", baseLinkImg+"6262a56df551ed5332d9048e/6282844da403ef624b87db94_call-of-duty-mobile-icon.jpg", "Call Of Duty Mobile")
	adventure6a = new addGame(baseLinkReview+"roblox", baseLinkImg+"6262a56df551ed5332d9048e/6282847c4cd02402b7464eac_roblox-icon.jpg", "Roblox")

	adventure8a = new addGame(baseLinkReview+"the-frostrune", baseLinkImg+"6262a56df551ed5332d9048e/628284a14cd0247d3f464f1b_the-frostrune-icon.jpg", "The Frostrune")
	
	adventure1b = new addGame(baseLinkReview+"pubg-mobile", baseLinkImg+"6262a56df551ed5332d9048e/6274d17a0487d30f2ea38c32_pubg-icon.jpg", "Pubg Mobile")
		

	// ADVENTURE TOP 6
	adventure1c = new addGame(baseLinkReview+"death-park-2", baseLinkImg+"6262a56df551ed5332d9048e/628284dea542c782ba8c6baa_death-park-2-icon.jpg", "Death Park 2")
	adventure2c = new addGame(baseLinkReview+"scary-horror-2", baseLinkImg+"6262a56df551ed5332d9048e/62828508008abe300ba585e0_scary-horror-2-icon.jpg", "Scary Horror 2")


	// ADDING TO ADVENTURE ARRAY
	adventureTop8 = [adventure1a, adventure2a, adventure6a, adventure8a]
	adventureTop7 = [adventure1b]
	adventureTop6 = [adventure1c, adventure2c]


	//################################################################
	// RPG TOP 8
	//################################################################
	rpg1a = new addGame(baseLinkReview+"botworld-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62828625b18b7d701d4ee0d5_botworld-icon.jpg", "Botworld Adventure", "multi")
	rpg2a = new addGame(baseLinkReview+"cardinal-quest-2", baseLinkImg+"6262a56df551ed5332d9048e/628286489a96770c8b7c30a1_cardinal-icon.jpg", "Cardinal Quest 2")
	rpg3a = new addGame(baseLinkReview+"day-r-survival", baseLinkImg+"6262a56df551ed5332d9048e/6282866976ab3d2c6f2111e7_day-r-survival-icon.jpg", "Day R Survival")
	rpg4a = new addGame(baseLinkReview+"eternium", baseLinkImg+"6262a56df551ed5332d9048e/62651dbc45767b4516533e65_eternium-icon.jpg", "Eternium", "multi")
	rpg5a = new addGame(baseLinkReview+"guardian-tales", baseLinkImg+"6262a56df551ed5332d9048e/628286bf97d4ec21f8429556_guardian-tales-icon.jpg", "Guardian Tales")
	rpg6a = new addGame(baseLinkReview+"moonshades", baseLinkImg+"6262a56df551ed5332d9048e/627d3bee7922144c5878b34a_moonshades-icon.jpg", "Moonshades")
	rpg7a = new addGame(baseLinkReview+"onebit-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62828710e3c51a845b1c32c3_onebit-adventure-icon.jpg", "Onebit Adventure")
	rpg8a = new addGame(baseLinkReview+"sky-children-of-the-light", baseLinkImg+"6262a56df551ed5332d9048e/6282877329c88434b4e924fd_sky-icon.jpg", "Sky Children of the Light", "multi")
	rpg9a = new addGame(baseLinkReview+"genshin-impact", baseLinkImg+"6262a56df551ed5332d9048e/628287a1ec9b21a1220d3cee_genshin-impact-icon.jpg", "Genshin Impact")

	// RPG TOP 7
	rpg1b = new addGame(baseLinkReview+"constellation-eleven", baseLinkImg+"6262a56df551ed5332d9048e/628287c49d78f502b379d7da_constellation-eleven-icon.jpg", "Constellation Eleven")
	rpg2b = new addGame(baseLinkReview+"legend-of-solgard", baseLinkImg+"6262a56df551ed5332d9048e/628287eba542c7c7e18c8d31_legend-of-solgard-icon.jpg", "Legend of Solgard")
	rpg3b = new addGame(baseLinkReview+"the-witchs-isle", baseLinkImg+"6262a56df551ed5332d9048e/6282880cc2447d72c3b798e7_the-witch-icon.jpg", "The Witchs Isle")
	rpg4b = new addGame(baseLinkReview+"vampires-fall-origins", baseLinkImg+"6262a56df551ed5332d9048e/6282882a30f3f3392158244e_vampire-fall-icon.jpg", "Vampires Fall Origins")

	// RPG TOP 6
	rpg1c = new addGame(baseLinkReview+"age-of-magic", baseLinkImg+"6262a56df551ed5332d9048e/62751dd38e918f6fe46bd816_age-of-magic-icon.jpg", "Age of Magic")
	rpg2c = new addGame(baseLinkReview+"raid-shadow-legends", baseLinkImg+"6262a56df551ed5332d9048e/62828881f19d97e7f9bf2209_raid-shadow-legends-icon.jpg", "Raid Shadow Legends", "multi")


	// ADDING TO RPG ARRAY
	rpgTop8 = [rpg1a, rpg2a, rpg3a, rpg4a, rpg5a, rpg6a, rpg7a, rpg8a, rpg9a]
	rpgTop7 = [rpg1b, rpg2b, rpg3b, rpg4b]
	rpgTop6 = [rpg1c, rpg2c]

	//################################################################
	// PLATFORM TOP 8
	//################################################################
	platform1a = new addGame(baseLinkReview+"fancy-pants-adventures", baseLinkImg+"6262a56df551ed5332d9048e/628288f99a967748b47c4b60_fancy-icon.jpg", "Fancy Pants Adventures")
	platform2a = new addGame(baseLinkReview+"hello-yogurt", baseLinkImg+"6262a56df551ed5332d9048e/6282891cad54fadc3b44f980_hello-yogurt-icon.jpg", "Hello Yogurt")
	platform3a = new addGame(baseLinkReview+"nihilumbra", baseLinkImg+"6262a56df551ed5332d9048e/628125441c9a9c774dd7725e_saleIcon.jpg", "Nihilumbra")
	platform4a = new addGame(baseLinkReview+"oddmar", baseLinkImg+"6262a56df551ed5332d9048e/6280fb4c25b65e9dbffd436b_oddmar-icon.jpg", "Oddmar")
	platform5a = new addGame(baseLinkReview+"super-cat-tales-2", baseLinkImg+"6262a56df551ed5332d9048e/628289c919b77991038311b5_super-cat-tales-2.jpg", "Super Cat Tales 2")
	platform6a = new addGame(baseLinkReview+"sword-of-xolan", baseLinkImg+"6262a56df551ed5332d9048e/6267cbf884517a580566cb41_sword-of-xolan-icon.jpg", "Sword of Xolan")
	platform7a = new addGame(baseLinkReview+"swordigo", baseLinkImg+"6262a56df551ed5332d9048e/62828ab47c430853d973006f_sword-icon.jpg", "Swordigo")
	platform8a = new addGame(baseLinkReview+"forgotton-anne", baseLinkImg+"6262a56df551ed5332d9048e/6265439956a98b7409e0ea96_forgotten-anne-icon.jpg", "Forgotton Anne")
	platform9a = new addGame(baseLinkReview+"space-expedition", baseLinkImg+"6262a56df551ed5332d9048e/62828b496078b72db84a142c_space-expedition-icon.jpg", "Space Expedition")

	// PLATFORM TOP 7
	//platform1b = new addGame(baseLinkReview+"blackmoor-2", baseLinkImg+"blackmoor2-icon.jpg", "blackmoor-2", "multi")
	platform2b = new addGame(baseLinkReview+"cats-are-liquid", baseLinkImg+"6262a56df551ed5332d9048e/62828ba644fcfb78ecb493e8_cats-are-liquid-icon.jpg", "Cats are Liquid")
	platform3b = new addGame(baseLinkReview+"fin-ancient-mystery", baseLinkImg+"6262a56df551ed5332d9048e/627d4d065b3d5d6f76b55a35_gg.jpg", "Fin Ancient Mystery")
	platform4b = new addGame(baseLinkReview+"g-switch-3", baseLinkImg+"6262a56df551ed5332d9048e/62828c7f08eb9426729922e6_g-icon.jpg", "G Switch 3")
	platform5b = new addGame(baseLinkReview+"geometry-dash-subzero", baseLinkImg+"6262a56df551ed5332d9048e/62828cd77cbd4371675ef0cd_geo-icon.jpg", "Geometry Dash Subzero")
	platform6b = new addGame(baseLinkReview+"snail-bob-3", baseLinkImg+"6262a56df551ed5332d9048e/62828d6755ea9933d6a4eb29_snail-bob3-icon.jpg", "Snail Bob 3")

	// PLATFORM TOP 6
	platform1c = new addGame(baseLinkReview+"adventure-beaks", baseLinkImg+"6262a56df551ed5332d9048e/62828ddf3bf647c41d72dc2e_beak-icon.jpg", "adventure-beaks")
	platform2c = new addGame(baseLinkReview+"apple-knight", baseLinkImg+"6262a56df551ed5332d9048e/628389003aea71ccea7674fa_apple-knight-icon.jpg", "Apple Knight")
	platform3c = new addGame(baseLinkReview+"grumpy-dwarf", baseLinkImg+"6262a56df551ed5332d9048e/62751dcecf197f1046a06e54_a1.jpg", "Grumpy Dwarf")
	platform4c = new addGame(baseLinkReview+"leps-world-3", baseLinkImg+"6262a56df551ed5332d9048e/6283896757e13d40631e9c1d_leps-icon.jpg", "Leps World 3")
	platform5c = new addGame(baseLinkReview+"mortal-crusade", baseLinkImg+"6262a56df551ed5332d9048e/628389a5f081de80fe62a8ce_mortal-crusade-icon.jpg", "Mortal Crusade")
	platform6c = new addGame(baseLinkReview+"snow-bros-classic", baseLinkImg+"6262a56df551ed5332d9048e/628389ebaef9690cefbb1df6_snow-bros-classic-icon.jpg", "Snow Bros Classic")

	// ADDING TO PLATFORM ARRAY
	platformTop8 = [platform1a, platform2a, platform3a, platform4a, platform5a, platform6a, platform7a, platform8a, platform9a]
	platformTop7 = [platform2b, platform3b, platform4b, platform5b, platform6b]
	platformTop6 = [platform1c, platform2c, platform3c, platform4c, platform5c, platform6c]


	//################################################################
	// STRATEGY TOP 8
	//################################################################
	strategy1a = new addGame(baseLinkReview+"art-of-war-3-global-conflict", baseLinkImg+"6262a56df551ed5332d9048e/62838a2db431864eb562e5cc_art-of-war-3-icon.jpg", "Art of War 3", "multi")
	strategy2a = new addGame(baseLinkReview+"battle-of-polytopia", baseLinkImg+"6262a56df551ed5332d9048e/62838a8d536a00be771042a7_battle-of-polytopia-icon.jpg", "Battle of Polytopia", "multi")
	//strategy3a = new addGame(baseLinkReview+"castle-crush", baseLinkImg+"6262a56df551ed5332d9048e/62838aab436cdeb7901b56e6_castle-crush-icon.jpg", "Castle Crush", "multi")
	strategy4a = new addGame(baseLinkReview+"exploding-kittens", baseLinkImg+"6262a56df551ed5332d9048e/627d335b114425d7fd4cf180_exploding-kittens-icon.jpg", "Exploding Kittens", "multi")
  
	// STRATEGY TOP 7
	strategy1b = new addGame(baseLinkReview+"pirates-showdown", baseLinkImg+"6262a56df551ed5332d9048e/62838b5b3485262c634c1bcb_pirates-showdown-icon.jpg", "Pirates Showdown")
	strategy2b = new addGame(baseLinkReview+"plant-the-world", baseLinkImg+"6262a56df551ed5332d9048e/62838c523cc4dc558a8a41bb_plant-the-world-icon.jpg", "Plant the World")
	strategy3b = new addGame(baseLinkReview+"stick-war-legacy", baseLinkImg+"6262a56df551ed5332d9048e/62838c692f3b9a2f50c1ce02_stick-war-legacy-icon.jpg", "Stick War Legacy")
	
	// STRATEGY TOP 6
	strategy1c = new addGame(baseLinkReview+"forge-of-empires", baseLinkImg+"6262a56df551ed5332d9048e/627d3ab9dff929a68ccebc18_forge-of-empires-icon.jpg", "forge-of-empires")
	strategy2c = new addGame(baseLinkReview+"great-conqueror", baseLinkImg+"6262a56df551ed5332d9048e/62838cc964d42c33c9c6da3c_great-conqueror-icon.jpg", "Great Conqueror")
	
	// ADDING TO STRATEGY ARRAY
	strategyTop8 = [strategy1a, strategy2a, strategy4a]
	strategyTop7 = [strategy1b, strategy2b, strategy3b]
	strategyTop6 = [strategy1c, strategy2c]
	
	
	//################################################################
	// PUZZLE TOP 8
	//################################################################
	puzzle1a = new addGame(baseLinkReview+"cube-escape-paradox", baseLinkImg+"6262a56df551ed5332d9048e/62838ce5f8e3335adae62d16_cube-escape-paradox-icon.jpg", "cube-escape-paradox")
	puzzle2a = new addGame(baseLinkReview+"fishdom", baseLinkImg+"6262a56df551ed5332d9048e/62838d237d0cb74d4f310518_fishdom-icon.jpg", "Fishdom")
	puzzle3a = new addGame(baseLinkReview+"flaming-core", baseLinkImg+"6262a56df551ed5332d9048e/62838d3bf081dea20362c327_flaming-core-icon.jpg", "Flaming Core")
	puzzle4a = new addGame(baseLinkReview+"hocus", baseLinkImg+"6262a56df551ed5332d9048e/62838d8699bfd3613f07d7d1_hocus-icon.jpg", "Hocus")
	puzzle5a = new addGame(baseLinkReview+"hyperforma", baseLinkImg+"6262a56df551ed5332d9048e/6267ca1d69d7b47502281625_hyperforma-icon.png", "Hyperforma")

	puzzle7a = new addGame(baseLinkReview+"not-not", baseLinkImg+"6262a56df551ed5332d9048e/62838f1d977bb3ecf7efcc55_not-not-icon.jpg", "Not Not")
	puzzle8a = new addGame(baseLinkReview+"quell", baseLinkImg+"6262a56df551ed5332d9048e/62839013aef9692ddfbb5502_quell.jpg", "Quell")
	
	// PUZZLE TOP 7
	puzzle1b = new addGame(baseLinkReview+"cut-the-rope-2", baseLinkImg+"6262a56df551ed5332d9048e/6283904b34852655fb4c3e6d_cut-the-rope-2-icon.jpg", "Cut the Rope 2")
	puzzle2b = new addGame(baseLinkReview+"find-a-way", baseLinkImg+"6262a56df551ed5332d9048e/628390d6536a00d669106ee5_find-a-way-icon.jpg", "Find a Way")

	
	// PUZZLE TOP 6
	puzzle1c = new addGame(baseLinkReview+"block-puzzle", baseLinkImg+"6262a56df551ed5332d9048e/6283913e436cde172c1b8c10_block-puzzle-icon.jpg", "Block Puzzle")
	puzzle2c = new addGame(baseLinkReview+"gunspell-2", baseLinkImg+"6262a56df551ed5332d9048e/6283918557e13d851b1edba5_gunspell2-icon.jpg", "Gunspell 2", "multi")

	// ADDING TO PUZZLE ARRAY
	puzzleTop8 = [puzzle1a, puzzle2a, puzzle3a, puzzle4a, puzzle5a, puzzle7a, puzzle8a]
	puzzleTop7 = [puzzle1b, puzzle2b]
	puzzleTop6 = [puzzle1c, puzzle2c]
	
	
	//################################################################
	// RACING TOP 8
	//################################################################
	racing1a = new addGame(baseLinkReview+"asphalt-9-legends", baseLinkImg+"6262a56df551ed5332d9048e/628391bd8bbce39fa56aba2f_asphalt-9-legends.jpg", "Asphalt 9 Legends", "multi")
	racing2a = new addGame(baseLinkReview+"cosmic-challenge-racing", baseLinkImg+"6262a56df551ed5332d9048e/6283920600792f94572224a9_cosmic-icon.jpg", "Cosmic Challenge Racing")
	racing3a = new addGame(baseLinkReview+"hellrider-3", baseLinkImg+"6262a56df551ed5332d9048e/6283922c3aea71573576d1ea_hellrider3.jpg", "Hellrider 3")
	racing4a = new addGame(baseLinkReview+"hill-climb-racing-2", baseLinkImg+"6262a56df551ed5332d9048e/6283924e64d42c63bbc707ee_hill-climb-racing-2.jpg", "Hill Climb Racing 2", "multi")
	racing5a = new addGame(baseLinkReview+"horizon-chase-world-tour", baseLinkImg+"6262a56df551ed5332d9048e/628392822f3b9ab1afc1f84b_horizon.jpg", "Horizon Chase World Tour")
	racing6a = new addGame(baseLinkReview+"moto-x3m-bike-race-game", baseLinkImg+"6262a56df551ed5332d9048e/628392ab0e893c5a3d8ebda8_moto.jpg", "Moto x3m Bike")
	racing7a = new addGame(baseLinkReview+"real-racing-3", baseLinkImg+"6262a56df551ed5332d9048e/62839343f06d201947e8a8ba_realracing3.jpg", "Real Racing 3", "multi")

	
	// RACING TOP 7
	racing1b = new addGame(baseLinkReview+"earn-2-die", baseLinkImg+"6262a56df551ed5332d9048e/6283935e8bbce3baff6abf02_earn2-die-icon.jpg", "Earn 2 Die")
	racing2b = new addGame(baseLinkReview+"mrbean-special-delivery", baseLinkImg+"6262a56df551ed5332d9048e/62839398378ef56b25be871c_mrbeanicon.jpg", "Mrbean Special Delivery")
	racing3b = new addGame(baseLinkReview+"rival-gears-racing", baseLinkImg+"6262a56df551ed5332d9048e/628393bae5cc597969f9da01_rival.jpg", "Rival Gears Racing", "multi")
	racing4b = new addGame(baseLinkReview+"traffic-racer", baseLinkImg+"6262a56df551ed5332d9048e/628393d9536a007e86108122_trafficRacer.jpg", "Traffic Racer")
	
	// RACING TOP 6
	racing1c = new addGame(baseLinkReview+"32-secs", baseLinkImg+"6262a56df551ed5332d9048e/62751dcda5258880acb790e9_32-secs-icon.jpg", "32 Secs")
	racing2c = new addGame(baseLinkReview+"carx-highway-racing", baseLinkImg+"6262a56df551ed5332d9048e/628394137e9764ffbc168259_carx.jpg", "CarX Highway Racing", "multi")
	racing3c = new addGame(baseLinkReview+"demolition-derby-3", baseLinkImg+"6262a56df551ed5332d9048e/6283942d0e893c79048ec6d3_demo-icon.jpg", "Demolition Derby 3", "multi")
	racing4c = new addGame(baseLinkReview+"hot-wheels-race-off", baseLinkImg+"6262a56df551ed5332d9048e/6283945364d42cd22bc71d90_hot-wheels.jpg", "Hot Wheels Race Off")	
	racing5c = new addGame(baseLinkReview+"smashy-road-wanted-2", baseLinkImg+"6262a56df551ed5332d9048e/6283946cdfdba3e6dd28e38b_smashy.jpg", "Smashy Road Wanted 2")
	racing6c = new addGame(baseLinkReview+"top-fuel-hot-rod", baseLinkImg+"6262a56df551ed5332d9048e/6283948a378ef590eabe92ad_topfuel.jpg", "Top Fuel Hot Rod")
	
	// ADDING TO racing ARRAY
	racingTop8 = [racing1a, racing2a, racing3a, racing4a, racing5a, racing6a, racing7a]
	racingTop7 = [racing1b, racing2b, racing3b, racing4b]
	racingTop6 = [racing1c, racing2c, racing3c, racing4c, racing5c, racing6c]
	
	
	
	//################################################################
	// SIMULATION TOP 8
	//################################################################
	simulation1a = new addGame(baseLinkReview+"cooking-fever", baseLinkImg+"6262a56df551ed5332d9048e/628394ad27cc99f1647ac765_cooking-fever-icon.jpg", "Cooking Fever")
	simulation2a = new addGame(baseLinkReview+"good-pizza-great-pizza", baseLinkImg+"6262a56df551ed5332d9048e/628394c93aea7120be76e6f8_good-pizza-great-pizza-icon.jpg", "Good Pizza Great Pizza")
	simulation3a = new addGame(baseLinkReview+"stardew-valley", baseLinkImg+"6262a56df551ed5332d9048e/6283979cabd6226c66aa6369_stardew-valley.jpg", "Stardew Valley")
	simulation4a = new addGame(baseLinkReview+"life-is-strange", baseLinkImg+"6262a56df551ed5332d9048e/6283ae90b912beaff0f4bc7f_life-is-strange-icon.jpg", "Life is Strange")
	
	// SIMULATION TOP 7
	simulation1b = new addGame(baseLinkReview+"gardenscapes", baseLinkImg+"6262a56df551ed5332d9048e/6283aea7d28fe17715cf9aab_garden-icon.jpg", "Gardenscapes")
	simulation2b = new addGame(baseLinkReview+"me-is-king", baseLinkImg+"6262a56df551ed5332d9048e/6283bbd7d7eb2d5d6c0cbc11_me-is-king-icon.jpg", "Me is King")
	simulation3b = new addGame(baseLinkReview+"simcity-buildit", baseLinkImg+"6262a56df551ed5332d9048e/6283bc1824aa899503b87766_simcity-buildit-icon.jpg", "Simcity Buildit")
	simulation4b = new addGame(baseLinkReview+"spongebob-krusty-cook-off", baseLinkImg+"6262a56df551ed5332d9048e/6283bc313470f333cad2e001_spongebob-icon.jpg", "Spongebob Krusty Cook Off")
	
	// SIMULATION TOP 6
	simulation1c = new addGame(baseLinkReview+"city-island-5", baseLinkImg+"6262a56df551ed5332d9048e/6283bc5225d9757523939e80_city-island-5.jpg", "City Island 5")
	simulation2c = new addGame(baseLinkReview+"dragon-mania-legends", baseLinkImg+"6262a56df551ed5332d9048e/6283bc6a22b836199233258c_dragon-mania-legends-icon.jpg", "Dragon Mania Legends")
	simulation3c = new addGame(baseLinkReview+"godzilla-defense-force", baseLinkImg+"6262a56df551ed5332d9048e/6283bc85114918d0c14e5935_godzilla-defense-force-icon.jpg", "Godzilla Defense Force")
	simulation4c = new addGame(baseLinkReview+"prison-empire-tycoon", baseLinkImg+"6262a56df551ed5332d9048e/62810bf97ec5796e5343a48f_prison-empire-tycoon-icon.jpg", "Prison Empire Tycoon")	

	
	// ADDING TO simulation ARRAY
	simulationTop8 = [simulation1a, simulation2a, simulation3a, simulation4a]
	simulationTop7 = [simulation1b, simulation2b, simulation3b, simulation4b]
	simulationTop6 = [simulation1c, simulation2c, simulation3c, simulation4c]
	
	
	
	//################################################################
	// SPORTS TOP 8
	//################################################################
	sports1a = new addGame(baseLinkReview+"baseball-9", baseLinkImg+"6262a56df551ed5332d9048e/6283bcc77cd6ba9b10af1b39_baseball-9.jpg", "Baseball 9")
	sports2a = new addGame(baseLinkReview+"election-year-knockout", baseLinkImg+"6262a56df551ed5332d9048e/6283bce3a975a16257ab9af7_election-year-knockout-icon.jpg", "Election Year Knockout")
	sports3a = new addGame(baseLinkReview+"square-fists-boxing", baseLinkImg+"6262a56df551ed5332d9048e/6283bd0ee40fd03ffb3e05f1_square-fists-boxing-icon.jpg", "Square Fists Boxing")
	sports4a = new addGame(baseLinkReview+"world-of-tennis-roaring-20s", baseLinkImg+"6262a56df551ed5332d9048e/6283bd2c0675a5f4cf3c2413_world-of-tennis-roaring-20s-icon.jpg", "World of Tennis")
	
	// SPORTS TOP 7
	sports1b = new addGame(baseLinkReview+"basketball-battle", baseLinkImg+"6262a56df551ed5332d9048e/6283bd493dc4c62ea623dffb_basketball-battle-icon.jpg", "Basketball Battle")
	sports2b = new addGame(baseLinkReview+"flip-diving", baseLinkImg+"6262a56df551ed5332d9048e/6283bd683dc4c6643523e030_flip-diving-icon.jpg", "Flip Diving")
	sports3b = new addGame(baseLinkReview+"nba-2k", baseLinkImg+"6262a56df551ed5332d9048e/6283bd940aac182cc7389eb3_nba2k-icon.jpg", "NBA 2K")
	sports4b = new addGame(baseLinkReview+"pba-bowling-challenge", baseLinkImg+"6262a56df551ed5332d9048e/6283bdb2d1fb8c58ea7ec947_pba-icon.jpg", "PBA Bowling Challenge")
	
	// SPORTS TOP 6
	sports1c = new addGame(baseLinkReview+"ea-sports-ufc", baseLinkImg+"6262a56df551ed5332d9048e/6283bdd524aa8985f4b8817a_ea-sports-ufc.jpg", "EA Sports UFC")
	sports2c = new addGame(baseLinkReview+"golf-king-world-tour", baseLinkImg+"6262a56df551ed5332d9048e/6283bdf1738920593ed15a7d_golf-king-world-tour-icon.jpg", "Golf King World Tour")
	sports3c = new addGame(baseLinkReview+"hockey-all-stars", baseLinkImg+"6262a56df551ed5332d9048e/6283be1d226ac70cf5a4507d_hockey-all-stars-icon.jpg", "Hockey All Stars", "multi")
	sports4c = new addGame(baseLinkReview+"real-boxing-2", baseLinkImg+"6262a56df551ed5332d9048e/6283be3d0675a521533c27a3_real-boxing-2.jpg", "Real Boxing 2")	

	
	// ADDING TO sports ARRAY
	sportsTop8 = [sports1a, sports2a, sports3a, sports4a]
	sportsTop7 = [sports1b, sports2b, sports3b, sports4b]
	sportsTop6 = [sports1c, sports2c, sports3c, sports4c]
	
	
	
	//################################################################
	// td TOP 8
	//################################################################
	td1a = new addGame(baseLinkReview+"ancient-planet-tower-defense", baseLinkImg+"6262a56df551ed5332d9048e/62652222a9da5b9f522c7e20_ancient-planet-tower-defense-icon.jpg", "Ancient Planet")
	td2a = new addGame(baseLinkReview+"bloons-td-6", baseLinkImg+"6262a56df551ed5332d9048e/627d4dc51442f66a54182e10_bloons-td6-icon.jpg", "Bloons TD 6", "multi")
	td3a = new addGame(baseLinkReview+"infinitode-2", baseLinkImg+"6262a56df551ed5332d9048e/6283bea37cd6ba3f51af203c_infinitode-2-icon.jpg", "Infinitode 2")

	
	// td TOP 7
	td1b = new addGame(baseLinkReview+"mega-tower", baseLinkImg+"6262a56df551ed5332d9048e/6283bf62e70b1bfe6eec0366_mega-tower-icon.jpg", "Mega Tower")

	// td TOP 6
	td1c = new addGame(baseLinkReview+"module-td", baseLinkImg+"6262a56df551ed5332d9048e/6283bf851d2ab2848411aaf6_module-td-icon.jpg", "Module TD")
	td2c = new addGame(baseLinkReview+"rooster-defense", baseLinkImg+"6262a56df551ed5332d9048e/6283bff63470f36176d2fa79_rooster-icon.jpg", "Rooster Defense")

	td4c = new addGame(baseLinkReview+"wild-castle-td", baseLinkImg+"6262a56df551ed5332d9048e/6283c04f3e9081d10deb3660_wild-castle-td-icon.jpg", "wild-castle-td-icon.jpg")	

	
	// ADDING TO td ARRAY
	tdTop8 = [td1a, td2a, td3a]
	tdTop7 = [td1b]
	tdTop6 = [td1c, td2c, td4c]
	
	
  // ADDING ALL MOBILE GAMES
  function addGamesAll(theGameName) {   
    // TOP 8 LOOP
    try {
    	 theGameName8 = theGameName + "Top8"
    	$(eval(theGameName8)).each(function(index, value) {
      $(".all-top-8-games").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
    });
    } catch (e) {
      $("#top-8-part-mobile").css("display", "none")
    }
   

    try{
     // TOP 7 LOOP
      theGameName7 = theGameName + "Top7"
    $(eval(theGameName7)).each(function(index, value) {
    	$(".all-top-7-games").append(`
        <div class="menuGameBoxes">
        <a href=${value.aLink}>
        <div><img src=${value.img} loading="lazy"></div>
          </a>
        <div class="menuGamesBoxP">${value.name}</div>
          </div>
        `)
            });
    } catch (e) {
      $("#top-7-part-mobile").css("display", "none")
    }
   

    // TOP 6 LOOP
    try{
        theGameName6 = theGameName + "Top6"
        $(eval(theGameName6)).each(function(index, value) {


                $(".all-top-6-games").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
              });


          
    } catch (e) {
     $("#top-6-part-mobile").css("display", "none")
    }
    
  }
  
  //##################################################
   // ADDING ALL PC GAMES 
 //##################################################
 function addGamesAllPC(theGameName) {   
    // TOP 8 LOOP
    try {
    	 theGameName8 = theGameName + "Top8"
    	$(eval(theGameName8)).each(function(index, value) {
      $("#ratingz-8").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
    });
    } catch (e) {
      $("#top-88-part-mobile").css("display", "none")
    }
   

    try{
     // TOP 7 LOOP
      theGameName7 = theGameName + "Top7"
    $(eval(theGameName7)).each(function(index, value) {
    	$("#ratingz-7").append(`
        <div class="menuGameBoxes">
        <a href=${value.aLink}>
        <div><img src=${value.img} loading="lazy"></div>
          </a>
        <div class="menuGamesBoxP">${value.name}</div>
          </div>
        `)
            });
    } catch (e) {
      $("#top-77-part-mobile").css("display", "none")
    }
   

    // TOP 6 LOOP
    try{
        theGameName6 = theGameName + "Top6"
        $(eval(theGameName6)).each(function(index, value) {
		$("#ratingz-6").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
              });


          
    } catch (e) {
     $("#top-66-part-mobile").css("display", "none")
    }
    
  }

//############################################
// Show Games for mobile menu
//############################################
function showGames(genre){
  $(".all-top-8-games").html("")
  $(".all-top-7-games").html("")
  $(".all-top-6-games").html("")
  $("#top-8-part-mobile").css("display", "block")
  $("#top-7-part-mobile").css("display", "block")
  $("#top-6-part-mobile").css("display", "block")
  addGamesAll(genre)
  $("#all-pop-up-genre").css("display", "block")
}

//############################################
// Open Mobile Menu Genre
//############################################
$(document).on("click", "#casualLink", function(){
	showGames("casual")
})

$(document).on("click", "#actionLink", function(){
	showGames("action")
})

$(document).on("click", "#fightLink", function(){
	showGames("fight")
})

$(document).on("click", "#adventureLink", function(){
	showGames("adventure")
})

$(document).on("click", "#rpgLink", function(){
	showGames("rpg")
})

$(document).on("click", "#platformLink", function(){
	showGames("platform")
})

$(document).on("click", "#strategyLink", function(){
	showGames("strategy")
})

$(document).on("click", "#puzzleLink", function(){
	showGames("puzzle")
})

$(document).on("click", "#racingLink", function(){
	showGames("racing")
})

$(document).on("click", "#simulationLink", function(){
	showGames("simulation")
})

$(document).on("click", "#sportsLink", function(){
	showGames("sports")
})
$(document).on("click", "#tdLink", function(){
	showGames("td")
})


//############################################
// Get URL
//############################################
var pathname = window.location.pathname;

if(pathname == "/mobile/casual-games") {
		addGamesAllPC("casual")
		totalAction = casualTop8.length + casualTop7.length + casualTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/arcade-games") {
		addGamesAllPC("action")
		totalAction = actionTop8.length + actionTop7.length + actionTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/fighting-games") {
		addGamesAllPC("fight")
		totalAction = fightTop8.length  + fightTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/3d-games") {
		addGamesAllPC("adventure")
		totalAction = adventureTop8.length + adventureTop7.length + adventureTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/rpg-games") {
		addGamesAllPC("rpg")
		totalAction = rpgTop8.length + rpgTop7.length + rpgTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/platform-games") {
		addGamesAllPC("platform")
		totalAction = platformTop8.length + platformTop7.length + platformTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/strategy-games") {
		addGamesAllPC("strategy")
		totalAction = strategyTop8.length + strategyTop7.length + strategyTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/puzzle-games") {
		addGamesAllPC("puzzle")
		totalAction = puzzleTop8.length + puzzleTop7.length + puzzleTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/racing-games") {
		addGamesAllPC("racing")
		totalAction = racingTop8.length + racingTop7.length + racingTop6.length
		$("#totalAction").text(totalAction)
} else if (pathname == "/mobile/simulation-games") {
		addGamesAllPC("simulation")
		totalAction = simulationTop8.length + simulationTop7.length + simulationTop6.length
		$("#totalAction").text(totalAction)
}  else if (pathname == "/mobile/sports-games") {
		addGamesAllPC("sports")
		totalAction = sportsTop8.length + sportsTop7.length + sportsTop6.length
		$("#totalAction").text(totalAction)
}  else if (pathname == "/mobile/tower-defense-games") {
		addGamesAllPC("td")
		totalAction = tdTop8.length + tdTop7.length + tdTop6.length
		$("#totalAction").text(totalAction)
}


totalGames =   games.length;
$("#mobile-total-games").text(totalGames)
$("#pc-total-games").text(totalGames)


//############################################
// RANDOM GAME PC
//############################################
$(document).on("click", "#randomGame", function () {
	
	var randomItem = games[Math.floor(Math.random()*games.length)];
	var randomItem22 = randomItem.replace(/[ ,]+/g, "-");
	var hrefGame = "https://androidshark.com/review/" + randomItem22 
	window.location.href = hrefGame;

})

//############################################
// RANDOM GAME PC
//############################################
$(document).on("click", "#randomGame-mobile", function () {
	
	var randomItem = games[Math.floor(Math.random()*games.length)];
	var randomItem22 = randomItem.replace(/[ ,]+/g, "-");
	var hrefGame = "https://androidshark.com/review/" + randomItem22 
	window.location.href = hrefGame;

})


//############################################
//	RANDOM DAILY PICK
//############################################
ddd = new Date();
dayz = ddd.getDay()

class randomGame {
	constructor(img, name, genre, genreLink, linky) {
	  this.img = img;
	  this.name = name;
	  this.genre = genre;
	  this.genreLink = genreLink;
	  this.linky = linky;
	}
}

// Casual Games
randomGame1 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62826d03beebffbca0a683b8_orbia-icon.jpg",
"Orbia",
"Casual",
"https://androidshark.com/mobile/casual-games",
"https://androidshark.com/review/orbia"
)

randomGame2 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d39a58fdb8888d02ab807_mousebusters-icon.jpg",
"Mousebusters",
"Casual",
"https://androidshark.com/mobile/casual-games",
"https://androidshark.com/review/mousebusters"
)


// Action Games
randomGame3 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62751dd579f96081482e1d83_altos-icon.jpg",
"Alto's Adventure",
"Action",
"https://androidshark.com/mobile/action-games",
"https://androidshark.com/review/altos-adventure"
)

randomGame4 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62751ddaf2602e65d605c7eb_among-us-icon.jpg",
"Among Us",
"Action",
"https://androidshark.com/mobile/action-games",
"https://androidshark.com/review/among-us"
)

// Fight Games
randomGame5 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628283780e573c02bfa4593b_power-rangers-icon.jpg",
"Power Rangers: Legacy",
"Fighting",
"https://androidshark.com/mobile/fighting-games",
"https://androidshark.com/review/power-rangers-legacy-wars"
)

randomGame6 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628283c036c579d5e9b40bf2_skullgirls-icon.jpg",
"Skullgirls",
"Fighting",
"https://androidshark.com/mobile/fighting-games",
"https://androidshark.com/review/skullgirls"
)


// Adventure Games
randomGame7 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62751dda085d1721590269bb_alien-isolation-icon.jpg",
"Alien Isolation",
"Adventure",
"https://androidshark.com/mobile/adventure-games",
"https://androidshark.com/review/alien-isolation"
)

randomGame8 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6265439956a98b7409e0ea96_forgotten-anne-icon.jpg",
"Forgotton Anne",
"Adventure",
"https://androidshark.com/mobile/adventure-games",
"https://androidshark.com/review/forgotton-anne"
)

// Rpg Games
randomGame9 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62651dbc45767b4516533e65_eternium-icon.jpg",
"Eternium",
"Rpg",
"https://androidshark.com/mobile/rpg-games",
"https://androidshark.com/review/eternium"
)

randomGame10 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6282877329c88434b4e924fd_sky-icon.jpg",
"Sky Children",
"Rpg",
"https://androidshark.com/mobile/rpg-games",
"https://androidshark.com/review/sky-children-of-the-light"
)

// Platform Games
randomGame11 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6280fb4c25b65e9dbffd436b_oddmar-icon.jpg",
"Oddmar",
"Platform",
"https://androidshark.com/mobile/platform-games",
"https://androidshark.com/review/oddmar"
)

randomGame12 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628289c919b77991038311b5_super-cat-tales-2.jpg",
"Super Cat Tales",
"Platform",
"https://androidshark.com/mobile/platform-games",
"https://androidshark.com/review/super-cat-tales-2"
)

// Strategy Games


randomGame14 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62838a8d536a00be771042a7_battle-of-polytopia-icon.jpg",
"Battle of Polytopia",
"Strategy",
"https://androidshark.com/mobile/strategy-games",
"https://androidshark.com/review/battle-of-polytopia"
)

// Puzzle Games
randomGame15 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6267ca1d69d7b47502281625_hyperforma-icon.png",
"Hyperforma",
"Puzzle",
"https://androidshark.com/mobile/puzzle-games",
"https://androidshark.com/review/hyperforma"
)

randomGame16 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62839013aef9692ddfbb5502_quell.jpg",
"Quell",
"Puzzle",
"https://androidshark.com/mobile/puzzle-games",
"https://androidshark.com/review/quell"
)

// Racing Games
randomGame17 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6283922c3aea71573576d1ea_hellrider3.jpg",
"Hellrider 3",
"Racing",
"https://androidshark.com/mobile/racing-games",
"https://androidshark.com/review/hellrider-3"
)

// Simulation Games
randomGame18 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628394c93aea7120be76e6f8_good-pizza-great-pizza-icon.jpg",
"Good Pizza",
"Simulation",
"https://androidshark.com/mobile/simulation-games",
"https://androidshark.com/review/good-pizza-great-pizza"
)

// Simulation Games
randomGame19 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6283bce3a975a16257ab9af7_election-year-knockout-icon.jpg",
"Election Year",
"Sports",
"https://androidshark.com/mobile/sports-games",
"https://androidshark.com/review/election-year-knockout"
)

// TD Games
randomGame20 = new randomGame("https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6283bea37cd6ba3f51af203c_infinitode-2-icon.jpg",
"Infinitode 2",
"Tower Defense",
"https://androidshark.com/mobile/tower-defense-games",
"https://androidshark.com/review/infinitode-2"
)


day0 = [randomGame1, randomGame3, randomGame17]
day1 = [randomGame2, randomGame4, randomGame6]
day2 = [randomGame15, randomGame5, randomGame7]
day3 = [randomGame19, randomGame16, randomGame8]
day4 = [randomGame9, randomGame11, randomGame15]
day5 = [randomGame10, randomGame12, randomGame14]
day6 = [randomGame20, randomGame19, randomGame18]
$("#top-3-pc").html("")
if (dayz == 0) {
	$(day0).each(function(index, value) {
		
		$("#top-3-pc").append(		`
		<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		

		
		$("#top-3-mobile-list").append(
		`
		<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
	
	});
} else if (dayz == 1) {
	$(day1).each(function(index, value) {
		$("#top-3-pc").append(		`
		
		<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
		$("#top-3-mobile-list").append(
		`
			<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
		
		
	});
} else if (dayz == 2) {
	$(day2).each(function(index, value) {
		$("#top-3-pc").append(		`
		
			<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
				
		$("#top-3-mobile-list").append(
		`
	<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
	});
} else if (dayz == 3) {
	$(day3).each(function(index, value) {
		$("#top-3-pc").append(		`
		
			<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
		
		$("#top-3-mobile-list").append(
		`
		<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
		
	});
} else if (dayz == 4) {
	$(day4).each(function(index, value) {
		$("#top-3-pc").append(		`
		
		
		<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
		
		$("#top-3-mobile-list").append(
		`
	<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
		
	});
} else if (dayz == 5) {
	$(day5).each(function(index, value) {
		$("#top-3-pc").append(		`
		
		<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
		
		$("#top-3-mobile-list").append(
		`
			<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
		
	});
} else if (dayz == 6) {
	$(day6).each(function(index, value) {
		$("#top-3-pc").append(		`
		
		<div data-w-id="e82c945e-564d-0d8e-9ed2-206c090d4afa" class="daily-picks" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
		<img src="${value.img}" loading="lazy" alt="" class="image-7">
		<a href="${value.linky}" class="top-link1">${value.name}</a>
		<a href="${value.genreLink}" class="top-link2">${value.genre}</a>
		<p class="daily-pick-p">Daily Pick</p>
		</div>
		`
		)
		
			
		$("#top-3-mobile-list").append(
		`
		<div class="div-block-30 endish purplish">
			<img src="${value.img}" loading="lazy" alt="${value.name} Icon" class="image-40">
			<h6 class="heading-39">${value.name}</h6>
			<h6 class="heading-39 ">${value.genre}</h6>
			<div class="div-block-31"><h6><a href="${value.linky}" >Read More</a></h6>
			</div>
			</div>
		`
		)
		
	});
}





//LOAD ALL IMAGES
 // ADDING ALL MOBILE GAMES
  function addGamesAll99(theGameName) {   
    // TOP 8 LOOP
    try {
    	 theGameName8 = theGameName + "Top8"
    	$(eval(theGameName8)).each(function(index, value) {
      $("#load-all-images").html(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} ></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
    });
    } catch (e) {
      $("#load-all-images").css("display", "none")
    }
   

    try{
     // TOP 7 LOOP
      theGameName7 = theGameName + "Top7"
    $(eval(theGameName7)).each(function(index, value) {
    	$("#load-all-images").html(`
        <div class="menuGameBoxes">
        <a href=${value.aLink}>
        <div><img src=${value.img}></div>
          </a>
        <div class="menuGamesBoxP">${value.name}</div>
          </div>
        `)
            });
    } catch (e) {
      $("#load-all-images").css("display", "none")
    }
   

    // TOP 6 LOOP
    try{
        theGameName6 = theGameName + "Top6"
        $(eval(theGameName6)).each(function(index, value) {


                $("#load-all-images").html(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}>
      <div><img src=${value.img} ></div>
        </a>
      <div class="menuGamesBoxP">${value.name}</div>
        </div>
      `)
              });


          
    } catch (e) {
     $("#load-all-images").css("display", "none")
    }
    
  }
  
  
  
  
  
// Resize window
$(window).resize(function() {
  if ($(window).width() < 1180) {
	$("#hide-right").css("display", "none")
  } else {
	  	$("#hide-right").css("display", "block")
  }
});
addGamesAll99("sports")
addGamesAll99("casual")
addGamesAll99("action")
addGamesAll99("fight")
addGamesAll99("adventure")
addGamesAll99("rpg")
addGamesAll99("platform")
addGamesAll99("strategy")
addGamesAll99("puzzle")
addGamesAll99("racing")
addGamesAll99("simulation")
addGamesAll99("sports")
addGamesAll99("td")

  $(document).on("click", "#pre-13", function(){
	$("#divChanger").html('<img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627cd49f01353facb0f9f569_gg.jpg">')
	$("#playStore").attr("href", "https://play.google.com/store/apps/details?id=net.gameduo.oogaooga"); 
  })
  
  
  
  
  
  
  
