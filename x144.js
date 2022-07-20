// ##################################################################
// Search
// ##################################################################
games = ["among us", "archero", "ancient planet tower defense", "art of war 3 global conflict", "cardinal quest 2", "baseball9", "altos adventure", "forge of empires", "mobile legends bang bang", "mushroom wars 2",
"skullgirls", "alien isolation", "infinitode2", "nba 2k", "scary horror 2", "bloons td 6", "moonshades", "prison empire tycoon", "bloody bastards", "plague inc", "mini td 2", "defense legend 4", 
    "badland", "battle of polytopia", "bee brilliant", "castle crush", "city island5", "cooking fever", "exploding kittens", "raid shadow legends", "another eden", "naval storm", "rts siege up", "uniwar", "galaxy reavers",
    "the walking zombie 2", "lara croft relic run", "block puzzle", "asphalt 9 legends", "guardian tales", "plant the world", "flip diving", "square fists boxing", "brawlhalla", "mech arena robot showdown", "lost in blue", "life in adventure",
    "cube escape paradox", "eternium", "fishdom", "gardenscapes", "good pizza great pizza", "grimvalor", "hill climb racing 2", "hellrider 3",
    "hocus", "horizon chase world tour", "hot wheels race off", "moto x3m bike race game", "mousebusters", "rooster defense", "botworld adventure",
     "nihilumbra", "onebit adventure", "pinball deluxe reloaded", "pirates showdown", "power rangers legacy wars", "great conqueror",
    "magic survival", "legend of solgard", "metal soldiers 2", "sky children of the light", "wild castle td", "space expedition", "genshin impact",
    "quell", "roblox", "shadow fight arena", "sky force reloaded", "snowman story", "life is strange", "death park 2", "forgotton anne",
    "stardew valley",  "tank battle heroes", "vampires fall origins", "cosmic challenge racing", "fin ancient mystery", "oddmar",
    "jurassic monster world", "pubg mobile", "traffic racer",  "mars mars", "kingdom rush", 
    "call of duty mobile", "ea sports ufc", "day r survival", "snail bob 3", "shadow hunter lost world", "mega tower", "me is king",
    "candy crush soda saga", "space marshals 2", "1945 air force", "snow bros classic", "golf king world tour", "hockey all stars","rival gears racing", "tsuki adventure", "grumpy dwarf", "hello yogurt", "air attack", "air attack 2",
     "age of magic", "basketball battle", "ancient bricks", "top fuel hot rod", "smashy road wanted 2", "g switch 3", "johnny trigger",
      "mrbean special delivery", "ski safari 2", "transmute galaxy battle", "demolition derby 3", "the witchs isle", "temple run 2", "sword of xolan"
      , "sea invaders", "apple knight", "real racing 3", "constellation eleven", "xenowerk", "super cat tales 2", "lightning duru", "subway surfers", 
      "godzilla defense force", "orbia", "carx highway racing",  "spongebob krusty cook off", "dragon mania legends", "cut the rope 2",
       "walk master", "okay", "endurance", "flaming-core", "simcity buildit", "snake arena", "leps world 3", "find a way", "megabots battle arena",
        "earn 2 die", "not not", "rail rush", "fancy pants adventures", "kung fu fight arena", "payback 2", "plank", "sky fighters 3d", "stick war legacy",
         "the frostrune", "real boxing 2", "world of tennis roaring 20s", "bowmasters", "cats are liquid", "module td", "32 secs",
    "pba bowling challenge", "gunspell 2", "mortal crusade", "robot destroyer red siren", "angry birds 2", "election year knockout", "rocket league sideswipe", "sugar game", "that level again", "adventure beaks", "dino bash", "forest island", "hidden journey", "mad bullets", "diablo immortal", "clash royale", "legends of runeterra", "teamfight tactics", "clash of clans"
]


$(".leftBar1").html(`
<a href="https://androidshark.com"><div class="myButton t10 homeBtn"><img src="https://androidshark.com/img/icons/houseHome.png"></div></a> 
<i class="fa fa-search sss" style="position: relative; color: grey; visibility: hidden; z-index: 5; left: 0; top: 57px;"></i> 
<input type="text" class="fname-mobile" name="fname" placeholder="Search...">
`)

function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	}
	// Directly return the joined string
	return splitStr.join(' '); 
 }


turnOn2 = 0
$(document).on("click", ".link-22", function(){
   $(".purpleRating8").text("Epic 9+")
   $(".purpleRating8").css("width", "90px")
   $(".purpleGames").prepend(`<div style="color: grey;
    font-size: 11px;
    color: #789;
    font-family: Open Sans, sans-serif;
    margin-top: -2px;
    margin-left: 2px;
    margin-bottom: 5px;">Excellently Polished:</div>`)
   
   $(".greenRating8").text("Good 7+")
   $(".greenRating8").css("width", "90px")
   
   $(".greenGames").prepend(`<div style="color: grey;
    font-size: 11px;
    color: #789;
    font-family: Open Sans, sans-serif;
    margin-top: -2px;
    margin-left: 2px;
    margin-bottom: 5px;">Worth Playing:</div>`)
   
   $(".redRating8").text("Avg ≤ 6")
   $(".redRating8").css("width", "90px")
   $(".redGames").prepend(`<div style="color: grey;
    font-size: 11px;
    color: #789;
    font-family: Open Sans, sans-serif;
    margin-top: -2px;
    margin-left: 2px;
    margin-bottom: 5px;">Frustrating / Uninspired:</div>`)
  
   
  if(turnOn2 == 0){
     $("html").css("overflow-y", "hidden")
     turnOn2 = 1
  }
  
  console.log("ALERTTT")
    $(".menuGameBoxes").hover(function () {
      $(this).find("img").css("transform", "scale(1.05)")
    console.log("YO1111")
    theImg ="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62862e4ac81b7f141c19e118_radius-block.png"
    $(this).append('<div class="leBorder" style="position: absolute; top: -7px; left: -5px; width: 101px;"> <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62862e4ac81b7f141c19e118_radius-block.png"> </div>');
  }, 
  function () {
      	$(this).find("img").css("transform", "scale(1.00)")
		$(".leBorder").css("display", "none")
		$(".leBorder").remove();
  });
 
  })

// $(document).on("click", "#closeGenre999", function(){
//     turnOn == 0
//     turnOn2 = 0
//  	$(".pcgenregames").css("display", "none")
//     $("html").css("overflow-y", "auto")
// })

reset = 0
newList = games
$("input.fname-mobile[type='text']").on('input', function () {
    texty = $(this).val()
	texty = texty.replace(/\s+/g, '-') 
    texty = texty.toLowerCase();
    reset = reset + 1
    $("#removeHeading").css("visibility", "hidden")
    $("#theSearchPlace").css("visibility", "hidden")

    $(".dropdownsearch").css("display", "block")
    if (reset >= 1) {
        $(".dropdownsearch").html("")
        reset = 0
        
    }

    $(".mobileTabs").css("display", "none")
    $(".btnBorders").css("border-left", "4px solid #282b30")
    $(".mobileDropDown").css("display", "none")
    $('html').css('overflow-y', 'visible');
	if(turnOn2 == 1) {
		$('html').css('overflow-y', 'hidden');
	} else {
		$('html').css('overflow-y', 'visible');
	}


    if (texty.length < 1) {
        $(".dropdownsearch").css("display", "none")
        $("#removeHeading").css("visibility", "visible")
        $("#theSearchPlace").css("visibility", "visible")
		if(turnOn2 == 0) {
			$('html').css('overflow-y', 'visible');
		} else {
			$('html').css('overflow-y', 'hidden');
		}
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
						gameName = "<a href=https://androidshark.com/review/" + taz + ">" + titleCase(games[i]) + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} else {
					   gameName = "<a href=https://androidshark.com/review/" + taz + ">" + titleCase(games[i]) + "</a>" + "<BR><BR>"
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
						gameName = "<a href=https://androidshark.com/review/" + taz + ">" + titleCase(games[i]) + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} else {
					   gameName = "<a href=https://androidshark.com/review/" + taz + ">" + titleCase(games[i]) + "</a>" + "<BR><BR>"
						$(".dropdownsearch").append(gameName)
					} 
					
                }
            }

        }
    }
});



// countdownT
// var countDownDate2 = new Date("July 04, 2022 12:30:00").getTime();

// // Update the count down every 1 second
// var x2 = setInterval(function () {

//     // Get today's date and time
//     var now2 = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance2 = countDownDate2 - now2;

//     // Time calculations for days, hours, minutes and seconds
//     var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
//     var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     dayzzz2 = "days"
//     if (days2 == 1) {
//         dayzzz2 = "day"
//     } else if (days2 == 0) {
//         dayzzz2 = ""
//         days2 = ""
//     }


// 		try {
//       // if (days2 == 0) {
//       //   document.getElementById("demo2").innerHTML = + hours2 + "h "
//       //       + minutes2 + "m " + seconds2 + "s";

//       //   // document.getElementById("mobileTimer2").innerHTML = + hours2 + "h "
//       //   //   + minutes2 + "m " + seconds2 + "s";
//       // } else {
//       //   document.getElementById("demo2").innerHTML = + days2 + '<div class="hz1">' + dayzzz2 + '</div>' + " " + hours2 + '<div class="hz2">HOURS</div>' +  
//       //       + minutes2 + '<div class="hz3">MINUTES</div>' + seconds2 + '<div class="hz4">SECONDS</div>';

//      
//         $("#dayzzz").text(days2)
//         $("#hourzzz").text(hours2)
// 	 	$("#minzzz").text(minutes2)
// 	 	$("#seczzz").text(seconds2)
//       
//       
//       
//       

//       //console.log(distance2)
//       // If the count down is over, write some text 
//       if (distance2 < 0) {
//         clearInterval(x2);
//         document.getElementById("demo2").innerHTML = "<div style='visibility:visible;'>Standby...</div>";
//         // document.getElementById("mobileTimer2").innerHTML = "<div style='visibility:hidden;'>aa</div>";

//       }
//     } catch(err) {
//       console.log("")
//     }

//     
//     
//     
//     
//     
// 		try {
//       if (days2 == 0) {
//         document.getElementById("demo3").innerHTML = + hours2 + "h "
//           + minutes2 + "m " + seconds2 + "s";

//         // document.getElementById("mobileTimer2").innerHTML = + hours2 + "h "
//         //   + minutes2 + "m " + seconds2 + "s";
//       } else {
//         document.getElementById("demo3").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
//           + minutes2 + "m " + seconds2 + "s";

//         // document.getElementById("mobileTimer2").innerHTML = + days2 + dayzzz2 + " " + hours2 + "h "
//         //   + minutes2 + "m " + seconds2 + "s";
//       }

//       //console.log(distance2)
//       // If the count down is over, write some text 
//       if (distance2 < 0) {
//         clearInterval(x2);
//         document.getElementById("demo3").innerHTML = "<div style='visibility:visible;'>Standby...</div>";
//         // document.getElementById("mobileTimer2").innerHTML = "<div style='visibility:hidden;'>aa</div>";

//       } 

