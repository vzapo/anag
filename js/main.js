function Website(){
  this.body = document.getElementsByClassName('container-fluid')[0],
  this.data = [
    {"page":"home","data":"","image":"img/btn0.png"},
    {"page":"media","data":["<iframe width='100%' height='350' src='https://www.youtube.com/embed/ZmsTjOZ_K_E' frameborder='0' allowfullscreen></iframe>",'<iframe width="100%" height="350" src="https://www.youtube.com/embed/zmP5Wq43Nb8" frameborder="0" allowfullscreen></iframe>','<iframe width="100%" height="350" src="https://www.youtube.com/embed/q9tfacRg_Qk" frameborder="0" allowfullscreen></iframe>','<iframe width="100%" height="350" src="https://www.youtube.com/embed/LvlF-sr49hQ" frameborder="0" allowfullscreen></iframe>'],"image":"img/btn1.png"},
    {"page":"fashion","data":["<h2>High School Diploma Work - Accessory set for neck and wrist - 2012, Art Highschool of Timisoara, Fashion Design</h2>\
<p>This is the front view of my neck accessory inspired by the lemur. The design concept and manufacturing is 100% my work. As main materials i used cooper and brass.</p>\
","<h2>High School Diploma Work - Accessory set for neck and wrist - 2012, Art Highschool of Timisoara, Fashion Design</h2>\
<p>The components of the backside of the neck and shoulder accessory.</p>\
","<h2>High School Diploma Work - Accessory set for neck and wrist - 2012, Art Highschool of Timisoara, Fashion Design</h2>\
<p>Here you can see the sketch of the entire design, the back side of the necklace and also the bracelet.</p>","<h2>Outfit concepts - 2011</h2>\
<p>School work i've done during my high school studies in the fashion design department. The group in the left is inspired by radios of all kinds and it's a haute couture collection while the pret-a-porter colliection on the right side is inspired by the jeans jacket.<p>"],"image":"img/btn2.png"},
    {"page":"miscelanious","data":["<h2>Cloud Stage Design - 2014, Ro, l a u n m o m e n t d a t</h2>\
<p>I designed this ledCloud concept for a stage design I created with the event planning agency l a u n m o m e n t d a t. The event took place on Halloween and it was called, as translated, At Some Point - the other way around/upside down. As so, to respect the theme, we brought the outside inside. The composing elements of a cloud are as following 1. A well made steel wire 3D cloud structure 2. A perfectly tight wrap around with elastic plastic foil 3. A uniform cover up in synthetic cotton puffs 4. A led series placed inside of the cloud with a 3V battery attached<p>","<p>You can watch the after movie of the event here: https://www.youtube.com/watch?v=k-wsNUZDaB4</p>","<p>You can watch the after movie of the event here: https://www.youtube.com/watch?v=k-wsNUZDaB4</p>","</p>You can watch the after movie of the event here:https://www.youtube.com/watch?v=k-wsNUZDaB4</p>","<h2>MiniMe - 2014, Pt, IPB, AD</h2>\
</p>MiniMe was born during my Erasmus mobility in Portugal for the sculpture class, the theme being poses in movement, we were requested to chose a pose, take pictures of ourselves in this position from all angles, reduce to half of the original scale and build a sculpture by adding many layers of bandage and plaster on a metallic stickman. i chose a pose from a contemporary dancing scene.</p>","<h2>Carved table - 2014, Ro, Atelier Cafe Timisoara</h2>\
<p>This piece was made especially for Atelier Cafe, a place which constantly exhibits local artists. The design is made as so as you can see it 'properly' from any side you look upon it. It is a concentric circular construction applied to an organic figurative composition representing a mini-world. I carved the model in wood with a hand machine.</p>","<h1>Halloween Che Guevara Pumpkin - 2013</h2>\
Hand carved into pumkin for el'Che pub&club Halloween Party","<h2>Pet Portraits - 2012 -present, Ro </h2>\
<p>At the beginning i started by drawing my dog, than, as it turned out good, I started to make presents for my pet loving family and friends . Nowadays I am earning some money by doing this from time to time on the demand of the owner. I used pencil on paper looking at a picture.</p>","<h2>Studies</h2>\
<p>I really like pencil drawing and understanding shapes and movement and get inspiration out of nature and its beautiful constructions.</p>","<h2>Studies</h2>\
<p>I really like pencil drawing and understanding shapes and movement and get inspiration out of nature and its beautiful constructions.<p>"],"image":"img/btn3.png"},
    {"page":"contact","data":["<h1>get  in  touch</h1>\
<p>As  you  just  saw  some  of  my  works   and  projects, you<br>\
could have enjoyed and might want to find out more.<br>\
If so, plese get in touch and we will discuss more<br>\
I am open to new projects and ideas <br>\
job offers, collabortions<br>\
internship or just help<br>\
 with cool stuff.</p><img src='img/contact.jpg' width='100%'>"],"image":"img/btn4.png"}
  ],
  this.social = `<div class="social text-center">
     <a href="#" class="fa-stack fa-lg">
     <i class="fa fa-square-o fa-stack-2x"></i>
     <i class="fa fa-facebook fa-stack-1x"></i>
     </a>
     <a href="#" class="fa-stack fa-lg">
     <i class="fa fa-square-o fa-stack-2x"></i>
     <i class="fa fa-twitter fa-stack-1x"></i>
     </a>
     <a href="#" class="fa-stack fa-lg">
     <i class="fa fa-square-o fa-stack-2x"></i>
     <i class="fa fa-youtube fa-stack-1x"></i>
     </a>
  </div>`;
}


