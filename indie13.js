class Indie {
  constructor(namez, genre, des, votes, video) {
    this.namez = namez
    this.genre = genre
    this.des = des
    this.video = video

  }
}

vidUrl = "http://103.204.129.121:4500/videos/"

plantdown = new Indie("Plant Down", 
"Arcade", 
`In Plant Down, you're faced with 3 bosses of increasing difficulty. Will you manage to take them all down?
<BR><BR>
• The game takes between 20 minutes and one hour to complete
<BR>
• Plant Down uses an elegant two-button input system designed for mobile
<BR>
• The game contains little to no text`,
 vidUrl+"plantDown.mp4");


thelastplanets = new Indie("The Last Planets", 
"Casual", 
`Hey, this is a game assembled by an 🎮 indie developer and by an awesome 🎹 sound designer, that you can play both with your friends or other people Online or Offline 😊
<BR><BR>
💸 No P2W (Pay To Win)<BR>
💳 No Microtransactions based<BR>
⌚ No Advertising`,
 vidUrl+"lastP.mp4");


frytheegg = new Indie("Fry The Egg", 
"Casual", 
`Learn to fry an egg in the comfort of your own phone
<BR><BR>
Cook delicious sunny side up eggs in this FREE viral physics simulator!
<BR><BR>
You will be able to practice your egg flipping skills like a professional breakfast-chef without burning your house down.
<BR><BR>
1) Cook on both sides until white<BR>
2) Toss onto the plate sunny-side up<BR>
How hard can it be?`,
 vidUrl+"fry.mp4");
 
forkliftextreme3d = new Indie("Fork Lift Extreme 3D", 
"Simulation", 
`Forklift driver is made using 😍 ragdoll 😍 giving you the best possible feeling of the physics forklift driving. Many objects in the game are physical so watch out for your forklift not to destroy anything if not needed. In this extreme forklift 3D game you can not only drive your lifter but also customize it and your driver as well, choose from many available skins, colors and types. Unlock new forklift types by completing challenges and achievements and search for hidden treasures on the levels to unlock new skins`,
 "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62a9ef3952089d6e47b9e4f9_forkG.png");


diagonalchess = new Indie("Diagonal Chess", 
"Board", 
`In this variant pieces are placed in two corners of a chessboard. Both sides have 7 pawns each, which have different movement rules than in orthodox chess. Also promotion of a pawn occurs on different fields. This chess variant was invented by Zbigniew Kokosiński professor of Cracow University of Technology in April 2020. Detailed rules of the game are described in the application as well as on the website https://www.chessvariants.com/rules/diagonal-chess-well-balanced.`,
 "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62a9f01583d2d80a42433b34_chess2.jpg");


mazedefenders = new Indie("Maze Defenders", 
"Tower Defense", 
`Maze Defenders is a fantasy tower defense like the classics. Craft advanced mazes for the enemies to travel, deploy your arsenal of over 15 Towers and cast mighty spells with your Builder.
<BR><BR>
During the each game, enemies will try to break your defenses, your task is to defend the kingdom at all cost. Upgrade your towers with talent trees, craft powerful runes and combine tower effects for the best firepower!
<BR><BR>
The most powerful tool is mazing, create long mazes for your enemies to travel. Utilise the best strategy in this tower clash an defend the kingdom from the raging tower wars!`,
 vidUrl+"maze.mp4");


mixnmatch = new Indie("Mix 'n Match", 
"Tower Defense", 
`Maze Defenders is a fantasy tower defense like the classics. Craft advanced mazes for the enemies to travel, deploy your arsenal of over 15 Towers and cast mighty spells with your Builder.
<BR><BR>
During the each game, enemies will try to break your defenses, your task is to defend the kingdom at all cost. Upgrade your towers with talent trees, craft powerful runes and combine tower effects for the best firepower!
<BR><BR>
The most powerful tool is mazing, create long mazes for your enemies to travel. Utilise the best strategy in this tower clash an defend the kingdom from the raging tower wars!`,
 vidUrl+"mix.mp4");
 
 
untoldadventure = new Indie("Untold Adventure", 
"Casual", 
`Manage your own blacksmith medieval shop - craft and upgrade epic weapons and armor, equip and prepare your squad for original adventure quests.
<BR><BR>
Follow the challenging journey of your heroes as they conquer the fantasy dungeon.
<BR><BR>
Untold Adventure: Shop Master is a casual store tycoon simulator, rpg clicker game with great graphics and addictive gameplay.
<BR><BR>
Develop your own blacksmith shop - as you progress you can create more valuable items and satisfy the needs of more heroes. Become a powerful blacksmith and lead your squad to victory in a series of epic quests!`,
 vidUrl+"untold.mp4");


taphealer = new Indie("Tap Healer", 
"Rpg", 
`Did you ever wonder what it's like to play a healer in a MMO or MMORPG?
'Tap Healer' is a free MMO-Style Healing Simulator.
In this fantasy world, you take the role of a magical healer, trying to keep a group of heroes alive in their battle against evil monsters.
<BR><BR>
If you want to help me making the game better, join my new discord channel and get early updates!`,
 "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62aa006c60a9d3611ea4ebaa_tap.jpg");


cowardlyheroes = new Indie("Cowardly Heroes", 
"Runner", 
`An Alien invasion has arrived and these heroes are doing what they do best: running! Help them dodge and avoid the many incoming obstacles and enemies in this offline arcade game.
<BR><BR>
Start a fun and challenging run. Collect coins to increase your score and unlock new heroes and bonuses, grab random risky powerups, dodge and overcome enemies, and progress to new challenging levels!
<BR><BR>
Deadly lasers, threatening skeletons, angry minotaurs, fragile barrels, and many more creative obstacles are waiting to ruin your high score!`,
 vidUrl+"coward.mp4");

guesstheenigma = new Indie("Guess the Enigma", 
"Puzzle", 
`Dragoo is under control of the enigmas but this is about to end. Come decipher the enigmas and free them from Dragoo's clutches.
<BR><BR>
⭐ How to play ⭐<BR>
❶ Look at the level enigma, an icon that you will have to decipher to solve the level<BR>
❷ At each round, two icons will be presented for you to choose the one that is most related to the level enigma<BR>
❸ Collect the bonus when it is presented by tapping only the enigma icons<BR>
❹ Dodge Dragoo's attacks by tapping the swords icon`,
 vidUrl+"guess.mp4");


$(document).on("click", ".indiez", function(){
    gaimName = $(this).attr('id');
    name = window[gaimName].namez
    genre = window[gaimName].genre
    des = window[gaimName].des
    view = gaimName + "View"
    console.log("view>", view)
    $("#indieName").text(name)
    $("#indieGenre").text(genre)
    $("#indieDes").html(des)
    $(".bb2").css("display", "none")
    $("#"+view).css("display", "block")
})