//     }catch(err) {
//       console.log("")
//     }
// }, 1000);





function countdownTimeStart(){

var countDownDate = new Date("July 20, 2022 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 255)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = hours + "h "
    // + minutes + "m " + seconds + "s ";
    

	$("#hourzzz").text(hours)
	$("#minzzz").text(minutes)
	$("#sec1").text(seconds)
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        try {
		  $(".div-block-261").text("Standby...")
		}
		catch(err) {
		  console.log("e1")
		}

    }
}, 1000);
}

countdownTimeStart()
//############################################
// Class Genre
//############################################
  class addGame {
    constructor(aLink, img, name, mini) {
      this.aLink = aLink;
      this.img = img;
      this.name = name;
      this.mini = mini;
    }
  }
  baseLinkReview = "https://androidshark.com/review/"
  baseLinkImg = "https://uploads-ssl.webflow.com/"
  
  
  	puzzle1a = new addGame(baseLinkReview+"cube-escape-paradox", baseLinkImg+"6262a56df551ed5332d9048e/62838ce5f8e3335adae62d16_cube-escape-paradox-icon.jpg", "Cube Escape Paradox", "Detective")


	puzzle4a = new addGame(baseLinkReview+"hocus", baseLinkImg+"6262a56df551ed5332d9048e/62838d8699bfd3613f07d7d1_hocus-icon.jpg", "Hocus", "Puzzle")
	puzzle5a = new addGame(baseLinkReview+"hyperforma", baseLinkImg+"6262a56df551ed5332d9048e/6267ca1d69d7b47502281625_hyperforma-icon.png", "Hyperforma", "Puzzle")

	puzzle7a = new addGame(baseLinkReview+"not-not", baseLinkImg+"6262a56df551ed5332d9048e/62838f1d977bb3ecf7efcc55_not-not-icon.jpg", "Not Not", "Puzzle")
	puzzle8a = new addGame(baseLinkReview+"quell", baseLinkImg+"6262a56df551ed5332d9048e/62839013aef9692ddfbb5502_quell.jpg", "Quell", "Puzzle")
	
	// PUZZLE TOP 7
	puzzle1b = new addGame(baseLinkReview+"cut-the-rope-2", baseLinkImg+"6262a56df551ed5332d9048e/6283904b34852655fb4c3e6d_cut-the-rope-2-icon.jpg", "Cut the Rope 2", "Puzzle")
	puzzle2b = new addGame(baseLinkReview+"find-a-way", baseLinkImg+"6262a56df551ed5332d9048e/628390d6536a00d669106ee5_find-a-way-icon.jpg", "Find a Way", "Puzzle")

	
	// PUZZLE TOP 6
	puzzle1c = new addGame(baseLinkReview+"block-puzzle", baseLinkImg+"6262a56df551ed5332d9048e/6283913e436cde172c1b8c10_block-puzzle-icon.jpg", "Block Puzzle", "Puzzle")
  
	//################################################################
	// CASUAL TOP 8
	//################################################################

	casual2a = new addGame(baseLinkReview+"bee-brilliant", baseLinkImg+"6262a56df551ed5332d9048e/628266d23da26d3ce1eac273_bee-brilliant-icon.jpg", "Bee Brilliant", "Match 3")
	casual4a = new addGame(baseLinkReview+"mousebusters", baseLinkImg+"6262a56df551ed5332d9048e/627d39a58fdb8888d02ab807_mousebusters-icon.jpg", "Mousebusters", "Short Story")

	casual6a = new addGame(baseLinkReview+"pinball-deluxe-reloaded", baseLinkImg+"6262a56df551ed5332d9048e/62826ee9e660e3d51ee093ee_pinball-deluxe-reloaded-icon.jpg", "Pinball Deluxe Reloaded","")
	puzzle2a = new addGame(baseLinkReview+"fishdom", baseLinkImg+"6262a56df551ed5332d9048e/62838d237d0cb74d4f310518_fishdom-icon.jpg", "Fishdom", "Match 3")

	// CASUAL TOP 7
	casual1b = new addGame(baseLinkReview+"ancient-bricks", baseLinkImg+"6262a56df551ed5332d9048e/62751ddcef962458ae10ebe7_ancient-bricks-icon.jpg", "Ancient Bricks", "Brick Breaker")
	casual2b = new addGame(baseLinkReview+"candy-crush-soda-saga", baseLinkImg+"6262a56df551ed5332d9048e/62826f5540bdbd76e8c9d9fb_candy-crush-soda-saga-icon.jpg", "Candy Crush Soda Saga", "Match 3")
	casual3b = new addGame(baseLinkReview+"okay", baseLinkImg+"6262a56df551ed5332d9048e/62826f8036c579cd92b39aa8_okay-icon.jpg", "Okay", "Puzzle", "")
	casual4b = new addGame(baseLinkReview+"plank", baseLinkImg+"6262a56df551ed5332d9048e/62826f9e0031d3872de6c14a_plank-icon.jpg", "Plank!", "")
	casual5b = new addGame(baseLinkReview+"snake-arena", baseLinkImg+"6262a56df551ed5332d9048e/62826fb5ca4d6970be5e9d70_snake-arena-icon.jpg", "Snake Arena", "")
	casual6b = new addGame(baseLinkReview+"subway-surfers", baseLinkImg+"6262a56df551ed5332d9048e/62826fcf8cd3e4d6a602fe56_subway-surfers-icon.jpg", "Subway Surfers", "Runner")
	casual7b = new addGame(baseLinkReview+"temple-run-2", baseLinkImg+"6262a56df551ed5332d9048e/62826ffebeebff4863a6940b_temple-run-2-icon.jpg", "Temple Run 2", "Runner")
	casual8b = new addGame(baseLinkReview+"walk-master", baseLinkImg+"6262a56df551ed5332d9048e/62827013ec9b21307b0c84d1_walk-master-icon.jpg", "Walk Master", "Physics")
	casual9b = new addGame(baseLinkReview+"sugar-game", baseLinkImg+"6262a56df551ed5332d9048e/62ac35b3deacb468440aee44_sugar-icon.jpg", "Sugar Game", "Puzzle")
	casual10b = new addGame(baseLinkReview+"that-level-again", baseLinkImg+"6262a56df551ed5332d9048e/62ac388d6eeb43efdb003c17_that-level-again-icon.jpg", "That Level Again", "Puzzle")
	casual12b = new addGame(baseLinkReview+"mars-mars", baseLinkImg+"6262a56df551ed5332d9048e/62d18d13c791e3037dde1996_mars_icon.png", "Mars Mars", "")
	
	// CASUAL TOP 6
	casual1c = new addGame(baseLinkReview+"angry-birds-2", baseLinkImg+"6262a56df551ed5332d9048e/62751ddb8e918f05816bd828_angry-birds-2-icon.jpg", "Angry Birds 2", "Physics")
	casual2c = new addGame(baseLinkReview+"snowman-story", baseLinkImg+"6262a56df551ed5332d9048e/6282705467562c7de8c710db_snowman-story-icon.jpg", "Snowman Story", "Short Story")
	casual3c = new addGame(baseLinkReview+"tsuki-adventure", baseLinkImg+"6262a56df551ed5332d9048e/6282706cc2bb1eb7adf3838c_tsuki-adventure-icon.jpg", "Tsuki Adventure", "Idle")
		casual4c = new addGame(baseLinkReview+"hidden-journey", baseLinkImg+"6262a56df551ed5332d9048e/62ac467810a24fe35bed5e4e_hidden-journey-icon.jpg", "Hidden Journey", "Puzzle")
			casual5c = new addGame(baseLinkReview+"mad-bullets", baseLinkImg+"6262a56df551ed5332d9048e/62ac4b6f254d0b1c0270d6fd_mad-bullets-icon.jpg", "Mad Bullets", "Shooter")


	// ADDING TO CASUAL ARRAY
	casualTop8 = [casual4a, puzzle7a, puzzle8a]
	casualTop7 = [casual12b, casual10b, casual9b, casual2a, casual1b, casual6a, casual2b, puzzle2a, casual3b, casual4b, casual5b, casual6b, casual7b, casual8b, puzzle1a, puzzle4a, puzzle1b, puzzle2b]
	casualTop6 = [casual5c, casual4c, casual1c, casual2c, casual3c, puzzle1c]
	
	var pathname99 = window.location.pathname;
	// All casual games
	allCasualGames = ["/review/mousebusters", "/review/not-not", "/review/quell"]
  	


	//################################################################
	// ACTION TOP 8
	//################################################################
	action1a = new addGame(baseLinkReview+"altos-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62751dd579f96081482e1d83_altos-icon.jpg", "Altos Adventure", "Runner")
	action2a = new addGame(baseLinkReview+"among-us", baseLinkImg+"6262a56df551ed5332d9048e/62751ddaf2602e65d605c7eb_among-us-icon.jpg", "Among Us", "Social")
	action3a = new addGame(baseLinkReview+"archero", baseLinkImg+"6262a56df551ed5332d9048e/628270e6b18b7d83064dfbf0_archero-icon.jpg", "Archero", "Dungeon Crawler")
	action4a = new addGame(baseLinkReview+"bowmasters", baseLinkImg+"6262a56df551ed5332d9048e/6282710308cf60f9b368ce43_bowmasters-icon.jpg", "Bowmasters", "Physics")
		puzzle3a = new addGame(baseLinkReview+"flaming-core", baseLinkImg+"6262a56df551ed5332d9048e/62838d3bf081dea20362c327_flaming-core-icon.jpg", "Flaming Core", "")
			casual5a = new addGame(baseLinkReview+"orbia", baseLinkImg+"6262a56df551ed5332d9048e/62826d03beebffbca0a683b8_orbia-icon.jpg", "Orbia", "")
		

	action7a = new addGame(baseLinkReview+"endurance", baseLinkImg+"6262a56df551ed5332d9048e/628271329a967729bc7b83bf_endurance-icon.jpg", "Endurance", "Top-Down")
	action8a = new addGame(baseLinkReview+"grimvalor", baseLinkImg+"6262a56df551ed5332d9048e/6282758aaf33b4e30eacda6b_grim-valor-icon.jpg", "Grimvalor", "Hack/Slash")
	action9a = new addGame(baseLinkReview+"johnny-trigger", baseLinkImg+"6262a56df551ed5332d9048e/628275acca4d6948975ec9b3_johnny-trigger-icon.jpg", "Johnny Trigger", "Rail Shooter")
	action10a = new addGame(baseLinkReview+"robot-destroyer-red-siren", baseLinkImg+"6262a56df551ed5332d9048e/62827a2fbeadf904433aaed8_robot-destroyer-icon.jpg", "Robot Destroyer Red Siren", "Side-Scrolling")
	action11a = new addGame(baseLinkReview+"shadow-hunter-lost-world", baseLinkImg+"6262a56df551ed5332d9048e/62827a7d6ef765a60bbacd16_shadow-hunter-icon.jpg", "Shadow Hunter Lost World", "Hack/Slash")
	action12a = new addGame(baseLinkReview+"sky-force-reloaded", baseLinkImg+"6262a56df551ed5332d9048e/62827add67562c85b0c75205_sky-force-reloaded-icon.jpg", "Sky Force Reloaded", "")
	action13a = new addGame(baseLinkReview+"space-marshals-2", baseLinkImg+"6262a56df551ed5332d9048e/62827b97b18b7d56544e4f3b_space-marshals-2-icon.jpg", "Space Marshals 2", "Tactical")
	//action14a = new addGame(baseLinkReview+"swamp-attack", baseLinkImg+"swamp-attack-icon.jpg", "Swamp Attack")
	action15a = new addGame(baseLinkReview+"tank-battle-heroes", baseLinkImg+"6262a56df551ed5332d9048e/62827c083fa4d076eca30d76_tank-battle-heroes-icon.jpg", "Tank Battle Heroes", "")

	action17a = new addGame(baseLinkReview+"badland", baseLinkImg+"6262a56df551ed5332d9048e/62827c8329c884b819e8d2c0_badland-icon.jpg", "Badland", "Side-Scrolling")
	action18a = new addGame(baseLinkReview+"brawlhalla", baseLinkImg+"6262a56df551ed5332d9048e/6280fc7249d8f3f9fea9a520_brawlhalla-icon.jpg", "Brawlhalla", "")

	// ACTION TOP 7
	action1b = new addGame(baseLinkReview+"air-attack-2", baseLinkImg+"6262a56df551ed5332d9048e/62751dd1fcd2a7300716c2e7_air-attack-2-icon.jpg", "Air Attack 2", "Shmup")
	//action2b = new addGame(baseLinkReview+"banana-kong", baseLinkImg+"banana-kong-icon.jpg", "Banana Kong")

	action4b = new addGame(baseLinkReview+"lara-croft-relic-run", baseLinkImg+"6262a56df551ed5332d9048e/62827dad9b8456c3e03a642e_lara-icon.jpg", "Lara Croft Relic Run", "Runner")
	action5b = new addGame(baseLinkReview+"magic-survival", baseLinkImg+"6262a56df551ed5332d9048e/62827e109b09ef78011fdd90_magic-survival-icon.jpg", "Magic Survival", "Shmup")


	action8b = new addGame(baseLinkReview+"sea-invaders", baseLinkImg+"6262a56df551ed5332d9048e/62827e98964b595799e383c3_sea-invaders-icon.jpg", "Sea Invaders", "")
	action9b = new addGame(baseLinkReview+"ski-safari-2", baseLinkImg+"6262a56df551ed5332d9048e/62827eda6fa522e5ffdb385a_ski-safari-2-icon.jpg", "Ski Safari 2", "Runner")

	action11b = new addGame(baseLinkReview+"xenowerk", baseLinkImg+"6262a56df551ed5332d9048e/62827f485ad7580f4aad5817_xenowerk-icon.jpg", "Xenowerk", "Top-Down")

	// ACTION TOP 6
		puzzle2c = new addGame(baseLinkReview+"gunspell-2", baseLinkImg+"6262a56df551ed5332d9048e/6283918557e13d851b1edba5_gunspell2-icon.jpg", "Gunspell 2", "Match 3")
	action1c = new addGame(baseLinkReview+"1945-air-force", baseLinkImg+"6262a56df551ed5332d9048e/62751dcf528a36b6dfea999c_1945-icon.jpg", "1945 Air Force", "")
	action2c = new addGame(baseLinkReview+"air-attack", baseLinkImg+"6262a56df551ed5332d9048e/62751dda343133c02f466f0e_air-attack-icon.jpg", "Air Attack", "")
	action3c = new addGame(baseLinkReview+"lightning-duru", baseLinkImg+"6262a56df551ed5332d9048e/6282822e9d08b52c15ea873f_lightduru-icon.jpg", "Lightning Duru", "Shmup")
	action4c = new addGame(baseLinkReview+"metal-soldiers-2", baseLinkImg+"6262a56df551ed5332d9048e/6282826ca403efb20c87b450_metal-icon.jpg", "Metal Soldiers 2", "Side-Scrolling")
	action5c = new addGame(baseLinkReview+"rail-rush", baseLinkImg+"6262a56df551ed5332d9048e/6282828de3c51ae7621c1330_rail-rush-icon.jpg", "Rail Rush", "Runner")
	//action6c = new addGame(baseLinkReview+"skiing-yeti-mountain", baseLinkImg+"skiing-yeti-mountain-icon.jpg", "Skiing Yeti Mountain")
	action7c = new addGame(baseLinkReview+"transmute-galaxy-battle", baseLinkImg+"6262a56df551ed5332d9048e/628283243fa4d08577a33ee9_transmute-galaxy-battle-icon.jpg", "Transmute Galaxy Battle", "")

	// ADDING TO ACTION ARRAY
	actionTop8 = [casual5a, action3a, action8a]

	actionTop7 = [action9a, action11a, action17a, action12a, action13a, action10a, action1a, action7a, puzzle3a, action2a, action4a, action1b, action4b, action5b, action8b, action9b, action11b, action15a]

	actionTop6 = [action1c, action2c, action3c, action4c, action5c, action7c, puzzle2c]

	//################################################################
	// FIGHTING TOP 8
	//################################################################
	fight1a = new addGame(baseLinkReview+"bloody-bastards", baseLinkImg+"6262a56df551ed5332d9048e/627d3a2e8fdb881f032ab99d_bloody-bastards-icon.jpg", "Bloody Bastards", "Physics")
	fight2a = new addGame(baseLinkReview+"power-rangers-legacy-wars", baseLinkImg+"6262a56df551ed5332d9048e/628283780e573c02bfa4593b_power-rangers-icon.jpg", "Power Rangers Legacy Wars", "")
	fight3a = new addGame(baseLinkReview+"shadow-fight-arena", baseLinkImg+"6262a56df551ed5332d9048e/62828398b18b7d210d4ec8f9_shadow-fight-arena-icon.jpg", "Shadow Fight Arena", "")
	fight4a = new addGame(baseLinkReview+"skullgirls", baseLinkImg+"6262a56df551ed5332d9048e/628283c036c579d5e9b40bf2_skullgirls-icon.jpg", "Skullgirls", "")
		action5a = new addGame(baseLinkReview+"brawlhalla", baseLinkImg+"6262a56df551ed5332d9048e/6280fc7249d8f3f9fea9a520_brawlhalla-icon.jpg", "Brawlhalla", "")

	// FIGHTING TOP 7
			fight3c = new addGame(baseLinkReview+"the-king-of-fighters-allstar", baseLinkImg+"6262a56df551ed5332d9048e/62a0d00e953266d1c9edb7b0_fight-icon.jpg", "The King of Fighters Allstar", "")

	// FIGHTING TOP 6
	fight1c = new addGame(baseLinkReview+"kung-fu-fight-arena", baseLinkImg+"6262a56df551ed5332d9048e/628283e3964b592197e3c43b_kung-fu-fight-arena-icon.jpg", "Kung Fu Fight Arena", "")
	fight2c = new addGame(baseLinkReview+"megabots-battle-arena", baseLinkImg+"6262a56df551ed5332d9048e/628283fea542c7e3988c6314_megabots-battle-arena-icon.jpg", "Megabots Battle Arena", "")

	fight4c = new addGame(baseLinkReview+"street-fighter-iv-champion-edition", baseLinkImg+"6262a56df551ed5332d9048e/62a0d32a031ddb10e0d1e1c9_street-fighter-icon.jpg", "Street Fighter IV Champion Edition", "")

	// ADDING TO ACTION ARRAY
	fightTop8 = [action5a]
	fightTop7 = [fight3c, fight1a, fight2a, fight3a, fight4a]
	fightTop6 = [fight1c, fight2c, fight4c]



	//################################################################
	// ADVENTURE TOP 8       3D
	//################################################################
	adventure1a = new addGame(baseLinkReview+"alien-isolation", baseLinkImg+"6262a56df551ed5332d9048e/62751dda085d1721590269bb_alien-isolation-icon.jpg", "Alien Isolation", "")
	
		simulation4a = new addGame(baseLinkReview+"life-is-strange", baseLinkImg+"6262a56df551ed5332d9048e/6283ae90b912beaff0f4bc7f_life-is-strange-icon.jpg", "Life is Strange", "Story")

	adventure2a = new addGame(baseLinkReview+"call-of-duty-mobile", baseLinkImg+"6262a56df551ed5332d9048e/6282844da403ef624b87db94_call-of-duty-mobile-icon.jpg", "Call Of Duty Mobile", "PVP FPS")
	adventure6a = new addGame(baseLinkReview+"roblox", baseLinkImg+"6262a56df551ed5332d9048e/6282847c4cd02402b7464eac_roblox-icon.jpg", "Roblox", "Sandbox")

	adventure8a = new addGame(baseLinkReview+"the-frostrune", baseLinkImg+"6262a56df551ed5332d9048e/628284a14cd0247d3f464f1b_the-frostrune-icon.jpg", "The Frostrune", "Adventure")
	
	adventure1b = new addGame(baseLinkReview+"pubg-mobile", baseLinkImg+"6262a56df551ed5332d9048e/6274d17a0487d30f2ea38c32_pubg-icon.jpg", "Pubg Mobile", "Battle Royale")
	
	action16a = new addGame(baseLinkReview+"the-walking-zombie-2", baseLinkImg+"6262a56df551ed5332d9048e/62827c439b63e6e406ed5b42_the-walking-zombie-2-icon.jpg", "The Walking Zombie 2", "")
	
	//################################################################
	//   3D 7
	//################################################################
	
		action3b = new addGame(baseLinkReview+"jurassic-monster-world", baseLinkImg+"6262a56df551ed5332d9048e/62827d61c5982f625619907e_jurassic-monster-world-icon.jpg", "Jurassic Monster World", "PVP FPS")
			action7b = new addGame(baseLinkReview+"payback-2", baseLinkImg+"6262a56df551ed5332d9048e/62827e66ec9b211d150cec1a_payback-2-icon.jpg", "Payback 2", "")
				action10b = new addGame(baseLinkReview+"sky-fighters-3d", baseLinkImg+"6262a56df551ed5332d9048e/62827f27ad54fa03ed44bef8_sky-fighters-icon.jpg", "Sky Fighters 3D", "")

	// ADVENTURE TOP 6
	adventure1c = new addGame(baseLinkReview+"death-park-2", baseLinkImg+"6262a56df551ed5332d9048e/628284dea542c782ba8c6baa_death-park-2-icon.jpg", "Death Park 2", "")
	adventure2c = new addGame(baseLinkReview+"scary-horror-2", baseLinkImg+"6262a56df551ed5332d9048e/62828508008abe300ba585e0_scary-horror-2-icon.jpg", "Scary Horror 2", "")
		adventure3c = new addGame(baseLinkReview+"mech-arena-robot-showdown", baseLinkImg+"6262a56df551ed5332d9048e/62a71e45ab11dad9d4efdc8c_mech-arena-icon.jpg", "Mech Arena", "PVP")


	// ADDING TO ADVENTURE ARRAY
	adventureTop8 = [adventure1a]
	adventureTop7 = [simulation4a, action16a, adventure8a, adventure6a, adventure2a, adventure1b, action3b, action7b, action10b]
	adventureTop6 = [adventure1c, adventure2c, adventure3c]


	//################################################################
	// RPG TOP 8
	//################################################################
	rpg1a = new addGame(baseLinkReview+"botworld-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62828625b18b7d701d4ee0d5_botworld-icon.jpg", "Botworld Adventure", "Openworld")
	rpg2a = new addGame(baseLinkReview+"cardinal-quest-2", baseLinkImg+"6262a56df551ed5332d9048e/628286489a96770c8b7c30a1_cardinal-icon.jpg", "Cardinal Quest 2", "Roguelike")
	rpg3a = new addGame(baseLinkReview+"day-r-survival", baseLinkImg+"6262a56df551ed5332d9048e/6282866976ab3d2c6f2111e7_day-r-survival-icon.jpg", "Day R Survival", "Survival")
	rpg4a = new addGame(baseLinkReview+"eternium", baseLinkImg+"6262a56df551ed5332d9048e/62651dbc45767b4516533e65_eternium-icon.jpg", "Eternium", "Hack/Slash")
	rpg5a = new addGame(baseLinkReview+"guardian-tales", baseLinkImg+"6262a56df551ed5332d9048e/628286bf97d4ec21f8429556_guardian-tales-icon.jpg", "Guardian Tales", "Jrpg")
	rpg6a = new addGame(baseLinkReview+"moonshades", baseLinkImg+"6262a56df551ed5332d9048e/627d3bee7922144c5878b34a_moonshades-icon.jpg", "Moonshades", "Dungeon Crawler")
	rpg7a = new addGame(baseLinkReview+"onebit-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62828710e3c51a845b1c32c3_onebit-adventure-icon.jpg", "Onebit Adventure", "Roguelike")
	rpg8a = new addGame(baseLinkReview+"sky-children-of-the-light", baseLinkImg+"6262a56df551ed5332d9048e/6282877329c88434b4e924fd_sky-icon.jpg", "Sky Children of the Light", "Social Adventure")
	rpg9a = new addGame(baseLinkReview+"genshin-impact", baseLinkImg+"6262a56df551ed5332d9048e/628287a1ec9b21a1220d3cee_genshin-impact-icon.jpg", "Genshin Impact", "Open World")
		rpg10a = new addGame(baseLinkReview+"another-eden", baseLinkImg+"6262a56df551ed5332d9048e/62a36d9f912e909dbb3e9ecc_another-eden-icon.jpg", "Another Eden", "JRPG")

	// RPG TOP 7
	rpg1b = new addGame(baseLinkReview+"constellation-eleven", baseLinkImg+"6262a56df551ed5332d9048e/628287c49d78f502b379d7da_constellation-eleven-icon.jpg", "Constellation Eleven", "2D Space")
	rpg2b = new addGame(baseLinkReview+"legend-of-solgard", baseLinkImg+"6262a56df551ed5332d9048e/628287eba542c7c7e18c8d31_legend-of-solgard-icon.jpg", "Legend of Solgard", "Match 3")
	rpg3b = new addGame(baseLinkReview+"the-witchs-isle", baseLinkImg+"6262a56df551ed5332d9048e/6282880cc2447d72c3b798e7_the-witch-icon.jpg", "The Witchs Isle", "Short Story")
	rpg4b = new addGame(baseLinkReview+"vampires-fall-origins", baseLinkImg+"6262a56df551ed5332d9048e/6282882a30f3f3392158244e_vampire-fall-icon.jpg", "Vampires Fall Origins", "")
		rpg5b = new addGame(baseLinkReview+"life-in-adventure", baseLinkImg+"6262a56df551ed5332d9048e/62a734b573ae176b95cce54c_life-in-adventure-icon.jpg", "Life in Adventure", "Text Adventure")

	// RPG TOP 6
	rpg1c = new addGame(baseLinkReview+"age-of-magic", baseLinkImg+"6262a56df551ed5332d9048e/62751dd38e918f6fe46bd816_age-of-magic-icon.jpg", "Age of Magic", "Turn-Based")
	rpg2c = new addGame(baseLinkReview+"raid-shadow-legends", baseLinkImg+"6262a56df551ed5332d9048e/62828881f19d97e7f9bf2209_raid-shadow-legends-icon.jpg", "Raid Shadow Legends", "Gacha")
		rpg3c = new addGame(baseLinkReview+"lost-in-blue", baseLinkImg+"6262a56df551ed5332d9048e/62a72bccfc80c596090081a7_lost-in-blue-icon.jpg", "Lost in Blue", "Survival")
		rpg4c = new addGame(baseLinkReview+"diablo-immortal", baseLinkImg+"6262a56df551ed5332d9048e/62b01c9db91b81e68fb04c68_diablo-immortal-icon.jpg", "Diablo Immortal", "ARPG")


	// ADDING TO RPG ARRAY
	rpgTop8 = [rpg4a, rpg5a, rpg8a, rpg10a]
	rpgTop7 = [rpg5b, rpg9a, rpg7a, rpg6a, rpg3a, rpg2a, rpg1a, rpg1b, rpg2b, rpg3b, rpg4b]
	rpgTop6 = [rpg2c, rpg4c, rpg3c,rpg1c, rpg2c]

	//################################################################
	// PLATFORM TOP 8
	//################################################################
	platform1a = new addGame(baseLinkReview+"fancy-pants-adventures", baseLinkImg+"6262a56df551ed5332d9048e/628288f99a967748b47c4b60_fancy-icon.jpg", "Fancy Pants Adventures", "")
	platform2a = new addGame(baseLinkReview+"hello-yogurt", baseLinkImg+"6262a56df551ed5332d9048e/6282891cad54fadc3b44f980_hello-yogurt-icon.jpg", "Hello Yogurt", "")
	platform3a = new addGame(baseLinkReview+"nihilumbra", baseLinkImg+"6262a56df551ed5332d9048e/628125441c9a9c774dd7725e_saleIcon.jpg", "Nihilumbra", "")
	platform4a = new addGame(baseLinkReview+"oddmar", baseLinkImg+"6262a56df551ed5332d9048e/6280fb4c25b65e9dbffd436b_oddmar-icon.jpg", "Oddmar", "Adventure")
	platform5a = new addGame(baseLinkReview+"super-cat-tales-2", baseLinkImg+"6262a56df551ed5332d9048e/628289c919b77991038311b5_super-cat-tales-2.jpg", "Super Cat Tales 2", "")
	platform6a = new addGame(baseLinkReview+"sword-of-xolan", baseLinkImg+"6262a56df551ed5332d9048e/6267cbf884517a580566cb41_sword-of-xolan-icon.jpg", "Sword of Xolan", "")
	platform7a = new addGame(baseLinkReview+"swordigo", baseLinkImg+"6262a56df551ed5332d9048e/62828ab47c430853d973006f_sword-icon.jpg", "Swordigo", "")
	platform8a = new addGame(baseLinkReview+"forgotton-anne", baseLinkImg+"6262a56df551ed5332d9048e/6265439956a98b7409e0ea96_forgotten-anne-icon.jpg", "Forgotton Anne", "Adventure")
	platform9a = new addGame(baseLinkReview+"space-expedition", baseLinkImg+"6262a56df551ed5332d9048e/62828b496078b72db84a142c_space-expedition-icon.jpg", "Space Expedition", "")

	// PLATFORM TOP 7
	//platform1b = new addGame(baseLinkReview+"blackmoor-2", baseLinkImg+"blackmoor2-icon.jpg", "blackmoor-2", "multi")
	platform2b = new addGame(baseLinkReview+"cats-are-liquid", baseLinkImg+"6262a56df551ed5332d9048e/62828ba644fcfb78ecb493e8_cats-are-liquid-icon.jpg", "Cats are Liquid", "")
	platform3b = new addGame(baseLinkReview+"fin-ancient-mystery", baseLinkImg+"6262a56df551ed5332d9048e/627d4d065b3d5d6f76b55a35_gg.jpg", "Fin Ancient Mystery", "")
	platform4b = new addGame(baseLinkReview+"g-switch-3", baseLinkImg+"6262a56df551ed5332d9048e/62828c7f08eb9426729922e6_g-icon.jpg", "G Switch 3", "")
	platform5b = new addGame(baseLinkReview+"geometry-dash-subzero", baseLinkImg+"6262a56df551ed5332d9048e/62828cd77cbd4371675ef0cd_geo-icon.jpg", "Geometry Dash Subzero", "")
	platform6b = new addGame(baseLinkReview+"snail-bob-3", baseLinkImg+"6262a56df551ed5332d9048e/62828d6755ea9933d6a4eb29_snail-bob3-icon.jpg", "Snail Bob 3", "")

	// PLATFORM TOP 6
	platform1c = new addGame(baseLinkReview+"adventure-beaks", baseLinkImg+"6262a56df551ed5332d9048e/62828ddf3bf647c41d72dc2e_beak-icon.jpg", "adventure-beaks", "")
	platform2c = new addGame(baseLinkReview+"apple-knight", baseLinkImg+"6262a56df551ed5332d9048e/628389003aea71ccea7674fa_apple-knight-icon.jpg", "Apple Knight", "")
	platform3c = new addGame(baseLinkReview+"grumpy-dwarf", baseLinkImg+"6262a56df551ed5332d9048e/62751dcecf197f1046a06e54_a1.jpg", "Grumpy Dwarf", "")
	platform4c = new addGame(baseLinkReview+"leps-world-3", baseLinkImg+"6262a56df551ed5332d9048e/6283896757e13d40631e9c1d_leps-icon.jpg", "Leps World 3", "")
	platform5c = new addGame(baseLinkReview+"mortal-crusade", baseLinkImg+"6262a56df551ed5332d9048e/628389a5f081de80fe62a8ce_mortal-crusade-icon.jpg", "Mortal Crusade", "")
	platform6c = new addGame(baseLinkReview+"snow-bros-classic", baseLinkImg+"6262a56df551ed5332d9048e/628389ebaef9690cefbb1df6_snow-bros-classic-icon.jpg", "Snow Bros Classic", "")
	platform7c = new addGame(baseLinkReview+"adventure-beaks", baseLinkImg+"626305d92309c16f65ff1358/627009511a16bb54442ea79d_a1.jpg", "Adventure Beaks", "")

	// ADDING TO PLATFORM ARRAY
	platformTop8 = [platform3a, platform4a, platform6a, platform8a]
	platformTop7 = [platform9a, platform5a, platform2a, platform1a, platform2b, platform3b, platform4b, platform6b]
	platformTop6 = [platform7c, platform2c, platform3c, platform4c, platform5c, platform6c]


	//################################################################
	// STRATEGY TOP 8
	//################################################################
	strategy1a = new addGame(baseLinkReview+"art-of-war-3-global-conflict", baseLinkImg+"6262a56df551ed5332d9048e/62838a2db431864eb562e5cc_art-of-war-3-icon.jpg", "Art of War 3", "")
	strategy2a = new addGame(baseLinkReview+"battle-of-polytopia", baseLinkImg+"6262a56df551ed5332d9048e/62838a8d536a00be771042a7_battle-of-polytopia-icon.jpg", "Battle of Polytopia", "Turn-Based")
	//strategy3a = new addGame(baseLinkReview+"castle-crush", baseLinkImg+"6262a56df551ed5332d9048e/62838aab436cdeb7901b56e6_castle-crush-icon.jpg", "Castle Crush", "multi")
	strategy4a = new addGame(baseLinkReview+"exploding-kittens", baseLinkImg+"6262a56df551ed5332d9048e/627d335b114425d7fd4cf180_exploding-kittens-icon.jpg", "Exploding Kittens", "Card")
		strategy5a = new addGame(baseLinkReview+"mobile-legends-bang-bang", baseLinkImg+"6262a56df551ed5332d9048e/62a1cf7541f23090182601da_bang-bang-icon.jpg", "Mobile Legends Bang Bang", "MOBA")
				strategy7a = new addGame(baseLinkReview+"teamfight-tactics", baseLinkImg+"6262a56df551ed5332d9048e/62b1f3cc41a2f6be7040fb59_tft-icon.jpg", "Teamfight Tactics", "Auto Chess")
		
  
	// STRATEGY TOP 7
	strategy1b = new addGame(baseLinkReview+"pirates-showdown", baseLinkImg+"6262a56df551ed5332d9048e/62838b5b3485262c634c1bcb_pirates-showdown-icon.jpg", "Pirates Showdown", "")
	strategy2b = new addGame(baseLinkReview+"plant-the-world", baseLinkImg+"6262a56df551ed5332d9048e/62838c523cc4dc558a8a41bb_plant-the-world-icon.jpg", "Plant the World", "GPS")
	strategy3b = new addGame(baseLinkReview+"stick-war-legacy", baseLinkImg+"6262a56df551ed5332d9048e/62838c692f3b9a2f50c1ce02_stick-war-legacy-icon.jpg", "Stick War Legacy", "")
		strategy6a = new addGame(baseLinkReview+"clash-royale", baseLinkImg+"6262a56df551ed5332d9048e/62b1f0af5a99937082d82692_cIcon.jpg", "Clash Royale", "")
			strategy7b = new addGame(baseLinkReview+"legends-of-runeterra", baseLinkImg+"6262a56df551ed5332d9048e/62b1f19c41eb248f7b838023_runeIcon.jpg", "Legends of Runeterra", "Card Battler")
	
	// STRATEGY TOP 6
	strategy1c = new addGame(baseLinkReview+"forge-of-empires", baseLinkImg+"6262a56df551ed5332d9048e/627d3ab9dff929a68ccebc18_forge-of-empires-icon.jpg", "forge-of-empires", "City Building")
	strategy2c = new addGame(baseLinkReview+"great-conqueror", baseLinkImg+"6262a56df551ed5332d9048e/62838cc964d42c33c9c6da3c_great-conqueror-icon.jpg", "Great Conqueror", "")
		simulation3c = new addGame(baseLinkReview+"godzilla-defense-force", baseLinkImg+"6262a56df551ed5332d9048e/6283bc85114918d0c14e5935_godzilla-defense-force-icon.jpg", "Godzilla Defense Force", "")
	strat4 = new addGame(baseLinkReview+"mushroom-wars-2", baseLinkImg+"6262a56df551ed5332d9048e/62a1c875d46b16946c9a6517_mushroom2-icon.jpg", "Mushroom Wars 2", "")
	strat5 = new addGame(baseLinkReview+"rts-siege-up", baseLinkImg+"6262a56df551ed5332d9048e/62a38478b8538f24c62df6d7_rts-siege-up-icon.jpg", "RTS Siege Up", "")
		strat6 = new addGame(baseLinkReview+"uniwar", baseLinkImg+"6262a56df551ed5332d9048e/62a38f6ff0806a6b350880d5_uniwar-icon.jpg", "Uniwar", "Turn-Based")
	strat7 = new addGame(baseLinkReview+"galaxy-reavers", baseLinkImg+"6262a56df551ed5332d9048e/62a397fd9d05b6d0f88b3171_galaxy-reavers-icon.jpg", "Galaxy Reavers", "")
		strat8 = new addGame(baseLinkReview+"dino-bash", baseLinkImg+"6262a56df551ed5332d9048e/62ac40767da4f8d6422abf08_dino-bash-icon.jpg", "Dino Bash", "")
			strat9 = new addGame(baseLinkReview+"clash-of-clans", baseLinkImg+"6262a56df551ed5332d9048e/62b1f62f1c42bf546492a2f0_clansIcon.jpg", "Clash of Clans", "")
	
	// ADDING TO STRATEGY ARRAY
	strategyTop8 = [strategy7a, strategy5a, strategy1a, strategy2a]
	strategyTop7 = [strategy7b, strategy6a, strategy4a, strategy1b, strategy2b, strategy3b]
	strategyTop6 = [strat9, strat8, strat7, strat6, strat4, strategy1c, strategy2c, simulation3c]
	
	
	//################################################################
	// PUZZLE TOP 8
	//################################################################
	puzzle1a = new addGame(baseLinkReview+"cube-escape-paradox", baseLinkImg+"6262a56df551ed5332d9048e/62838ce5f8e3335adae62d16_cube-escape-paradox-icon.jpg", "Cube Escape Paradox", "Detective")


	puzzle4a = new addGame(baseLinkReview+"hocus", baseLinkImg+"6262a56df551ed5332d9048e/62838d8699bfd3613f07d7d1_hocus-icon.jpg", "Hocus", "")
	puzzle5a = new addGame(baseLinkReview+"hyperforma", baseLinkImg+"6262a56df551ed5332d9048e/6267ca1d69d7b47502281625_hyperforma-icon.png", "Hyperforma", "")

	puzzle7a = new addGame(baseLinkReview+"not-not", baseLinkImg+"6262a56df551ed5332d9048e/62838f1d977bb3ecf7efcc55_not-not-icon.jpg", "Not Not", "")
	puzzle8a = new addGame(baseLinkReview+"quell", baseLinkImg+"6262a56df551ed5332d9048e/62839013aef9692ddfbb5502_quell.jpg", "Quell", "")
	
	// PUZZLE TOP 7
	puzzle1b = new addGame(baseLinkReview+"cut-the-rope-2", baseLinkImg+"6262a56df551ed5332d9048e/6283904b34852655fb4c3e6d_cut-the-rope-2-icon.jpg", "Cut the Rope 2", "")
	puzzle2b = new addGame(baseLinkReview+"find-a-way", baseLinkImg+"6262a56df551ed5332d9048e/628390d6536a00d669106ee5_find-a-way-icon.jpg", "Find a Way", "")

	
	// PUZZLE TOP 6
	puzzle1c = new addGame(baseLinkReview+"block-puzzle", baseLinkImg+"6262a56df551ed5332d9048e/6283913e436cde172c1b8c10_block-puzzle-icon.jpg", "Block Puzzle", "")


	// ADDING TO PUZZLE ARRAY
	puzzleTop8 = [puzzle7a, puzzle8a]
	puzzleTop7 = [puzzle1a, puzzle4a, puzzle1b, puzzle2b]
	puzzleTop6 = [puzzle1c]
	
	
	//################################################################
	// RACING TOP 8
	//################################################################
	racing1a = new addGame(baseLinkReview+"asphalt-9-legends", baseLinkImg+"6262a56df551ed5332d9048e/628391bd8bbce39fa56aba2f_asphalt-9-legends.jpg", "Asphalt 9 Legends", "")
	racing2a = new addGame(baseLinkReview+"cosmic-challenge-racing", baseLinkImg+"6262a56df551ed5332d9048e/6283920600792f94572224a9_cosmic-icon.jpg", "Cosmic Challenge Racing", "")
	racing3a = new addGame(baseLinkReview+"hellrider-3", baseLinkImg+"6262a56df551ed5332d9048e/6283922c3aea71573576d1ea_hellrider3.jpg", "Hellrider 3", "")
	racing4a = new addGame(baseLinkReview+"hill-climb-racing-2", baseLinkImg+"6262a56df551ed5332d9048e/6283924e64d42c63bbc707ee_hill-climb-racing-2.jpg", "Hill Climb Racing 2", "")
	racing5a = new addGame(baseLinkReview+"horizon-chase-world-tour", baseLinkImg+"6262a56df551ed5332d9048e/628392822f3b9ab1afc1f84b_horizon.jpg", "Horizon Chase World Tour", "")
	racing6a = new addGame(baseLinkReview+"moto-x3m-bike-race-game", baseLinkImg+"6262a56df551ed5332d9048e/628392ab0e893c5a3d8ebda8_moto.jpg", "Moto x3m Bike", "")
	racing7a = new addGame(baseLinkReview+"real-racing-3", baseLinkImg+"6262a56df551ed5332d9048e/62839343f06d201947e8a8ba_realracing3.jpg", "Real Racing 3", "")

	
	// RACING TOP 7
	racing1b = new addGame(baseLinkReview+"earn-2-die", baseLinkImg+"6262a56df551ed5332d9048e/6283935e8bbce3baff6abf02_earn2-die-icon.jpg", "Earn 2 Die", "")
	racing2b = new addGame(baseLinkReview+"mrbean-special-delivery", baseLinkImg+"6262a56df551ed5332d9048e/62839398378ef56b25be871c_mrbeanicon.jpg", "Mrbean Special Delivery", "")
	racing3b = new addGame(baseLinkReview+"rival-gears-racing", baseLinkImg+"6262a56df551ed5332d9048e/628393bae5cc597969f9da01_rival.jpg", "Rival Gears Racing", "")
	racing4b = new addGame(baseLinkReview+"traffic-racer", baseLinkImg+"6262a56df551ed5332d9048e/628393d9536a007e86108122_trafficRacer.jpg", "Traffic Racer", "")
	
	// RACING TOP 6
	racing1c = new addGame(baseLinkReview+"32-secs", baseLinkImg+"6262a56df551ed5332d9048e/62751dcda5258880acb790e9_32-secs-icon.jpg", "32 Secs", "")
	racing2c = new addGame(baseLinkReview+"carx-highway-racing", baseLinkImg+"6262a56df551ed5332d9048e/628394137e9764ffbc168259_carx.jpg", "CarX Highway Racing", "")
	racing3c = new addGame(baseLinkReview+"demolition-derby-3", baseLinkImg+"6262a56df551ed5332d9048e/6283942d0e893c79048ec6d3_demo-icon.jpg", "Demolition Derby 3", "")
	racing4c = new addGame(baseLinkReview+"hot-wheels-race-off", baseLinkImg+"6262a56df551ed5332d9048e/6283945364d42cd22bc71d90_hot-wheels.jpg", "Hot Wheels Race Off", "")	
	racing5c = new addGame(baseLinkReview+"smashy-road-wanted-2", baseLinkImg+"6262a56df551ed5332d9048e/6283946cdfdba3e6dd28e38b_smashy.jpg", "Smashy Road Wanted 2", "")
	racing6c = new addGame(baseLinkReview+"top-fuel-hot-rod", baseLinkImg+"6262a56df551ed5332d9048e/6283948a378ef590eabe92ad_topfuel.jpg", "Top Fuel Hot Rod", "")
	
	// ADDING TO racing ARRAY
	racingTop8 = [racing5a, racing7a]
	racingTop7 = [racing6a, racing1a, racing2a, racing3a, racing4a, racing1b, racing2b, racing3b, racing4b]
	racingTop6 = [racing1c, racing2c, racing3c, racing4c, racing5c, racing6c]
	
	
	
	//################################################################
	// SIMULATION TOP 8
	//################################################################
	simulation1a = new addGame(baseLinkReview+"cooking-fever", baseLinkImg+"6262a56df551ed5332d9048e/628394ad27cc99f1647ac765_cooking-fever-icon.jpg", "Cooking Fever", "Cooking")
	simulation2a = new addGame(baseLinkReview+"good-pizza-great-pizza", baseLinkImg+"6262a56df551ed5332d9048e/628394c93aea7120be76e6f8_good-pizza-great-pizza-icon.jpg", "Good Pizza Great Pizza", "Cooking")
	simulation3a = new addGame(baseLinkReview+"stardew-valley", baseLinkImg+"6262a56df551ed5332d9048e/6283979cabd6226c66aa6369_stardew-valley.jpg", "Stardew Valley", "Farming RPG")
		simulation5a = new addGame(baseLinkReview+"plague-inc", baseLinkImg+"6262a56df551ed5332d9048e/62a1daf4200dbf322cfa327d_plague-inc-icon.jpg", "Plague Inc", "")

	
	// SIMULATION TOP 7
	//simulation1b = new addGame(baseLinkReview+"gardenscapes", baseLinkImg+"6262a56df551ed5332d9048e/6283aea7d28fe17715cf9aab_garden-icon.jpg", "Gardenscapes")
	simulation2b = new addGame(baseLinkReview+"me-is-king", baseLinkImg+"6262a56df551ed5332d9048e/6283bbd7d7eb2d5d6c0cbc11_me-is-king-icon.jpg", "Me is King", "Management")
	simulation3b = new addGame(baseLinkReview+"simcity-buildit", baseLinkImg+"6262a56df551ed5332d9048e/6283bc1824aa899503b87766_simcity-buildit-icon.jpg", "Simcity Buildit", "City Building")
	simulation4b = new addGame(baseLinkReview+"spongebob-krusty-cook-off", baseLinkImg+"6262a56df551ed5332d9048e/6283bc313470f333cad2e001_spongebob-icon.jpg", "Spongebob Krusty Cook Off", "Cooking")
	
	// SIMULATION TOP 6
	simulation1c = new addGame(baseLinkReview+"city-island-5", baseLinkImg+"6262a56df551ed5332d9048e/6283bc5225d9757523939e80_city-island-5.jpg", "City Island 5", "City Building")
	simulation2c = new addGame(baseLinkReview+"dragon-mania-legends", baseLinkImg+"6262a56df551ed5332d9048e/6283bc6a22b836199233258c_dragon-mania-legends-icon.jpg", "Dragon Mania Legends", "Trainer")

	simulation4c = new addGame(baseLinkReview+"prison-empire-tycoon", baseLinkImg+"6262a56df551ed5332d9048e/62810bf97ec5796e5343a48f_prison-empire-tycoon-icon.jpg", "Prison Empire Tycoon", "Management")	
		simulation5c = new addGame(baseLinkReview+"forest-island", baseLinkImg+"6262a56df551ed5332d9048e/62ac43fa7da4f8b3f42ad2a7_forest-island-icon.jpg", "Forest Island", "Idle")	

	
	// ADDING TO simulation ARRAY
	simulationTop8 = [simulation2a, simulation3a]
	simulationTop7 = [simulation5a, simulation1a, simulation2b, simulation3b, simulation4b]
	simulationTop6 = [simulation5c, simulation1c, simulation2c, simulation4c]
	
	
	
	//################################################################
	// SPORTS TOP 8
	//################################################################
	sports4a = new addGame(baseLinkReview+"world-of-tennis-roaring-20s", baseLinkImg+"6262a56df551ed5332d9048e/6283bd2c0675a5f4cf3c2413_world-of-tennis-roaring-20s-icon.jpg", "World of Tennis", "")
	
	// SPORTS TOP 7
		sports1a = new addGame(baseLinkReview+"baseball-9", baseLinkImg+"6262a56df551ed5332d9048e/6283bcc77cd6ba9b10af1b39_baseball-9.jpg", "Baseball 9", "")
	sports2a = new addGame(baseLinkReview+"election-year-knockout", baseLinkImg+"6262a56df551ed5332d9048e/6283bce3a975a16257ab9af7_election-year-knockout-icon.jpg", "Election Year Knockout", "")
	sports3a = new addGame(baseLinkReview+"square-fists-boxing", baseLinkImg+"6262a56df551ed5332d9048e/6283bd0ee40fd03ffb3e05f1_square-fists-boxing-icon.jpg", "Square Fists Boxing", "")

	sports1b = new addGame(baseLinkReview+"basketball-battle", baseLinkImg+"6262a56df551ed5332d9048e/6283bd493dc4c62ea623dffb_basketball-battle-icon.jpg", "Basketball Battle", "")
	sports2b = new addGame(baseLinkReview+"flip-diving", baseLinkImg+"6262a56df551ed5332d9048e/6283bd683dc4c6643523e030_flip-diving-icon.jpg", "Flip Diving", "")
	sports3b = new addGame(baseLinkReview+"nba-2k", baseLinkImg+"6262a56df551ed5332d9048e/6283bd940aac182cc7389eb3_nba2k-icon.jpg", "NBA 2K", "")
	sports4b = new addGame(baseLinkReview+"pba-bowling-challenge", baseLinkImg+"6262a56df551ed5332d9048e/6283bdb2d1fb8c58ea7ec947_pba-icon.jpg", "PBA Bowling Challenge", "")
		sports5b = new addGame(baseLinkReview+"rocket-league-sideswipe", baseLinkImg+"6262a56df551ed5332d9048e/62a777572efbd40a312d06c5_rocket-league-sideswipe-icon.jpg", "Rocket League Sideswipe", "Cars")
	
	// SPORTS TOP 6
	sports1c = new addGame(baseLinkReview+"ea-sports-ufc", baseLinkImg+"6262a56df551ed5332d9048e/6283bdd524aa8985f4b8817a_ea-sports-ufc.jpg", "EA Sports UFC", "")
	sports2c = new addGame(baseLinkReview+"golf-king-world-tour", baseLinkImg+"6262a56df551ed5332d9048e/6283bdf1738920593ed15a7d_golf-king-world-tour-icon.jpg", "Golf King World Tour", "")
	sports3c = new addGame(baseLinkReview+"hockey-all-stars", baseLinkImg+"6262a56df551ed5332d9048e/6283be1d226ac70cf5a4507d_hockey-all-stars-icon.jpg", "Hockey All Stars", "")
	sports4c = new addGame(baseLinkReview+"real-boxing-2", baseLinkImg+"6262a56df551ed5332d9048e/6283be3d0675a521533c27a3_real-boxing-2.jpg", "Real Boxing 2", "")	

	
	// ADDING TO sports ARRAY
	sportsTop8 = [sports4a]
	sportsTop7 = [sports5b, sports1a, sports2a, sports3a, sports1b, sports2b, sports3b, sports4b]
	sportsTop6 = [sports1c, sports2c, sports3c, sports4c]
	
	
	
	//################################################################
	// td TOP 8
	//################################################################
	td1a = new addGame(baseLinkReview+"ancient-planet-tower-defense", baseLinkImg+"6262a56df551ed5332d9048e/62652222a9da5b9f522c7e20_ancient-planet-tower-defense-icon.jpg", "Ancient Planet", "")
	td2a = new addGame(baseLinkReview+"bloons-td-6", baseLinkImg+"6262a56df551ed5332d9048e/627d4dc51442f66a54182e10_bloons-td6-icon.jpg", "Bloons TD 6", "")
	td3a = new addGame(baseLinkReview+"infinitode-2", baseLinkImg+"6262a56df551ed5332d9048e/6283bea37cd6ba3f51af203c_infinitode-2-icon.jpg", "Infinitode 2", "")
	td4a = new addGame(baseLinkReview+"kingdom-rush", baseLinkImg+"6262a56df551ed5332d9048e/6283bf271fab6d840192fdd5_kingdom-rush-icon.jpg", "Kingdom Rush", "")
	
	// td TOP 7
	td1b = new addGame(baseLinkReview+"mega-tower", baseLinkImg+"6262a56df551ed5332d9048e/6283bf62e70b1bfe6eec0366_mega-tower-icon.jpg", "Mega Tower", "")
		td2b = new addGame(baseLinkReview+"mini-td-2", baseLinkImg+"6262a56df551ed5332d9048e/62a1eb3ae3f2840855ffea42_mini-td-2-icon.jpg", "Mini TD 2", "")

	// td TOP 6
	td1c = new addGame(baseLinkReview+"module-td", baseLinkImg+"6262a56df551ed5332d9048e/6283bf851d2ab2848411aaf6_module-td-icon.jpg", "Module TD", "")
	td2c = new addGame(baseLinkReview+"rooster-defense", baseLinkImg+"6262a56df551ed5332d9048e/6283bff63470f36176d2fa79_rooster-icon.jpg", "Rooster Defense", "")

	td4c = new addGame(baseLinkReview+"wild-castle-td", baseLinkImg+"6262a56df551ed5332d9048e/6283c04f3e9081d10deb3660_wild-castle-td-icon.jpg", "Wild Castle TD", "")	
	td5c = new addGame(baseLinkReview+"defense-legend-4", baseLinkImg+"6262a56df551ed5332d9048e/62a1f1b33f68611e09293efa_defense-legend-4-icon.jpg", "Defense Legend 4", "")	
	td6c = new addGame(baseLinkReview+"naval-storm", baseLinkImg+"6262a56df551ed5332d9048e/62a37f2d705cced3df04b544_naval-storm-icon.jpg", "Naval Storm", "")	
	
	
	
	
	// ADDING TO td ARRAY
	tdTop8 = [td4a, td1a, td2a]
	tdTop7 = [td2b, td1b, td3a]
	tdTop6 = [td5c, td1c, td2c, td4c, td6c]
	
	
  // ADDING ALL MOBILE GAMES
  function addGamesAll(theGameName) {   
    // TOP 8 LOOP
    try {
    	 theGameName8 = theGameName + "Top8"
    	$(eval(theGameName8)).each(function(index, value) {
      $(".purpleGames").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink} style="position:relative; z-index:5">
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">
      ${value.name}
     <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
      </div>
        </div>
      `)
    });
    } catch (e) {
      $("#purpleBlock777").css("display", "none")
    }
   

    try{
     // TOP 7 LOOP
      theGameName7 = theGameName + "Top7"
    $(eval(theGameName7)).each(function(index, value) {
    	$(".greenGames").append(`
        <div class="menuGameBoxes">
        <a href=${value.aLink}  style="position:relative; z-index:5">
        <div><img src=${value.img} loading="lazy"></div>
          </a>
        <div class="menuGamesBoxP">
        ${value.name}
       <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
        </div>
          </div>
        `)
            });
    } catch (e) {
      $("#greenBlock777").css("display", "none")
    }
   

    // TOP 6 LOOP
    try{
        theGameName6 = theGameName + "Top6"
        $(eval(theGameName6)).each(function(index, value) {
		$(".redGames").append(`
      <div class="menuGameBoxes">
      <a href=${value.aLink}  style="position:relative; z-index:5">
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">
      ${value.name}
     <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
      </div>
        </div>
      `)
              });


          
    } catch (e) {
     $("#redBlock777").css("display", "none")
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
      <a href=${value.aLink}  style="position:relative; z-index:5">
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">
      ${value.name}
      <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
      </div>
      
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
        <a href=${value.aLink}  style="position:relative; z-index:5">
        <div><img src=${value.img} loading="lazy"></div>
          </a>
        <div class="menuGamesBoxP">
        ${value.name}
       <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
        </div>
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
      <div class="menuGameBoxes" >
      <a href=${value.aLink}  style="position:relative; z-index:5">
      <div><img src=${value.img} loading="lazy"></div>
        </a>
      <div class="menuGamesBoxP">
      ${value.name}
   	 <div class="menuGamesBoxP" style="color:grey;">${value.mini}</div>
      </div>
        </div>
      `)
              });


          
    } catch (e) {
     $("#top-66-part-mobile").css("display", "none")
    }
    
  }

