
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

    url = window.location.href; 
    imgz = $('.imgslot').find('img').attr('src')

    obj = {
      'game_name': get_game_name,
      'genre':  get_game_genre,
      'para': para1,
      'urlz': url,
      'imgz': imgz
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
          
          return false;
        
          
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

  })
