function Website(){
  this.body = document.getElementsByClassName('container-fluid')[0],
  this.data = [
    {"page":"home","data":"","image":"img/btn0.png"},
    {"page":"media","data":["<iframe width='100%' height='315' src='https://www.youtube.com/embed/ZmsTjOZ_K_E' frameborder='0' allowfullscreen></iframe>"],"image":"img/btn1.png"},
    {"page":"fashion","data":"","image":"img/btn2.png"},
    {"page":"miscelanious","data":"","image":"img/btn3.png"},
    {"page":"contact","data":"","image":"img/btn4.png"}
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
  this.footer =  `<footer class="text-center">
     <p>Copywrite <i class="fa fa-copyright" aria-hidden="true"></i>
        Ana Gemescu
     </p>
  </footer>
`;
}

//Init the website and display first page to the user
Website.prototype.init = function(){
  // Erase everything to make sure nothing overlaps
  this.body.innerHTML='';

  // Append social bar and footer
  this.body.innerHTML += this.social;

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
    if(document.getElementsByClassName('right')[0]){
      console.log('yes');
    }
}

Website.prototype.goToPage = function(parent){
  // Erase content to be sure nothing overlaps
  this.body.innerHTML='';

  // Append footer and social bar
  this.body.innerHTML += this.social;
  this.body.innerHTML += this.footer;

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
      header.innerHTML = this.data[item].page;
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
      var data_container = document.createElement('div');
      for(i=0;i<this.data[item].data.length;i++){
        data_container.innerHTML += this.data[item].data[i];
      }
      col_mid_section.appendChild(data_container);
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
  this.body.appendChild(row);

  //Check if page is not home to set width so items fall
  if(parent.id !== "home"){
    var menu_width = document.getElementsByClassName('menu')[0].style;
    menu_width.width = "175px";
  }
};