//############################################
// COMPLETE DROP DOWN FOR GENRE GAMES
//############################################
mobileRemoveDropDown = 0 //div-block-305
function showGames(genre, thisb){
	//   $(".allarticles").css("display", "none")
	//   $(".all-top-8-games").html("")
	//   $(".all-top-7-games").html("")
	//   $(".all-top-6-games").html("")
	//   $("#top-8-part-mobile").css("display", "block")
	//   $("#top-7-part-mobile").css("display", "block")
	//   $("#top-6-part-mobile").css("display", "block")
	//   addGamesAll(genre)
	//   $("#all-pop-up-genre").css("display", "block")
		
		console.log("SHOW MOBILE")
		$(".ratingblock").html("")
		mobileTop8 = `
			<div class="purpleBlock777" style="width: 100%;
			text-align: left;
			align-items: left;">

				<div class="purpleRating8" style="width: 165px;
				border-radius: 5px;
				background-color: #7300ff;
				color: #fff;
				font-size: 13px;
				position: relative;
				text-align: center;
				font-family: 'Lato';">Excellently Polished</div>
	
				<div class="purpleGames" style="margin-top: 10px;
				margin-bottom: 20px; display:inline-block;"></div>
			</div>
		`
	
		mobileTop7 = `
			<div class="greenBlock777" style="width: 100%;
			text-align: left;
			align-items: left;">

				<div class="greenRating8" style="width: 165px;
				border-radius: 5px;
				background-color: #03d303;
				color: #fff;
				font-size: 13px;
				position: relative;
				text-align: center;
				font-family: 'Lato';">Worth Playing</div>
	
				<div class="greenGames" style="margin-top: 10px;
				margin-bottom: 20px; display:inline-block;"></div>
			</div>
		`
	
		mobileTop6 = `
			<div class="redBlock777" style="width: 100%;
			text-align: left;
			align-items: left;">
	

				<div class="redRating8" style="width: 165px;
				border-radius: 5px;
				background-color: red;
				color: #fff;
				font-size: 13px;
				position: relative;
				text-align: center;
				font-family: 'Lato';">Average</div>
	
				<div class="redGames" style="margin-top: 10px;
				margin-bottom: 20px; display:inline-block;"></div>
			</div>
		`

		if(mobileRemoveDropDown == 0){
			$(".pcgenregames").css("display", "block")
			$(".dropdowngames").css("display", "block")
			$(".ratingblock").append(mobileTop8 + mobileTop7 + mobileTop6)
			addGamesAll(genre)

			aa = $(thisb).attr("class").split(/\s+/);
			console.log("AAAAAAAAA>>>>>>>>>", aa)

			if($.inArray("pcdropdown", aa) != -1) {
				console.log("PC DROP DOWN HERE DONT REMOVE STUFF")
				mobileRemoveDropDown = 0
			} else {
				mobileRemoveDropDown = 1
			}


			if($(".dropdowngames").css("display") == "block"){
				$("html").css("overflow-y", "hidden")
			}
			
		} else {
				console.log("MBOILE CLEAR")
				$(".pcgenregames").css("display", "none")
				$(".dropdowngames").css("display", "none")
				mobileRemoveDropDown = 0
				if($(".dropdowngames").css("display") == "none"){
					$("html").css("overflow-y", "visible")
				}
			}
		
		
			// alert("ZZZZ")

		}
	
	

