class Indie {
  constructor(namez, genre, des, votes, video) {
    this.namez = namez
    this.genre = genre
    this.des = des
    this.votes = votes
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
0,
 "http://103.204.129.121:4500/videos/plantDown.mp4");


$(document).on("click", ".indiez", function(){
    gaimName = $(this).attr('id');
    console.log(gaimName + "<<<")
  //  gaimName2 = gaimName.replaceAll(/\s/g,'')
   // gaimName2 = gaimName2.toLowerCase();
    finalName = eval(gaimName["namez"])
    console.log(finalName)
})
