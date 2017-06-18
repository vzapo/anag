$('#first').hide();
$('#second').hide();

$(document).ready(function(){
  $('.menu').children().each(function(e){
    var self = this;
    menu_click(self);
  });
});

function first(page){
  var header = document.createElement('p');
  header.innerHTML = '<h1>'+page.toUpperCase()+'</h1>';
  header.className = "col-xs-12 col-md-12 col-lg-12 text-center";
  if(page ==="media"){
    $('#first').removeClass();
    $('#first').addClass('row h-100 media');
  }else if(page==="fashion"){
    $('#first').removeClass();
    $('#first').addClass('row h-100 fashion');
  }else if (page ==="others") {
    $('#first').removeClass();
    $('#first').addClass('row h-100 others');
  }else if (page === "contact") {
    $('#first').removeClass();
    $('#first').addClass('row h-100 contact');
  }else{
    return true;
  }
  $('.content').html(header);
}

function left_menu(){
  $('.left > .row ').html($('.menu').html());
  $('.left > .row > div > img').width(85);
  $('.left > .row').children().each(function(e){
    $('.left > .row > #home').remove();
    var self = this;
    menu_click(self);
  });

}

function mid_template(page){
  var template;
  if(page === "media" ){
    template = '';
  }else if(page ==="fashion"){
  }else if (page ==="others") {
  }else if (page === "contact") {
  }
  $('.mid').html(template);
}

function menu_click(self){
  $(self).on('click',function(){
    $('#main').hide("slow",function(){
      $(window).scrollTop(0);
      $('#first').show("slow");
      $(window).scroll(function(){
        if($(window).scrollTop() > 100){
          $('#second').show("slow",function(){
            $('#first').hide('slow',function(){
            });
          });
        }
      });

      $('.right > img').on('click',function(){
        $('#main').show("slow",function(){
          $(window).scrollTop(0);
          $(window).scroll().off();
          $('#first').hide();
          $('#second').hide();
        });
      });
    });

    if(self.id === "media" ){
      first(self.id);
      left_menu();
      mid_template(self.id);
    }else if(self.id ==="fashion"){
      first(self.id);
      left_menu();
      mid_template(self.id);
    }else if (self.id ==="others") {
      first(self.id);
      left_menu();
      mid_template(self.id);
    }else if (self.id === "contact") {
      first(self.id);
      left_menu();
      mid_template(self.id);
    }else if(self.id==='home'){
      $('#main').show("slow",function(){
        $('#first').hide();
        $('#second').hide();
      });
    }
  });
}