$(document).on("click", "#closeGenre999", function(){
console.log("MBOILE CLEAR")
$(".pcgenregames").css("display", "none")
$(".dropdowngames").css("display", "none")
mobileRemoveDropDown = 0
if($(".dropdowngames").css("display") == "none"){
	$("html").css("overflow-y", "visible")
}
})

$(document).on("click", "#closeGenre", function(){
	$(".all-top-8-games").html("")
	$(".all-top-7-games").html("")
	$(".all-top-6-games").html("")
	$("#top-8-part-mobile").css("display", "none")
	$("#top-7-part-mobile").css("display", "none")
	$("#top-6-part-mobile").css("display", "none")
	$("#all-pop-up-genre").css("display", "none")
	$(".allarticles").css("display", "block")
})


$(".menuGameBoxes").hover(function () {
    console.log("YO1111")
    theImg ="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62862e4ac81b7f141c19e118_radius-block.png"
    $(this).append('<div class="leBorder" style="position: relative; top: -137px; left: -5px; width: 101px;"> <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62862e4ac81b7f141c19e118_radius-block.png"> </div>');
  }, 
  function () {
    $(".leBorder").css("display", "none")
    $(".leBorder").remove();
  });
  

function addIntro(theGamez) {
    console.log(">>>", theGamez)
    if(theGamez == "casual"){
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626645080215f64486126e72_heartz.png'>")
        $(".introheading11").text("Casual Mobile Games")
        $(".desc11").text('Casual mobile games may exhibit any type of gameplay and genre. They generally involve simpler rules, shorter sessions, and require less learned skills.')
    } else if(theGamez == "action") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62851721d0a8a863e94d7fc5_arcade-icon.png'>")
        $(".introheading11").text("Arcade Mobile Games")
        $(".desc11").text('Arcade mobile games usually have short play times, consistent challenges, and simple gameplay. They’re marked by their increase in challenge as the game progresses.')
    }  else if(theGamez == "fight") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62650721b3a08869d8179c1c_fight-icon.png'>")
        $(".introheading11").text("Fighting Mobile Games")
        $(".desc11").text('Mobile fighting games involve combat between two players. The mechanics are blocking, grappling, counter-attacking, and chaining attacks together into "combos."')
    } else if(theGamez == "adventure") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626930b737318c91a195f813_jetz.png'>")
        $(".introheading11").text("3D Mobile Games")
        $(".desc11").text('Mobile 3D games allow gamers to experience something more realistic and immersive.')
    } else if(theGamez == "rpg") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1f73a0717a7a85a3adca_kata.png'>")
        $(".introheading11").text("Rpg Mobile Games")
        $(".desc11").text("Mobile RPG's are games in which players assume the roles of characters in a fantasy setting. Players take responsibility for acting out these roles within a narrative.")
    } else if(theGamez == "platform") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e305c0d4999dfbec8969b_runz.png'>")
        $(".introheading11").text("Platform Mobile Games")
        $(".desc11").text("Mobile Platform games are characterized by their level design and suspended platforms of varying height that requires jumping and climbing to reach their goal.")
    } else if(theGamez == "strategy") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626befbe4e71056035ef16ee_chessPiece.png'>")
        $(".introheading11").text("Strategy Mobile Games")
        $(".desc11").text("Mobile strategy games are games in which the player's decision-making skills have a high significance in determining the outcome.")
    } else if(theGamez == "racing") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e2688748494997974a171_bikeHelm.png'>")
        $(".introheading11").text("Racing Mobile Games")
        $(".desc11").text("Mobile racing games are games in which the player participates in a racing competition. Featuring realistic racing simulations and more arcade-style racing games.")
    } else if(theGamez == "simulation") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1b89910685ad1125e7f4_ccc.png'>")
        $(".introheading11").text("Simulation Mobile Games")
        $(".desc11").text("Mobile simulation games are generally designed to closely simulate real-world activities. Examples include restaurant management and city building.")
    } else if(theGamez == "sports") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62961502468200faa019aef0_football.png'>")
        $(".introheading11").text(theGamez + " Mobile Games")
        $(".desc11").text("Mobile sports games emphasize actually playing the sport, whilst others emphasize strategy and sport management.")
    } else if(theGamez == "td") {
        $(".introimg11").html("<img src='https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bb96ff4cf29757b4c17c4_towerD.png'>")
        $(".introheading11").text("Tower Defense Mobile Games")
        $(".desc11").text("Tower defense games where the goal is to defend a player's territory by obstructing the enemy attackers or by stopping enemies from reaching the exits.")
    }
    
}

