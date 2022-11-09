//###########################################################
// Class - pre reg games
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
    <div style="height: 175px;
		border: 2px solid;">
        <div class="glitch__item ${namez}"></div>
        <div class="glitch__item ${namez}"></div>
        <div class="glitch__item ${namez}"></div>
        <div class="glitch__item ${namez}"></div>
        <div class="glitch__item ${namez}"></div>    
    </div>
    `)
}


gamez1 = new RegGames('k1', 'https://play-lh.googleusercontent.com/mnU9zVPH2Tls8p5uJ40myStjiPfK-uTksV9omZQZFpiQeQAt1c2hO2W4_MIVCsbC7rc=w2560-h1440-rw', 'Caterra', '3D', 'Set sail in this fun free merge game adventure with a building game twist! Don’t be caught off guard by the dragons!',  'no-icon', 'no-trailer', 'https://play.google.com/store/apps/details?id=com.jellybtn.mergestories&hl=en_ZA&gl=US')

add_glitch(gamez1.glitchy)
