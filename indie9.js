class Indie {
  constructor(namez, genre, des, votes, video) {
    this.namez = namez
    this.genre = genre
    this.des = des
    this.video = video

  }
}

plantdown = new Indie("Plant Down", 
"Arcade", 
`In Plant Down, you're faced with 3 bosses of increasing difficulty. Will you manage to take them all down?
<BR><BR>
• The game takes between 20 minutes and one hour to complete
<BR>
• Plant Down uses an elegant two-button input system designed for mobile
<BR>
• The game contains little to no text`,
 "http://103.204.129.121:4500/videos/plantDown.mp4");
 
 
thelastplanets = new Indie("The Last Planets", 
"Casual", 
`Hey, this is a game assembled by an 🎮 indie developer and by an awesome 🎹 sound designer, that you can play both with your friends or other people Online or Offline 😊
<BR><BR>
💸 No P2W (Pay To Win)<BR>
💳 No Microtransactions based<BR>
⌚ No Advertising`,
 "http://103.204.129.121:4500/videos/lastP.mp4");
 
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
 "http://103.204.129.121:4500/videos/fry.mp4");




$(document).on("click", ".indiez", function(){
    gaimName = $(this).attr('id');
    name = window[gaimName].namez
    genre = window[gaimName].genre
    des = window[gaimName].des
    $("#indieName").text(name)
    $("#indieGenre").text(genre)
    $("#indieDes").text(des)
})