//############################################
// Open Mobile Menu Genre
//############################################
$(document).on("click", ".casuallink", function(){
	showGames("casual", this)
    addIntro("casual")
})

$(document).on("click", ".actionlink", function(){
	showGames("action", this)
    addIntro("action")
})

$(document).on("click", ".fightlink", function(){
	showGames("fight", this)
    addIntro("fight")
})

$(document).on("click", ".adventurelink", function(){
	showGames("adventure", this)
    addIntro("adventure")
})

$(document).on("click", ".rpglink", function(){
	showGames("rpg", this)
    addIntro("rpg")
    
})

$(document).on("click", ".platformlink", function(){
	showGames("platform", this)
    addIntro("platform")
})

$(document).on("click", ".strategylink", function(){
	showGames("strategy", this)
    addIntro("strategy")
})

$(document).on("click", ".puzzlelink", function(){
	showGames("puzzle", this)
    addIntro("puzzle")
})

$(document).on("click", ".racinglink", function(){
	showGames("racing", this)
    addIntro("racing")
})

$(document).on("click", ".simulationlink", function(){
	showGames("simulation", this)
    addIntro("simulation")
})

$(document).on("click", ".sportslink", function(){
	showGames("sports", this)
    addIntro("sports")
})
$(document).on("click", ".tdlink", function(){
	showGames("td", this)
    addIntro("td")
})