Website.prototype.footerShow = function(parent){
  var footer_container = document.createElement('footer');
  var p = document.createElement('p');
  p.innerHTML = "Copywrite <i class='fa fa-copyright' aria-hidden='true'></i> Ana Gemescu";
  footer_container.appendChild(p);
  footer_container.className= 'col-12 text-center';
  parent.appendChild(footer_container);
}

Website.prototype.social = function(parent){

}

//Init the website and display first page to the user
Website.prototype.init = function(){
  // Erase everything to make sure nothing overlaps
  this.body.innerHTML='';

   var row = document.createElement('div'),
        col = document.createElement('div');
   row.className = 'row  align-items-center';
   col.className = 'col-xs-12 col-md-12 col-lg-12';
   if(document.body.style.width > 767){
      col.className += 'align-self-center';
   }else{
     col.className = 'col-xs-12 col-md-12 col-lg-12';
   }

   var title = document.createElement('h1'),
      subtitle= document.createElement('h2');
   var title_text = document.createTextNode('Ana Gemescu');
   var subtitle_text = document.createTextNode('- portifolio -');

   title.className = 'col-xs-12 col-md-12 col-lg-12 text-center';
   subtitle.className = 'col-xs-12 col-md-12 col-lg-12 text-center';

   title.appendChild(title_text);
   subtitle.appendChild(subtitle_text);
   col.append(title);
   col.append(subtitle);
   this.menu(col);
   row.appendChild(col);
   this.footerShow(row);
   this.body.appendChild(row);
}

//Create the menu for both first page and rest of the pages
Website.prototype.menu = function(parent){
  var self = this;
  var list = document.createElement('ul');
  list.className = 'menu text-center';

  for(item in this.data){
      var list_item = document.createElement('li');
      var image = document.createElement('img');
      var name = document.createElement('p');
      name.appendChild(document.createTextNode(this.data[item].page));
      image.src = this.data[item].image;
      image.className = 'img-fluid';
      list_item.className = 'text-center';
      list_item.appendChild(image);
      list_item.id = this.data[item].page;
      list_item.appendChild(name);
      list_item.onclick = function(){
        if(this.id !=="home"){
          self.goToPage(this.id);
        }else{
          self.init();
        }
      }
      list.append(list_item)
      parent.appendChild(list);
    }
}

Website.prototype.goToPage = function(parent){
  // Erase content to be sure nothing overlaps
  this.body.innerHTML='';

  // Append footer and social bar
  this.body.innerHTML += this.social;

  // Set page to start from top
  window.scrollTo(0,0);
  // Rows and columns for all page sections
  var row = document.createElement('div'),
      row_header = document.createElement('div'),
      col_header = document.createElement('div'),
      col_left_section = document.createElement('div'),
      col_mid_section = document.createElement('div'),
      col_right_section = document.createElement('div');

  // Adding class names to each element
  row.className = 'row';
  row_header.className = 'row align-items-center';
  col_header.className = 'col-xs-12 col-md-12 col-lg-12 text-center';
  col_left_section.className = 'col-xs-12 col-md-2 col-lg-2 align-self-center';
  col_mid_section.className = 'col-xs-12 col-md-8 col-lg-8 mid text-center';
  col_right_section.className = 'col-xs-12 col-md-2 col-lg-2 right align-self-end';

  // Creating the content of each section
  // Headers appearing first
  var header = document.createElement('h1');
  for(item in this.data){
    if(parent == this.data[item].page){
      var arrow = "<i class='fa fa-arrow-down fa-4' aria-hidden='true'></i>";
      header.innerHTML = this.data[item].page  + " <br> " + arrow;
      row_header.className += ' ' + this.data[item].page;
      col_header.appendChild(header);
      row_header.appendChild(col_header);
    }
  }

  // Creating content for left section
  this.menu(col_left_section);
  //Creating mid section content

  for(item in this.data){
    if(parent == this.data[item].page){
      for(i=0;i<this.data[item].data.length;i++){
        col_mid_section.innerHTML += this.data[item].data[i];
      }
    }
  }

  // Creating right section content
  var image = document.createElement('img');
  image.src = 'img/homebtn.png';
  image.className = 'img-fluid';
  var name = document.createElement('p');
  name.appendChild(document.createTextNode(this.data[0].page));
  col_right_section.appendChild(image);
  col_right_section.appendChild(name);

  // Append elements to site container
  this.body.append(row_header);
  row.appendChild(col_left_section);
  row.appendChild(col_mid_section);
  row.appendChild(col_right_section);
  this.footerShow(row);
  this.body.appendChild(row);
  //Check if page is not home to set width so items fall
  if(parent.id !== "home" && window.innerWidth > 767){
    var menu_width = document.getElementsByClassName('menu')[0].style;
    menu_width.width = "175px";
  }
};
