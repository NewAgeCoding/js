
// Check if bookmark is applied
get_books = localStorage.getItem("mybookmarks")
get_name33 = $('.slotname').find('h3').text()
if(get_books){
  listy = JSON.parse(get_books)
  $.each(listy, function(i, v){
    if(get_name33 == v.game_name){
      $('.hitbookmark').attr('src','https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63145337482ba73547779521_starz.png');
    }
  })
}
	
  
  //##################################################
	// Bookmark a game
	//##################################################
  $(document).on('click', '.hitbookmark', function(){
   
    $('.hitbookmark').attr('src','https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63145337482ba73547779521_starz.png');

    get_game_name = $('.slotname').find('h3').text()
    get_game_genre = $('#game-genrez').text()
    para1 = $("#p6").find('p').text()
    scorez1 = $('#bookscore').text()
    url = window.location.href; 
    imgz = $('#splashyimg').attr('src')

    obj = {
      'game_name': get_game_name,
      'genre':  get_game_genre,
      'para': para1,
      'urlz': url,
      'imgz': imgz,
      'scorez': scorez1
    }


    // Does localstorage exist
    get_bookmarks = localStorage.getItem('mybookmarks')
    listy = []
    gogo = 1
    das_index = 0
    if(get_bookmarks){
      listy = JSON.parse(get_bookmarks)

      $.each(listy, function(i, v){
        if(v.game_name == obj.game_name) {
          gogo = 0        
          return false        
        }
        das_index = das_index + 1
      })

      if(gogo == 1){
        listy.push(obj)
        stringz111 = JSON.stringify(listy)
        localStorage.setItem('mybookmarks', stringz111)
      } else {

        listy.splice(das_index, 1);
        stringz111 = JSON.stringify(listy)
        localStorage.setItem('mybookmarks', stringz111)
        $('.hitbookmark').attr('src','https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63148cc5ad9f793bcd17515f_starzgrey.png');
      }

    } else {
      listy = [obj]
      stringz111 = JSON.stringify(listy)
      localStorage.setItem('mybookmarks', stringz111)
    }





    // Renable bookmars in community tab 
    $("#booked").html("")

    get_bookmarks = localStorage.getItem('mybookmarks')
    get_bookmarks = JSON.parse(get_bookmarks)
    
    // Append style sheet to help
    $("#booked").append(`
    <style>
        .entirebox1 h2, .entirebox1 p {
            margin: 0;
        }
    
        .entirebox1 h2 {
          margin: 0;
          margin-top: -10px;
          font-size: 15px;
          color: black;
        }
    
        .entirebox1 h3 {
          font-weight: normal;
          font-size: 14px;
          margin: 0;
          margin-top: -10px;
          color: black;
        }
    
        .entirebox1 p {
          margin-top: 2px;
          font-size: 13px;
        }
    
        .entirebox1 {
            width: 300px;
        }
    
        .picz1{
            float: left;
            width: 100px;
        }
    
        .picz1 img {
            width: 100%;
        }
    
        .info1 {
          float: left;
          padding-left: 10px;
          width: 185px;
          color:black;
        }
    </style>
    `)
    
    
    if(get_bookmarks) {

        $.each( get_bookmarks, function( key, value ) {
            // game_name = key
            // game_name = game_name.replace(/-/g , ' ')
            // splity = value.split(",");
            // urlz = splity[0]
            // imgz = splity[1]  
            resultz = value.game_name.substring(0, 20);
      
            fully = `
            <div class="entirebox1">
      
                <a href="${value.urlz}">
            
      
                  <div class="info1">
      
              <div class="slotsss1">
                <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63145337482ba73547779521_starz.png" style="    float: left;
                width: 20px;
                margin-left: 18px;">
      
      
                <div class="game-name" style="    float: left;
          margin-left: 15px;
          margin-top: 3px;"><h2>${resultz}</h2></div>
      
      
                <div class="genre-name" style="    float: left;
          margin-left: 8px;
          margin-top: 7px;"><h3>(${value.genre})</h3></div>
      
      
                <div class="scorereviewblock" style="width: 35px; height:35px; float: left; background-color: rgb(9, 245, 9);     float: right;
                margin-right: 27px;"><h3 class="heading-118" style="font-size: 23px;
                color: white;
                padding-top: 11px;">${value.scorez}</h3></div>
              </div>
         
               
                    
                  </div>
              <div class="picz1">
                <img src="${value.imgz}">
              </div>
                  <div class="para-name" style="width:280px;"><p>${value.para}</p></div>
                </a>
      
            </div>
            `   
      
      
      
            $("#booked").append(fully + "<BR>")  	
        })
      }





    $('.para-name').each(function(){
      new_str = $(this).find('p').text()
    
      myArray = new_str.split(" ");
      $.each(myArray, function(i ,v){
        if(i == 0) {
          new_str = ""
        }
        if(i >= 20) {
          return false
        } else {
          new_str = new_str + " " +  v 
        }
      })
      $(this).find('p').text(new_str + "...")
    });



  })