//############################################
// Get URL
//############################################
var pathname = window.location.pathname;

if(pathname == "/mobile/casual-games") {
		addGamesAllPC("casual")
		totalAction = casualTop8.length + casualTop7.length + casualTop6.length
		$("#totalAction").text(totalAction)
		$("#cLink").addClass("blueUnder")
		$("#cLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/arcade-games") {
		addGamesAllPC("action")
		totalAction = actionTop8.length + actionTop7.length + actionTop6.length
		$("#totalAction").text(totalAction)
		$("#aLink").addClass("blueUnder")
		$("#aLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/fighting-games") {
		addGamesAllPC("fight")
		totalAction = fightTop8.length + fightTop7.length  + fightTop6.length
		$("#totalAction").text(totalAction)
		$("#fLink").addClass("blueUnder")
		$("#fLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/3d-games") {
		addGamesAllPC("adventure")
		totalAction =  adventureTop8.length + adventureTop7.length + adventureTop6.length
		$("#totalAction").text(totalAction)
		$("#dLink").addClass("blueUnder")
		$("#dLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/rpg-games") {
		addGamesAllPC("rpg")
		totalAction = rpgTop8.length + rpgTop7.length + rpgTop6.length
		$("#totalAction").text(totalAction)
		$("#rLink").addClass("blueUnder")
		$("#rLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/platform-games") {
		addGamesAllPC("platform")
		totalAction = platformTop8.length + platformTop7.length + platformTop6.length
		$("#totalAction").text(totalAction)
		$("#pLink").addClass("blueUnder")
		$("#pLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/strategy-games") {
		addGamesAllPC("strategy")
		totalAction = strategyTop8.length + strategyTop7.length + strategyTop6.length
		$("#totalAction").text(totalAction)
		$("#sLink").addClass("blueUnder")
		$("#sLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/puzzle-games") {
		addGamesAllPC("puzzle")
		totalAction = puzzleTop8.length + puzzleTop7.length + puzzleTop6.length
		$("#totalAction").text(totalAction)
		$("#ppLink").addClass("blueUnder")
		$("#ppLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/racing-games") {
		addGamesAllPC("racing")
		totalAction = racingTop8.length + racingTop7.length + racingTop6.length
		$("#totalAction").text(totalAction)
		$("#rrLink").addClass("blueUnder")
		$("#rrLink").removeClass("hover-underline-animation")
} else if (pathname == "/mobile/simulation-games") {
		addGamesAllPC("simulation")
		totalAction = simulationTop8.length + simulationTop7.length + simulationTop6.length
		$("#totalAction").text(totalAction)
		$("#ssLink").addClass("blueUnder")
		$("#ssLink").removeClass("hover-underline-animation")
}  else if (pathname == "/mobile/sports-games") {
		addGamesAllPC("sports")
		totalAction = sportsTop8.length + sportsTop7.length + sportsTop6.length
		$("#totalAction").text(totalAction)
		$("#sssLink").addClass("blueUnder")
		$("#sssLink").removeClass("hover-underline-animation")
}  else if (pathname == "/mobile/tower-defense-games") {
		addGamesAllPC("td")
		totalAction = tdTop8.length + tdTop7.length + tdTop6.length
		$("#totalAction").text(totalAction)
		$("#tLink").addClass("blueUnder")
		$("#tLink").removeClass("hover-underline-animation")
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
$(document).on("click", "#randomGame2", function () {
	
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
      <a href=${value.aLink}  style="position:relative; z-index:5">
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
        <a href=${value.aLink}  style="position:relative; z-index:5">
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
      <a href=${value.aLink}  style="position:relative; z-index:5">
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
  

//###########################################
// Mobile drop down news items
//###########################################
class Newz {
  constructor(name, img, blueBlock, datt, desc, linkz) {
    this.name = name;
   	this.img = img;
   	this.blueBlock = blueBlock;
   	this.datt = datt;
 	this.desc = desc;
 	this.linkz = linkz;
  }
}

n1 = new Newz(
"Clash Royale Beginners Guide", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6299f0b9914a3b1479693d56_clash-splash-p-500.jpeg", 
"Guide",
"June 23, 2022", 
"Supercell’s Clash Royale is one of the most popular strategic battle card games in the mobile gaming market. It’s known to be a hybrid between Supercell’s Clash of Clans and Blizzard’s Hearthstone, bringing the best of both worlds to a single platform.", 
"https://www.androidshark.com/article/clash-royale-beginners-guide-and-strategies"
)

n2 = new Newz(
"MU Archangel includes a new Class Change System called 'Angel Incarnate.'", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6293b3c4e86583f5adb1fcf2_image-p-500.jpeg", 
"News", 
"May 23, 2022", 
"Angel Incarnate is a new Class Change System that lets players who reach Master Lv. 700 after the 10th Class Change to complete the new Angel's Ordeal quest and get Angel Power as well as Angel Equipment. Character EXP will be turned into Holy Power, which may be utilized to enhance the Angel Incarnate Tier.", 
"https://www.androidshark.com/news/mu-archangel-angel-incarnate"
)

n3 = new Newz(
"Android Games with Controller Support", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d21df258a7a0be8c0518b_gg-p-500.png", 
"Article", 
"April 20, 2022", 
"The best Android games with controller support in 2022 · Dead Cells · Brawlhalla · STAR WARS: KOTOR II · Sky: Children of the Light · Terraria · Call of Duty: Mobile.", 
"https://www.androidshark.com/article/android-games-with-controller-support"
)

n4 = new Newz(
"Top 10 mobile games", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d2f98b939a789c91b588a_gg.jpg", 
"Article", 
"February 15, 2022", 
"Check out the most popular mobile games of all.", 
"https://www.androidshark.com/article/top-10-most-popular-mobile-games"
)

n5 = new Newz(
"The Ultimate Guide to Developing a Mobile Game", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d2f3d2b1b776b90093f9c_gg.jpg", 
"Article", 
"January 25, 2022", 
"Developing a mobile game is a long but ultimately rewarding process. Not only will you gain a lot of skills that you can use to start a career in game development, but also you can leave your mark on a vast and widespread space. Whether you're looking to get started as a fresh mobile indie game dev or curious about the process involved, our ultimate guide to developing a mobile game will give you the best possible start.", 
"https://www.androidshark.com/article/the-ultimate-guide-to-developing-a-mobile-game"
)

n6 = new Newz(
"The Rise of Mobile Esports Everything You Need To Know", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d27a71ad1ef1c86693da4_gg.jpg", 
"Article", 
"January 22, 2022", 
"Esports is one of the biggest entertainment markets on the planet. More and more gamers from across the world are playing competitive video games and watching them. When we consider how mobile gaming has carved out a humongous slice of the pie, it stands to reason that mobile esports are just as significant. But how big? And how did this all come about? For that, we need to start at the very beginning.best possible start.", 
"https://www.androidshark.com/article/the-rise-of-mobile-esports-everything-you-need-to-know"
)

n7 = new Newz(
"Pros and Cons of Mobile Gaming", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d250c258a7a464ec06d4e_gg.jpg", 
"Article", 
"January 17, 2022", 
"Portable gaming has been a thing since the late 80s. The popularity of Nintendo's Game Boy was undeniable and there's very little doubt as to why. Being able to take your games in a small form factor device wherever you want is huge. Imagine the difference it makes when that device is one you regularly have in your pocket. A device that requires no other accessory to get started with. No extra cables or cartridges to swap.", 
"https://www.androidshark.com/article/pros-and-cons-of-mobile-gaming"
)

n8 = new Newz(
"Cool Facts About Mobile Games", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/627d245f78cd0150676c95be_gg.jpg", 
"Article", 
"January 13, 2022", 
"Cool facts about Mobile gaming: According to researchers, because mobile games are always available, they’re the best for helping us focus and be fast and flexible thinkers. Studies from Iowa University show that playing mobile games can delay our grey matter’s decline by up to seven years.", 
"https://www.androidshark.com/article/cool-facts-about-mobile-games"
)

n9 = new Newz(
"Battle of Polytopia interview", 
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6299f2a9c4620a0ecc7d9dec_battle-of-polytopia-interview1-p-500.jpeg", 
"Article", 
"January 05, 2022", 
"The Battle of Polytopia is a unique turn based civilization strategy game about controlling the map, fighting enemy tribes, discovering new lands and mastering new technologies. With millions of players, this game has quickly become one of the most popular civilization style strategy games for mobile and has been acclaimed for its sleek user interface and great depth in game play. Today we interview the team behind the game.", 
"https://www.androidshark.com/article/battle-of-polytopia-interview"
)
allNewzItems1 = [n1]
allNewzItems1.forEach(function (item, v) {
	pos = "top"
	if(item.name == "Android Games with Controller Support"){
		pos = "center"	
	} else {
		pos = "top"		
	}
	
	headz = `<h3 style=" font-size: 14px;
    line-height: 18px;
    margin-bottom: -3px;
    margin-top: 7px;">${item.name}</h3>`
	dasImg = `<a href='${item.linkz}'><img src=${item.img} style="width: 341px;
    height: 161px;
    object-fit: none;
    object-position:${pos};
    border-radius: 6px;"></a>`
	dasGenre = `<div class'bbq' style=" margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    float:left;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 6px;
    background-color: #0081ff;
    color: #fff;
    width:56px;
    font-weight:bold;
    font-size: 12px;">${item.blueBlock}</div> 
    <div style="height: 37px;
    padding-top: 10px;
    font-size: 11px;
    color: grey;">${item.datt}</div>`
	dasP = `<p style=" margin-bottom: 40px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 35px;">${item.desc}</p>`
	$(".allarticles").append("<div style='margin-bottom:15px;'>" + dasImg + headz + dasGenre + dasP + "</div>")
});


allNewzItems = [n2, n3, n4, n5, n6, n7, n8, n9]
allNewzItems.forEach(function (item, v) {
	pos = "top"
	if(item.name == "Android Games with Controller Support"){
		pos = "center"	
	} else {
		pos = "top"		
	}
	
	headz = `<h3 style=" font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
    margin-top: 0px;">${item.name}</h3>`
	dasImg = `<a href='${item.linkz}'><img src=${item.img} style="width: 341px;
    height: 161px;
    object-fit: none;
    object-position:${pos};
    border-radius: 6px;"></a>`
	dasGenre = `<div class'bbq' style=" margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    float:left;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 6px;
    background-color: #0081ff;
    color: #fff;
    width:56px;
    font-weight:bold;
    font-size: 12px;">${item.blueBlock}</div> 
    <div style="height: 37px;
    padding-top: 10px;
    font-size: 11px;
    color: grey;
    margin-top:-25px;">${item.datt}</div>`
	dasP = `<p style=" margin-bottom: 40px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 35px;">${item.desc}</p>`
	$(".allarticles").append("<div style='margin-bottom:15px;'>" + dasGenre + headz  + dasP + "</div>")
});

pathname99 = window.location.pathname; // Returns path only (/path/example.html)


totalPatch = 8

if(pathname99 != "/news"){
	firstTime = localStorage.getItem("firstTime");
	if(firstTime){
		howMany = totalPatch - firstTime
		if(howMany <= 0){
			$(".notiBar").css("display", "none")
		} else {
			$(".notiBar").css("display", "block")
			$(".noti").text(howMany)
		}
		
	}else{
		localStorage.setItem("firstTime", totalPatch);
		$(".notiBar").css("display", "block")
		$(".noti").text(totalPatch)
	}
} else {	
	localStorage.setItem("firstTime", totalPatch);
	$(".notiBar").css("display", "none")
	$(".noti").text(totalPatch)
}

